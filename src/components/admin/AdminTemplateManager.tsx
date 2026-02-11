'use client';

import React, { useState, useEffect } from 'react';
import { PromptType, PromptField } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Trash, Loader2 } from 'lucide-react';
import { TemplateForm } from './TemplateForm';

interface AdminTemplateManagerProps {
    locale: string;
}

export function AdminTemplateManager({ locale }: AdminTemplateManagerProps) {
    const [templates, setTemplates] = useState<(PromptType & { fields: PromptField[] })[]>([]);
    const [loading, setLoading] = useState(true);
    const [editTemplate, setEditTemplate] = useState<(PromptType & { fields: PromptField[] }) | null | undefined>(undefined);

    useEffect(() => {
        fetchTemplates();
    }, []);

    const fetchTemplates = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/prompt-types');
            if (res.ok) {
                const data = await res.json();
                setTemplates(data);
            }
        } catch (error) {
            console.error("Failed to fetch templates", error);
        } finally {
            setLoading(false);
        }
    };

    const toggleActive = async (template: PromptType) => {
        try {
            const res = await fetch(`/api/prompt-types/${template.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...template, isActive: !template.isActive })
            });
            if (res.ok) {
                fetchTemplates();
            }
        } catch (error) {
            console.error("Failed to toggle status", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this template?")) return;

        try {
            const res = await fetch(`/api/prompt-types/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                fetchTemplates();
            }
        } catch (error) {
            console.error("Failed to delete template", error);
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
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Prompt Templates</h2>
                <Button onClick={() => setEditTemplate(null)}>
                    <Plus className="mr-2 h-4 w-4" />
                    New Template
                </Button>
            </div>

            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Key</TableHead>
                            <TableHead>Name (EN)</TableHead>
                            <TableHead>Fields</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {templates.map((template) => (
                            <TableRow key={template.id}>
                                <TableCell className="font-medium">{template.key}</TableCell>
                                <TableCell>{(template.name_i18n as any)?.en || template.key}</TableCell>
                                <TableCell>{template.fields.length} fields</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Switch
                                            checked={template.isActive}
                                            onCheckedChange={() => toggleActive(template)}
                                        />
                                        <span className="text-sm">
                                            {template.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right flex justify-end gap-2">
                                    <Button variant="ghost" size="icon" onClick={() => setEditTemplate(template)}>
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleDelete(template.id)}>
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        {templates.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                                    No templates found. Create one to get started.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Card>

            {editTemplate !== undefined && (
                <TemplateForm
                    template={editTemplate}
                    locale={locale}
                    onClose={() => setEditTemplate(undefined)}
                    onSuccess={() => {
                        setEditTemplate(undefined);
                        fetchTemplates();
                    }}
                />
            )}
        </div>
    );
}
