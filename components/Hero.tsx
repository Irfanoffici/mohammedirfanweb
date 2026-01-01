"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden"
        >
            {/* Background Glow - Subtle & Warm */}
            <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] bg-accent/5 rounded-full blur-[120px]"
            />

            <div className="relative z-10 max-w-5xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight text-foreground bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-400">
                        Mohammed Irfan
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="relative inline-block"
                >
                    <div className="glass-subtle px-6 py-2 rounded-full inline-block">
                        <p className="text-lg md:text-xl font-normal text-text-secondary max-w-2xl mx-auto leading-relaxed">
                            Systems Thinker · Developer
                        </p>
                    </div>
                </motion.div>

                {/* Resume Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-12"
                >
                    <a
                        href="/Mohammed-Irfan-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-3 bg-zinc-900/50 hover:bg-zinc-800/50 border border-white/10 rounded-full transition-all duration-300 hover:border-accent/40 backdrop-blur-sm"
                    >
                        <span className="text-sm font-bold tracking-widest uppercase text-zinc-300 group-hover:text-white transition-colors">
                            View Resume
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:shadow-[0_0_8px_rgba(139,92,246,0.6)] transition-all duration-300" />
                    </a>
                </motion.div>

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.8 }}
                    className="text-sm md:text-base text-zinc-500 mt-12 block"
                >
                    Building clarity out of complexity.
                </motion.span>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-text-secondary opacity-50">Scroll</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-text-secondary/50 to-transparent" />
            </motion.div>
        </section>
    );
}
