import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const dbModels = await prisma.aIModel.findMany({
            where: { isActive: true },
            orderBy: { providerId: 'asc' }
        });

        // Map to expected format: id (providerId:modelId), name
        const models = dbModels.map(m => ({
            id: `${m.providerId}:${m.modelId}`,
            name: m.name,
            providerId: m.providerId
        }));

        return NextResponse.json({ models });
    } catch (error) {
        console.error('Error fetching models:', error);
        return NextResponse.json(
            { error: 'Failed to fetch models' },
            { status: 500 }
        );
    }
}
