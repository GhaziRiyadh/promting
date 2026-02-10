import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = 'force-dynamic';


const prisma = new PrismaClient();

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
