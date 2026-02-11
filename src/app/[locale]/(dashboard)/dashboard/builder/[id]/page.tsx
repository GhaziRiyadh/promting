import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { BuilderInterface } from "@/components/builder/builder-interface";

interface BuilderPageProps {
    params: Promise<{
        id: string;
        locale: string;
    }>;
}

export default async function BuilderPage({ params }: BuilderPageProps) {
    const { id, locale } = await params;
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth/login");
    }

    const promptType = await prisma.promptType.findUnique({
        where: { id },
        include: {
            fields: {
                orderBy: {
                    order: 'asc'
                }
            }
        }
    });

    if (!promptType) {
        notFound();
    }

    return (
        <div className="container mx-auto py-6">
            <BuilderInterface promptType={promptType} locale={locale} />
        </div>
    );
}

