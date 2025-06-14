import SideBar from "@/components/side-bar";

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
        return (
            <div className="flex h-screen bg-background">
                <SideBar />
                <main>
                    {children}
                </main>
            </div>
        );
    }
