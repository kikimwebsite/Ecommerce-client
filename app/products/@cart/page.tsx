import React from "react";
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

const cartItems = [
    { id: 1, name: "Product A", quantity: 2 },
    { id: 2, name: "Product B", quantity: 1 },
    { id: 1, name: "Product A", quantity: 2 },
    { id: 2, name: "Product B", quantity: 1 },
    { id: 1, name: "Product A", quantity: 2 },
    { id: 2, name: "Product B", quantity: 1 },
    { id: 1, name: "Product A", quantity: 2 },
    { id: 2, name: "Product B", quantity: 1 },
];

const Cart: React.FC = () => (
    <Accordion sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <ShoppingCartIcon sx={{ mr: 1 }} />
        <Typography>Your Cart</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {cartItems.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
            Your cart is empty.
            </Typography>
        ) : (
            cartItems.map((item) => (
            <Box
                key={item.id}
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
                <Typography sx={{ flex: 1 }}>{item.name}</Typography>
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

export default Cart;