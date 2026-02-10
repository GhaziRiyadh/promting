import { useTranslations } from 'next-intl';
import { ModeToggle } from '@/components/mode-toggle';

export default function HomePage() {
    const t = useTranslations('Index');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
            <ModeToggle />
        </div>
    );
}
