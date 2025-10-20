"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/theme-context";
import { Moon, Sun } from "lucide-react";
export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return (<div className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg"/>);
    }
    return (<button onClick={toggleTheme} className="fixed top-6 right-6 z-50 group flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" aria-label="Toggle theme">
      <div className="relative w-8 h-8">
        
        <Sun className={`absolute inset-0 w-8 h-8 text-[#0055a4] transition-all duration-500 ${theme === "light"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-0"}`}/>
        {/* Moon Icon */}
        <Moon className={`absolute inset-0 w-8 h-8 text-blue-300 transition-all duration-500 ${theme === "dark"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0"}`}/>
      </div>

      {/* Decorative ring animation */}
      <div className="absolute inset-0 rounded-full border-2 border-[#0055a4] dark:border-blue-300 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"/>
    </button>);
}
