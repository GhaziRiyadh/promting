import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
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
                    <h1 className="text-4xl font-bold tracking-tight mb-6">About Dynamic AI Prompt Builder</h1>

                    <p className="text-lg text-muted-foreground mb-8">
                        Welcome to Dynamic AI Prompt Builder - your go-to platform for creating powerful AI prompts without any coding knowledge.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-muted-foreground">
                            We believe that everyone should have access to powerful AI tools, regardless of their technical background.
                            Our mission is to democratize AI prompt engineering by providing an intuitive, user-friendly interface
                            that makes creating sophisticated prompts as easy as filling out a form.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span><strong>No Coding Required:</strong> Build complex prompts with our visual interface</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span><strong>Live Preview:</strong> See your prompts in real-time as you build them</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span><strong>Template Library:</strong> Start with pre-built templates and customize them to your needs</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span><strong>Easy Management:</strong> Save, organize, and export all your prompts</span>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                        <p className="text-muted-foreground">
                            We're a team of AI enthusiasts, developers, and designers passionate about making AI technology
                            accessible to everyone. Our diverse backgrounds help us create tools that are both powerful and
                            easy to use.
                        </p>
                    </section>

                    <div className="mt-12 p-6 bg-muted rounded-lg">
                        <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
                        <p className="text-muted-foreground mb-4">
                            Join thousands of users creating amazing AI prompts today.
                        </p>
                        <Button asChild>
                            <Link href="/auth/register">Create Free Account</Link>
                        </Button>
                    </div>
                </article>
            </div>
        </div>
    );
}
