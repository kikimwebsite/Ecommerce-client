'use client'

import React, { useEffect, useState } from "react";
import { Grid, List, ListItem, ListItemAvatar, Avatar, Typography, IconButton, Divider, Card, CardContent, CardActions, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { CartItem } from "@/app/_lib/types";
import { LOCAL_CART_KEY } from "@/app/_lib/constants";
import Link from "next/link";

const Purchase: React.FC = () => {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_CART_KEY);
        setCart(JSON.parse(stored || "[]"));
    }, []);

    const changeQuantity= (id: string, change: number) => {
        let updatedCart = [...cart];
        const idx = updatedCart.findIndex((item) => item.product.id === id);
        if (idx !== -1) {
            updatedCart[idx].quantity += change;
            if (updatedCart[idx].quantity <= 0) {
                updatedCart = updatedCart.filter((item) => item.product.id !== id);
            }
            setCart(updatedCart);
            localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(updatedCart));
        }
    };

    const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid size={{xs:12, lg:8}}>
                <List sx={{ px: 2 }}>
                    {cart.map((item, idx) => (
                        <React.Fragment key={item.product.id}>
                            <ListItem alignItems="flex-start" sx={{ p: 2, alignItems: "center" }}>
                                <ListItemAvatar>
                                    <Link
                                        href={`/products/${encodeURIComponent(item.product.category.toLowerCase())}/${encodeURIComponent(item.product.name.toLowerCase())}`}
                                    >
                                        <Avatar
                                            src={item.product.img}
                                            alt={item.product.name}
                                            variant="rounded"
                                            sx={{ width: 128, height: 128, mr: 2, cursor: "pointer", 
                                                transition: "transform 0.3s",
                                                "&:hover": {
                                                    transform: "scale(1.05)",
                                                },
                                                border: "1px solid #e0e0e0",
                                            }}
                                        />
                                    </Link>
                                </ListItemAvatar>
                                <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <Typography fontWeight={600}>{item.product.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ${item.product.price.toFixed(2)}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mx: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <IconButton size="small" color="primary" onClick={() => changeQuantity(item.product.id, 1)}>
                                            <AddIcon fontSize="small" />
                                        </IconButton>
                                        <Typography>{item.quantity}</Typography>
                                        <IconButton size="small" color="primary" onClick={() => changeQuantity(item.product.id, -1)}>
                                            <RemoveIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                    
                                    <Link href={`/products/${encodeURIComponent(item.product.category.toLowerCase())}/${encodeURIComponent(item.product.name.toLowerCase())}`}>
                                        <IconButton color="info" aria-label="details">
                                            <SearchIcon fontSize="medium" />
                                        </IconButton>
                                    </Link>
                                        <IconButton
                                            color="error"
                                            aria-label="remove from cart"
                                            onClick={() => {
                                                let localCart = JSON.parse(localStorage.getItem(LOCAL_CART_KEY) || "[]");
                                                localCart = localCart.filter((i: CartItem) => i.product.id !== item.product.id);
                                                localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(localCart));
                                                setCart([...localCart]);
                                            }}
                                        >
                                            <CloseIcon fontSize="medium" />
                                        </IconButton>

                                    <Box sx={{ ml: "auto", minWidth: 100, textAlign: "right" }}>
                                        <Typography fontWeight={600}>
                                            ${(item.product.price * item.quantity).toFixed(2)}
                                        </Typography>
                                    </Box>
                                </Box>
                            </ListItem>
                            {idx < cart.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                    {cart.length === 0 && (
                        <ListItem>
                            <Typography color="text.secondary">Your cart is empty.</Typography>
                        </ListItem>
                    )}
                </List>
            </Grid>
            <Grid
                size={{xs:12, lg:4}}
                sx={{
                    position: { lg: "sticky", xs: "static" },
                    top: { lg: 32, xs: "auto" },
                    alignSelf: "flex-start",
                }}
            >
                <Card>
                    <CardContent>
                        <Typography variant="h6" fontWeight={700} sx={{ m: 2 }}>
                            Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"}): ${subtotal.toFixed(2)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            color="success"
                            fullWidth
                            disabled={cart.length === 0}
                            sx={{ maxWidth: 300, mx: "auto", mb: 2 }}
                        >
                            Check Out
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Purchase;
