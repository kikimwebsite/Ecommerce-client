import React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import { Product } from '@/app/_lib/types';

interface SlidingProductShowcaseProps {
    products: Product[];
    isLoading: boolean;
}

const SlidingProductShowcase: React.FC<SlidingProductShowcaseProps> = ({ products, isLoading }) => {
    return (
        <Box
            sx={{
                overflow: 'hidden',
                width: '100%',
                mb: 4,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    animation: 'slide 300s linear infinite',
                    '@keyframes slide': {
                        '0%': { transform: 'translateX(0)' },
                        '100%': { transform: `translateX(-600%)` },
                    },
                }}
            >
                {isLoading
                    ? Array.from({ length: 25 }).map((_, i) => (
                        <Box key={i} sx={{ minWidth: 200, flexShrink: 0, p: 2, m: 1, textAlign: 'center' }}>
                            <Skeleton
                                variant="rectangular"
                                width={200}
                                height={150}
                                sx={{ bgcolor: "#424242" }}
                            />
                            <Skeleton
                                variant="text"
                                width={120}
                                sx={{ mt: 1, bgcolor: "#424242" }}
                            />
                        </Box>
                    ))
                    : [...products, ...products, ...products, ...products, ...products, ...products].map((product, index) => (
                        <Box
                            key={`${product.id}-${index}`}
                            sx={{
                                minWidth: 200,
                                flexShrink: 0,
                                p: 2,
                                m: 1,
                                textAlign: 'center',
                                transition: "transform 0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
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