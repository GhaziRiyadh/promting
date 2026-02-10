import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container max-w-4xl py-12">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>

                <article className="prose prose-gray dark:prose-invert max-w-none">
                    <h1 className="text-4xl font-bold tracking-tight mb-6">Privacy Policy</h1>

                    <p className="text-sm text-muted-foreground mb-8">
                        Last updated: February 10, 2026
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                        <p className="text-muted-foreground">
                            Dynamic AI Prompt Builder ("we", "our", or "us") is committed to protecting your privacy.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                            when you use our application.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                        <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                        <p className="text-muted-foreground mb-4">
                            We may collect personal information that you provide directly to us, including:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>Name and email address</li>
                            <li>Account credentials</li>
                            <li>Prompts and content you create</li>
                            <li>Communication preferences</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                        <p className="text-muted-foreground mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>Provide and maintain our service</li>
                            <li>Improve and personalize your experience</li>
                            <li>Communicate with you about updates and features</li>
                            <li>Ensure the security of our platform</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                        <p className="text-muted-foreground">
                            We implement appropriate technical and organizational security measures to protect your
                            personal information. However, no method of transmission over the internet is 100% secure,
                            and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                        <p className="text-muted-foreground mb-4">
                            You have the right to:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>Access your personal data</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Export your data</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Cookies</h2>
                        <p className="text-muted-foreground">
                            We use cookies and similar tracking technologies to track activity on our service and
                            hold certain information. You can instruct your browser to refuse all cookies or to
                            indicate when a cookie is being sent.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                        <p className="text-muted-foreground">
                            We may update our Privacy Policy from time to time. We will notify you of any changes
                            by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="text-muted-foreground">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="text-muted-foreground mt-2">
                            Email: privacy@promptbuilder.app
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
}
