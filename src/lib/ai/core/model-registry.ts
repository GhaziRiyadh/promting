import { AIModelAdapter } from './ai-model.interface';

export class ModelRegistry {
    private adapters: Map<string, AIModelAdapter> = new Map();

    register(adapter: AIModelAdapter): void {
        if (this.adapters.has(adapter.id)) {
            console.warn(`Overwriting model adapter for id: ${adapter.id}`);
        }
        this.adapters.set(adapter.id, adapter);
    }

    get(id: string): AIModelAdapter {
        const adapter = this.adapters.get(id);
        if (!adapter) {
            throw new Error(`Model adapter not found for id: ${id}`);
        }
        return adapter;
    }

    getAll(): AIModelAdapter[] {
        return Array.from(this.adapters.values());
    }

    async getAllModels(): Promise<{ id: string; name: string; providerId: string }[]> {
        const allModels: { id: string; name: string; providerId: string }[] = [];

        for (const adapter of this.adapters.values()) {
            if (adapter.listModels) {
                try {
                    const models = await adapter.listModels();
                    // We prefix model IDs with provider ID to ensure uniqueness if needed,
                    // OR we just assume they are unique enough (like 'gpt-4o', 'gemini-pro').
                    // But the playground uses a single select.
                    // Currently page.tsx uses values like 'openai-gpt-4o' which matches the ADAPTER ID, not the model ID.
                    // The current implementation in page.tsx:
                    // <SelectItem value="openai-gpt-4o">ChatGPT (GPT-4o)</SelectItem>
                    // This value is the ADAPTER ID.
                    // But now we want to support multiple models per adapter.
                    // So the value should probably be a composite or sufficient to identify both.
                    // However, the `run` method in `route.ts` does: `modelRegistry.get(model)`
                    // `model` here is expected to be the ADAPTER ID.

                    // REFACTOR: `route.ts` needs to change to support `adapterId` AND `modelId`.
                    // OR we map unique model IDs to adapters in the registry?
                    // The user wants "return models from api and show to select".

                    // Let's make the returned object format:
                    // { id: 'openai-gpt-4o:gpt-4o', name: 'GPT-4o (OpenAI)', adapterId: 'openai-gpt-4o', modelId: 'gpt-4o' }
                    // The frontend will send `openai-gpt-4o:gpt-4o`.
                    // The API will parse it.

                    // Wait, simplicity first.
                    // Let's return:
                    // { id: providerId + ':' + model.id, name: model.name, providerId: adapter.id }

                    models.forEach(m => {
                        allModels.push({
                            id: `${adapter.id}:${m.id}`,
                            name: m.name,
                            providerId: adapter.id
                        });
                    });
                } catch (e) {
                    console.error(`Failed to list models for adapter ${adapter.id}`, e);
                }
            } else {
                // If adapter doesn't list models, we might treat the adapter itself as a single model
                // matching previous behavior?
                allModels.push({
                    id: `${adapter.id}:default`,
                    name: adapter.name,
                    providerId: adapter.id
                });
            }
        }
        return allModels;
    }
}

export const modelRegistry = new ModelRegistry();
