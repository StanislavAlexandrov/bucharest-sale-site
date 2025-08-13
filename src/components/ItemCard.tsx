import { useState } from 'react';
import { Item } from '../types';

type ItemCardProps = {
    item: Item;
};

const ItemCard = ({ item }: ItemCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded p-4">
            {/* Thumbnail */}
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setIsOpen(true)}
            />

            <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
            <p>{item.description}</p>
            <p>Condition: {item.condition}</p>
            <p className="text-green-600 font-bold">{item.price}</p>
            <p className="text-gray-500 text-sm">
                Original price: {item.originalPrice || 'N/A'}
            </p>
            <p className={item.available ? 'text-green-500' : 'text-red-500'}>
                {item.available ? 'Available' : 'Sold'}
            </p>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full rounded shadow-lg"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
                    />
                    <button
                        className="absolute top-4 right-4 text-white text-2xl"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
};

export default ItemCard;
