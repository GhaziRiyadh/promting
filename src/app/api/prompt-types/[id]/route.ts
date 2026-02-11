import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = 'force-dynamic';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const promptType = await prisma.promptType.findUnique({
        where: { id },
        include: { fields: true },
    });

    if (!promptType) {
        return NextResponse.json({ error: 'PromptType not found' }, { status: 404 });
    }

    return NextResponse.json(promptType);
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    try {
        const body = await request.json();
        const { key, name_i18n, description_i18n, rolePrompt, isActive, fields, suggestedKeywords } = body;

        // Use a transaction to update the PromptType and its fields
        const result = await prisma.$transaction(async (tx) => {
            // 1. Update the PromptType itself
            const updated = await tx.promptType.update({
                where: { id },
                data: {
                    key,
                    name_i18n,
                    description_i18n,
                    rolePrompt,
                    isActive: isActive ?? true,
                    suggestedKeywords: suggestedKeywords || [],
                }
            });

            // 2. If fields are provided, handle updates/creation/deletion
            if (fields) {
                // For simplicity in MVP, we delete all existing fields and recreate them
                // In a production app, we'd want to useupsert for preservation of IDs
                await tx.promptField.deleteMany({
                    where: { promptTypeId: id }
                });

                await tx.promptField.createMany({
                    data: fields.map((field: any) => ({
                        promptTypeId: id,
                        key: field.key,
                        type: field.type,
                        label_i18n: field.label_i18n,
                        placeholder_i18n: field.placeholder_i18n,
                        required: field.required ?? false,
                        order: field.order ?? 0,
                        options: field.options,
                        rules: field.rules,
                    }))
                });
            }

            return tx.promptType.findUnique({
                where: { id },
                include: { fields: true }
            });
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error("Update error:", error);
        return NextResponse.json({ error: "Failed to update prompt type" }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    try {
        // Cascade delete fields first if not using DB level cascade
        await prisma.promptField.deleteMany({
            where: { promptTypeId: id }
        });

        await prisma.promptType.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Delete error:", error);
        return NextResponse.json({ error: "Failed to delete prompt type" }, { status: 500 });
    }
}
