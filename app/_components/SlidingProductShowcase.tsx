import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/app/_lib/types';

interface SlidingProductShowcaseProps {
    products: Product[];
}

const SlidingProductShowcase: React.FC<SlidingProductShowcaseProps> = ({ products }) => {
    return (
        <Box
            sx={{
                overflow: 'hidden',
                width: '100%',
                backgroundColor: '#f9f9f9',
                py: 2,
                mb: 4,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    animation: 'slide 15s linear infinite',
                    '@keyframes slide': {
                        '0%': { transform: 'translateX(0)' },
                        '100%': { transform: `translateX(-${100 / 3}%)` },
                    },
                }}
            >
                {[...products, ...products, ...products].map((product, index) => (
                    <Box
                        key={`${product.id}-${index}`}
                        sx={{
                            minWidth: 200,
                            flexShrink: 0,
                            p: 2,
                            textAlign: 'center',
                        }}
                    >
                        <Link href={`/products/${encodeURIComponent(product.category.toLowerCase())}/${encodeURIComponent(product.name.toLowerCase())}`}>
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
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SlidingProductShowcase;