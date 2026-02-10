import { PromptType } from "@prisma/client";

export interface PromptGenerationStrategy {
    generate(template: string, inputs: Record<string, any>): string;
}

export class TemplateStrategy implements PromptGenerationStrategy {
    generate(template: string, inputs: Record<string, any>): string {
        let result = template;
        for (const [key, value] of Object.entries(inputs)) {
            // Replace {{key}} with value
            const regex = new RegExp(`{{${key}}}`, 'g');
            result = result.replace(regex, String(value));
        }
        // Clean up unused placeholders? Optional.
        return result;
    }
}

export class ChatStrategy implements PromptGenerationStrategy {
    generate(rolePrompt: string, inputs: Record<string, any>): string {
        // Basic implementation: Role + Inputs as requirements
        const parts = [rolePrompt];

        parts.push("\n### User Requirements:");
        for (const [key, value] of Object.entries(inputs)) {
            if (value) {
                parts.push(`- ${key}: ${value}`);
            }
        }

        return parts.join("\n");
    }
}

export const strategies: Record<string, PromptGenerationStrategy> = {
    template: new TemplateStrategy(),
    chat: new ChatStrategy(),
};
