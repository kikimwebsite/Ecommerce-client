import React from "react";
import { retrieveAllProducts } from "@/app/_lib/actions";
import ProductProviderClient from "@/app/_context/ProductProviderClient";

export default async function ProductsLayout({ children }: { children: React.ReactNode }) {
    const products = await retrieveAllProducts();

    return (
        <ProductProviderClient products={products}>
            {children}
        </ProductProviderClient>
    );
}