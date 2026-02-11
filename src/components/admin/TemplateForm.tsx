'use client';

import React, { useState } from 'react';
import { PromptType, PromptField } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Plus, Trash, GripVertical } from 'lucide-react';

interface TemplateFormProps {
    template: (PromptType & { fields: PromptField[] }) | null;
    locale: string;
    onClose: () => void;
    onSuccess: () => void;
}

export function TemplateForm({ template, locale, onClose, onSuccess }: TemplateFormProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        key: template?.key || '',
        name_en: (template?.name_i18n as any)?.en || '',
        name_ar: (template?.name_i18n as any)?.ar || '',
        description_en: (template?.description_i18n as any)?.en || '',
        description_ar: (template?.description_i18n as any)?.ar || '',
        rolePrompt: template?.rolePrompt || '',
        isActive: template?.isActive ?? true,
        fields: template?.fields.map(f => ({
            key: f.key,
            type: f.type,
            label_en: (f.label_i18n as any)?.en || '',
            label_ar: (f.label_i18n as any)?.ar || '',
            required: f.required,
            order: f.order,
            options: f.options
        })) || []
    });

    const addField = () => {
        setFormData(prev => ({
            ...prev,
            fields: [
                ...prev.fields,
                { key: '', type: 'text', label_en: '', label_ar: '', required: false, order: prev.fields.length, options: null }
            ]
        }));
    };

    const removeField = (index: number) => {
        setFormData(prev => ({
            ...prev,
            fields: prev.fields.filter((_, i) => i !== index)
        }));
    };

    const handleFieldChange = (index: number, key: string, value: any) => {
        const newFields = [...formData.fields];
        newFields[index] = { ...newFields[index], [key]: value };
        setFormData(prev => ({ ...prev, fields: newFields }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            key: formData.key,
            name_i18n: { en: formData.name_en, ar: formData.name_ar },
            description_i18n: { en: formData.description_en, ar: formData.description_ar },
            rolePrompt: formData.rolePrompt,
            isActive: formData.isActive,
            fields: formData.fields.map((f, i) => ({
                key: f.key,
                type: f.type,
                label_i18n: { en: f.label_en, ar: f.label_ar },
                required: f.required,
                order: i,
                options: f.options
            }))
        };

        try {
            const url = template ? `/api/prompt-types/${template.id}` : '/api/prompt-types';
            const method = template ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                onSuccess();
            } else {
                const err = await res.json();
                alert(err.error || "Failed to save template");
            }
        } catch (error) {
            console.error("Save error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{template ? 'Edit Template' : 'New Template'}</DialogTitle>
                    <DialogDescription>
                        Configure your AI prompt template, role prompt, and input fields.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Template Key (URL friendly)</Label>
                            <Input
                                value={formData.key}
                                onChange={e => setFormData(prev => ({ ...prev, key: e.target.value }))}
                                placeholder="e.g. blog-post-generator"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t pt-4">
                        <div className="space-y-2">
                            <Label>Name (English)</Label>
                            <Input
                                value={formData.name_en}
                                onChange={e => setFormData(prev => ({ ...prev, name_en: e.target.value }))}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Name (Arabic)</Label>
                            <Input
                                value={formData.name_ar}
                                onChange={e => setFormData(prev => ({ ...prev, name_ar: e.target.value }))}
                                dir="rtl"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Description (English)</Label>
                            <Textarea
                                value={formData.description_en}
                                onChange={e => setFormData(prev => ({ ...prev, description_en: e.target.value }))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Description (Arabic)</Label>
                            <Textarea
                                value={formData.description_ar}
                                onChange={e => setFormData(prev => ({ ...prev, description_ar: e.target.value }))}
                                dir="rtl"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 border-t pt-4">
                        <div className="flex justify-between items-center">
                            <Label>AI Role Prompt</Label>
                            <span className="text-xs text-muted-foreground font-medium">✨ Use placeholders like {"{field_key}"}</span>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-md border border-blue-100 dark:border-blue-900 mb-2">
                            <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                                💡 <strong>How to use:</strong> Type field keys inside curly braces to inject user input directly into the role prompt.
                                For example, <code>"You are a specialist in {"{topic}"}..."</code>.
                                {formData.fields.length > 0 && (
                                    <span className="block mt-1">
                                        <strong>Available keys:</strong> {formData.fields.map(f => f.key).filter(k => !!k).map(k => `{${k}}`).join(', ') || 'Add fields below to see keys.'}
                                    </span>
                                )}
                            </p>
                        </div>
                        <Textarea
                            value={formData.rolePrompt}
                            onChange={e => setFormData(prev => ({ ...prev, rolePrompt: e.target.value }))}
                            placeholder="e.g. You are a professional blog writer. You will write about {topic}..."
                            className="min-h-[120px] font-mono text-sm"
                            required
                        />
                    </div>

                    <div className="space-y-4 border-t pt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold">Input Fields</h3>
                            <Button type="button" variant="outline" size="sm" onClick={addField}>
                                <Plus className="mr-2 h-4 w-4" />
                                Add Field
                            </Button>
                        </div>

                        {formData.fields.map((field, index) => (
                            <div key={index} className="p-4 border rounded-md bg-muted/30 space-y-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
                                        <span className="font-medium text-sm">Field #{index + 1}</span>
                                    </div>
                                    <Button type="button" variant="ghost" size="icon" onClick={() => removeField(index)} className="text-destructive">
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-1">
                                        <Label className="text-xs">Field Key</Label>
                                        <Input
                                            value={field.key}
                                            onChange={e => handleFieldChange(index, 'key', e.target.value)}
                                            placeholder="e.g. topic"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label className="text-xs">Type</Label>
                                        <Select
                                            value={field.type}
                                            onValueChange={val => {
                                                const newFields = [...formData.fields];
                                                newFields[index] = {
                                                    ...newFields[index],
                                                    type: val,
                                                    options: val === 'select' ? (field.options || []) : null
                                                };
                                                setFormData(prev => ({ ...prev, fields: newFields }));
                                            }}
                                        >
                                            <SelectTrigger><SelectValue /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="text">Text</SelectItem>
                                                <SelectItem value="textarea">Textarea</SelectItem>
                                                <SelectItem value="select">Select</SelectItem>
                                                <SelectItem value="number">Number</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex items-end gap-2 pb-2">
                                        <input
                                            type="checkbox"
                                            checked={field.required}
                                            onChange={e => handleFieldChange(index, 'required', e.target.checked)}
                                            id={`req-${index}`}
                                        />
                                        <label htmlFor={`req-${index}`} className="text-xs">Required</label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <Label className="text-xs">Label (EN)</Label>
                                        <Input
                                            value={field.label_en}
                                            onChange={e => handleFieldChange(index, 'label_en', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Label className="text-xs">Label (AR)</Label>
                                        <Input
                                            value={field.label_ar}
                                            onChange={e => handleFieldChange(index, 'label_ar', e.target.value)}
                                            dir="rtl"
                                            required
                                        />
                                    </div>
                                </div>

                                {field.type === 'select' && (
                                    <div className="space-y-3 p-3 bg-background rounded border border-dashed">
                                        <div className="flex justify-between items-center">
                                            <Label className="text-xs font-semibold">Select Options</Label>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                className="h-7 text-[10px]"
                                                onClick={() => {
                                                    const currentOptions = Array.isArray(field.options) ? field.options : [];
                                                    handleFieldChange(index, 'options', [...currentOptions, { value: '', label_i18n: { en: '', ar: '' } }]);
                                                }}
                                            >
                                                <Plus className="mr-1 h-3 w-3" />
                                                Add Option
                                            </Button>
                                        </div>
                                        <div className="space-y-2">
                                            {(Array.isArray(field.options) ? field.options : []).map((opt: any, optIdx: number) => (
                                                <div key={optIdx} className="grid grid-cols-7 gap-2 items-start">
                                                    <div className="col-span-2">
                                                        <Input
                                                            placeholder="Value"
                                                            className="h-8 text-xs font-mono"
                                                            value={opt.value}
                                                            onChange={e => {
                                                                const newOpts = [...field.options];
                                                                newOpts[optIdx] = { ...newOpts[optIdx], value: e.target.value };
                                                                handleFieldChange(index, 'options', newOpts);
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="col-span-2">
                                                        <Input
                                                            placeholder="Label (EN)"
                                                            className="h-8 text-xs"
                                                            value={opt.label_i18n?.en || ''}
                                                            onChange={e => {
                                                                const newOpts = [...field.options];
                                                                newOpts[optIdx] = { ...newOpts[optIdx], label_i18n: { ...newOpts[optIdx].label_i18n, en: e.target.value } };
                                                                handleFieldChange(index, 'options', newOpts);
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="col-span-2">
                                                        <Input
                                                            placeholder="Label (AR)"
                                                            className="h-8 text-xs"
                                                            dir="rtl"
                                                            value={opt.label_i18n?.ar || ''}
                                                            onChange={e => {
                                                                const newOpts = [...field.options];
                                                                newOpts[optIdx] = { ...newOpts[optIdx], label_i18n: { ...newOpts[optIdx].label_i18n, ar: e.target.value } };
                                                                handleFieldChange(index, 'options', newOpts);
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="flex justify-center pt-1">
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-6 w-6 text-destructive"
                                                            onClick={() => {
                                                                handleFieldChange(index, 'options', field.options.filter((_: any, i: number) => i !== optIdx));
                                                            }}
                                                        >
                                                            <Trash className="h-3 w-3" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                            {(Array.isArray(field.options) ? field.options : []).length === 0 && (
                                                <p className="text-[10px] text-muted-foreground italic text-center py-1">No options added yet.</p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <DialogFooter className="border-t pt-4">
                        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                        <Button type="submit" disabled={loading}>
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {template ? 'Update Template' : 'Create Template'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

function Loader2(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-2"><path d="M12 2v4" /><path d="m16.2 7.8 2.9-2.9" /><path d="M18 12h4" /><path d="m16.2 16.2 2.9 2.9" /><path d="M12 18v4" /><path d="m4.9 19.1 2.9-2.9" /><path d="M2 12h4" /><path d="m4.9 4.9 2.9 2.9" /></svg>
}
