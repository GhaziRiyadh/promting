
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

async function getUserCount() {
    try {
        const count = await prisma.user.count();
        // Return a realistic baseline if count is low (< 100) to avoid showing "Join 5 users"
        // But for now, user asked for "real data", so I will return real data.
        return count;
    } catch (error) {
        console.error('Failed to fetch user count:', error);
        return 0;
    }
}

export default async function HomePage({ params }: PageProps) {
    const { locale } = await params;
    const heroContent = await getLandingContent(locale);
    const userCount = await getUserCount();

    return <LandingPageClient heroContent={heroContent} userCount={userCount} />;
}
