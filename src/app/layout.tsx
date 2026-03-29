import type { Metadata, Viewport } from "next";
import "./globals.css";
import BackgroundVideo from "@/components/BackgroundVideo";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
    title: "ИИ-автоматизация для бизнеса | NEUROCOOLA",
    description: "Автоматизирую рутину бизнеса через ИИ. Чат-боты, базы знаний, интеграции. Верну вам 25+ часов в неделю. Бесплатная консультация.",
    keywords: ["ИИ автоматизация", "чат-бот для бизнеса", "AI интеграция", "автоматизация процессов", "RAG система"],
    authors: [{ name: "Григорий", url: "https://t.me/awake_g" }],
    creator: "NEUROCOOLA",
    openGraph: {
        type: "website",
        locale: "ru_RU",
        title: "ИИ-автоматизация для бизнеса | NEUROCOOLA",
        description: "Автоматизирую рутину бизнеса через ИИ. Верну вам 25+ часов в неделю.",
        siteName: "NEUROCOOLA",
    },
    twitter: {
        card: "summary_large_image",
        title: "ИИ-автоматизация для бизнеса | NEUROCOOLA",
        description: "Автоматизирую рутину бизнеса через ИИ. Верну вам 25+ часов в неделю.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#000000",
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
