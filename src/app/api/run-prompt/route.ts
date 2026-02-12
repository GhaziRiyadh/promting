import { NextRequest, NextResponse } from 'next/server';
import { modelRegistry } from '@/lib/ai';
import { rateLimiter } from '@/lib/rate-limiter';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

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
        const { modelId, prompt } = body;

        // Support 'model' as fallback for backward compatibility if needed, or just enforce modelId
        const paramsModelId = modelId || body.model;

        if (!paramsModelId || typeof paramsModelId !== 'string') {
            return NextResponse.json(
                { error: 'Invalid model ID provided.' },
                { status: 400 }
            );
        }

        // Parse composite ID "adapterId:modelId"
        const [adapterId, suffix] = paramsModelId.split(':');

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

        // 3. Get Adapter and Stream
        const adapter = modelRegistry.get(adapterId);
        
        const context = { type: 'TESTING', userId: session?.user?.id };

        // Check if adapter supports streaming
        if (!adapter.stream) {
             // Fallback to non-streaming if stream is not implemented
             const result = await adapter.run(prompt, suffix === 'default' ? undefined : suffix, context);
             return NextResponse.json({ result });
        }

        const stream = await adapter.stream(prompt, suffix === 'default' ? undefined : suffix, context);

        return new NextResponse(stream, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Transfer-Encoding': 'chunked',
            },
        });

    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
