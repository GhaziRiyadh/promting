'use client';

import { useTranslations } from 'next-intl';
import { Code2, Sparkles, Eye, Save, Download } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
    { icon: Code2, key: 'noCoding' },
    { icon: Sparkles, key: 'simpleUI' },
    { icon: Eye, key: 'livePreview' },
    { icon: Save, key: 'saveManage' },
    { icon: Download, key: 'download' },
];

export function Features() {
    const t = useTranslations('Landing.features');

    return (
        <section id="features" className="py-16 md:py-24 bg-muted/50 px-4 md:px-6 lg:px-8">
            <div className="container">

                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {t('title')}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
                        {t('description')}
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={feature.key}
                                className="relative overflow-hidden transition-all hover:shadow-lg hover:scale-105 duration-300"
                            >
                                <CardHeader>
                                    <div className="mb-4 rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">
                                        {t(`${feature.key}.title`)}
                                    </CardTitle>
                                    <CardDescription className="text-base">
                                        {t(`${feature.key}.description`)}
                                    </CardDescription>
                                </CardHeader>
                                <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
