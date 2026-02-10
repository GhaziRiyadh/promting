import { notFound } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import { BuilderInterface } from '@/components/builder/builder-interface';

export const dynamic = 'force-dynamic';


const prisma = new PrismaClient();

interface PageProps {
    params: Promise<{
        typeId: string;
        locale: string;
    }>;
}

export default async function BuilderPage({ params }: PageProps) {
    const { typeId, locale } = await params;

    // Ideally, use a fetch function that caches or calls the DB directly since this is a server component
    const promptType = await prisma.promptType.findUnique({
        where: { id: typeId },
        include: { fields: true },
    });

    if (!promptType) {
        notFound();
    }

    return <BuilderInterface promptType={promptType} locale={locale} />;
}
