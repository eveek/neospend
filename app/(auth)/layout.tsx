import Image from "next/image";

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
        return (
            <main className="flex h-[100vh] w-full">
                <div className="basis-1/2">{children}</div>
                <div className="basis-1/2 bg-primary hidden  p-10 pr-0 pb-0 lg:flex flex-col gap-10  overflow-hidden justify-between">
                    <div className="">
                        <Image
                            src="/images/logo-light.webp"
                            alt="Neo Spend Logo"
                            width={1000}
                            height={1000}
                            quality={100}
                            className="h-11 w-auto"
                        />
                    </div>
                    <div className="flex">
                        <Image
                            src="/images/auth-image.webp"
                            alt="Neo Dashboard"
                            width={1000}
                            height={1000}
                            quality={100}
                            className="w-4/5 ml-auto"
                        />
                    </div>
                </div>
            </main>
        );
    }
