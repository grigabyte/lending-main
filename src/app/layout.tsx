import type { Metadata } from "next";
import "./globals.css";
import BackgroundVideo from "@/components/BackgroundVideo";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
    title: "NEUROCOOLA | AI & LLM Systems",
    description: "Постройка агентских и RAG систем. AI интеграция для бизнеса.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body>
                <BackgroundVideo />
                <CustomCursor />
                {children}
            </body>
        </html>
    );
}
