"use server"

import { Product } from "./types";
import { products } from "./dev";

export async function retrieveAllProducts(): Promise<Product[]> {
    //if (process.env.NODE_ENV === "development") {
        return Promise.resolve(products);

    /*try {
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
    }*/
}

export async function retrieveHotProducts(): Promise<Product[]> {
    //revalidate
    //if (process.env.NODE_ENV === "development") {
        return Promise.resolve(products);
    //}
/*
    try {
        const response = await fetch("/api/products/hot");
        if (!response.ok) {
            throw new Error("Failed to fetch hot products");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching hot products:", error);
        return [];
    }*/
}

// gethistory


// get review, revalidate




/*

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  process.env.VERCEL_URL ||
  "http://localhost:3000"; // fallback for local

const res = await fetch(`${baseUrl}/api/products`);




Set NEXT_PUBLIC_BASE_URL in your Azure App Service configuration to your deployed site URL (e.g., https://your-app.azurewebsites.net).
2. Set the environment variable in Azure
Go to your App Service in the Azure Portal.
Go to Configuration > Application settings.
Add:
Name: NEXT_PUBLIC_BASE_URL
Value: https://your-app.azurewebsites.net
Save and restart your app.
*/