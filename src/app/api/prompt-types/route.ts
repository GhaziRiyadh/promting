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
        const promptTypes = await prisma.promptType.findMany({
            include: {
                fields: {
                    orderBy: {
                        order: 'asc'
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return NextResponse.json(promptTypes);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch prompt types" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { key, name_i18n, description_i18n, rolePrompt, isActive, fields, suggestedKeywords } = body;

        const result = await prisma.promptType.create({
            data: {
                key,
                name_i18n,
                description_i18n,
                rolePrompt,
                isActive: isActive ?? true,
                suggestedKeywords: suggestedKeywords || [],
                fields: {
                    create: fields?.map((field: any) => ({
                        key: field.key,
                        type: field.type,
                        label_i18n: field.label_i18n,
                        placeholder_i18n: field.placeholder_i18n,
                        required: field.required ?? false,
                        order: field.order ?? 0,
                        options: field.options,
                        rules: field.rules,
                    }))
                }
            },
            include: {
                fields: true
            }
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error("Create error:", error);
        return NextResponse.json({ error: "Failed to create prompt type" }, { status: 500 });
    }
}
