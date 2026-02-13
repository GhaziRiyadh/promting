import { AIModelAdapter } from '../core/ai-model.interface';
import { prisma } from '@/lib/prisma';

export class OpenAIAdapter implements AIModelAdapter {
    id = 'openai-gpt-4o';
    name = 'GPT-4o';

    async run(prompt: string, modelId?: string, context?: { type: string, userId?: string }): Promise<string> {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            throw new Error('OPENAI_API_KEY is not configured');
        }

        try {
            const startTime = Date.now();
            const actualModelId = (modelId?.includes(':') ? modelId.split(':')[1] : modelId) || 'gpt-4o';
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: actualModelId,
                    messages: [{ role: 'user', content: prompt }],
                    temperature: 0.7,
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`OpenAI API Error: ${response.status} ${response.statusText} - ${errorText}`);
            }

            const data = await response.json();
            const result = data.choices[0]?.message?.content || '';
            const endTime = Date.now();
            const duration = endTime - startTime;

            // Log interaction
            if (context) {
                await prisma.aILog.create({
                    data: {
                        prompt,
                        response: result,
                        modelId: actualModelId,
                        providerId: 'openai',
                        type: context.type,
                        userId: context.userId,
                        durationMs: duration,
                        tokensIn: data.usage?.prompt_tokens,
                        tokensOut: data.usage?.completion_tokens
                    }
                });
            }

            return result;
        } catch (error) {
            console.error('OpenAI Adapter Error:', error);
            throw error;
        }
    }
    async listModels() {
        return [
            { id: 'gpt-4o', name: 'GPT-4o' },
            { id: 'gpt-4-turbo', name: 'GPT-4 Turbo' },
            { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo' }
        ];
    }
}
