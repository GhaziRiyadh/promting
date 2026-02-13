import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

export function CtaSection() {
    const t = useTranslations('Landing.cta');
    const { data: session, status } = useSession();

    return (
        <section className="py-16 md:py-24 bg-linear-to-br from-primary/10 via-primary/5 to-background px-4 md:px-6 lg:px-8">
            <div className="container mx-auto">

                <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-16">
                    {/* Background Decoration */}
                    <div className="absolute inset-0 bg-grid-white/10 mask-[linear-gradient(0deg,transparent,black)]" />
                    <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />

                    {/* Content */}
                    <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {t('title')}
                        </h2>
                        <p className="text-lg text-primary-foreground/90 md:text-xl">
                            {t('subtitle')}
                        </p>
                        <div className="flex justify-center pt-4">
                            {status === 'loading' ? (
                                <Button size="lg" variant="secondary" disabled>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Loading...
                                </Button>
                            ) : session ? (
                                <Button
                                    asChild
                                    size="lg"
                                    variant="secondary"
                                    className="text-base group shadow-lg"
                                >
                                    <Link href="/dashboard">
                                        Go to Dashboard
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            ) : (
                                <Button
                                    asChild
                                    size="lg"
                                    variant="secondary"
                                    className="text-base group shadow-lg"
                                >
                                    <Link href="/auth/register">
                                        {t('button')}
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
