import React from 'react';

const indexesData = [
    { name: 'Nifty 50', value: '22,150.75', change: '+0.45%' },
    { name: 'Sensex', value: '73,950.20', change: '+0.52%' },
    { name: 'NASDAQ', value: '14,310.55', change: '-0.28%' }
];

const currenciesData = [
    { name: 'USD/INR', value: '83.12', change: '+0.10%' },
    { name: 'EUR/INR', value: '89.23', change: '-0.15%' },
    { name: 'JPY/INR', value: '0.55', change: '+0.05%' }
];

const commoditiesData = [
    { name: 'Gold', value: '₹62,500', change: '+0.25%' },
    { name: 'Silver', value: '₹74,200', change: '-0.10%' },
    { name: 'Crude Oil', value: '$79.45', change: '+1.12%' }
];

const Section = ({ title, data }) => (
    <div className="p-4 bg-[#1a1a1a] rounded-xl border border-gray-700 mb-6">
        <h2 className="text-xl font-bold mb-3 text-white">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((item, idx) => (
                <div
                    key={idx}
                    className="border border-gray-600 p-3 rounded-lg bg-black hover:shadow-lg transition-all"
                >
                    {/* Left side: Name and Value */}
                    <div className="flex flex-col text-white">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm text-gray-400 block sm:hidden">{item.value}</div>
                    </div>

                    {/* Right side: Change and Value (on desktop) */}
                    <div className="text-right">
                        <div className={item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                            {item.change}
                        </div>
                        <div className="hidden sm:block text-gray-300">{item.value}</div>
                    </div>

                </div>
            ))}
        </div>
    </div>
);

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white px-4 py-5 sm:px-6">
            <Section title="Indexes" data={indexesData} />
            <Section title="Currencies" data={currenciesData} />
            <Section title="Commodities" data={commoditiesData} />
        </div>
    );
};

export default Home;
