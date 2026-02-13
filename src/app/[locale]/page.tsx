
import { prisma } from '@/lib/prisma';
import LandingPageClient from '@/components/landing/landing-page-client';

async function getLandingContent(locale: string) {
    try {
        const contents = await prisma.landingContent.findMany({
            where: { section: 'hero', isActive: true },
        });

        const heroContent: any = {};
        contents.forEach(item => {
            const content: any = item.content;
            if (content && (content[locale] || content['en'])) {
                heroContent[item.key] = content[locale] || content['en'];
            }
        });

        return heroContent;
    } catch (error) {
        console.error('Failed to fetch landing content:', error);
        return null;
    }
}

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
    const { locale } = await params;
    const heroContent = await getLandingContent(locale);

    return <LandingPageClient heroContent={heroContent} />;
}
