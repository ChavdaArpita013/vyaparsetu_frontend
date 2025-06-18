import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
    return (
        <div className="min-h-screen bg-[#1a1a1a] px-4 pt-12 flex items-start justify-center">
            <div className="bg-[#0e0e0e] rounded-none shadow-xl p-6 sm:p-8 w-full max-w-sm space-y-5 text-white">

                <h2 className="text-2xl text-center text-white font-thin">
                    Login to VyaparSetu
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-light text-gray-300">User ID</label>
                        <Input
                            type="text"
                            placeholder="Enter User ID"
                            className="bg-[#1f1f1f] text-white placeholder:text-gray-400 font-light"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-light text-gray-300">Password</label>
                        <Input
                            type="password"
                            placeholder="Enter password"
                            className="bg-[#1f1f1f] text-white placeholder:text-gray-400 font-light"
                        />
                        <span className="text-sm font-light text-red-500">For credentials check your email</span>
                    </div>
                </div>

                {/* Create Demat & Login with TPIN */}
                <div className="flex justify-between text-sm text-blue-400">
                    <button className="hover:underline">Create Demat Account</button>
                </div>

                {/* Login Button */}
                <Button className="w-full mt-2 bg-[#1f1f1f]">Login</Button>
            </div>
        </div>
    );
};

export default Login;
