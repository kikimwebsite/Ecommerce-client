import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
    return (
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Aketoy Demo
            </Typography>
            <nav>
                <Link href="/main">Main</Link>
                <Link href="/products">Products</Link>
                <Link href="/statistics">Statistics</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </Toolbar>
        </AppBar>
    );
};

export default Navbar;