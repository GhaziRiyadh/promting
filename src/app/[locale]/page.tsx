'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Loader2, Play, Sparkles, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('Index'); // Assuming 'Index' namespace exists, fallback will show keys if not

    const [prompt, setPrompt] = useState('');
    const [model, setModel] = useState('openai-gpt-4o');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState<'prompt' | 'response'>('prompt');
    const [isCopied, setIsCopied] = useState(false);
    const [availableModels, setAvailableModels] = useState<{ id: string, name: string, providerId: string }[]>([]);
    const [isLoadingModels, setIsLoadingModels] = useState(true);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const res = await fetch('/api/models');
                if (res.ok) {
                    const data = await res.json();
                    setAvailableModels(data.models || []);
                    // Set default model if available and current model is not valid or empty
                    if (data.models && data.models.length > 0) {
                        // If current model is not in list, select first one. 
                        // Or just checking if model is empty.
                        if (!model) {
                            setModel(data.models[0].id);
                        }
                    }
                } else {
                    console.error('Failed to fetch models');
                }
            } catch (e) {
                console.error('Error fetching models:', e);
            } finally {
                setIsLoadingModels(false);
            }
        };
        fetchModels();
    }, []);

    const handleRun = async () => {
        if (!prompt.trim()) return;

        setIsLoading(true);
        setError('');
        setResponse(''); // Clear previous response
        setActiveTab('response'); // Auto-switch to response tab on mobile

        try {
            const res = await fetch('/api/run-prompt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model,
                    prompt,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to generate response');
            }

            setResponse(data.result);
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = async () => {
        if (!response) return;
        await navigator.clipboard.writeText(response);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />

            <main className="flex-1 flex flex-col container mx-auto px-4 py-6 md:py-10 max-w-7xl h-[calc(100vh-80px)]">

                {/* Mobile Tabs */}
                <div className="md:hidden flex space-x-2 mb-4 bg-muted p-1 rounded-lg">
                    <button
                        onClick={() => setActiveTab('prompt')}
                        className={cn(
                            "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                            activeTab === 'prompt' ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Prompt
                    </button>
                    <button
                        onClick={() => setActiveTab('response')}
                        className={cn(
                            "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                            activeTab === 'response' ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Response
                    </button>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 h-full min-h-0">

                    {/* Left Column: Input */}
                    <div className={cn(
                        "flex flex-col space-y-4 h-full md:flex",
                        activeTab === 'prompt' ? "flex" : "hidden"
                    )}>
                        <div className="flex items-center justify-between shrink-0">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-primary" />
                                AI Playground
                            </h2>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Select value={model} onValueChange={setModel} disabled={isLoadingModels}>
                                <SelectTrigger className="w-fit h-auto py-1.5 px-3 text-xs font-medium rounded-full bg-secondary/50 border-0 hover:bg-secondary/80 transition-colors gap-2">
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
                        </div>

                        <div className="flex-1 relative min-h-[300px]">
                            <Textarea
                                placeholder="Enter your prompt here..."
                                className="w-full h-full resize-none p-4 text-lg font-mono leading-relaxed"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            />
                            <div className="absolute bottom-4 right-4">
                                <Button
                                    size="lg"
                                    onClick={handleRun}
                                    disabled={isLoading || !prompt.trim()}
                                    className="shadow-lg"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Running...
                                        </>
                                    ) : (
                                        <>
                                            <Play className="mr-2 h-4 w-4" />
                                            Run
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Output */}
                    <div className={cn(
                        "flex flex-col space-y-4 h-full md:flex",
                        activeTab === 'response' ? "flex" : "hidden"
                    )}>
                        <div className="flex items-center justify-between shrink-0 h-[40px] md:h-auto">
                            <h2 className="text-xl font-semibold text-muted-foreground hidden md:block">
                                Response
                            </h2>
                            {/* Spacer on mobile to align with left column header height if needed */}
                            <div className="md:hidden"></div>

                            {response && (
                                <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                                    {isCopied ? (
                                        <>
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            Copied
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="mr-2 h-4 w-4" />
                                            Copy
                                        </>
                                    )}
                                </Button>
                            )}
                        </div>

                        <div className={cn(
                            "flex-1 rounded-md border bg-muted/50 p-6 overflow-auto font-mono text-sm leading-relaxed whitespace-pre-wrap",
                            !response && "flex items-center justify-center text-muted-foreground italic",
                            error && "bg-destructive/10 text-destructive border-destructive/20"
                        )}>
                            {isLoading ? (
                                <div className="flex flex-col items-center gap-4">
                                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                    <p>Generating response...</p>
                                </div>
                            ) : error ? (
                                <div className="text-center">
                                    <p className="font-semibold">Error</p>
                                    <p>{error}</p>
                                </div>
                            ) : response ? (
                                response
                            ) : (
                                "Run a prompt to see the AI response here."
                            )}
                        </div>
                    </div>

                </div>
            </main>

            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
}
