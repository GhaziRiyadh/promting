import { NextResponse } from 'next/server';
import { modelRegistry } from '@/lib/ai';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { prompt, instructions, modelId } = await req.json();

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }

        // Use restricted model list or default
        // For now, we use the first available adapter, or specific if provided
        // We can default to 'gemini-2.0-flash' or let the registry decide.
        // Since we only have gemini enabled in index.ts, we should pick that.

        // Simple strategy: get the first available adapter
        const adapters = Array.from(modelRegistry.getAll().values());
        if (adapters.length === 0) {
            return NextResponse.json({ error: 'No AI models available' }, { status: 503 });
        }

        const adapter = adapters[0]; // Likely Gemini

        // Construct a meta-prompt for refinement
        const metaPrompt = `
You are an expert prompt engineer. Your task is to refine and improve the following prompt based on the user's instructions.

Original Prompt:
"""
${prompt}
"""

User Instructions:
"${instructions || "Improve clarity, effectiveness, and adherence to best practices."}"

Return ONLY the refined prompt text. Do not include explanations, quotes, or markdown formatting unless part of the prompt itself.
`;

        const refinedPrompt = await adapter.run(metaPrompt, modelId, {
            type: 'REFINEMENT',
            userId: session?.user?.id
        });

        return NextResponse.json({ refinedPrompt });
    } catch (error: any) {
        console.error('AI Refine Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to refine prompt' },
            { status: 500 }
        );
    }
}
