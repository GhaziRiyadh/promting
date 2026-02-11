export type RuleOperator = 'equals' | 'notEquals' | 'contains' | 'greaterThan' | 'lessThan';

export interface Rule {
    field: string;
    operator: RuleOperator;
    value: any;
}

export interface RuleGroup {
    combinator: 'AND' | 'OR';
    rules: (Rule | RuleGroup)[];
}

export function evaluateRule(rule: Rule, inputs: Record<string, any>): boolean {
    const inputValue = inputs[rule.field];

    switch (rule.operator) {
        case 'equals':
            return inputValue == rule.value;
        case 'notEquals':
            return inputValue != rule.value;
        case 'contains':
            return Array.isArray(inputValue)
                ? inputValue.includes(rule.value)
                : String(inputValue).includes(String(rule.value));
        case 'greaterThan':
            return Number(inputValue) > Number(rule.value);
        case 'lessThan':
            return Number(inputValue) < Number(rule.value);
        default:
            return false;
    }
}

export function evaluateRuleGroup(group: RuleGroup, inputs: Record<string, any>): boolean {
    if (!group || !group.rules) return true;

    if (group.combinator === 'AND') {
        return group.rules.every(r => evaluateAnyRule(r as any, inputs));
    } else {
        return group.rules.some(r => evaluateAnyRule(r as any, inputs));
    }
}

export function evaluateAnyRule(ruleOrGroup: Rule | RuleGroup, inputs: Record<string, any>): boolean {
    if (!ruleOrGroup) return true;

    // Check if it's a RuleGroup by looking for 'combinator'
    if (typeof ruleOrGroup === 'object' && 'combinator' in ruleOrGroup && 'rules' in ruleOrGroup) {
        return evaluateRuleGroup(ruleOrGroup as RuleGroup, inputs);
    }

    // Otherwise treat as a single Rule if it has the required properties
    if (typeof ruleOrGroup === 'object' && 'field' in ruleOrGroup && 'operator' in ruleOrGroup) {
        return evaluateRule(ruleOrGroup as Rule, inputs);
    }

    return true; // Default to visible if rule is malformed
}

