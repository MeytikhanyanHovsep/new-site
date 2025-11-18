import type { Metadata } from "next";
import "./globals.css";
import Components from "@/components";

export const metadata: Metadata = {
    title: "Уничтожение насекомых от 700₽",
    description: "Уничтожение насекомых от 700₽",
    icons: {
        icon: "/icons/logo.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`  `}>
                <Components>{children}</Components>
            </body>
        </html>
    );
}
