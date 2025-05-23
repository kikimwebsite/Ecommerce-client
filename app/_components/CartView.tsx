'use client'

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
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
    const [cartState, setCartState] = useState<CartItem[]>([]);
    const [expanded, setExpanded] = useState(true);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [pendingRemoveId, setPendingRemoveId] = useState<string | null>(null);

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

    const handleConfirm = () => {
        let localCart = JSON.parse(localStorage.getItem(LOCAL_CART_KEY) || "[]");
        localCart = localCart.filter((i: CartItem) => i.product.id !== pendingRemoveId);
        localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(localCart));
        window.dispatchEvent(new Event("localAkeToyCartUpdated"));
        setDialogOpen(false);
        setPendingRemoveId(null);
    };

    return (
        <>
        <Accordion sx={{ mt: 2 }}
            expanded={expanded}
            onChange={(_, isExpanded) => setExpanded(isExpanded)}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ShoppingCartIcon sx={{ mr: 1 }} />
                <Typography sx={{ flex: 1 }}>Your Cart</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ display: "flex", mb: 2 }}>
                    <Link href="/purchase">
                        <Button variant="contained" color="success" size="small">
                            Go to Purchase
                        </Button>
                    </Link>
                </Box>
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
                                        if (item.quantity <= 1) {
                                            setPendingRemoveId(item.product.id);
                                            setDialogOpen(true);
                                        } else {
                                            const localCart = JSON.parse(localStorage.getItem(LOCAL_CART_KEY) || "[]");
                                            const idx = localCart.findIndex((i: CartItem) => i.product.id === item.product.id);
                                            if (idx !== -1) {
                                                localCart[idx].quantity -= 1;
                                                localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(localCart));
                                                window.dispatchEvent(new Event("localAkeToyCartUpdated"));
                                            }
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
                                        setPendingRemoveId(item.product.id);
                                        setDialogOpen(true);
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
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Remove Item</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to remove this item from your cart?
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
                <Button onClick={() => setDialogOpen(false)} color="primary" sx={{ mr: 3 }}>
                    Cancel
                </Button>
                <Button onClick={handleConfirm} color="error" variant="contained">
                    Remove
                </Button>
            </DialogActions>
        </Dialog>
        </>
    );
};

export default CartView;