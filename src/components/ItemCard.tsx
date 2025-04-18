import { Item } from '../types';

type ItemCardProps = {
    item: Item;
};

const ItemCard = ({ item }: ItemCardProps) => (
    <div className="border rounded p-4">
        <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
        />
        <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
        <p>{item.description}</p>
        <p className="text-green-600 font-bold">{item.price}</p>
        <p className={item.available ? 'text-green-500' : 'text-red-500'}>
            {item.available ? 'Available' : 'Sold'}
        </p>
    </div>
);

export default ItemCard;
