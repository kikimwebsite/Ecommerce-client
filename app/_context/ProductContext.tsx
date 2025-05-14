'use client'

import { createContext, useContext } from "react";
import { Product } from "@/app/_lib/types";

export const ProductContext = createContext<Product[] | null>(null);

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (context === null) {
        throw new Error("useProducts must be used within a ProductsProvider");
    }
    return context;
};