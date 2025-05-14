import type { Metadata } from "next";
import ThemeProviderClient from "@/app/_theme/ThemeProviderClient";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Navbar from "@/app/_components/Navbar";

export const metadata: Metadata = {
    title: "Ecommerce Demo App",
    description: "Ecommerce Demo Application",
    icons: [
        {
            rel: "icon",
            url: "/images/logo.svg",
        },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
            <AppRouterCacheProvider>
                <ThemeProviderClient>

                    <Navbar />
                    <main>{children}</main>

                </ThemeProviderClient>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}