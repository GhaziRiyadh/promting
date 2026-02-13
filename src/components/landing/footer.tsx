'use client';

import { useTranslations } from 'next-intl';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    const t = useTranslations('Landing');

    return (
        <footer id="contact" className="border-t bg-muted/50 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto py-12 md:py-16 px-4 md:px-6">

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                <span className="text-lg font-bold">AI</span>
                            </div>
                            <span className="font-bold">Prompt Builder</span>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            {t('footer.brandDescription')}
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">{t('footer.product')}</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <button
                                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {t('nav.features')}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {t('nav.howItWorks')}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">{t('footer.company')}</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {t('footer.about')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {t('footer.contact')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {t('footer.privacy')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">{t('footer.connect')}</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/GhaziRiyadh/promting"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
}
