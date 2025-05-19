import React from "react";
import { retrieveAllProducts } from "@/app/_lib/actions";
import ProductProviderClient from "@/app/_context/ProductProviderClient";

const ProductsLayout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
    const products = await retrieveAllProducts();

    return (
        <ProductProviderClient products={products}>
            {children}
        </ProductProviderClient>
    );
};

export default ProductsLayout;