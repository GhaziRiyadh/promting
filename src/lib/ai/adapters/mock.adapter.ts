import { AIModelAdapter } from '../core/ai-model.interface';

export class MockAdapter implements AIModelAdapter {
    id = 'mock-model';
    name = 'Mock Model (Test)';

    async run(prompt: string, modelId?: string): Promise<string> {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return `[MOCK RESPONSE] You said: "${prompt}". \n\nThis is a simulated response for testing purposes. No API credits were consumed.`;
    }

    async listModels() {
        return [
            { id: 'mock-model', name: 'Mock Model (Free)' }
        ];
    }
}
