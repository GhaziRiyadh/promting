
import { modelRegistry } from '../src/lib/ai/index';
import { PrismaClient } from './generated/prisma-client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding AI Models...');

    try {
        // Ensure adapters are registered (index.ts import should handle this, 
        // but we might need to manually register if index.ts has side-effects that don't run here)
        // Actually, importing `modelRegistry` from `../src/lib/ai/index` should run the registration code there.

        const adapters = modelRegistry.getAll();
        console.log(`Found ${adapters.length} adapters.`);

        for (const adapter of adapters) {
            console.log(`Processing adapter: ${adapter.id}`);
            try {
                if (adapter.listModels) {
                    const models = await adapter.listModels();
                    console.log(`- Found ${models.length} models for ${adapter.id}`);

                    for (const model of models) {
                        await prisma.aIModel.upsert({
                            where: {
                                providerId_modelId: {
                                    providerId: adapter.id,
                                    modelId: model.id
                                }
                            },
                            update: {
                                name: model.name,
                                // We don't update isActive to avoid overwriting user preference
                            },
                            create: {
                                name: model.name,
                                providerId: adapter.id,
                                modelId: model.id,
                                isActive: true
                            }
                        });
                    }
                } else {
                    console.log(`- Adapter ${adapter.id} does not support listing models. Using adapter itself as model.`);
                    await prisma.aIModel.upsert({
                        where: {
                            providerId_modelId: {
                                providerId: adapter.id,
                                modelId: 'default'
                            }
                        },
                        update: {
                            name: adapter.name,
                        },
                        create: {
                            name: adapter.name,
                            providerId: adapter.id,
                            modelId: 'default',
                            isActive: true
                        }
                    });
                }
            } catch (err) {
                console.error(`Failed to seed models for adapter ${adapter.id}:`, err);
            }
        }
    } catch (error) {
        console.error('Error during seeding:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
