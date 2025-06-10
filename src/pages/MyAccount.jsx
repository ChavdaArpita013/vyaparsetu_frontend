import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Banknote, PlusCircle } from "lucide-react";

const MyAccount = () => {
    return (
        <div className="bg-black min-h-screen bg-background text-foreground px-4  md:px-10 space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">My Account</h1>
            {/* Add Funds Button */}
            <div className="flex justify-end">
                <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-4 sm:px-6 py-2 text-base sm:text-lg"
                >
                    <PlusCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Add Funds
                </Button>
            </div>

            {/* Side-by-side Cash Cards (Responsive) */}
            <div className="flex flex-nowrap gap-4 overflow-x-auto pb-2 pl-2">
                {/* Available Cash */}
                <Card className="w-[160px] sm:w-[50%] md:w-[50%] bg-[#1e1e2f] border rounded-none border-[#2d2d40] text-white">
                    <CardHeader>
                        <CardTitle className="text-base md:text-lg">Available </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl md:text-3xl font-semibold">₹5,000</p>
                    </CardContent>
                </Card>

                {/* Withdrawable Cash */}
                <Card className="w-[160px] sm:w-[50%] md:w-[50%] bg-[#1e1e2f] border rounded-none border-[#2d2d40] text-white shrink-0">
                    <CardHeader>
                        <CardTitle className="text-base md:text-lg">Withdrawable </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl md:text-3xl font-semibold">₹2,000</p>
                    </CardContent>
                </Card>
            </div>

            

            {/* Linked Bank Account */}
            <Card className="bg-[#1e1e2f] border rounded-none border-[#2d2d40] text-white">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                        <Banknote className="w-4 h-4 sm:w-5 sm:h-5" />
                        Linked Bank Account
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm sm:text-base">
                    <p><span className="font-semibold text-gray-300">Bank Name:</span> State Bank of India</p>
                    <p><span className="font-semibold text-gray-300">Account Holder:</span> Arpita Sharma</p>
                    <p><span className="font-semibold text-gray-300">Account Number:</span> XXXX-XXXX-1234</p>
                    <p><span className="font-semibold text-gray-300">IFSC Code:</span> SBIN0001234</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default MyAccount;
