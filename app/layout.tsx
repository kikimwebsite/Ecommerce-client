import type { Metadata } from "next";
import ThemeProviderClient from "@/app/_theme/ThemeProviderClient";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Navigation from "@/app/_components/Navigation";

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

                    <Navigation />
                    <main>{children}</main>
                    <footer>
                        <p>© 2025 Aketoy Ecommerce Demo App</p>
                    </footer>
                </ThemeProviderClient>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}