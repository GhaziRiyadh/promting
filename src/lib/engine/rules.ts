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
    if (group.combinator === 'AND') {
        return group.rules.every(r =>
            'combinator' in r ? evaluateRuleGroup(r as RuleGroup, inputs) : evaluateRule(r as Rule, inputs)
        );
    } else {
        return group.rules.some(r =>
            'combinator' in r ? evaluateRuleGroup(r as RuleGroup, inputs) : evaluateRule(r as Rule, inputs)
        );
    }
}
