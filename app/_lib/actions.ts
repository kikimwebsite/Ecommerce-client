"use server"

import { Product } from "./types";
import { products } from "./dev";

export async function retrieveProducts(): Promise<Product[]> {
    if (process.env.NODE_ENV === "development") {
        return Promise.resolve(products);
    }

    try {
        // In production, fetch products from node server
        const response = await fetch("/api/products");
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to retrieve products:", error);
        throw new Error("Failed to retrieve products");
    }
}

