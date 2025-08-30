import { useState } from 'react';
import { Item } from '../types';

type ItemCardProps = {
    item: Item;
};

const ItemCard = ({ item }: ItemCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const isSold = !item.available;

    // only allow opening the modal if the item isn't sold (optional; remove if you want it clickable anyway)
    const handleImageClick = () => {
        if (!isSold) setIsOpen(true);
    };

    return (
        <div className="border rounded p-4">
            {/* Thumbnail + SOLD overlay */}
            <div className="relative">
                <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onClick={handleImageClick}
                    className={[
                        'w-full h-48 object-cover cursor-pointer transition',
                        isSold
                            ? 'grayscale opacity-60 cursor-not-allowed'
                            : 'hover:opacity-90',
                    ].join(' ')}
                />

                {isSold && (
                    <span
                        className="absolute left-2 top-2 rounded bg-red-600/90 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                        aria-label="Sold"
                    >
                        Sold
                    </span>
                )}

                {!isSold && item.reserved && (
                    <span
                        className="absolute left-2 top-2 rounded bg-yellow-500/90 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                        aria-label="Reserved"
                    >
                        Reserved
                    </span>
                )}
            </div>

            {/* Title (linked if we have a URL) */}
            {item.link ? (
                <h2 className="text-xl font-semibold mt-2">
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 underline-offset-2 hover:no-underline focus:outline-none focus:ring focus:ring-blue-300"
                        title={`Open details for ${item.title}`}
                    >
                        {item.title}
                    </a>
                </h2>
            ) : (
                <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
            )}

            <p>{item.description}</p>

            {/* Optional secondary link for extra clarity */}
            {item.link && (
                <p className="mt-1">
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:no-underline"
                    >
                        View details
                        <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                </p>
            )}

            {item.condition && <p>Condition: {item.condition}</p>}

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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setIsOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${item.title} image`}
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full rounded shadow-lg"
                        onClick={(e) => e.stopPropagation()}
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
