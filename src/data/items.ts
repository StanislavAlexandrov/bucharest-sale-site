export type Item = {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
    available: boolean;
};

const items: Item[] = [
    {
        id: 1,
        title: 'Hair Dryer',
        description: 'Works with 220V. Not compatible in the US.',
        price: '$15',
        image: 'https://placehold.co/600x400',
        available: true,
    },
    {
        id: 2,
        title: 'Toaster',
        description: 'Two-slice toaster. Clean.',
        price: '$10',
        image: 'https://placehold.co/600x400',
        available: false,
    },
];

export default items;
