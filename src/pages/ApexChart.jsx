import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useParams } from "react-router-dom";
import { callAvAPI } from "@/API/aplhavantageAPIs";

const ApexChart = () => {
    const { stockName } = useParams();
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopData = async () => {
            try {
                const response = await callAvAPI({
                    function: "TIME_SERIES_INTRADAY",
                    symbol: stockName,
                    interval: "5min"
                });

                const rawData = response["Time Series (5min)"];
                if (!rawData) {
                    setError("No data available.");
                    return;
                }

                const formatted = Object.entries(rawData).map(([timestamp, data]) => ({
                    x: new Date(timestamp),
                    y: [
                        parseFloat(data["1. open"]),
                        parseFloat(data["2. high"]),
                        parseFloat(data["3. low"]),
                        parseFloat(data["4. close"])
                    ]
                }));

                formatted.sort((a, b) => a.x - b.x);
                setSeries([{ name: "Candlestick", data: formatted }]);
            } catch (error) {
                console.error("API Error:", error);
                setError("Failed to fetch stock data.");
            } finally {
                setLoading(false);
            }
        };

        if (stockName) fetchTopData();
    }, [stockName]);

    return (
        <div className="p-4 md:p-6 text-white min-h-screen bg-black">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
                {stockName} - <select className="bg-black">
                    <option>5min</option>
                    <option>10min</option>
                    <option>15min</option>
                    <option>30min</option>
                    <option>60min</option>
                </select>
            </h2>

            {loading ? (
                <p className="text-gray-300">Loading chart...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="w-full overflow-x-auto">
                    <div className="min-w-[320px] md:min-w-[600px]">
                        <ReactApexChart
                            options={{
                                chart: {
                                    type: 'candlestick',
                                    height: 350,
                                    background: '#1a1a1a',
                                    toolbar: {
                                        show: true,
                                        tools: {
                                            download: true,
                                            selection: true,
                                            zoom: true,
                                            zoomin: true,
                                            zoomout: true,
                                            pan: true
                                        }
                                    }
                                },
                                title: {
                                    text: `${stockName} Intraday`,
                                    align: 'left',
                                    style: { color: '#fff' }
                                },
                                xaxis: {
                                    type: 'datetime',
                                    labels: {
                                        style: { colors: '#cbd5e1' } // slate-300
                                    }
                                },
                                yaxis: {
                                    tooltip: { enabled: true },
                                    labels: {
                                        style: { colors: '#cbd5e1' }
                                    }
                                },
                                theme: {
                                    mode: 'dark'
                                }
                            }}
                            series={series}
                            type="candlestick"
                            height={350}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApexChart;
