import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FileText, Plus } from "lucide-react";


export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

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
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Manage your saved prompts.
                    </p>
                </div>
                <Button asChild>
                    <Link href="/dashboard/prompts/new">
                        <Plus className="mr-2 h-4 w-4" />
                        New Prompt
                    </Link>
                </Button>
            </div>

            {prompts.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <FileText className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">No prompts created</h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground max-w-sm">
                        You haven't created any prompts yet. Start by creating a new one from a template.
                    </p>
                    <Button asChild>
                        <Link href="/dashboard/prompts/new">Create Prompt</Link>
                    </Button>
                </div>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {prompts.map((prompt) => (
                        <Card key={prompt.id} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{prompt.title}</CardTitle>
                                <CardDescription>
                                    {(prompt.promptType.name_i18n as any)?.en || prompt.promptType.key}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {prompt.finalPrompt}
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href={`/dashboard/prompts/${prompt.id}/edit`}>
                                        Edit
                                    </Link>
                                </Button>
                                <span className="text-xs text-muted-foreground">
                                    {new Date(prompt.updatedAt).toLocaleDateString()}
                                </span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
