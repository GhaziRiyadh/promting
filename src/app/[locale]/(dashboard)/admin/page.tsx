import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "@/i18n/routing";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AdminTemplateManager } from "@/components/admin/AdminTemplateManager";
import { GlobalKeywordManager } from "@/components/admin/GlobalKeywordManager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AdminPageProps {
    params: Promise<{
        locale: string;
    }>;
}

export default async function AdminPage({ params }: AdminPageProps) {
    const { locale } = await params;
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
        redirect({ href: "/dashboard", locale });
    }

    const userCount = await prisma.user.count();
    const promptTypeCount = await prisma.promptType.count();
    const promptCount = await prisma.prompt.count();

    return (
        <div className="container mx-auto py-10 px-4 space-y-10">
            <div>
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
            </div>

            <Tabs defaultValue="templates" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="templates">Prompt Templates</TabsTrigger>
                    <TabsTrigger value="keywords">Global Suggested Keywords</TabsTrigger>
                </TabsList>
                <TabsContent value="templates" className="space-y-6">
                    <AdminTemplateManager locale={locale} />
                </TabsContent>
                <TabsContent value="keywords">
                    <GlobalKeywordManager />
                </TabsContent>
            </Tabs>
        </div>
    );
}
