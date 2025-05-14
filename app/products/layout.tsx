import React from "react";
import { Grid, Box } from "@mui/material";
import Sidebar from "@/app/_components/Sidebar";

const ProductsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Grid container>
            <Grid
                size={{ xs: 12, md: 4, lg: 3 }}
                sx={{
                    mt: 5,
                    p: 2,
                    position: { md: "sticky", xs: "static" },
                    top: { md: 32, xs: "auto" }, // 32px ≈ mt:5
                    alignSelf: "flex-start",
                    height: "fit-content",
                    zIndex: 1,
                }}
            >
                <Box>
                    <Sidebar />
                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 8, lg: 9 }} sx={{ p: 10 }}>
                {children}
            </Grid>
        </Grid>
    );
};

export default ProductsLayout;