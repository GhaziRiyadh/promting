'use client';

import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { Menu, X, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';

export function Header() {
    const t = useTranslations('Landing.nav');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session, status } = useSession();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <span className="text-lg font-bold">AI</span>
                    </div>
                    <span className="hidden font-bold sm:inline-block">
                        Prompt Builder
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:items-center md:gap-6">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        {t('home')}
                    </button>
                    <button
                        onClick={() => scrollToSection('features')}
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        {t('features')}
                    </button>
                    <button
                        onClick={() => scrollToSection('how-it-works')}
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        {t('howItWorks')}
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        {t('contact')}
                    </button>
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2">
                    <ModeToggle />

                    {status === 'loading' ? (
                        <Button variant="ghost" size="sm" className="hidden md:inline-flex" disabled>
                            <Loader2 className="h-4 w-4 animate-spin" />
                        </Button>
                    ) : session ? (
                        <Button asChild className="hidden md:inline-flex">
                            <Link href="/dashboard">Dashboard</Link>
                        </Button>
                    ) : (
                        <Button asChild className="hidden md:inline-flex">
                            <Link href="/auth/login">Sign In</Link>
                        </Button>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="border-t md:hidden">
                    <nav className="container flex flex-col space-y-4 py-4">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-sm font-medium transition-colors hover:text-primary text-left"
                        >
                            {t('home')}
                        </button>
                        <button
                            onClick={() => scrollToSection('features')}
                            className="text-sm font-medium transition-colors hover:text-primary text-left"
                        >
                            {t('features')}
                        </button>
                        <button
                            onClick={() => scrollToSection('how-it-works')}
                            className="text-sm font-medium transition-colors hover:text-primary text-left"
                        >
                            {t('howItWorks')}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-sm font-medium transition-colors hover:text-primary text-left"
                        >
                            {t('contact')}
                        </button>

                        {status === 'loading' ? (
                            <Button disabled className="w-full">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Loading...
                            </Button>
                        ) : session ? (
                            <Button asChild className="w-full">
                                <Link href="/dashboard">Dashboard</Link>
                            </Button>
                        ) : (
                            <Button asChild className="w-full">
                                <Link href="/auth/login">Sign In</Link>
                            </Button>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
}
