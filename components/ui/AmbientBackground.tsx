"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Orb 1 - Top Left */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-900/10 rounded-full blur-[120px]"
            />

            {/* Orb 2 - Bottom Right */}
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-indigo-900/10 rounded-full blur-[120px]"
            />

            {/* Orb 3 - Middle accent */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.1, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[30%] right-[30%] w-[40vw] h-[40vw] bg-violet-900/5 rounded-full blur-[100px]"
            />
        </div>
    );
}
