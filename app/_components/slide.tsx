import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

type Product = {
    id: number;
    name: string;
    img: string;
    link: string;
};

const products: Product[] = [
    { id: 1, name: 'Product 1', img: 'file.svg', link: '/product/1' },
    { id: 2, name: 'Product 2', img: 'file.svg', link: '/product/2' },
    { id: 3, name: 'Product 3', img: 'file.svg', link: '/product/3' },
    { id: 4, name: 'Product 4', img: 'file.svg', link: '/product/4' },
    { id: 5, name: 'Product 5', img: 'file.svg', link: '/product/5' },
    { id: 6, name: 'Product 6', img: 'file.svg', link: '/product/6' },
];

const SlidingProductShowcase: React.FC = () => {
    return (
        <Box
        sx={{
            overflow: 'hidden', // Ensures content outside the box is hidden
            width: '100%', // Full width container
            backgroundColor: '#f9f9f9',
            py: 2,
        }}
        >
        <Box
            sx={{
            display: 'flex',
            animation: 'slide 15s linear infinite', // Animation applied here
            '@keyframes slide': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-100%)' },
            },
            }}
        >
            {/* Repeat the product list twice for smooth looping */}
            {[...products, ...products].map((product, index) => (
            <Box
                key={`${product.id}-${index}`}
                sx={{
                minWidth: 200, // Width of each product card
                flexShrink: 0, // Prevent shrinking
                p: 2,
                textAlign: 'center',
                }}
            >
                <Link href={product.link}>
                    <Image
                    src={product.img}
                    alt={product.name}
                    width={200}
                    height={150}
                    style={{
                        objectFit: 'cover',
                        borderRadius: '8px',
                    }}
                    />
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {product.name}
                    </Typography>

                </Link>
            </Box>
            ))}
        </Box>
        </Box>
    );
};

export default SlidingProductShowcase;