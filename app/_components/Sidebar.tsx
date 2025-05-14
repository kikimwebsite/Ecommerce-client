"use client";

import React from "react";
import { Box, Button } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

const categories = ["All", "Electronics", "Dolls", "Jewelry"];

const Sidebar: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleCategoryClick = (category: string) => {
        const route = `/products/${category.toLowerCase()}`;
        router.push(route);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px",  height: "100%", padding: "16px"}}>
        {categories.map((category) => {
            const isSelected = pathname === `/products/${category.toLowerCase()}`;
            return (
            <Button
                key={category}
                variant={isSelected ? "contained" : "outlined"}
                onClick={() => handleCategoryClick(category)}
            >
                {category}
            </Button>
            );
        })}
        </Box>
    );
};

export default Sidebar;