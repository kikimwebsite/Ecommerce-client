'use client'

import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Switch } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactsIcon from "@mui/icons-material/Contacts";
import { ThemeModeContext } from "@/app/_theme/ThemeProviderClient";
import { usePathname } from "next/navigation";

const SUN_YELLOW = "#FFD600";

const Navigation = () => {
    const { mode, toggleMode } = React.useContext(ThemeModeContext);
    const pathname = usePathname();

    const navLinks = [
        { href: "/main", label: "Main", icon: <HomeIcon fontSize="small" sx={{ mr: 1 }} /> },
        { href: "/products", label: "Products", icon: <CategoryIcon fontSize="small" sx={{ mr: 1 }} /> },
        { href: "/admin", label: "Admin", icon: <BarChartIcon fontSize="small" sx={{ mr: 1 }} /> },
        { href: "/purchase", label: "Cart", icon: <ShoppingCartIcon fontSize="small" sx={{ mr: 1 }} /> },
        { href: "/contacts", label: "Contacts", icon: <ContactsIcon fontSize="small" sx={{ mr: 1 }} /> },
    ];

    return (
        <nav>
        <AppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link href="/main" style={{ textDecoration: "none", color: "inherit" }}>
                <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                        style={{ marginRight: "8px", marginBottom: "10px" }}
                    />
                    <Typography variant="h6" component="div">
                        Aketoy
                    </Typography>
                </Box>
                </Link>
                <Box sx={{ display: "flex", ml: 2 }}>
                    <IconButton
                    color="inherit"
                    onClick={toggleMode}
                    sx={{ ml: 1 }}
                    aria-label="toggle theme"
                    >
                    {mode === "light" ? (
                        <WbSunnyIcon sx={{ color: SUN_YELLOW }} />
                    ) : (
                        <NightlightIcon sx={{ color: SUN_YELLOW }} />
                    )}
                    </IconButton>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography
                        variant="caption"
                        sx={{ fontWeight: 600, position: "relative", top: 2 }}
                    >
                        {mode === "dark" ? "Light Off" : "Light On"}
                    </Typography>
                    <Switch
                        checked={mode === "light"}
                        onChange={toggleMode}
                        color="primary"
                        inputProps={{ "aria-label": "theme switch" }}
                        sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': {
                                color: SUN_YELLOW,
                            },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                backgroundColor: mode === "light" ? "#fff" : SUN_YELLOW,
                                opacity: 1,
                            },
                            '& .MuiSwitch-track': {
                                backgroundColor: mode === "dark" ? "#555" : "#bbb",
                                opacity: 1,
                            },
                        }}
                    />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mr: 10 }}>
                {navLinks.map(({ href, label, icon }) => {
                    return pathname.includes(href) ? (
                        <Box
                            key={href}
                            sx={{
                                px: 1,
                                py: 0.5,
                                borderBottom: `2px solid ${SUN_YELLOW}`,
                                fontWeight: 700,
                                color: SUN_YELLOW,
                                cursor: "default",
                                display: "inline-block",
                                opacity: 0.7,
                            }}
                        >
                            {icon}
                            {label}
                        </Box>
                    ) : (
                        <Link
                            key={href}
                            href={href}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <Box
                                sx={{
                                    px: 1,
                                    py: 0.5,
                                    borderBottom: "2px solid transparent",
                                    fontWeight: 600,
                                    "&:hover": {
                                        borderBottom: `2px solid ${SUN_YELLOW}`,
                                    },
                                    cursor: "pointer",
                                    display: "inline-block",
                                }}
                            >
                                {icon}
                                {label}
                            </Box>
                        </Link>
                    );
                })}
            </Box>
            </Toolbar>
        </AppBar>
        </nav>
    );
};

export default Navigation;