import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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
