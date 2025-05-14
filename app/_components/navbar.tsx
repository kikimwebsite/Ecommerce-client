import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <AppBar position="static">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
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
                                Aketoy Demo
                            </Typography>
                        </Box>
                    </Link>
                    <Box sx={{ display: "flex", gap: 2, mr: 10}}>
                        <Link href="/main">Main</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/statistics">Statistics</Link>
                        <Link href="/contact">Contact</Link>
                    </Box>


                </Toolbar>
            </AppBar>
        </nav>
    );
};

export default Navbar;