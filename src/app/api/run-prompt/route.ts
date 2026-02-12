import { NextRequest, NextResponse } from 'next/server';
import { modelRegistry } from '@/lib/ai';
import { rateLimiter } from '@/lib/rate-limiter';

export async function POST(req: NextRequest) {
    try {
        // 1. Rate Limiting
        const ip = req.headers.get('x-forwarded-for') || 'unknown';
        if (!rateLimiter.check(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        // 2. Parse Body
        const body = await req.json();
        const { model, prompt } = body;

        if (!model || typeof model !== 'string') {
            return NextResponse.json(
                { error: 'Invalid model ID provided.' },
                { status: 400 }
            );
        }

        // Parse composite ID "adapterId:modelId"
        const [adapterId, modelId] = model.split(':');

        if (!adapterId) {
            return NextResponse.json(
                { error: 'Invalid model format. Expected "adapterId:modelId"' },
                { status: 400 }
            );
        }

        if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
            return NextResponse.json(
                { error: 'Prompt is required.' },
                { status: 400 }
            );
        }

        if (prompt.length > 2000) {
            return NextResponse.json(
                { error: 'Prompt is too long (max 2000 characters).' },
                { status: 400 }
            );
        }

        // 3. Get Adapter and Run
        try {
            const adapter = modelRegistry.get(adapterId);
            // Pass modelId (if available) to the adapter
            const result = await adapter.run(prompt, modelId === 'default' ? undefined : modelId);

            return NextResponse.json({ result });
        } catch (adapterError: any) {
            console.error('AI Adapter Error:', adapterError);
            // Distinguish between "Model not found" and execution errors if needed
            if (adapterError.message.includes('Model adapter not found')) {
                return NextResponse.json(
                    { error: 'Invalid model selected.' },
                    { status: 400 }
                );
            }
            return NextResponse.json(
                { error: 'Failed to generate response from AI model.' },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
