import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const keywords = await prisma.globalKeyword.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        });

        return NextResponse.json(keywords);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch global keywords" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { text } = body;

        if (!text) {
            return NextResponse.json({ error: "Text is required" }, { status: 400 });
        }

        const result = await prisma.globalKeyword.create({
            data: { text }
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error("Create global keyword error:", error);
        return NextResponse.json({ error: "Failed to create global keyword" }, { status: 500 });
    }
}
