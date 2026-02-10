"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, PlusCircle, Settings, LayoutDashboard, Shield } from "lucide-react";
import { useSession } from "next-auth/react";

export function Sidebar() {
    const pathname = usePathname();
    const { data: session } = useSession();

    const isAdmin = session?.user?.role === "ADMIN";

    return (
        <ScrollArea className="h-full py-6 pl-4 pr-6">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="space-y-1">
                        <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
                            Dashboard
                        </h2>
                        <Button
                            asChild
                            variant={pathname === "/dashboard" ? "secondary" : "ghost"}
                            className="w-full justify-start"
                        >
                            <Link href="/dashboard">
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                Overview
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant={pathname === "/dashboard/prompts/new" ? "secondary" : "ghost"}
                            className="w-full justify-start"
                        >
                            <Link href="/dashboard/prompts/new">
                                <PlusCircle className="mr-2 h-4 w-4" />
                                New Prompt
                            </Link>
                        </Button>
                    </div>
                </div>

                {isAdmin && (
                    <div className="px-3 py-2">
                        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                            Admin
                        </h2>
                        <div className="space-y-1">
                            <Button
                                asChild
                                variant={pathname.startsWith("/admin") ? "secondary" : "ghost"}
                                className="w-full justify-start"
                            >
                                <Link href="/admin">
                                    <Shield className="mr-2 h-4 w-4" />
                                    Admin Panel
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </ScrollArea>
    );
}
