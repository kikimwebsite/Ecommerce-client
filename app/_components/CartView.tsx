'use client'

import React, { useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { CartItem } from "@/app/_lib/types";
import Link from "next/link";
import { LOCAL_CART_KEY } from "@/app/_lib/constants";

const CartView: React.FC = () => {
    const [cartState, setCartState] = React.useState<CartItem[]>([]);
    const [expanded, setExpanded] = React.useState(true);

    const loadCart = () => {
        const localCart = localStorage.getItem(LOCAL_CART_KEY);
        setCartState(JSON.parse(localCart || "[]"));
    };

    useEffect(() => {
        loadCart();

        const afterLocalCartUpdate = () => {
            loadCart();
            setExpanded(true);
        };
        window.addEventListener("localAkeToyCartUpdated", afterLocalCartUpdate);

        return () => {
            window.removeEventListener("localAkeToyCartUpdated", afterLocalCartUpdate);
        };
    }, []);

    return (
        <Accordion sx={{ mt: 2 }}
            expanded={expanded}
            onChange={(_, isExpanded) => setExpanded(isExpanded)}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ShoppingCartIcon sx={{ mr: 1 }} />
                <Typography sx={{ flex: 1 }}>Your Cart</Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 2 }}>
                    <Link href="/purchase">
                        <Button variant="contained" color="success" size="small">
                            Go to Purchase
                        </Button>
                    </Link>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                {cartState.length === 0 ? (
                    <Typography variant="body2" color="text.secondary">
                        Your cart is empty.
                    </Typography>
                ) : (
                    <>
                        {cartState.map((item) => (
                            <Box
                                key={item.product.id}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    mb: 1,
                                    p: 1,
                                    border: "1px solid #eee",
                                    borderRadius: 0.5,
                                }}
                            >
                                <Typography sx={{ flex: 1 }}>{item.product.name}</Typography>
                                <Typography sx={{ mx: 1 }}>{item.quantity}x</Typography>
                                <IconButton
                                    color="primary"
                                    aria-label="add"
                                    onClick={() => {
                                        const localCart = JSON.parse(localStorage.getItem(LOCAL_CART_KEY) || "[]");
                                        const idx = localCart.findIndex((i: CartItem) => i.product.id === item.product.id);
                                        if (idx !== -1) {
                                            localCart[idx].quantity += 1;
                                            localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(localCart));
                                            window.dispatchEvent(new Event("localAkeToyCartUpdated"));
                                        }
                                    }}
                                >
                                    <AddIcon fontSize="small" />
                                </IconButton>
                                <IconButton
                                    color="primary"
                                    aria-label="remove"
                                    onClick={() => {
                                        let localCart = JSON.parse(localStorage.getItem(LOCAL_CART_KEY) || "[]");
                                        const idx = localCart.findIndex((i: CartItem) => i.product.id === item.product.id);
                                        if (idx !== -1) {
                                            localCart[idx].quantity -= 1;
                                            if (localCart[idx].quantity <= 0) {
                                                localCart = localCart.filter((i: CartItem) => i.product.id !== item.product.id);
                                            }
                                            localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(localCart));
                                            window.dispatchEvent(new Event("localAkeToyCartUpdated"));
                                        }
                                    }}
                                >
                                    <RemoveIcon fontSize="small" />
                                </IconButton>
                                <Link href={`/products/${encodeURIComponent(item.product.category.toLowerCase())}/${encodeURIComponent(item.product.name.toLowerCase())}`}>
                                  <IconButton color="info" aria-label="details">
                                    <SearchIcon fontSize="small" />
                                  </IconButton>
                                </Link>
                                <IconButton
                                    color="error"
                                    aria-label="remove from cart"
                                    onClick={() => {
                                        let localCart = JSON.parse(localStorage.getItem(LOCAL_CART_KEY) || "[]");
                                        localCart = localCart.filter((i: CartItem) => i.product.id !== item.product.id);
                                        localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(localCart));
                                        window.dispatchEvent(new Event("localAkeToyCartUpdated"));
                                    }}
                                >
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        ))}
                    </>
                )}
            </AccordionDetails>
        </Accordion>
    );
};

export default CartView;