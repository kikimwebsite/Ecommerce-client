'use client'

import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "@/app/_components/ProductCard";
import { useProducts } from "@/app/_context/ProductContext";
import { Product } from "@/app/_lib/types";

interface Params {
    category: string;
}

const ProductsPage = ({ params }: { params: Promise<Params> }) => {
    const products: Product[] = useProducts();
    const { category } = React.use(params);

    const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
    const filteredProducts: Product[] =
        capitalizedCategory === "All"
            ? products
            : products.filter((product) => product.category === capitalizedCategory);

    return (
        <Grid container spacing={4}>
            {filteredProducts.map((product) => (
                <Grid size={{xs: 12, md: 12, lg: 4}} key={product.name}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductsPage;