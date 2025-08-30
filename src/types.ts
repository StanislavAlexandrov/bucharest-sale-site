export type Item = {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string; // imported asset path resolves to a string
    available: boolean;
    originalPrice?: string; // optional sale price
    condition?: string; // optional condition
    reserved?: boolean; // optional reservation status
    link?: string; // optional external URL
};
