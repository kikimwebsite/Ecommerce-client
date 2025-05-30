"use client";

import React from "react";
import { Grid, Skeleton } from "@mui/material";
import ProductCard from "@/app/_components/ProductCard";
import { useProducts } from "@/app/_context/ProductContext";
import { Product } from "@/app/_lib/types";

interface Params {
  category: string;
}

const ProductsPage: React.FC<{ params: Promise<Params> }> = ({ params }) => {
    const products: Product[] | undefined = useProducts();
    const { category } = React.use(params);

    const capitalizedCategory =
        category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
    const filteredProducts: Product[] =
        capitalizedCategory === "All"
        ? products || []
        : (products || []).filter(
            (product) => product.category === capitalizedCategory
            );

    return (
        <Grid container spacing={4}>
        {!products
            ? Array.from({ length: 3 }).map((_, idx) => (
                <Grid key={idx} size={{ xs: 12, lg: 4 }}>
                <Skeleton variant="rectangular" height={340} sx={{ borderRadius: 2 }} />
                <Skeleton width="60%" />
                <Skeleton width="40%" />
                </Grid>
            ))
            : filteredProducts.map((product) => (
                <Grid
                key={product.name}
                size={{ xs: 12, lg: 4 }}
                sx={{
                    transition: "transform 0.3s",
                    "&:hover": {
                    transform: "scale(1.05)",
                    },
                }}
                >
                <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductsPage;