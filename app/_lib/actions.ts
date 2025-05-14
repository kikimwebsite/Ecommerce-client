"use server"

import { Product } from "./types";
import { products } from "./dev";

export async function retrieveAllProducts(): Promise<Product[]> {
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
        console.error("Error fetching products:", error);
        return [];
    }
}

export async function retrieveHotProducts(): Promise<Product[]> {
    if (process.env.NODE_ENV === "development") {
        return Promise.resolve(products);
    }

    try {
        const response = await fetch("/api/products/hot");
        if (!response.ok) {
            throw new Error("Failed to fetch hot products");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching hot products:", error);
        return [];
    }
}

