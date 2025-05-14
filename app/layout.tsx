import type { Metadata } from "next";
import Navbar from "@/app/_components/Navbar";
import { CssBaseline } from "@mui/material";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head />
            <body>
            <AppRouterCacheProvider>
                    <CssBaseline />
                    <Navbar />
                    <main>{children}</main>
                    </AppRouterCacheProvider>
            </body>
        </html>
    );
};

export default RootLayout;