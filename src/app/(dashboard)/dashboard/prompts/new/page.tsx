import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";


export default async function NewPromptPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth/login");
    }

    const promptTypes = await prisma.promptType.findMany({
        where: { isActive: true },
    });

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Select a Template</h1>
                <p className="text-muted-foreground">
                    Choose a prompt type to start building.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {promptTypes.map((type) => (
                    <Card key={type.id} className="hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <CardTitle>{(type.name_i18n as any)?.en || type.key}</CardTitle>
                            <CardDescription className="line-clamp-2">
                                {(type.description_i18n as any)?.en || "No description provided."}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href={`/dashboard/builder/${type.id}`}>
                                    Select Template
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
