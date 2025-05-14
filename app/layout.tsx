import type { Metadata } from "next";
import Navbar from "@/app/_components/navbar";
import { CssBaseline } from "@mui/material";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ecommerce Demo App",
    description: "Ecommerce Demo Application",
    icons: [
        {
            rel: "icon",
            url: "/favicon.svg",
        },
    ]
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <html lang="en">
        <head>
          <title>E-commerce Demo</title>
        </head>
        <body>
          <CssBaseline />
          <Navbar />
          <main className="mx-auto">{children}</main>
        </body>
      </html>
    );
  };
  
  export default RootLayout;