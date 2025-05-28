import React from "react";

const UserStatement = ({ data }) => {
    if (!data.length) {
        return (
            <p className="text-gray-400 text-center mt-10">
                No statements available for this range.
            </p>
        );
    }

    return (
        <div className="space-y-4">
            {data.map((txn) => {
                const totalAmount = txn.qty * txn.price;
                const charges = 20;
                const net = txn.type === "Buy" ? totalAmount + charges : totalAmount - charges;

                return (
                    <div
                        key={txn.id}
                        className="bg-[#1a1a1a] p-4 rounded-xl shadow-md border border-gray-700"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span
                                className={`text-sm font-semibold px-3 py-1 rounded-full ${txn.type === "Buy"
                                        ? "bg-green-600 text-white"
                                        : "bg-red-600 text-white"
                                    }`}
                            >
                                {txn.type}
                            </span>
                            <p className="text-sm text-gray-400">{txn.date}</p>
                        </div>

                        <div className="text-white">
                            <h3 className="text-lg font-bold">{txn.stock}</h3>
                            <p className="text-sm text-gray-300">Qty: {txn.qty}</p>
                            <p className="text-sm text-gray-300">
                                {txn.type} Price: ₹{txn.price}
                            </p>
                            <p className="text-sm text-gray-300">Total: ₹{totalAmount}</p>
                            <p className="text-sm text-yellow-500">Transaction Charges: ₹{charges}</p>
                            <p className="text-sm text-blue-400">
                                Net {txn.type === "Buy" ? "Payable" : "Receivable"}: ₹{net}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default UserStatement;
