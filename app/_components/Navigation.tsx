'use client'

import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Switch } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { ThemeModeContext } from "@/app/_theme/ThemeProviderClient";

const SUN_YELLOW = "#FFD600";

const Navigation = () => {
    const { mode, toggleMode } = React.useContext(ThemeModeContext);

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
                            mt: 0.5,
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
                <Link href="/main">Main</Link>
                <Link href="/products">Products</Link>
                <Link href="/statistics">Statistics</Link>
                <Link href="/contacts">Contacts</Link>
            </Box>
            </Toolbar>
        </AppBar>
        </nav>
    );
};

export default Navigation;