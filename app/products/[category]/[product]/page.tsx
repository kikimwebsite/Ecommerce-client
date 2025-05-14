'use client'

import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useProducts } from "@/app/_context/ProductContext";
import { Product } from "@/app/_lib/types";

interface Params {
    product: string;
}

const ProductDetailsPage = ({ params }: { params: Promise<Params> }) => {
    const products: Product[] = useProducts();
    const { product } = React.use(params);

    const decodedProduct = decodeURIComponent(product);

    const foundProduct = products.find(
        (p) => p.name.toLowerCase() === decodedProduct.toLowerCase()
    );

    if (!foundProduct) {
        return <Typography variant="h6">Product not found</Typography>;
    }

    return (
        <Grid container spacing={4} alignItems="flex-start">
            <Grid size={{ xs: 12, lg: 7 }}>
                <img
                    src={foundProduct.img}
                    alt={foundProduct.name}
                    style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h4">{foundProduct.name}</Typography>
                <Typography variant="subtitle1">Category: {foundProduct.category}</Typography>
                <Typography variant="h5" color="primary">
                    ${foundProduct.price}
                </Typography>
                <Typography variant="body1">{foundProduct.description}</Typography>
                <Button variant="contained" color="primary">
                    Add to Cart
                </Button>
            </Grid>
        </Grid>
    );
};

export default ProductDetailsPage;