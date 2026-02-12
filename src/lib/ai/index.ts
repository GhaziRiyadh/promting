import { modelRegistry } from './core/model-registry';
import { OpenAIAdapter } from './adapters/openai.adapter';
import { DeepSeekAdapter } from './adapters/deepseek.adapter';
import { GeminiAdapter } from './adapters/gemini.adapter';
import { MockAdapter } from './adapters/mock.adapter';

// Instantiate adapters
const openaiAdapter = new OpenAIAdapter();
const deepseekAdapter = new DeepSeekAdapter();
const geminiAdapter = new GeminiAdapter();
const mockAdapter = new MockAdapter();

// Register adapters
// modelRegistry.register(openaiAdapter);
// modelRegistry.register(deepseekAdapter);
modelRegistry.register(geminiAdapter);
// modelRegistry.register(mockAdapter);

// Export registry and types
export { modelRegistry };
export * from './core/ai-model.interface';
export * from './core/model-registry';
