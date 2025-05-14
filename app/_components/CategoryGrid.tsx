import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { categories } from "@/app/_lib/constants";

const CategoryGrid: React.FC = () => {
    return (
            <Grid container spacing={5}             
                sx={{
                    maxWidth: "lg",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 5,
                }}
            >
                {categories.map((category) => (
                    <Grid key={category.name} size={{md:6, lg:4}}>
                        <Link href={category.href}>
                            <Box
                                sx={{
                                    position: "relative",
                                    width: "400px",
                                    height: "300px",
                                    borderRadius: "8px",
                                    backgroundImage: `url(${category.imageUrl})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    cursor: "pointer",
                                    transition: "transform 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                    border: "2px solid #e0e0e0",
                                    margin: "0 auto",
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        position: "absolute",
                                        top: "16px",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        color: "#fff",
                                        backgroundColor: "rgba(0, 0, 0, 0.2)", // semi-transparent black for readability
                                        padding: "8px 16px",
                                        borderRadius: "4px",
                                        textAlign: "center",
                                        width: "300px"
                                    }}
                                >
                                    {category.name}
                                </Typography>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
    );
};

export default CategoryGrid;