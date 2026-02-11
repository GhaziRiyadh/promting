import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


export default async function AdminPage() {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
        redirect("/dashboard");
    }

    const userCount = await prisma.user.count();
    const promptTypeCount = await prisma.promptType.count();
    const promptCount = await prisma.prompt.count();

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Admin Dashboard</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{userCount}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Templates</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{promptTypeCount}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Prompts Created</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{promptCount}</div>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Management</h2>
                <p className="text-muted-foreground">
                    Detailed management views for PromptTypes and Fields would go here.
                </p>
            </div>
        </div>
    );
}
