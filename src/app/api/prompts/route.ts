import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { title, promptTypeId, inputs, finalPrompt } = body;

        const prompt = await prisma.prompt.create({
            data: {
                title: title || "Untitled Prompt",
                userId: session.user.id,
                promptTypeId,
                inputs: inputs || {},
                finalPrompt,
            },
        });

        return NextResponse.json(prompt);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create prompt" },
            { status: 500 }
        );
    }
}
