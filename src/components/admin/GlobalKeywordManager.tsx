'use client';

import React, { useState, useEffect } from 'react';
import { GlobalKeyword } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Trash, Loader2 } from 'lucide-react';

export function GlobalKeywordManager() {
    const [keywords, setKeywords] = useState<GlobalKeyword[]>([]);
    const [loading, setLoading] = useState(true);
    const [newKeyword, setNewKeyword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchKeywords();
    }, []);

    const fetchKeywords = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/global-keywords');
            if (res.ok) {
                const data = await res.json();
                setKeywords(data);
            }
        } catch (error) {
            console.error("Failed to fetch global keywords", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newKeyword.trim()) return;

        setIsSubmitting(true);
        try {
            const res = await fetch('/api/admin/global-keywords', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: newKeyword.trim() })
            });
            if (res.ok) {
                setNewKeyword('');
                fetchKeywords();
            }
        } catch (error) {
            console.error("Failed to add keyword", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            const res = await fetch(`/api/admin/global-keywords/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                fetchKeywords();
            }
        } catch (error) {
            console.error("Failed to delete keyword", error);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center py-10">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Global Suggested Keywords</CardTitle>
                <CardDescription>
                    These items will be available as clickable buttons for all prompt templates.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <form onSubmit={handleAdd} className="flex gap-2">
                    <Input
                        placeholder="e.g. ## User Requirements"
                        value={newKeyword}
                        onChange={(e) => setNewKeyword(e.target.value)}
                        className="max-w-md"
                    />
                    <Button type="submit" disabled={isSubmitting || !newKeyword.trim()}>
                        {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Plus className="mr-2 h-4 w-4" />}
                        Add Global Keyword
                    </Button>
                </form>

                <div className="flex flex-wrap gap-3">
                    {keywords.map((kw) => (
                        <div
                            key={kw.id}
                            className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900 rounded-full group transition-all hover:border-indigo-300 dark:hover:border-indigo-700"
                        >
                            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{kw.text}</span>
                            <button
                                onClick={() => handleDelete(kw.id)}
                                className="text-indigo-400 hover:text-destructive transition-colors"
                                title="Delete keyword"
                            >
                                <Trash className="h-3 w-3" />
                            </button>
                        </div>
                    ))}
                    {keywords.length === 0 && (
                        <p className="text-sm text-muted-foreground italic w-full text-center py-4">
                            No global keywords yet. Add some common prompt sections to get started.
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
