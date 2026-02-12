import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const { isActive } = await req.json();

    try {
        const model = await prisma.aIModel.update({
            where: { id },
            data: { isActive }
        });
        return NextResponse.json({ model });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update model' }, { status: 500 });
    }
}
