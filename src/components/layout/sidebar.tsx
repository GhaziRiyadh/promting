"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, PlusCircle, Settings, LayoutDashboard, Shield } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

export function Sidebar() {
    const pathname = usePathname();
    const { data: session } = useSession();
    const t = useTranslations("Sidebar");

    const isAdmin = session?.user?.role === "ADMIN";

    return (
        <ScrollArea className="h-full py-6 pl-4 pr-6 rtl:pl-6 rtl:pr-4">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="space-y-1">
                        <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
                            {t('dashboard')}
                        </h2>
                        <Button
                            asChild
                            variant={pathname === "/dashboard" ? "secondary" : "ghost"}
                            className="w-full justify-start rtl:space-x-reverse"
                        >
                            <Link href="/dashboard">
                                <LayoutDashboard className="me-2 h-4 w-4" />
                                {t('overview')}
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant={pathname === "/dashboard/prompts/new" ? "secondary" : "ghost"}
                            className="w-full justify-start rtl:space-x-reverse"
                        >
                            <Link href="/dashboard/prompts/new">
                                <PlusCircle className="me-2 h-4 w-4" />
                                {t('newPrompt')}
                            </Link>
                        </Button>
                    </div>
                </div>

                {isAdmin && (
                    <div className="px-3 py-2">
                        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                            {t('admin')}
                        </h2>
                        <div className="space-y-1">
                            <Button
                                asChild
                                variant={pathname.startsWith("/admin") ? "secondary" : "ghost"}
                                className="w-full justify-start rtl:space-x-reverse"
                            >
                                <Link href="/admin">
                                    <Shield className="me-2 h-4 w-4" />
                                    {t('adminPanel')}
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </ScrollArea>
    );
}
