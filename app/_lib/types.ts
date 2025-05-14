export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    img: string;
    reviews?: Review[];
}

export type Review = {
    id: string;
    productId: string;
    rating: number;
    title: string;
    comment: string;
}

export type User = {
    id: string;
    email: string;
    PurchaseHistory?: PurchaseHistory;
}

export type PurchaseHistory = {
    email: string;
    purchases: Purchase[];
}

export type Purchase = {
    id: string;
    products: Product[];
    purchaseDate: string;
    quantity: number;
}

export type Cart = {
    email: string;
    products: Product[];
}