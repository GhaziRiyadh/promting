import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from "next/server";
import { routing } from './i18n/routing';


import { getToken } from 'next-auth/jwt';

// Create the next-intl middleware
const intlMiddleware = createMiddleware(routing);

// Protected routes that require authentication
const protectedPaths = ['/dashboard', '/admin'];

export default async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    
    // Remove locale prefix to check if path is protected
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, '');
    const isProtectedPath = protectedPaths.some(path => pathWithoutLocale.startsWith(path));

    if (isProtectedPath) {
        // Try detecting token with default behavior
        let token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        
        // If not found, try forcing the secure cookie name
        if (!token) {
            token = await getToken({ 
                req, 
                secret: process.env.NEXTAUTH_SECRET,
                cookieName: '__Secure-next-auth.session-token'
            });
        }

        if (!token) {
            const locale = pathname.match(/^\/(en|ar)/)?.[1] || 'en';
            return NextResponse.redirect(new URL(`/${locale}/auth/login`, req.url));
        }

        // Admin route protection
        if (pathWithoutLocale.startsWith("/admin") && token.role !== "ADMIN") {
            const locale = pathname.match(/^\/(en|ar)/)?.[1] || 'en';
            return NextResponse.redirect(new URL(`/${locale}/dashboard`, req.url));
        }
    }

    // Otherwise, just use intl middleware
    return intlMiddleware(req);
}

export const config = {
    // Match all paths except static files and API routes
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
