import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import axios from "axios";
import debounce from "lodash.debounce";
import { callAvAPI } from '@/API/aplhavantageAPIs';
import { Link } from 'react-router-dom';

const Trending = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [gainers, setGainers] = useState([]);
    const [losers, setLosers] = useState([]);

    // Debounced API call
    const fetchSearchResults = debounce(async (query) => {
        if (query.trim() === "") return;
        try {
            const res = await axios.get(`/api/search?query=${query}`);
            setSearchResults(res.data);
            setShowResults(true);
        } catch (error) {
            console.error("Search API Error:", error);
        }
    }, 300);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value) {
            fetchSearchResults(value);
        } else {
            setShowResults(false);
        }
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setShowResults(false);
        setSearchResults([]);
    };

    useEffect(() => {
        // Load top gainers and losers
        const fetchTopData = async () => {
            try {
                const gainersRes = await callAvAPI({
                    function: "TOP_GAINERS_LOSERS"
                })
                setGainers(gainersRes.top_gainers);
                setLosers(gainersRes.top_losers);
            } catch (error) {
                console.error("Top stocks API error", error);
            }
        };

        fetchTopData();
    }, []);

    return (
        <div className="p-4 bg-black min-h-screen text-white">
            {/* Search Bar */}
            <div className="relative">
                <Input
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search stock..."
                    className="bg-gray-900 text-white border-gray-700 pr-10"
                />
                {searchTerm && (
                    <Button
                        variant="ghost"
                        className="absolute top-1/2 -translate-y-1/2 right-2 text-white"
                        size="icon"
                        onClick={handleClearSearch}
                    >
                        <X size={18} />
                    </Button>
                )}
            </div>

            {/* Search Results */}
            {showResults && searchResults.length > 0 && (
                <div className="mt-4 space-y-2">
                    {searchResults.map((stock) => (
                        <Link to={`/stock/${stock.name}`}>
                            <Card key={stock.id} className="bg-gray-800 border-gray-700">
                                <CardContent className="p-3">
                                    <div className="flex justify-between">
                                        <span>{stock.name}</span>
                                        <span className="text-green-400">{stock.price}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}

            {/* Gainers & Losers */}
            {!showResults && (
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {/* Gainers */}
                    {/* Gainers */}
                    <div>
                        <h2 className="text-xl font-bold mb-2 text-green-400">Top Gainers</h2>
                        <div className="space-y-3">
                            {Array.isArray(gainers) && gainers.map((gainer, index) => (
                                <Card key={index} className="bg-gray-900 border border-green-500 rounded-none text-white shadow-md pt-4">
                                    <CardContent className="pl-4 pr-4 pt-0 pb-0 space-y-1">
                                        <div className="flex justify-between text-lg font-semibold">
                                            <span>{gainer.ticker}</span>
                                            <span className="text-green-400">₹{gainer.price}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Change: <span className="text-green-300">+{gainer.change_amount}</span></span>
                                            <span>({gainer.change_percentage})</span>
                                        </div>
                                        <div className="text-xs text-gray-400">Vol: {Number(gainer.volume).toLocaleString()}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Losers */}
                    <div>
                        <h2 className="text-xl font-bold mb-2 text-red-400">Top Losers</h2>
                        <div className="space-y-3">
                            {Array.isArray(losers) && losers.map((loser, index) => (
                                <Card key={index} className="bg-gray-900 border border-red-500 rounded-none text-white shadow-md pt-4">
                                    <CardContent className="pl-4 pr-4 pt-0 pb-0 space-y-1">
                                        <div className="flex justify-between text-lg font-semibold">
                                            <span>{loser.ticker}</span>
                                            <span className="text-red-400">₹{loser.price}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Change: <span className="text-red-300">{loser.change_amount}</span></span>
                                            <span>({loser.change_percentage})</span>
                                        </div>
                                        <div className="text-xs text-gray-400">Vol: {Number(loser.volume).toLocaleString()}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Trending;
