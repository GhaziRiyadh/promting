import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FileText, Plus } from "lucide-react";
import { getTranslations } from "next-intl/server";


export default async function DashboardPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    const session = await getServerSession(authOptions);
    const t = await getTranslations("Dashboard");

    if (!session) {
        redirect("/auth/login");
    }

    const prompts = await prisma.prompt.findMany({
        where: {
            userId: session.user.id,
        },
        include: {
            promptType: true,
        },
        orderBy: {
            updatedAt: "desc",
        },
    });

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
                    <p className="text-muted-foreground">
                        {t('manage')}
                    </p>
                </div>
                <Button asChild className="w-full sm:w-auto">
                    <Link href="/dashboard/prompts/new">
                        <Plus className="me-2 h-4 w-4" />
                        {t('newPrompt')}
                    </Link>
                </Button>
            </div>

            {prompts.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <FileText className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{t('noPrompts')}</h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground max-w-sm">
                        {t('noPromptsDesc')}
                    </p>
                    <Button asChild>
                        <Link href="/dashboard/prompts/new">{t('createPrompt')}</Link>
                    </Button>
                </div>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {prompts.map((prompt) => (
                        <Card key={prompt.id} className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="truncate">{prompt.title}</CardTitle>
                                <CardDescription>
                                    {(prompt.promptType.name_i18n as any)?.[locale] || (prompt.promptType.name_i18n as any)?.en || prompt.promptType.key}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-sm text-muted-foreground line-clamp-3 h-18">
                                    {prompt.finalPrompt}
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center border-t py-4">
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href={`/dashboard/prompts/${prompt.id}/edit`}>
                                        {t('edit')}
                                    </Link>
                                </Button>
                                <span className="text-xs text-muted-foreground italic">
                                    {new Date(prompt.updatedAt).toLocaleDateString(locale, {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
