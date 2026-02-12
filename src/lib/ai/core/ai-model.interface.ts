export interface AIModel {
    id: string;
    name: string;
}

export interface AIModelAdapter {
    name: string;
    id: string; // unique identifier for the provider/adapter
    run(prompt: string, modelId?: string): Promise<string>;
    stream?(prompt: string, modelId?: string): Promise<ReadableStream<Uint8Array>>;
    listModels?(): Promise<AIModel[]>;
}
