"use client";

import { motion } from "framer-motion";

export function SoundWave() {
    return (
        <div className="flex items-end justify-center gap-1.5 h-8">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        height: ["20%", "80%", "20%"],
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: i * 0.1, // Stagger effect
                    }}
                    className="w-1 bg-accent/50 rounded-full"
                    style={{
                        height: "20%" // Initial height to prevent layout shift before hydration
                    }}
                />
            ))}
        </div>
    );
}
