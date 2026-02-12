import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { modelRegistry } from '@/lib/ai';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST() {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const adapters = modelRegistry.getAll();
        
        for (const adapter of adapters) {
            try {
                if (adapter.listModels) {
                    const models = await adapter.listModels();
                    for (const model of models) {
                        await prisma.aIModel.upsert({
                            where: {
                                providerId_modelId: {
                                    providerId: adapter.id,
                                    modelId: model.id
                                }
                            },
                            update: { name: model.name },
                            create: {
                                name: model.name,
                                providerId: adapter.id,
                                modelId: model.id,
                                isActive: true
                            }
                        });
                    }
                } else {
                    // Fallback for adapters without listModels (treat adapter as model)
                    await prisma.aIModel.upsert({
                        where: {
                            providerId_modelId: {
                                providerId: adapter.id,
                                modelId: 'default'
                            }
                        },
                        update: { name: adapter.name },
                        create: {
                            name: adapter.name,
                            providerId: adapter.id,
                            modelId: 'default',
                            isActive: true
                        }
                    });
                }
            } catch (err) {
                console.error(`Failed to sync adapter ${adapter.id}:`, err);
            }
        }

        const allModels = await prisma.aIModel.findMany({
            orderBy: { providerId: 'asc' }
        });

        return NextResponse.json({ models: allModels });
    } catch (error) {
        console.error('Sync Error:', error);
        return NextResponse.json({ error: 'Failed to sync models' }, { status: 500 });
    }
}
