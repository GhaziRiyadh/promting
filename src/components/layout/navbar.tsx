"use client";

import * as React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Moon, Sun, User, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
    const { setTheme } = useTheme();
    const { data: session } = useSession();
    const locale = useLocale();
    const t = useTranslations("Navbar");
    const tIndex = useTranslations("Index");

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container flex h-14 items-center justify-between px-4">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="font-bold inline-block">
                            {tIndex('title')}
                        </span>
                    </Link>
                </div>

                <div className="flex items-center gap-2">
                    <nav className="flex items-center gap-1 sm:gap-2">
                        <Button variant="ghost" size="sm" asChild className="px-2 sm:px-3">
                            <Link href={locale === 'en' ? '/ar' : '/en'}>
                                {locale === 'en' ? 'AR' : 'EN'}
                            </Link>
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-9 w-9">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">{t('toggleTheme')}</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    {t('light')}
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    {t('dark')}
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    {t('system')}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {session ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-9 w-9">
                                        <User className="h-[1.2rem] w-[1.2rem]" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <div className="flex items-center justify-start gap-2 p-2 focus:outline-none">
                                        <div className="flex flex-col space-y-1 leading-none">
                                            {session.user?.name && (
                                                <p className="font-medium text-sm">{session.user.name}</p>
                                            )}
                                            {session.user?.email && (
                                                <p className="w-[180px] truncate text-xs text-muted-foreground">
                                                    {session.user.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <DropdownMenuItem asChild>
                                        <Link href="/dashboard">{t('dashboard')}</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={() => signOut()}>
                                        {t('signOut')}
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Button asChild variant="default" size="sm" className="h-8">
                                <Link href="/auth/login">{t('login')}</Link>
                            </Button>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}
