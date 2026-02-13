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
                {/* Desktop Sidebar */}
                <aside className="hidden w-64 border-r bg-muted/40 md:block">
                    <Sidebar />
                </aside>
                
                {/* Mobile Sidebar Trigger (Optional: integrated into Navbar or handled here) */}
                {/* Actually, it's better to verify if Navbar handles it or if I should add a wrapper here. 
                    The user said "sidebar for phone", verifying Navbar.tsx showed no trigger.
                    I will add a mobile header or similar if Navbar is generic.
                    However, Navbar is sticky top-0. I can add the Sheet trigger there or just use this layout.
                    Let's modify this layout to include a mobile-only header part or just render the Sheet here but Trigger needs to be visible.
                    
                    Wait, if I put the trigger here, it might be below the Navbar.
                    
                    A common pattern:
                    Navbar (global)
                    [Mobile Sidebar Trigger - visible md:hidden]
                    Content
                */}

                <main className="flex w-full flex-1 flex-col overflow-hidden">
                    {/* Mobile Sidebar Sheet - We can put a small strip below navbar for mobile only or integrate into navbar.
                        Since Navbar is shared, editing Navbar to include dashboard-specific trigger might be complex if it's used elsewhere.
                        But Navbar logic checks for session.
                        
                        Let's add a small mobile-only bar here for now or check if we can add it to Navbar.
                        Actually, I can add a sheet trigger in this layout that is positioned absolute or sticky on mobile?
                        
                        Better approach: Add a MobileSidebar component that renders the trigger and the sheet.
                    */}
                     <div className="md:hidden p-4 border-b flex items-center">
                        <MobileSidebar />
                    </div>
                    {children}
                </main>
            </div>
        </div>
    );
}

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

function MobileSidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}
