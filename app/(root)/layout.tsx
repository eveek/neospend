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
                <SidebarInset className="mt-6 mx-6 w-full flex flex-col">
                    <Header />
                    <main>
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        );
    }
