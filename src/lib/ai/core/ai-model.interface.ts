export interface AIModel {
    id: string;
    name: string;
}

export interface AIModelAdapter {
    name: string;
    id: string; // unique identifier for the provider/adapter
    run(prompt: string, modelId?: string): Promise<string>;
    listModels?(): Promise<AIModel[]>;
}
