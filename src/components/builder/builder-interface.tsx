"use client";

import React from 'react';
import { PromptType, PromptField } from '@prisma/client';
import { usePromptBuilder } from '@/hooks/use-prompt-builder';
import { FieldFactory } from './field-factory';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

interface BuilderInterfaceProps {
    promptType: PromptType & { fields: PromptField[] };
    locale: string;
}

export function BuilderInterface({ promptType, locale }: BuilderInterfaceProps) {
    const { inputs, handleInputChange, visibleFields, generatedPrompt } = usePromptBuilder(promptType);
    const t = useTranslations('Builder');

    // Parse localized strings
    const typeName = (promptType.name_i18n as Record<string, string>)?.[locale] || promptType.key;
    const typeDesc = (promptType.description_i18n as Record<string, string>)?.[locale] || '';

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>{typeName}</CardTitle>
                        <p className="text-sm text-muted-foreground">{typeDesc}</p>
                    </CardHeader>
                    <CardContent>
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
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle>{t('generate')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <pre className="whitespace-pre-wrap bg-muted p-4 rounded-md text-sm min-h-[300px]">
                            {generatedPrompt}
                        </pre>
                        <div className="flex gap-2 mt-4">
                            <Button onClick={() => navigator.clipboard.writeText(generatedPrompt)}>
                                {t('copy')}
                            </Button>
                            <Button variant="secondary">
                                {t('save')}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
