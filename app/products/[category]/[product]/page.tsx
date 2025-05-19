'use client'

import React, { useState } from "react";
import { Grid, Typography, Button, Snackbar, Alert, Box } from "@mui/material";
import { useProducts } from "@/app/_context/ProductContext";
import { CartItem, Product } from "@/app/_lib/types";
import Image from "next/image";
import { LOCAL_CART_KEY } from "@/app/_lib/constants";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";

interface Params {
    product: string;
}

const ProductDetailsPage: React.FC<{ params: Promise<Params> }> = ({ params }) => {
    const products: Product[] = useProducts();
    const { product } = React.use(params);
    const router = useRouter();

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const decodedProduct = decodeURIComponent(product);

    const foundProduct: Product | undefined = products.find(
        (p) => p.name.toLowerCase() === decodedProduct.toLowerCase()
    );

    if (!foundProduct) {
        return <Typography variant="h6">Product not found</Typography>;
    }

    const handleAddToCart = () => {
        const localCart = JSON.parse(localStorage.getItem(LOCAL_CART_KEY) || "[]");
        const existing = localCart.find((item: CartItem) => item.product.id === foundProduct.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            localCart.push({ product: foundProduct, quantity: 1 });
        }
        localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(localCart));
        window.dispatchEvent(new Event("localAkeToyCartUpdated"));
        setSnackbarOpen(true);
    };

    return (
        <Box sx={{ mt: { xs: 0, lg: -5 } }}>
            <Button
                startIcon={<ArrowBackIosNewIcon />}
                onClick={() => router.back()}
                sx={{
                    mb: 2,
                    ml: { xs: 0, lg: "calc(58.3333%)" }
                }}
            >
                Back
            </Button>
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
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </Button>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={2000}
                    onClose={() => setSnackbarOpen(false)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                    <Alert severity="success" onClose={() => setSnackbarOpen(false)} sx={{ width: '100%', fontSize: 17 }}>
                        Added to cart!
                    </Alert>
                </Snackbar>
            </Grid>
        </Grid>
        </Box>
    );
};

export default ProductDetailsPage;