import { useState, useEffect, useMemo } from 'react';
import { PromptType, PromptField } from '@prisma/client';
import { evaluateRuleGroup, RuleGroup, Rule } from '@/lib/engine/rules';
import { strategies } from '@/lib/engine/strategies';

export function usePromptBuilder(promptType: PromptType & { fields: PromptField[] }) {
    const [inputs, setInputs] = useState<Record<string, any>>({});
    const [generatedPrompt, setGeneratedPrompt] = useState<string>('');

    // 1. Calculate Visible Fields (Observer Pattern: State change -> Recalculate)
    const visibleFields = useMemo(() => {
        return promptType.fields
            .filter(field => {
                if (!field.rules) return true;
                // Parse rules from JSON
                const ruleGroup = field.rules as unknown as RuleGroup;
                return evaluateRuleGroup(ruleGroup, inputs);
            })
            .sort((a, b) => a.order - b.order);
    }, [promptType.fields, inputs]);

    // 2. Generate Prompt (Observer Pattern: State change -> Regenerate)
    useEffect(() => {
        // Determine strategy. For now, we can hardcode or add a 'strategy' field to PromptType
        // Let's assume 'chat' strategy for now, or use the type's key if it matches a strategy
        const strategyName = 'chat'; // Default
        const strategy = strategies[strategyName];

        if (strategy) {
            const prompt = strategy.generate(promptType.rolePrompt, inputs);
            setGeneratedPrompt(prompt);
        }
    }, [inputs, promptType, visibleFields]);

    const handleInputChange = (key: string, value: any) => {
        setInputs(prev => ({ ...prev, [key]: value }));
    };

    return {
        inputs,
        handleInputChange,
        visibleFields,
        generatedPrompt
    };
}
