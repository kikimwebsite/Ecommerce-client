import React from "react";
import { Grid } from "@mui/material";
import Sidebar from "@/app/_components/Sidebar";

const ProductsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Grid container>
            <Grid size={{xs: 12, md: 4, lg: 3}} sx={{ borderRight: "1px solid #ddd", p: 5 }}>
                <Sidebar />
            </Grid>
            <Grid size={{xs: 12, md: 8, lg: 9}} sx={{ p: 16 }}>
                {children}
            </Grid>
        </Grid>
    );
};

export default ProductsLayout;