import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { UserRole } from "../../../../../../prisma/generated/prisma-client";

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { id } = await params;
        const body = await request.json();
        const { role } = body;

        if (!role || !Object.values(UserRole).includes(role as UserRole)) {
            return NextResponse.json({ error: "Invalid role" }, { status: 400 });
        }

        // Safety: Prevent admin from de-privileging themselves via API
        if (id === session.user.id && role !== UserRole.ADMIN) {
            return NextResponse.json({ error: "You cannot remove your own admin status" }, { status: 403 });
        }

        const updatedUser = await prisma.user.update({
            where: { id },
            data: { role: role as UserRole },
            select: {
                id: true,
                role: true
            }
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error("Update user error:", error);
        return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
}
