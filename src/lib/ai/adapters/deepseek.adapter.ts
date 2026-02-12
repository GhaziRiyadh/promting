import { AIModelAdapter } from '../core/ai-model.interface';

export class DeepSeekAdapter implements AIModelAdapter {
    id = 'deepseek-chat';
    name = 'DeepSeek Chat';

    async run(prompt: string, modelId?: string): Promise<string> {
        const apiKey = process.env.DEEPSEEK_API_KEY;
        if (!apiKey) {
            throw new Error('DEEPSEEK_API_KEY is not configured');
        }

        try {
            // DeepSeek often uses an OpenAI-compatible API structure
            const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: 'deepseek-chat',
                    messages: [{ role: 'user', content: prompt }],
                    temperature: 0.7,
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`DeepSeek API Error: ${response.status} ${response.statusText} - ${errorText}`);
            }

            const data = await response.json();
            return data.choices[0]?.message?.content || '';
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
