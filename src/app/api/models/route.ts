import { NextResponse } from 'next/server';
import { modelRegistry } from '@/lib/ai';

export async function GET() {
    try {
        const models = await modelRegistry.getAllModels();
        return NextResponse.json({ models });
    } catch (error) {
        console.error('Error fetching models:', error);
        return NextResponse.json(
            { error: 'Failed to fetch models' },
            { status: 500 }
        );
    }
}
