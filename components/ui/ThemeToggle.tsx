"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 0 : 180,
                    scale: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-2"
            >
                <Moon className="w-5 h-5 text-zinc-100" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? -180 : 0,
                    scale: theme === "dark" ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
            >
                <Sun className="w-5 h-5 text-zinc-900" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
