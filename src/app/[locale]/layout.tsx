import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3002'),
    title: "Dynamic AI Prompt Builder | Create AI Prompts with Ease",
    description: "Generate and customize AI prompts in minutes without coding. Build powerful prompts with an intuitive interface, live preview, and easy management.",
    keywords: ["AI prompts", "prompt builder", "AI tools", "prompt generator", "no code AI"],
    authors: [{ name: "Dynamic AI Prompt Builder" }],
    creator: "Dynamic AI Prompt Builder",
    publisher: "Dynamic AI Prompt Builder",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://promptbuilder.app",
        title: "Dynamic AI Prompt Builder | Create AI Prompts with Ease",
        description: "Generate and customize AI prompts in minutes without coding. Build powerful prompts with an intuitive interface.",
        siteName: "Dynamic AI Prompt Builder",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Dynamic AI Prompt Builder",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dynamic AI Prompt Builder | Create AI Prompts with Ease",
        description: "Generate and customize AI prompts in minutes without coding.",
        images: ["/twitter-image.png"],
        creator: "@promptbuilder",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export function generateViewport() {
    return {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    };
}



export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} data-scroll-behavior="smooth">
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Providers>
                        {children}
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

