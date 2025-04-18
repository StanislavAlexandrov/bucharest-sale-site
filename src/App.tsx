import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ItemCard from './components/ItemCard';
import items from './data/items';
import './App.css';

function App() {
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    const filteredItems = showAvailableOnly
        ? items.filter((item) => item.available)
        : items;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 text-center px-4">
            <h1 className="text-3xl font-bold text-blue-700">Bucharest</h1>

            <label className="flex items-center gap-2 text-gray-700 text-sm">
                <input
                    type="checkbox"
                    checked={showAvailableOnly}
                    onChange={(e) => setShowAvailableOnly(e.target.checked)}
                    className="accent-blue-600"
                />
                Show available items only
            </label>

            <div className="flex flex-wrap justify-center gap-6">
                {filteredItems.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>

            <div className="flex gap-4 mt-6">
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img
                        src={reactLogo}
                        className="w-16 h-16"
                        alt="React logo"
                    />
                </a>
            </div>
        </div>
    );
}

export default App;
