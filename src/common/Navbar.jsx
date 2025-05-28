import React, { useState } from "react";
import {
    MenuIcon,
    User,
    LogOut,
    Settings,
    TrendingUp,
    Heart,
    BarChart2,
    BadgeDollarSign,
    Home,
    Briefcase,
    Banknote,
    Book,
    PenSquare,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
// import Cookies from "js-cookie";

const Navbar = () => {
    const navigate = useNavigate();
    const userData = "Arpita"; // replace this with actual user logic

    const [userSidebarOpen, setUserSidebarOpen] = useState(false);

    const handleLogout = () => {
        // Cookies.remove("user");
        navigate("/login");
    };

    return (
        <div className="w-full min-w-fit overflow-x-hidden m-0 p-0">
            {/* Top Navbar (Desktop & Mobile) */}
            <nav className="bg-black text-white p-4 flex items-center justify-between shadow-md sticky top-0 w-full z-50">
                <h1 className="font-serif text-xl">VyaparSetu</h1>

                {/* Center links for desktop */}
                {userData ? (
                    <ul className="hidden md:flex space-x-6 text-base lg:text-lg">
                        <Link to="/top">
                            <li className="hover:text-gray-400 cursor-pointer font-light">Trendings</li>
                        </Link>
                        <Link to="/portfolio">
                            <li className="hover:text-gray-400 cursor-pointer font-light">Portfolio</li>
                        </Link>
                        <Link to="/orders">
                            <li className="hover:text-gray-400 cursor-pointer font-light">Orders</li>
                        </Link>
                    </ul>
                ) : (
                    <div>
                        <Link to="/top">
                            <li className="hover:text-gray-400 cursor-pointer font-light">Trendings</li>
                        </Link>
                    </div>
                )}


                {/* Right side menu icon */}
                {userData ? (
                    <Sheet open={userSidebarOpen} onOpenChange={setUserSidebarOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="text-white p-2 hidden md:flex">
                                <MenuIcon className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#111] text-white w-72 sm:w-64 p-5 flex flex-col justify-between">
                            <div>
                                <div className="mb-6 border-b border-gray-700 pb-4">
                                    <h2 className="text-lg font-mono">Hello, {userData}</h2>
                                    <p className="text-sm text-gray-400">Welcome back to VyaparSetu!</p>
                                </div>

                                <ul className="space-y-4">
                                    <Link to={"/transactions"} className="flex items-center space-x-3 cursor-pointer hover:text-blue-400 font-light">
                                        <PenSquare className="w-5 h-5" />
                                        <span>Transactions</span>
                                    </Link>
                                    <Link to={"/statement"} className="flex items-center space-x-3 cursor-pointer hover:text-blue-400 font-light">
                                        <Book className="w-5 h-5" />
                                        <span>Statements</span>
                                    </Link>
                                    <Link className="flex items-center space-x-3 cursor-pointer hover:text-blue-400 font-light">
                                        <BarChart2 className="w-5 h-5" />
                                        <span>Profit / Loss</span>
                                    </Link>
                                    <Link className="flex items-center space-x-3 cursor-pointer hover:text-blue-400 font-light">
                                        <User className="w-5 h-5" />
                                        <span>My Account</span>
                                    </Link>
                                </ul>
                            </div>

                            <div className="flex flex-col items-start space-y-4 mt-6">
                                <button onClick={handleLogout} className="flex items-center space-x-3 text-red-500 hover:text-red-700">
                                    <LogOut className="w-5 h-5" />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </SheetContent>
                    </Sheet>
                ) : (
                    <Link to={"/signup"}><User /></Link>
                )}
            </nav>

            {/* Mobile Bottom Navbar */}
            {userData && (
                <div className="fixed bottom-0 w-full bg-black text-white flex justify-around items-center p-2 md:hidden border-t border-gray-700 z-50">
                    <Link to="/home" className="flex flex-col items-center text-xs">
                        <Home className="h-5 w-5" />
                        <span>Home</span>
                    </Link>
                    <Link to="/wishlist" className="flex flex-col items-center text-xs">
                        <Heart className="h-5 w-5" />
                        <span>Wishlist</span>
                    </Link>
                    <Link to="/portfolio" className="flex flex-col items-center text-xs">
                        <Briefcase className="h-5 w-5" />
                        <span>Portfolio</span>
                    </Link>
                    <button onClick={() => setUserSidebarOpen(true)} className="flex flex-col items-center text-xs">
                        <User className="h-5 w-5" />
                        <span>Account</span>
                    </button>
                </div>
            )}
        </div>

    );
};

export default Navbar;
