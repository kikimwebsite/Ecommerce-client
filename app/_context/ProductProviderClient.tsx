'use client';

import { ProductContext } from "./ProductContext";
import { Product } from "@/app/_lib/types";

export default function ProductProviderClient({
    products,
    children,
}: {
    products: Product[];
    children: React.ReactNode;
}) {
    return (
        <ProductContext.Provider value={products}>
        {children}
        </ProductContext.Provider>
    );
}