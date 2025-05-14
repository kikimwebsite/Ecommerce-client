import React from 'react';
import { Box } from '@mui/material';
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
                background: `linear-gradient(
                    45deg,
                    #f7f7f7 4%,
                    #eaeaea 8%,
                    #f7f7f7 12%,
                    #dcdcdc 16%,
                    #eeeeee 20%,
                    #cccccc 24%,
                    #ffffff 30%,
                    #dddddd 50%,
                    #828181 70%,
                    #e0e0e0 80%,
                    #f7f7f7 90%,
                    #cccccc 96%
                )`,
                py: 2,
                mb: 4,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    animation: 'slide 25s linear infinite',
                    '@keyframes slide': {
                        '0%': { transform: 'translateX(0)' },
                        '100%': { transform: `translateX(-${100 / 3}%)` },
                    },
                }}
            >
                {[...products, ...products, ...products, ...products, ...products].map((product, index) => (
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