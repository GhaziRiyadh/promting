"use client";

import React, { useState } from 'react';
import { PromptType, PromptField } from '@prisma/client';
import { usePromptBuilder } from '@/hooks/use-prompt-builder';
import { FieldFactory } from './field-factory';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface BuilderInterfaceProps {
    promptType: PromptType & { fields: PromptField[] };
    locale: string;
}

export function BuilderInterface({ promptType, locale }: BuilderInterfaceProps) {
    const { inputs, handleInputChange, visibleFields, generatedPrompt } = usePromptBuilder(promptType);
    const t = useTranslations('Builder');
    const router = useRouter();
    const [saving, setSaving] = useState(false);
    
    // Model Selection State
    const [model, setModel] = useState<string>('');
    const [availableModels, setAvailableModels] = useState<{ id: string, name: string, providerId: string }[]>([]);
    const [isLoadingModels, setIsLoadingModels] = useState(true);

    React.useEffect(() => {
        const fetchModels = async () => {
            try {
                const res = await fetch('/api/models');
                if (res.ok) {
                    const data = await res.json();
                    setAvailableModels(data.models || []);
                    if (data.models && data.models.length > 0) {
                        setModel(data.models[0].id);
                    }
                }
            } catch (e) {
                console.error('Error fetching models:', e);
            } finally {
                setIsLoadingModels(false);
            }
        };
        fetchModels();
    }, []);

    // AI Feature States
    const [isRefining, setIsRefining] = useState(false);
    const [refinementInstructions, setRefinementInstructions] = useState('');
    const [refinedPrompt, setRefinedPrompt] = useState('');
    const [isTesting, setIsTesting] = useState(false);
    const [testResult, setTestResult] = useState('');

    // Auto-fill State
    const [isGeneratingInputs, setIsGeneratingInputs] = useState(false);
    const [autoFillDescription, setAutoFillDescription] = useState('');
    const [showAutoFill, setShowAutoFill] = useState(false);

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
                    finalPrompt: refinedPrompt || generatedPrompt // Use refined prompt if available
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
        navigator.clipboard.writeText(refinedPrompt || generatedPrompt);
    };

    const handleRefine = async () => {
        if (!generatedPrompt) return;
        setIsRefining(true);
        try {
            const res = await fetch('/api/ai/refine', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: refinedPrompt || generatedPrompt,
                    instructions: refinementInstructions,
                    modelId: model // Pass selected model
                })
            });
            const data = await res.json();
            if (data.refinedPrompt) {
                setRefinedPrompt(data.refinedPrompt);
                setRefinementInstructions(''); // Clear instructions after success
            }
        } catch (e) {
            console.error("Failed to refine prompt", e);
        } finally {
            setIsRefining(false);
        }
    };

    const handleTestRun = async () => {
        const promptToRun = refinedPrompt || generatedPrompt;
        if (!promptToRun) return;

        setIsTesting(true);
        setTestResult('');
        try {
            const res = await fetch('/api/run-prompt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: promptToRun,
                    modelId: model || 'default'
                })
            });

            if (!res.ok) {
                const data = await res.json();
                setTestResult(`Error: ${data.error || res.statusText}`);
                return;
            }

            if (!res.body) return;

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let done = false;

            while (!done) {
                const { value, done: doneReading } = await reader.read();
                done = doneReading;
                const chunkValue = decoder.decode(value, { stream: !done });
                
                // If the response is a JSON object (fallback for non-streaming), handle it
                if (chunkValue.trim().startsWith('{') && chunkValue.trim().endsWith('}')) {
                     try {
                        const json = JSON.parse(chunkValue);
                        if (json.result) {
                            setTestResult(json.result);
                        } else if (json.error) {
                            setTestResult(`Error: ${json.error}`);
                        }
                        return;
                     } catch(e) {
                         // Not JSON, treat as stream chunk
                     }
                }

                setTestResult((prev) => prev + chunkValue);
            }

        } catch (e) {
            setTestResult("Failed to execute prompt.");
        } finally {
            setIsTesting(false);
        }
    };

    const handleAutoFill = async () => {
        if (!autoFillDescription) return;
        setIsGeneratingInputs(true);
        try {
            const res = await fetch('/api/ai/generate-inputs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    promptType: promptType,
                    userDescription: autoFillDescription,
                    modelId: model // Pass selected model
                })
            });
            const data = await res.json();
            if (data.inputs) {
                // Merge generated inputs with existing ones or overwrite?
                // Overwrite is cleaner for "Fill form" action
                // But we must use handleInputChange to trigger updates
                Object.entries(data.inputs).forEach(([key, value]) => {
                    handleInputChange(key, value);
                });
                setShowAutoFill(false);
                setAutoFillDescription('');
            }
        } catch (e) {
            console.error("Failed to auto-fill inputs", e);
        } finally {
            setIsGeneratingInputs(false);
        }
    };

    // Use refined prompt for display if it exists, otherwise generated
    const displayPrompt = refinedPrompt || generatedPrompt;

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="space-y-1">
                            <CardTitle>{typeName}</CardTitle>
                            <p className="text-sm text-muted-foreground">{typeDesc}</p>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowAutoFill(!showAutoFill)}
                        >
                            ✨ AI Auto-fill
                        </Button>
                    </CardHeader>

                    {showAutoFill && (
                        <div className="px-6 pb-4 animate-in slide-in-from-top-2">
                            <div className="bg-muted/50 p-3 rounded-md space-y-2 border">
                                <p className="text-xs font-medium text-muted-foreground">
                                    Describe what you want to create, and AI will fill the fields for you.
                                </p>
                                <textarea
                                    className="w-full min-h-[80px] p-2 text-sm border rounded-md bg-background resize-none focus:outline-hidden focus:ring-2 focus:ring-primary/50"
                                    placeholder="E.g., I want an SEO-optimized blog post about sustainable gardening tips for beginners..."
                                    value={autoFillDescription}
                                    onChange={(e) => setAutoFillDescription(e.target.value)}
                                />
                                <div className="flex justify-end gap-2">
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        onClick={() => setShowAutoFill(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        size="sm"
                                        onClick={handleAutoFill}
                                        disabled={isGeneratingInputs || !autoFillDescription}
                                    >
                                        {isGeneratingInputs ? 'Generating...' : 'Fill Form'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    <CardContent className="space-y-4 pt-6">
                        {visibleFields.map((field) => (
                            <FieldFactory
                                key={field.key}
                                field={field}
                                value={inputs[field.key]}
                                onChange={(val) => {
                                    handleInputChange(field.key, val);
                                    setRefinedPrompt(''); // Clear refined prompt on input change to fallback to generated
                                }}
                                locale={locale}
                            />
                        ))}
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <Card className="flex flex-col min-h-[500px]">
                    <CardHeader>
                        <CardTitle>{t('generate') || "Generated Prompt"}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                        <div className="relative">
                            <pre className="whitespace-pre-wrap bg-muted p-4 rounded-md text-sm min-h-[300px] max-h-[500px] overflow-auto border">
                                {displayPrompt}
                            </pre>
                            {refinedPrompt && (
                                <div className="absolute top-2 right-2">
                                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">AI Refined</span>
                                </div>
                            )}
                        </div>

                        {/* AI Refine Input */}
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="E.g., Make it shorter, Add professional tone..."
                                className="flex-1 px-3 py-2 text-sm border rounded-md"
                                value={refinementInstructions}
                                onChange={(e) => setRefinementInstructions(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleRefine()}
                            />
                            <Button
                                onClick={handleRefine}
                                disabled={isRefining || !generatedPrompt}
                                variant="secondary"
                            >
                                {isRefining ? 'Refining...' : 'Improve with AI'}
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 justify-between border-t pt-4">
                        <Button
                            onClick={handleTestRun}
                            disabled={isTesting || !displayPrompt}
                            variant="destructive" // Distinct color
                        >
                            {isTesting ? 'Running...' : 'Test Run'}
                        </Button>
                        
                        {/* Model Selector */}
                        <Select value={model} onValueChange={setModel} disabled={isLoadingModels}>
                            <SelectTrigger className="w-fit h-9 py-1.5 px-3 text-xs font-medium rounded-full bg-secondary/50 border-0 hover:bg-secondary/80 transition-colors gap-2">
                                <SelectValue placeholder={isLoadingModels ? "Loading..." : "Select Model"} />
                            </SelectTrigger>
                            <SelectContent>
                                {availableModels.map((m) => (
                                    <SelectItem key={m.id} value={m.id}>
                                        {m.name}
                                    </SelectItem>
                                ))}
                                {availableModels.length === 0 && !isLoadingModels && (
                                    <SelectItem value="loading" disabled>No models available</SelectItem>
                                )}
                            </SelectContent>
                        </Select>

                        <div className="flex gap-2">
                            <Button onClick={handleCopy} variant="outline">
                                {t('copy') || "Copy"}
                            </Button>
                            <Button onClick={handleSave} disabled={saving}>
                                {saving ? 'Saving...' : (t('save') || "Save Prompt")}
                            </Button>
                        </div>
                    </CardFooter>
                </Card>

                {/* Test Result Area */}
                {testResult && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Test Result</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-muted/50 p-4 rounded-md text-sm overflow-auto prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-stone-900 prose-pre:text-stone-50">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {testResult}
                                </ReactMarkdown>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
