import { NextResponse } from 'next/server';
import { modelRegistry } from '@/lib/ai';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PromptType, PromptField } from '@prisma/client';

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { promptType, userDescription, modelId } = await req.json();

        if (!promptType || !userDescription) {
            return NextResponse.json({ error: 'Prompt Type and Description are required' }, { status: 400 });
        }

        const fields = promptType.fields as PromptField[];

        // simple strategy: get the first available adapter
        const adapters = Array.from(modelRegistry.getAll().values());
        if (adapters.length === 0) {
            return NextResponse.json({ error: 'No AI models available' }, { status: 503 });
        }
        const adapter = adapters[0];

        // Construct meta-prompt
        const fieldsDesc = fields.map(f => `- ${f.key} (${f.type}): ${f.label}`).join('\n');

        const metaPrompt = `
You are an intelligent assistant that helps users fill out forms to generate AI prompts.
Your task is to generate a JSON object containing values for the following fields, based on the user's description.

Fields:
${fieldsDesc}

User Description:
"${userDescription}"

Instructions:
1. Return ONLY a valid JSON object.
2. The keys of the JSON object must match the field keys exactly.
3. Infer the best possible values for each field based on the user's description.
4. If a field cannot be inferred, provide a reasonable default or leave it empty if appropriate.
5. Do not include markdown formatting (like \`\`\`json). Just the raw JSON string.

JSON:
`;

        const result = await adapter.run(metaPrompt, modelId);

        // Clean up result if it contains markdown
        const cleanedResult = result.replace(/```json/g, '').replace(/```/g, '').trim();

        try {
            const inputs = JSON.parse(cleanedResult);
            return NextResponse.json({ inputs });
        } catch (e) {
            console.error("Failed to parse AI response as JSON", result);
            return NextResponse.json({ error: "Failed to generate valid inputs" }, { status: 500 });
        }

    } catch (error: any) {
        console.error('AI Generate Inputs Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to generate inputs' },
            { status: 500 }
        );
    }
}
