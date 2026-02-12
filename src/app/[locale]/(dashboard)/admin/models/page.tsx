"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Loader2, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

interface AIModel {
    id: string;
    name: string;
    providerId: string;
    modelId: string;
    isActive: boolean;
}

export default function AdminModelsPage() {
    const t = useTranslations('Admin');
    const [models, setModels] = useState<AIModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [syncing, setSyncing] = useState(false);

    const fetchModels = async () => {
        try {
            const res = await fetch('/api/admin/models');
            if (res.ok) {
                const data = await res.json();
                setModels(data.models || []);
            }
        } catch (e) {
            console.error(e);
            toast.error("Failed to fetch models");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchModels();
    }, []);

    const handleSync = async () => {
        setSyncing(true);
        try {
            const res = await fetch('/api/admin/models/sync', { method: 'POST' });
            if (res.ok) {
                const data = await res.json();
                setModels(data.models || []);
                toast.success("Models synced successfully");
            } else {
                toast.error("Failed to sync models");
            }
        } catch (e) {
            console.error(e);
            toast.error("Error syncing models");
        } finally {
            setSyncing(false);
        }
    };

    const toggleModel = async (id: string, currentState: boolean) => {
        // Optimistic update
        setModels(models.map(m => m.id === id ? { ...m, isActive: !currentState } : m));

        try {
            const res = await fetch(`/api/admin/models/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isActive: !currentState })
            });
            
            if (!res.ok) {
                // Revert if failed
                setModels(models.map(m => m.id === id ? { ...m, isActive: currentState } : m));
                toast.error("Failed to update model status");
            }
        } catch (e) {
            setModels(models.map(m => m.id === id ? { ...m, isActive: currentState } : m));
            toast.error("Error updating model");
        }
    };

    if (loading) return <div className="p-8 flex justify-center"><Loader2 className="animate-spin" /></div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">AI Models</h2>
                    <p className="text-muted-foreground">Manage available AI models for users.</p>
                </div>
                <Button onClick={handleSync} disabled={syncing}>
                    {syncing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
                    Resync Models
                </Button>
            </div>

            <div className="grid gap-4">
                {models.length === 0 ? (
                    <Card>
                        <CardContent className="py-8 text-center text-muted-foreground">
                            No models found. Click "Resync Models" to fetch from providers.
                        </CardContent>
                    </Card>
                ) : (
                    models.map((model) => (
                        <Card key={model.id} className="flex flex-row items-center justify-between p-4">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold">{model.name}</span>
                                    <Badge variant="outline" className="text-xs">{model.providerId}</Badge>
                                </div>
                                <span className="text-sm text-muted-foreground font-mono">{model.modelId}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">{model.isActive ? 'Active' : 'Inactive'}</span>
                                <Switch 
                                    checked={model.isActive} 
                                    onCheckedChange={() => toggleModel(model.id, model.isActive)} 
                                />
                            </div>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}
