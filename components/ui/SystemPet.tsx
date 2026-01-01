"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export function SystemPet() {
    const [isHovered, setIsHovered] = useState(false);
    const [isPetting, setIsPetting] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Track mouse for eye movement
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            setMousePos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Limit eye movement
    const eyeX = Math.min(Math.max(mousePos.x / 10, -2), 2);
    const eyeY = Math.min(Math.max(mousePos.y / 10, -2), 2);

    const handlePet = () => {
        if (isDragging) return;
        setIsPetting(true);
        setTimeout(() => setIsPetting(false), 800);
    };

    return (
        <motion.div
            ref={containerRef}
            drag
            dragMomentum={false} // Stops instantly when dropped (more control)
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            className="fixed bottom-6 right-6 z-50 pointer-events-auto cursor-grab touch-none"
            onClick={handlePet}
            initial={{ x: 0, y: 0 }}
            style={{ x: 0, y: 0 }} // Ensure it starts at the CSS position but can be moved
        >
            <motion.div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={{
                    // Bobbing animation only when NOT dragging
                    y: isDragging ? 0 : (isPetting ? [0, 3, 0] : [0, -3, 0]),
                    // Dangling rotation (tilt) when dragging based on direction could be complex, 
                    // but a simple wiggle works for "struggling" cute effect.
                    rotate: isDragging ? [-5, 5, -5] : 0,
                }}
                transition={{
                    y: {
                        duration: isPetting ? 0.2 : 3,
                        repeat: isDragging ? 0 : (isPetting ? 3 : Infinity),
                        ease: "easeInOut",
                    },
                    rotate: {
                        duration: 0.2,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }}
            >
                {/* Chat Bubble - Context Aware */}
                <AnimatePresence>
                    {(isHovered || isPetting || isDragging) && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, y: 5, x: -10 }}
                            animate={{ opacity: 1, scale: 1, y: -35 }}
                            exit={{ opacity: 0, scale: 0.5, y: 5 }}
                            className="absolute -top-10 right-0 bg-white text-black px-3 py-1.5 rounded-xl rounded-br-none whitespace-nowrap shadow-lg border border-pink-100 pointer-events-none"
                        >
                            <span className="text-[10px] font-black tracking-wide text-pink-500">
                                {isDragging ? "wheeee!~" : (isPetting ? "mew! <3" : "pick me up!")}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating Hearts */}
                <AnimatePresence>
                    {isPetting && !isDragging && (
                        <>
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 1, y: 0, x: 0, scale: 0.4 }}
                                    animate={{
                                        opacity: 0,
                                        y: -30 - Math.random() * 15,
                                        x: (Math.random() - 0.5) * 30,
                                        scale: 1
                                    }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className="absolute top-0 left-1/2 text-pink-400 text-xs pointer-events-none"
                                >
                                    ♥
                                </motion.div>
                            ))}
                        </>
                    )}
                </AnimatePresence>

                {/* The Cuter Cat SVG */}
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-foreground drop-shadow-xl dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-colors duration-300"
                >
                    {/* Main Body */}
                    <path
                        d="M12 20C16.5 20 20 16.5 20 12C20 7.5 16.5 4 12 4C7.5 4 4 7.5 4 12C4 16.5 7.5 20 12 20Z"
                        fill="currentColor"
                        fillOpacity="0.15"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    />

                    {/* Ears */}
                    <path d="M7 6L5.5 3.5L9.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 6L18.5 3.5L14.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Blush Cheeks */}
                    <circle cx="6.5" cy="12.5" r="1.5" fill="#f472b6" fillOpacity={isHovered || isDragging ? "0.6" : "0.3"} />
                    <circle cx="17.5" cy="12.5" r="1.5" fill="#f472b6" fillOpacity={isHovered || isDragging ? "0.6" : "0.3"} />

                    {/* Eyes Group - Context Aware */}
                    <g transform={isDragging ? `translate(0, 0)` : `translate(${isHovered ? eyeX : 0}, ${isHovered ? eyeY : 0})`}>
                        {isDragging ? (
                            // Dragging Eyes (> <) or (O O) - Let's do Dizzy/Surprised (> <)
                            <>
                                <path d="M7 10L9 12L7 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 10L15 12L17 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                        ) : isPetting ? (
                            // Happy Eyes (^ ^)
                            <>
                                <path d="M7.5 10.5C7.5 10.5 8.5 9.5 9.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                <path d="M14.5 10.5C14.5 10.5 15.5 9.5 16.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </>
                        ) : isHovered ? (
                            // Big Round Eyes (Tracking)
                            <>
                                <circle cx="8.5" cy="11" r="2.2" fill="currentColor" />
                                <circle cx="15.5" cy="11" r="2.2" fill="currentColor" />
                                <circle cx="9.2" cy="10.2" r="0.8" fill="white" />
                                <circle cx="16.2" cy="10.2" r="0.8" fill="white" />
                            </>
                        ) : (
                            // Sleeping Eyes (u u)
                            <>
                                <path d="M7.5 11C7.5 11 8.5 12 9.5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                <path d="M14.5 11C14.5 11 15.5 12 16.5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </>
                        )}
                    </g>

                    {/* Tiny Nose & Mouth */}
                    <path d="M12 13V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    {isDragging ? (
                        // Open mouth "O"
                        <circle cx="12" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                    ) : (
                        // Normal mouth "w"
                        <path d="M11.5 13.5L12 14L12.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    )}

                    {/* Tail */}
                    <motion.path
                        d={isDragging ? "M19 17C19 17 21 21 21 23" : "M19 17C19 17 21.5 15 21.5 13"} // Tail drops when dragged
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        animate={{
                            rotate: isPetting ? [0, 20, -20, 0] : (isDragging ? [0, 5, -5, 0] : [0, 8, 0]),
                        }}
                        transition={{
                            rotate: { duration: isPetting ? 0.15 : (isDragging ? 0.2 : 1.5), repeat: Infinity, ease: "easeInOut" },
                        }}
                        style={{ originX: "0%", originY: "100%" }}
                    />

                    {/* Dangling Arms (Only when dragging) */}
                    <AnimatePresence>
                        {isDragging && (
                            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <path d="M9 16L8 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                <path d="M15 16L16 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </motion.g>
                        )}
                    </AnimatePresence>

                    {/* Sleeping Zzzs (Only when idle) */}
                    <AnimatePresence>
                        {!isHovered && !isDragging && !isPetting && (
                            <motion.g
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.text
                                    x="16" y="6" fontSize="8" fill="currentColor" opacity="0.6"
                                    initial={{ y: 0, opacity: 0 }}
                                    animate={{ y: -8, opacity: [0, 1, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                >
                                    z
                                </motion.text>
                                <motion.text
                                    x="22" y="2" fontSize="6" fill="currentColor" opacity="0.6"
                                    initial={{ y: 0, opacity: 0 }}
                                    animate={{ y: -8, opacity: [0, 1, 0] }}
                                    transition={{ duration: 2.5, delay: 1.2, repeat: Infinity, ease: "linear" }}
                                >
                                    z
                                </motion.text>
                            </motion.g>
                        )}
                    </AnimatePresence>

                </svg>
            </motion.div>
        </motion.div>
    );
}
