"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import Sidebar from "./Sidebar";
import { useTheme } from "@/components/ThemeProvider";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-30 flex justify-between items-center p-6 md:p-8 mix-blend-difference text-white">
                {/* Logo or Home Link (Optional, kept minimal as requested) */}
                <div className="font-bold text-lg tracking-tighter">
                    {/* PORTFOLIO */}
                </div>

                <div className="flex items-center space-x-6">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 hover:opacity-70 transition-opacity"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    {/* Menu Button */}
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="group flex items-center space-x-2 text-sm font-medium uppercase tracking-widest hover:opacity-70 transition-opacity"
                    >
                        <span>Menu</span>
                        <span className="text-xl leading-none">+</span>
                    </button>
                </div>
            </header>

            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </>
    );
}

