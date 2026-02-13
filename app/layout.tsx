import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";
import {GoogleTagManager} from '@next/third-parties/google';
import {appData} from "@/data/mainData";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    variable: "--font-montserrat",
});

// SEO ve Sosyal Medya İçin Metadata
export const metadata: Metadata = {
    title: "Türkiye earthquake Damage Stats | Interactive Visualization | 06.02.2023 Maras Earthquake",
    verification: {
        google: "I-l-DgFICLt9uB2dN6lyPqq4xaksDxQnXHeVld4FqYE",
    },
    description: "Interactive visualization and statistical analysis of earthquake damage in Turkey. Data-driven insights into structural impacts and supervised building reports.",
    keywords: ["Turkey Earthquake", "Earthquake Stats", "Seismic Data Visualization", "Building Damage Reports", "Interactive Map"],
    authors: [{ name: "ts.junior" }],
    robots: "index, follow",
    openGraph: {
        title: "06.02.2023 Türkiye Earthquake Damage Stats",
        description: "Interactive visualization of seismic damage data.",
        url: "https://seismolab.vercel.app/",
        siteName: "EarthquakeStats",
        images: [
            {
                url: "/og-image.jpg",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Türkiye Earthquake Damage Stats",
        description: "Visualizing earthquake damage data with interactive maps.",
        images: ["/og-image.jpg"],
    },
};

// Mobil uyumluluk için Viewport ayarı
export const viewport: Viewport = {
    themeColor: "#000000",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <title>Türkiye earthquake Damage Stats | Interactive Visualization | 06.02.2023 Maras Earthquake</title>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'analytics_storage': 'granted'
               });`,}}/>
            <GoogleTagManager gtmId={appData.googleTagId} />
        </head>
        <body className={`${montserrat.className} antialiased bg-gray-50`}>
        <I18nProvider>
            {children}
        </I18nProvider>
        </body>
        </html>
    );
}