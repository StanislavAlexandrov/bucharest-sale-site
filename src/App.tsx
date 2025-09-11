import { useMemo, useState } from 'react';
import ItemCard from './components/ItemCard';
import items from './data/items';
import './App.css';

const SALES_CLOSED = true; // ← flip to false if you ever reopen

function App() {
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);
    const [overlayDismissed, setOverlayDismissed] = useState(false); // allow browsing while still marking sale closed

    const filteredItems = useMemo(() => {
        const base = showAvailableOnly
            ? items.filter((i) => i.available)
            : items;
        return [...base].sort((a, b) => {
            if (a.available === b.available) return 0;
            return a.available ? -1 : 1;
        });
    }, [showAvailableOnly]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 text-center px-4">
            <h1 className="text-3xl font-bold text-blue-700">Bucharest</h1>

            {/* Top banner to reinforce state even if overlay is dismissed */}
            {SALES_CLOSED && (
                <div
                    className="rounded-lg bg-blue-50 border border-blue-200 px-4 py-2 text-blue-800"
                    role="status"
                    aria-live="polite"
                >
                    <strong>Sale closed.</strong> Everything’s packed for the
                    move—listings remain for reference only.
                </div>
            )}

            {/* Hide the filter if sales are closed (optional) */}
            {!SALES_CLOSED && (
                <label className="flex items-center gap-2 text-gray-700 text-sm">
                    <input
                        type="checkbox"
                        checked={showAvailableOnly}
                        onChange={(e) => setShowAvailableOnly(e.target.checked)}
                        className="accent-blue-600"
                    />
                    Show available items only
                </label>
            )}

            <div className="flex flex-wrap justify-center gap-6">
                {filteredItems.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        salesClosed={SALES_CLOSED}
                    />
                ))}
            </div>

            {/* Full-page overlay (blocks clicks while visible); set overlayDismissed to keep site browseable */}
            {SALES_CLOSED && !overlayDismissed && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="mx-4 max-w-lg rounded-2xl bg-white p-6 text-center shadow-2xl">
                        <h2 className="text-2xl font-bold">
                            🎉 Thank you, everyone - sale closed!
                        </h2>
                        <p className="mt-2 text-gray-600">
                            No further sales - items remain here for reference.
                        </p>
                        <div className="mt-4 flex justify-center gap-3">
                            {/* Keep a single button if you want the overlay to be non-dismissible */}
                            <button
                                onClick={() => setOverlayDismissed(true)}
                                className="rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                            >
                                View items
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
