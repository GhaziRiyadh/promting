import { AIModelAdapter } from '../core/ai-model.interface';
import { GoogleGenerativeAI } from '@google/generative-ai';

import { prisma } from '@/lib/prisma';

export class GeminiAdapter implements AIModelAdapter {
    id = 'google-gemini-pro';
    name = 'Gemini 1.5 Flash';

    async run(prompt: string, modelId?: string, context?: { type: string, userId?: string }): Promise<string> {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY is not configured');
        }

        try {
            const startTime = Date.now();
            const genAI = new GoogleGenerativeAI(apiKey);
            // Use provided modelId or default, stripping any potential prefix
            let modelName = modelId || 'gemini-1.5-flash';
            if (modelName.includes(':')) {
                modelName = modelName.split(':')[1];
            }
            const model = genAI.getGenerativeModel({ model: modelName });

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            
            const endTime = Date.now();
            const duration = endTime - startTime;
            const usage = response.usageMetadata;

            // Log interaction
            if (context) {
                await prisma.aILog.create({
                    data: {
                        prompt,
                        response: text,
                        modelId: modelName,
                        providerId: 'google',
                        type: context.type,
                        userId: context.userId,
                        durationMs: duration,
                        tokensIn: usage?.promptTokenCount,
                        tokensOut: usage?.candidatesTokenCount
                    }
                });
            }

            return text;
        } catch (error) {
            console.error('Gemini Adapter Error:', error);
            throw error;
        }
    }

    async stream(prompt: string, modelId?: string, context?: { type: string, userId?: string }): Promise<ReadableStream<Uint8Array>> {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY is not configured');
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        // Use provided modelId or default, stripping any potential prefix
        let modelName = modelId || 'gemini-1.5-flash';
        if (modelName.includes(':')) {
            modelName = modelName.split(':')[1];
        }
        const model = genAI.getGenerativeModel({ model: modelName });

        const startTime = Date.now();
        const result = await model.generateContentStream(prompt);

        const stream = new ReadableStream({
            async start(controller) {
                let fullResponse = '';
                for await (const chunk of result.stream) {
                    const chunkText = chunk.text();
                    fullResponse += chunkText;
                    controller.enqueue(new TextEncoder().encode(chunkText));
                }
                
                const endTime = Date.now();
                const duration = endTime - startTime;
                
                // usageMetadata might be available in the aggregated response of the stream result,
                // but usually getting it from the final chunk or the aggregated result object if possible.
                // For stream, getting exact token usage might require waiting for the full response promise if supported.
                // GoogleGenerativeAI's generateContentStream returns a result that has a .response promise which resolves to the full response.
                
                let usage = undefined;
                try {
                    const finalResponse = await result.response;
                    usage = finalResponse.usageMetadata;
                } catch (e) {
                    console.warn('Could not get usage metadata from stream', e);
                }

                // Log interaction after stream completes
                if (context) {
                    await prisma.aILog.create({
                        data: {
                            prompt,
                            response: fullResponse,
                            modelId: modelName,
                            providerId: 'google',
                            type: context.type,
                            userId: context.userId,
                            durationMs: duration,
                            tokensIn: usage?.promptTokenCount,
                            tokensOut: usage?.candidatesTokenCount
                        }
                    });
                }
                
                controller.close();
            }
        });

        return stream;
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
            // Fallback to known models if API fails (e.g. connectivity issues)
            return [
                { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash' },
                { id: 'gemini-pro', name: 'Gemini Pro' }
            ];
        }
    }
}
