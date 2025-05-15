import type { Metadata } from "next";
import ThemeProviderClient from "@/app/_theme/ThemeProviderClient";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Navigation from "@/app/_components/Navigation";
import Box from "@mui/material/Box";

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
                        <Box
                            sx={{
                                minHeight: "100vh",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Navigation />
                            <Box component="main" sx={{ flex: 1 }}>
                                {children}
                            </Box>
                            <Box
                                component="footer"
                                sx={{
                                    height: 64,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bgcolor: "background.paper",
                                    borderTop: 1,
                                    borderColor: "divider",
                                }}
                            >
                                <p>© 2025 Aketoy Ecommerce Demo App</p>
                            </Box>
                        </Box>
                    </ThemeProviderClient>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}