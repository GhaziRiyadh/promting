import React from 'react';
import { PromptField } from '@prisma/client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';


interface FieldFactoryProps {
    field: PromptField;
    value: any;
    onChange: (value: any) => void;
    locale: string;
}

export const FieldFactory: React.FC<FieldFactoryProps> = ({ field, value, onChange, locale }) => {
    const label = (field.label_i18n as Record<string, string>)?.[locale] || field.key;
    const placeholder = (field.placeholder_i18n as Record<string, string>)?.[locale] || '';

    const renderInput = () => {
        switch (field.type) {
            case 'text':
                return (
                    <Input
                        id={field.key}
                        value={value || ''}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                    />
                );
            case 'textarea':
                return (
                    <Textarea
                        id={field.key}
                        value={value || ''}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                    />
                );
            case 'select':
                const options = field.options as Record<string, string> | null;
                return (
                    <Select value={value || ''} onValueChange={onChange}>
                        <SelectTrigger id={field.key}>
                            <SelectValue placeholder={placeholder || "Select..."} />
                        </SelectTrigger>
                        <SelectContent>
                            {options && Object.entries(options).map(([val, label]) => (
                                <SelectItem key={val} value={val}>{label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                );
            case 'number':
                return (
                    <Input
                        id={field.key}
                        type="number"
                        value={value || ''}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                    />
                );
            default:
                return <div>Unsupported field type: {field.type}</div>;
        }
    };

    return (
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
            <Label htmlFor={field.key}>
                {label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {renderInput()}
        </div>
    );
};
