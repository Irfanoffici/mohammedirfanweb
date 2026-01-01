"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";

const projects = [
    {
        title: "Technical Projects",
        summary: "Full Stack Development",
    },
    {
        title: "Collaboration",
        summary: "Team Leadership",
    },
    {
        title: "Systems Design",
        summary: "Architecture & Logic",
    },
];

export function Work() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section id="work" className="py-32 px-6 md:px-12">
            <div className="max-w-4xl mx-auto w-full">
                <SectionReveal>
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-16">
                        Selected Works
                    </h2>

                    <div className="flex flex-col">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onMouseEnter={() => setHovered(project.title)}
                                onMouseLeave={() => setHovered(null)}
                                className="group relative border-t border-zinc-800 py-12 cursor-pointer transition-all duration-500 hover:border-zinc-700 hover:px-6 rounded-lg hover:glass-subtle"
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 relative z-10 transition-all duration-500">
                                    <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <div className="md:text-right">
                                        <p className="text-base text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">{project.summary}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="border-t border-zinc-800" />
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}
