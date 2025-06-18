import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

// Simulate wallet and holding state
const AVAILABLE_BALANCE = 50000;
const HOLDINGS = 10;

const BuySellModal = ({ mode = "buy", stockName = "TCS", currentPrice = "3845.00" }) => {
    const [quantity, setQuantity] = useState(1);
    const [orderType, setOrderType] = useState("market");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        const price = parseFloat(currentPrice);
        const totalCost = price * quantity;

        if (mode === "buy") {
            if (totalCost > AVAILABLE_BALANCE) {
                setError(`Not enough balance. You can buy up to ₹${Math.floor(AVAILABLE_BALANCE / price)} shares.`);
                return;
            }
        } else if (mode === "sell") {
            if (quantity > HOLDINGS) {
                setError(`You only hold ${HOLDINGS} shares. You can't sell more than that.`);
                return;
            }
        }

        setError(""); // Clear previous error
        alert(`${mode.toUpperCase()} ${quantity} shares of ${stockName} at ${orderType.toUpperCase()} price.`);
    };

    return (
        <Dialog >
            <DialogTrigger asChild >
                <Button variant={mode === "buy" ? "default" : "destructive"}>
                    {mode === "buy" ? "Buy" : "Sell"}
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[450px] bg-gray-900">
                <DialogHeader>
                    <DialogTitle>{mode === "buy" ? "Buy" : "Sell"} {stockName}</DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="flex flex-col gap-2">
                        <Label>Current Price</Label>
                        <span className="text-green-600 font-semibold">₹{currentPrice}</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input
                            id="quantity"
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Order Type</Label>
                        <RadioGroup
                            defaultValue="market"
                            onValueChange={(value) => setOrderType(value)}
                            className="flex gap-4"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="market" id="market" />
                                <Label htmlFor="market">Market</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="limit" id="limit" />
                                <Label htmlFor="limit">Limit</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {error && (
                        <Alert variant="destructive" className="bg-red-600">
                            <AlertTriangle/>
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="flex justify-end">
                    <Button onClick={handleSubmit}>
                        Confirm {mode === "buy" ? "Buy" : "Sell"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BuySellModal;
