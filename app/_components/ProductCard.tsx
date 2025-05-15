import React from "react";
import { Card, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/_lib/types";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <Link href={`/products/${product.category.toLowerCase()}/${product.name.toLowerCase()}`}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <Box sx={{ position: "relative", width: "100%", height: 340 }}>
                    <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        style={{ objectFit: "cover", borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
                        sizes="(max-width: 600px) 100vw, 400px"
                    />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${product.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography
                        component='div'
                        color="primary"
                        sx={{ borderBottom: "1px solid", borderColor: "primary.main", ml: 1, mb: 2}}
                    >
                        Click to View Details
                    </Typography>
                </CardActions>
            </Card>
        </Link>
    );
};

export default ProductCard;