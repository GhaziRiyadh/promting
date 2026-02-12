import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const models = await prisma.aIModel.findMany({
            orderBy: { providerId: 'asc' }
        });
        return NextResponse.json({ models });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch models' }, { status: 500 });
    }
}
