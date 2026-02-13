import { AIModelAdapter } from '../core/ai-model.interface';
import { prisma } from '@/lib/prisma';

export class DeepSeekAdapter implements AIModelAdapter {
    id = 'deepseek-chat';
    name = 'DeepSeek Chat';

    async run(prompt: string, modelId?: string, context?: { type: string, userId?: string }): Promise<string> {
        const apiKey = process.env.DEEPSEEK_API_KEY;
        if (!apiKey) {
            throw new Error('DEEPSEEK_API_KEY is not configured');
        }

        try {
            const startTime = Date.now();
            const actualModelId = (modelId?.includes(':') ? modelId.split(':')[1] : modelId) || 'deepseek-chat';
            // DeepSeek often uses an OpenAI-compatible API structure
            const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
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
                throw new Error(`DeepSeek API Error: ${response.status} ${response.statusText} - ${errorText}`);
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
                        providerId: 'deepseek',
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
            throw error;
        }
    }

    async listModels() {
        return [
            { id: 'deepseek-chat', name: 'DeepSeek Chat' },
            { id: 'deepseek-coder', name: 'DeepSeek Coder' }
        ];
    }
}
