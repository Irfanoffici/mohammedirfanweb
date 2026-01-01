"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";

const learningItems = [
    "Advanced System Architecture",
    "High-Performance Rendering",
    "Technical Leadership Dynamics",
];

export function Learning() {
    return (
        <section id="learning" className="py-32 px-6 md:px-12 bg-black">
            <div className="max-w-4xl mx-auto w-full">
                <SectionReveal>
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12">
                        Current Focus
                    </h2>

                    <ul className="space-y-8">
                        {learningItems.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-3xl md:text-5xl font-black italic tracking-tighter text-white/20 hover:text-white transition-colors duration-500 cursor-default"
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </SectionReveal>
            </div>
        </section>
    );
}
