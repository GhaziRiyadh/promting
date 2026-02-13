import createMiddleware from 'next-intl/middleware';
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from './i18n/routing';

// Create the next-intl middleware
const intlMiddleware = createMiddleware(routing);

// Protected routes that require authentication
const protectedPaths = ['/dashboard', '/admin'];

const authMiddleware = withAuth(
    function middleware(req) {
        // Admin route protection
        const pathname = req.nextUrl.pathname;
        // Remove locale prefix to check the actual path
        const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, '');

        if (pathWithoutLocale.startsWith("/admin") && req.nextauth.token?.role !== "ADMIN") {
            // Redirect to dashboard with locale
            const locale = pathname.match(/^\/(en|ar)/)?.[1] || 'en';
            return NextResponse.redirect(new URL(`/${locale}/dashboard`, req.url));
        }

        return intlMiddleware(req as unknown as NextRequest);
    },
    {
        callbacks: {
            authorized: ({ req, token }) => {
                const path = req.nextUrl.pathname;
                console.log(`[Middleware] Path: ${path}`);
                console.log(`[Middleware] Token Found: ${!!token}`);
                if (token) {
                    console.log(`[Middleware] Token Role: ${token.role}`);
                    console.log(`[Middleware] Token Expiry: ${token.exp}`);
                    return true;
                } else {
                    console.log(`[Middleware] No token found. Cookies:`, req.cookies.getAll().map(c => c.name).join(', '));
                    return false;
                }
            },
        },
        secret: process.env.NEXTAUTH_SECRET,
    }
);

export default function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    // Remove locale prefix to check if path is protected
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, '');
    const isProtectedPath = protectedPaths.some(path => pathWithoutLocale.startsWith(path));

    // If it's a protected path, use auth middleware (which also runs intl middleware)
    if (isProtectedPath) {
        return (authMiddleware as any)(req);
    }

    // Otherwise, just use intl middleware
    return intlMiddleware(req);
}

export const config = {
    // Match all paths except static files and API routes
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
