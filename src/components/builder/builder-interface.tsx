"use client";

import React, { useState } from 'react';
import { PromptType, PromptField } from '@prisma/client';
import { usePromptBuilder } from '@/hooks/use-prompt-builder';
import { FieldFactory } from './field-factory';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

interface BuilderInterfaceProps {
    promptType: PromptType & { fields: PromptField[] };
    locale: string;
}

export function BuilderInterface({ promptType, locale }: BuilderInterfaceProps) {
    const { inputs, handleInputChange, visibleFields, generatedPrompt } = usePromptBuilder(promptType);
    const t = useTranslations('Builder');
    const router = useRouter();
    const [saving, setSaving] = useState(false);

    // Parse localized strings
    const typeName = (promptType.name_i18n as Record<string, string>)?.[locale] || promptType.key;
    const typeDesc = (promptType.description_i18n as Record<string, string>)?.[locale] || '';

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await fetch('/api/prompts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: `${typeName} - ${new Date().toLocaleString()}`,
                    promptTypeId: promptType.id,
                    inputs: inputs,
                    finalPrompt: generatedPrompt
                })
            });

            if (res.ok) {
                router.push('/dashboard');
                router.refresh();
            } else {
                console.error("Failed to save prompt");
            }
        } catch (e) {
            console.error(e);
        } finally {
            setSaving(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedPrompt);
        // Could add a toast notification here
    };

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>{typeName}</CardTitle>
                        <p className="text-sm text-muted-foreground">{typeDesc}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {visibleFields.map((field) => (
                            <FieldFactory
                                key={field.key}
                                field={field}
                                value={inputs[field.key]}
                                onChange={(val) => handleInputChange(field.key, val)}
                                locale={locale}
                            />
                        ))}
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <Card className="h-full flex flex-col">
                    <CardHeader>
                        <CardTitle>{t('generate') || "Generated Prompt"}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <pre className="whitespace-pre-wrap bg-muted p-4 rounded-md text-sm min-h-[300px] h-full overflow-auto">
                            {generatedPrompt}
                        </pre>
                    </CardContent>
                    <CardFooter className="flex gap-2 justify-end">
                        <Button onClick={handleCopy} variant="outline">
                            {t('copy') || "Copy to Clipboard"}
                        </Button>
                        <Button onClick={handleSave} disabled={saving}>
                            {saving ? 'Saving...' : (t('save') || "Save Prompt")}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
