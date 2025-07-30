// import AppSide from "@/components/side-bar";
import AppSidebar from "@/components/side-bar";
import Header from "@/components/header";
import {
    SidebarInset,
    SidebarProvider,
    // SidebarTrigger,
  } from "@/components/ui/sidebar"

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
        return (
            <SidebarProvider className="flex flex-r h-screen bg-background">
                <AppSidebar />
                <SidebarInset className="pt-5 overflow-y-hidden mx-3 w-full flex-1 flex flex-col">
                    <Header />
                    <main className="flex-1 overflow-auto pt-5">
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        );
    }
