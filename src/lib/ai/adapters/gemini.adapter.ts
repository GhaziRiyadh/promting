import { AIModelAdapter } from '../core/ai-model.interface';
import { GoogleGenerativeAI } from '@google/generative-ai';

export class GeminiAdapter implements AIModelAdapter {
    id = 'google-gemini-pro';
    name = 'Gemini 1.5 Flash';

    async run(prompt: string, modelId?: string): Promise<string> {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY is not configured');
        }

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            // Use provided modelId or default
            const modelName = modelId || 'gemini-2.0-flash';
            const model = genAI.getGenerativeModel({ model: modelName });

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            return text;
        } catch (error) {
            console.error('Gemini Adapter Error:', error);
            throw error;
        }
    }

    async listModels(): Promise<{ id: string; name: string }[]> {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) return [];

        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.models) {
                return data.models
                    .filter((m: any) => m.supportedGenerationMethods.includes('generateContent'))
                    .map((m: any) => ({
                        id: m.name.replace('models/', ''), // remove prefix for clean ID
                        name: m.displayName
                    }));
            }
            return [];
        } catch (error) {
            console.error('Failed to list Gemini models:', error);
            return [];
        }
    }
}
