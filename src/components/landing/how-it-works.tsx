'use client';

import { useTranslations } from 'next-intl';
import { FileText, Edit3, CheckCircle2 } from 'lucide-react';

const steps = [
    { icon: FileText, key: 'step1', number: 1 },
    { icon: Edit3, key: 'step2', number: 2 },
    { icon: CheckCircle2, key: 'step3', number: 3 },
];

export function HowItWorks() {
    const t = useTranslations('Landing.howItWorks');

    return (
        <section id="how-it-works" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
            <div className="container">

                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {t('title')}
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3 relative">
                    {/* Connecting Line - Hidden on mobile */}
                    <div className="hidden md:block absolute top-16 left-[16.666%] right-[16.666%] h-0.5 bg-border" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.key}
                                className="relative flex flex-col items-center text-center space-y-4"
                            >
                                {/* Step Number Circle */}
                                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-lg">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Icon className="h-8 w-8 text-primary" />
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">
                                        {t(`${step.key}.title`)}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {t(`${step.key}.description`)}
                                    </p>
                                </div>

                                {/* Connecting Arrow - Mobile only */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden h-12 w-0.5 bg-border" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
