import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import Link from "next/link";
import { Product } from "@/app/_lib/types";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <Card>
            <CardMedia component="img" height="140" image={product.img} alt={product.name} />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/products/${product.category.toLowerCase()}/${product.name.toLowerCase()}`}>
                    <Button size="small" color="primary">
                        Details
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default ProductCard;