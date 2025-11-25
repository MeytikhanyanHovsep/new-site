import type { Metadata } from "next";
import "./globals.css";
import Components from "@/components";
import MangoWidget from "@/components/mangoWidget";

export const metadata: Metadata = {
    title: "Уничтожение насекомых от 700₽",
    description: "Уничтожение насекомых от 700₽",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Components>{children}</Components>
                <MangoWidget />
            </body>
        </html>
    );
}
