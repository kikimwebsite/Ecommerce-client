'use client'

import React, { useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { CartItem } from "@/app/_lib/types";

const CartView: React.FC = () => {
    const [cartState, setCartState] = React.useState<CartItem[]>([]);
    const [expanded, setExpanded] = React.useState(false);

    const loadCart = () => {
        const localCart = localStorage.getItem("localAkeToyCart");
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
            <Typography>Your Cart</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {cartState.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
                Your cart is empty.
            </Typography>
            ) : (
                console.log(cartState),
            cartState.map((item) => (
                <Box
                key={item.product.id}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1,
                    p: 1,
                    border: "1px solid #eee",
                    borderRadius: 2,
                }}
                >
                <Typography sx={{ flex: 1 }}>{item.product.name}</Typography>
                <Typography sx={{ mx: 1 }}>{item.quantity}x</Typography>
                <IconButton size="small" color="primary" aria-label="add">
                    <AddIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" color="primary" aria-label="remove">
                    <RemoveIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" color="info" aria-label="details">
                    <SearchIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" color="error" aria-label="remove from cart">
                    <CloseIcon fontSize="small" />
                </IconButton>
                </Box>
            ))
            )}
        </AccordionDetails>
        </Accordion>
    );
};

export default CartView;