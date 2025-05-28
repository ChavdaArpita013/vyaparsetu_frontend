import UsersTransactions from "@/components/UsersTransactions";
import React, { useState } from "react";

const dummyTransactions = [
    {
        id: 1,
        stock: "RELIANCE",
        type: "Buy",
        qty: 10,
        price: 2000,
        date: "2025-05-08",
    },
    {
        id: 2,
        stock: "TCS",
        type: "Sell",
        qty: 5,
        price: 3100,
        date: "2025-04-25",
    },
    {
        id: 3,
        stock: "INFY",
        type: "Buy",
        qty: 8,
        price: 1500,
        date: "2025-03-20",
    },
    {
        id: 4,
        stock: "HDFC",
        type: "Sell",
        qty: 4,
        price: 2900,
        date: "2025-02-15",
    },
    {
        id: 5,
        stock: "WIPRO",
        type: "Buy",
        qty: 12,
        price: 420,
        date: "2025-01-20",
    },
];


const ranges = {
    "1 Week": 7,
    "15 Days": 15,
    "1 Month": 30,
    "3 Months": 90,
};

const Transaction = () => {
    const [range, setRange] = useState("1 Week");

    const filteredTransactions = dummyTransactions.filter((txn) => {
        const daysAgo = ranges[range];
        const txnDate = new Date(txn.date);
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - daysAgo);
        return txnDate >= cutoff;
    });

    return (
        <div className="min-h-screen bg-black text-white px-4 py-5 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h2 className="text-2xl font-semibold mb-3 sm:mb-0">My Transactions</h2>
                <select
                    className="bg-[#1a1a1a] text-white border border-gray-600 px-4 py-2 rounded-md"
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                >
                    {Object.keys(ranges).map((key) => (
                        <option key={key} value={key}>{key}</option>
                    ))}
                </select>
            </div>

            <UsersTransactions data={filteredTransactions} />
        </div>
    );
};

export default Transaction;
