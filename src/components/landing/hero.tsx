'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
    const t = useTranslations('Landing.hero');

    const scrollToFeatures = () => {
        const element = document.getElementById('features');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="pt-20 pb-16 md:pt-32 md:pb-24">
            <div className="container">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="flex flex-col space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary/10 text-primary">
                                <Sparkles className="mr-1 h-3 w-3" />
                                AI-Powered Prompt Builder
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                {t('headline')}
                            </h1>
                            <p className="text-lg text-muted-foreground sm:text-xl max-w-[600px]">
                                {t('subheadline')}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button asChild size="lg" className="text-base group">
                                <Link href="/auth/register">
                                    {t('ctaPrimary')}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button
                                onClick={scrollToFeatures}
                                variant="outline"
                                size="lg"
                                className="text-base"
                            >
                                {t('ctaSecondary')}
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <div className="h-8 w-8 rounded-full bg-primary/20 border-2 border-background" />
                                    <div className="h-8 w-8 rounded-full bg-primary/40 border-2 border-background" />
                                    <div className="h-8 w-8 rounded-full bg-primary/60 border-2 border-background" />
                                </div>
                                <span>Join 1,000+ users</span>
                            </div>
                        </div>
                    </div>
                    {/* Right Column - Hero Image */}
                    <div className="relative lg:block">
                        <div className="relative aspect-square w-full max-w-[600px] mx-auto">
                            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
                            <div className="relative rounded-2xl border bg-card p-8 shadow-2xl backdrop-blur">
                                <div className="space-y-4">
                                    <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
                                    <div className="h-4 w-full rounded bg-muted animate-pulse" />
                                    <div className="h-4 w-5/6 rounded bg-muted animate-pulse" />
                                    <div className="mt-8 space-y-3">
                                        <div className="h-12 w-full rounded-lg bg-primary/10" />
                                        <div className="h-12 w-full rounded-lg bg-primary/10" />
                                        <div className="h-12 w-full rounded-lg bg-primary/10" />
                                    </div>
                                    <div className="mt-6 flex gap-2">
                                        <div className="h-10 flex-1 rounded-lg bg-primary" />
                                        <div className="h-10 w-20 rounded-lg bg-muted" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
