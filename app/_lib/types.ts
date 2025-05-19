export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    img: string;
    reviews?: Review[];
}

export type CartItem = {
    product: Product;
    quantity: number;
}

export type PurchaseHistory = {
    purchases: Purchase[];
}

export type Purchase = {
    id: string;
    cart: CartItem[];
    totalPrice: number;
    purchaseDate: string;
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