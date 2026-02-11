import { PromptType } from "@prisma/client";

export interface PromptGenerationStrategy {
    generate(template: string, inputs: Record<string, any>): string;
}

export class TemplateStrategy implements PromptGenerationStrategy {
    generate(template: string, inputs: Record<string, any>): string {
        let result = template;
        for (const [key, value] of Object.entries(inputs)) {
            const valStr = String(value ?? '');
            // Use replaceAll for literal strings to avoid regex quantifier issues with braces
            result = result.replaceAll(`{{${key}}}`, valStr)
                .replaceAll(`{${key}}`, valStr);
        }
        return result;
    }
}

export class ChatStrategy implements PromptGenerationStrategy {
    generate(rolePrompt: string, inputs: Record<string, any>): string {
        // Replace {key} and {{key}} in the role prompt itself
        let processedRole = rolePrompt;
        for (const [key, value] of Object.entries(inputs)) {
            const valStr = String(value ?? '');
            processedRole = processedRole.replaceAll(`{{${key}}}`, valStr)
                .replaceAll(`{${key}}`, valStr);
        }

        const parts = [processedRole];

        parts.push("\n### User Requirements:");
        for (const [key, value] of Object.entries(inputs)) {
            if (value !== undefined && value !== null && value !== '') {
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
