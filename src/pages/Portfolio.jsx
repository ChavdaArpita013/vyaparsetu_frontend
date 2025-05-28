import React from "react";

const dummyData = [
    { stock: "Tata Steel", quantity: 22, price: 50, profit: "+₹24000", ltp: 150 },
    { stock: "Waree", quantity: 120, price: 10, profit: "+₹25000", ltp: 50 },
    { stock: "RELIANCE", quantity: 10, price: 2400, profit: "+₹120", ltp: 2520 },
    { stock: "TCS", quantity: 5, price: 3000, profit: "-₹150", ltp: 2850 },
    { stock: "INFY", quantity: 12, price: 1450, profit: "+₹240", ltp: 1650 },
    { stock: "ITC", quantity: 102, price: 150, profit: "+₹2400", ltp: 160 },
];

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-black text-white px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold mb-6">My Portfolio</h2>
            <div className="space-y-4">
                {dummyData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#1a1a1a] p-4 rounded-lg shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center"
                    >
                        <div>
                            <h3 className="text-lg font-bold">{item.stock}</h3>
                            <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                            <p className="text-sm text-gray-400">Buy Price: ₹{item.price.toFixed(2)}</p>
                        </div>
                        <div className="mt-3 sm:mt-0 text-right sm:text-left">
                            <p
                                className={`text-md font-medium ${item.profit.startsWith("+") ? "text-green-400" : "text-red-400"
                                    }`}
                            >
                                {item.profit}
                            </p>
                            <p className="text-sm text-gray-400">LTP: ₹{item.ltp}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
