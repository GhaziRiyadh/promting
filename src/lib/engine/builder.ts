export class PromptBuilder {
    private parts: string[] = [];

    constructor() { }

    role(text: string): PromptBuilder {
        if (text) {
            this.parts.push(`### Role:\n${text}`);
        }
        return this;
    }

    section(title: string, content: string): PromptBuilder {
        if (content) {
            this.parts.push(`### ${title}:\n${content}`);
        }
        return this;
    }

    raw(text: string): PromptBuilder {
        if (text) {
            this.parts.push(text);
        }
        return this;
    }

    build(): string {
        return this.parts.join("\n\n");
    }

    reset(): void {
        this.parts = [];
    }
}
