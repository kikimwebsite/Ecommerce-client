'use client'

import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useProducts } from "@/app/_context/ProductContext";
import { CartItem, Product } from "@/app/_lib/types";
import Image from "next/image";

interface Params {
    product: string;
}

const ProductDetailsPage: React.FC<{ params: Promise<Params> }> = ({ params }) => {
    const products: Product[] = useProducts();
    const { product } = React.use(params);

    const decodedProduct = decodeURIComponent(product);

    const foundProduct: Product | undefined = products.find(
        (p) => p.name.toLowerCase() === decodedProduct.toLowerCase()
    );

    if (!foundProduct) {
        return <Typography variant="h6">Product not found</Typography>;
    }

    return (
        <Grid container spacing={4} alignItems="flex-start">
            <Grid size={{ xs: 12, lg: 7 }}>
                <Image
                    src={foundProduct.img}
                    alt={foundProduct.name}
                    width={600}
                    height={340}
                    style={{ width: "100%", height: "auto", borderRadius: "8px", objectFit: "cover" }}
                />
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h4">{foundProduct.name}</Typography>
                <Typography variant="subtitle1">Category: {foundProduct.category}</Typography>
                <Typography variant="h5" color="primary">
                    ${foundProduct.price}
                </Typography>
                <Typography variant="body1">{foundProduct.description}</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        const localCart = JSON.parse(localStorage.getItem("localAkeToyCart") || "[]");
                        const existing = localCart.find((item: CartItem) => item.product.id === foundProduct.id);
                        if (existing) {
                            existing.quantity += 1;
                        } else {
                            localCart.push({ product: foundProduct, quantity: 1 });
                        }
                        localStorage.setItem("localAkeToyCart", JSON.stringify(localCart));
                        window.dispatchEvent(new Event("localAkeToyCartUpdated"));
                    }}
                >
                    Add to localCart
                </Button>
            </Grid>
        </Grid>
    );
};

export default ProductDetailsPage;