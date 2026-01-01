"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative inline-block ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="relative z-10">{text}</span>

            {isHovered && (
                <>
                    <motion.span
                        className="absolute top-0 left-0 -z-10 text-accent opacity-70"
                        animate={{
                            x: [-2, 2, -1, 0],
                            y: [1, -1, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.2,
                            repeatType: "mirror"
                        }}
                    >
                        {text}
                    </motion.span>
                    <motion.span
                        className="absolute top-0 left-0 -z-10 text-blue-500 opacity-70"
                        animate={{
                            x: [2, -2, 1, 0],
                            y: [-1, 1, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.3,
                            repeatType: "mirror"
                        }}
                    >
                        {text}
                    </motion.span>
                </>
            )}
        </div>
    );
}
