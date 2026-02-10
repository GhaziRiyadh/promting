'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitted(true);
        setIsLoading(false);

        // Reset form
        setName('');
        setEmail('');
        setMessage('');

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

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

                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Have questions or feedback? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Email Us</h3>
                                    <p className="text-sm text-muted-foreground">support@promptbuilder.app</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Send us a message</CardTitle>
                            <CardDescription>
                                We'll respond within 24 hours
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {isSubmitted && (
                                <div className="mb-4 p-3 bg-primary/10 text-primary rounded-lg text-sm">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="How can we help you?"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        disabled={isLoading}
                                        rows={5}
                                    />
                                </div>
                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
