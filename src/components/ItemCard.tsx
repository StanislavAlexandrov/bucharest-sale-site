import { useState } from 'react';
import { Item } from '../types';

type ItemCardProps = {
    item: Item;
    salesClosed?: boolean;
};

const ItemCard = ({ item, salesClosed = false }: ItemCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const isSold = !item.available;
    const disableInteractions = salesClosed || isSold;

    const handleImageClick = () => {
        if (!disableInteractions) setIsOpen(true);
    };

    return (
        <div className="border rounded p-4 bg-white shadow-sm relative">
            {/* Thumbnail + overlays */}
            <div className="relative">
                <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onClick={handleImageClick}
                    className={[
                        'w-full h-48 object-cover transition',
                        disableInteractions
                            ? 'grayscale opacity-60 cursor-not-allowed'
                            : 'cursor-pointer hover:opacity-90',
                    ].join(' ')}
                    aria-disabled={disableInteractions}
                    tabIndex={disableInteractions ? -1 : 0}
                    title={
                        salesClosed
                            ? 'Sale closed — viewing only'
                            : isSold
                            ? 'Sold'
                            : 'Click to enlarge'
                    }
                />

                {/* Priority: SOLD > RESERVED; also show SALE CLOSED ribbon if globally closed */}
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

                {salesClosed && (
                    <span
                        className="absolute right-2 top-2 rounded bg-blue-600/90 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                        aria-label="Sale closed"
                    >
                        Sale closed
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

            {!salesClosed ? (
                <p
                    className={
                        item.available ? 'text-green-500' : 'text-red-500'
                    }
                >
                    {item.available ? 'Available' : 'Sold'}
                </p>
            ) : (
                <p className="text-blue-700 font-medium">
                    Viewing only — sale closed
                </p>
            )}

            {/* Modal (disabled when sale is closed or item is sold) */}
            {isOpen && !disableInteractions && (
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
