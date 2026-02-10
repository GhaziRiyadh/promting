import { routing } from './i18n/routing';

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function NotFound() {
    return (
        <html>
            <body>
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                </div>
            </body>
        </html>
    );
}
