import { Sidebar } from "@/components/layout/sidebar";
import { Navbar } from "@/components/layout/navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex flex-1">
                <aside className="hidden w-64 border-r bg-muted/40 md:block">
                    <Sidebar />
                </aside>
                <main className="flex w-full flex-1 flex-col overflow-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
