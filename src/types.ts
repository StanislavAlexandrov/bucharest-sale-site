export type Item = {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string; // e.g. "/images/toaster.jpg";
    originalPrice?: string; // Optional for items on sale
    available: boolean;
    condition?: string; // Optional for additional item details
};
