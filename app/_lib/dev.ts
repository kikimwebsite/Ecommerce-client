import { Product, PurchaseHistory } from './types';

export const products: Product[] = [
    {
        id: '1',
        name: 'Flying Plane',
        img: '/images/dev/flying-plane.jpg',
        price: 99.99,
        category: 'Electronics',
        description: 'Take to the skies with this remote-controlled flying plane. Easy to operate and perfect for both beginners and experienced pilots. Enjoy hours of outdoor fun with impressive flight stability.',
    },
    {
        id: '2',
        name: 'Racing Car',
        img: '/images/dev/racing-car.jpg',
        price: 149.99,
        category: 'Electronics',
        description: 'Zoom around the track with this high-speed racing car. Features responsive controls and durable construction for endless racing excitement. Great for kids and adults who love competition.',
    },
    {
        id: '3',
        name: 'Dragon Doll',
        img: '/images/dev/dragon-doll.jpg',
        price: 129.99,
        category: 'Dolls',
        description: 'Bring fantasy to life with this beautifully crafted dragon doll. Its soft fabric and detailed design make it a magical companion for imaginative play. Perfect for dragon lovers of all ages.',
    },
    {
        id: '4',
        name: 'Jade Necklace',
        img: '/images/dev/jade-necklace.jpg',
        price: 249.99,
        category: 'Jewelry',
        description: 'Elegant and timeless, this jade necklace adds a touch of sophistication to any outfit. Made with genuine jade stones and a sturdy clasp. A wonderful gift for special occasions.',
    },
    {
        id: '5',
        name: 'Favor Ring',
        img: '/images/dev/favor-ring.jpg',
        price: 249.99,
        category: 'Jewelry',
        description: 'This favor ring features a sparkling gemstone set in a classic band. Its refined style makes it suitable for both daily wear and formal events. A cherished addition to any jewelry collection.',
    },
    {
        id: '6',
        name: 'Dancing Robot',
        img: '/images/dev/dancing-bot.jpg',
        price: 59.99,
        category: 'Electronics',
        description: 'Watch the fun unfold as this robot dances to music and lights up the room. Simple controls make it easy for kids to operate. Encourages movement and laughter during playtime.',
    },
    {
        id: '7',
        name: 'Bio Doll',
        img: '/images/dev/bio-doll.jpg',
        price: 39.99,
        category: 'Dolls',
        description: 'The bio doll is designed for nurturing play, featuring soft materials and lifelike details. Ideal for role-playing and developing empathy in young children. Easy to clean and care for.',
    },
    {
        id: '8',
        name: 'Bluestone Ring',
        img: '/images/dev/bluestone-ring.jpg',
        price: 124.99,
        category: 'Jewelry',
        description: 'A striking bluestone ring that catches the light beautifully. Its unique color and elegant setting make it a standout accessory. Perfect for birthdays, anniversaries, or just because.',
    },
    {
        id: '9',
        name: 'Cat Doll',
        img: '/images/dev/cat-doll.jpg',
        price: 74.99,
        category: 'Dolls',
        description: 'This adorable cat doll is soft, cuddly, and ready for adventure. With its charming face and plush body, it’s sure to become a favorite bedtime companion. Suitable for all ages.',
    },
];

export const purchaseHistory: PurchaseHistory = {
    purchases: [
        {
            id: 'ph1',
            cart: [
                { product: {
                    id: '1',
                    name: 'Flying Plane',
                    img: '/images/dev/flying-plane.jpg',
                    price: 99.99,
                    category: 'Electronics',
                    description: 'Take to the skies with this remote-controlled flying plane. Easy to operate and perfect for both beginners and experienced pilots. Enjoy hours of outdoor fun with impressive flight stability.',
                }, quantity: 1 }
            ],
            totalPrice: 99.99,
            purchaseDate: '2024-05-01T10:15:00Z',
        },
        {
            id: 'ph2',
            cart: [
                { product: {
                    id: '3',
                    name: 'Dragon Doll',
                    img: '/images/dev/dragon-doll.jpg',
                    price: 129.99,
                    category: 'Dolls',
                    description: 'Bring fantasy to life with this beautifully crafted dragon doll. Its soft fabric and detailed design make it a magical companion for imaginative play. Perfect for dragon lovers of all ages.',
                }, quantity: 2 },
                { product: {
                    id: '6',
                    name: 'Dancing Robot',
                    img: '/images/dev/dancing-bot.jpg',
                    price: 59.99,
                    category: 'Electronics',
                    description: 'Watch the fun unfold as this robot dances to music and lights up the room. Simple controls make it easy for kids to operate. Encourages movement and laughter during playtime.',
                }, quantity: 1 }
            ],
            totalPrice: 319.97,
            purchaseDate: '2024-05-03T14:30:00Z',
        },
        {
            id: 'ph3',
            cart: [
                { product: {
                    id: '5',
                    name: 'Favor Ring',
                    img: '/images/dev/favor-ring.jpg',
                    price: 249.99,
                    category: 'Jewelry',
                    description: 'This favor ring features a sparkling gemstone set in a classic band. Its refined style makes it suitable for both daily wear and formal events. A cherished addition to any jewelry collection.',
                }, quantity: 1 },
                { product: {
                    id: '8',
                    name: 'Bluestone Ring',
                    img: '/images/dev/bluestone-ring.jpg',
                    price: 124.99,
                    category: 'Jewelry',
                    description: 'A striking bluestone ring that catches the light beautifully. Its unique color and elegant setting make it a standout accessory. Perfect for birthdays, anniversaries, or just because.',
                }, quantity: 1 },
                { product: {
                    id: '4',
                    name: 'Jade Necklace',
                    img: '/images/dev/jade-necklace.jpg',
                    price: 249.99,
                    category: 'Jewelry',
                    description: 'Elegant and timeless, this jade necklace adds a touch of sophistication to any outfit. Made with genuine jade stones and a sturdy clasp. A wonderful gift for special occasions.',
                }, quantity: 1 }
            ],
            totalPrice: 624.97,
            purchaseDate: '2024-05-10T09:00:00Z',
        },
        {
            id: 'ph4',
            cart: [
                { product: {
                    id: '2',
                    name: 'Racing Car',
                    img: '/images/dev/racing-car.jpg',
                    price: 149.99,
                    category: 'Electronics',
                    description: 'Zoom around the track with this high-speed racing car. Features responsive controls and durable construction for endless racing excitement. Great for kids and adults who love competition.',
                }, quantity: 1 },
                { product: {
                    id: '7',
                    name: 'Bio Doll',
                    img: '/images/dev/bio-doll.jpg',
                    price: 39.99,
                    category: 'Dolls',
                    description: 'The bio doll is designed for nurturing play, featuring soft materials and lifelike details. Ideal for role-playing and developing empathy in young children. Easy to clean and care for.',
                }, quantity: 2 },
                { product: {
                    id: '9',
                    name: 'Cat Doll',
                    img: '/images/dev/cat-doll.jpg',
                    price: 74.99,
                    category: 'Dolls',
                    description: 'This adorable cat doll is soft, cuddly, and ready for adventure. With its charming face and plush body, it’s sure to become a favorite bedtime companion. Suitable for all ages.',
                }, quantity: 1 },
                { product: {
                    id: '6',
                    name: 'Dancing Robot',
                    img: '/images/dev/dancing-bot.jpg',
                    price: 59.99,
                    category: 'Electronics',
                    description: 'Watch the fun unfold as this robot dances to music and lights up the room. Simple controls make it easy for kids to operate. Encourages movement and laughter during playtime.',
                }, quantity: 1 }
            ],
            totalPrice: 364.96,
            purchaseDate: '2024-05-15T18:45:00Z',
        },
        {
            id: 'ph5',
            cart: [
                { product: {
                    id: '8',
                    name: 'Bluestone Ring',
                    img: '/images/dev/bluestone-ring.jpg',
                    price: 124.99,
                    category: 'Jewelry',
                    description: 'A striking bluestone ring that catches the light beautifully. Its unique color and elegant setting make it a standout accessory. Perfect for birthdays, anniversaries, or just because.',
                }, quantity: 3 },
                { product: {
                    id: '3',
                    name: 'Dragon Doll',
                    img: '/images/dev/dragon-doll.jpg',
                    price: 129.99,
                    category: 'Dolls',
                    description: 'Bring fantasy to life with this beautifully crafted dragon doll. Its soft fabric and detailed design make it a magical companion for imaginative play. Perfect for dragon lovers of all ages.',
                }, quantity: 1 },
                { product: {
                    id: '1',
                    name: 'Flying Plane',
                    img: '/images/dev/flying-plane.jpg',
                    price: 99.99,
                    category: 'Electronics',
                    description: 'Take to the skies with this remote-controlled flying plane. Easy to operate and perfect for both beginners and experienced pilots. Enjoy hours of outdoor fun with impressive flight stability.',
                }, quantity: 1 },
                { product: {
                    id: '5',
                    name: 'Favor Ring',
                    img: '/images/dev/favor-ring.jpg',
                    price: 249.99,
                    category: 'Jewelry',
                    description: 'This favor ring features a sparkling gemstone set in a classic band. Its refined style makes it suitable for both daily wear and formal events. A cherished addition to any jewelry collection.',
                }, quantity: 1 },
                { product: {
                    id: '9',
                    name: 'Cat Doll',
                    img: '/images/dev/cat-doll.jpg',
                    price: 74.99,
                    category: 'Dolls',
                    description: 'This adorable cat doll is soft, cuddly, and ready for adventure. With its charming face and plush body, it’s sure to become a favorite bedtime companion. Suitable for all ages.',
                }, quantity: 1 }
            ],
            totalPrice: 729.95,
            purchaseDate: '2024-05-20T12:10:00Z',
        },
        {
            id: 'ph6',
            cart: [
                { product: {
                    id: '4',
                    name: 'Jade Necklace',
                    img: '/images/dev/jade-necklace.jpg',
                    price: 249.99,
                    category: 'Jewelry',
                    description: 'Elegant and timeless, this jade necklace adds a touch of sophistication to any outfit. Made with genuine jade stones and a sturdy clasp. A wonderful gift for special occasions.',
                }, quantity: 1 },
                { product: {
                    id: '7',
                    name: 'Bio Doll',
                    img: '/images/dev/bio-doll.jpg',
                    price: 39.99,
                    category: 'Dolls',
                    description: 'The bio doll is designed for nurturing play, featuring soft materials and lifelike details. Ideal for role-playing and developing empathy in young children. Easy to clean and care for.',
                }, quantity: 1 }
            ],
            totalPrice: 289.98,
            purchaseDate: '2024-05-22T16:20:00Z',
        },
    ]
};

