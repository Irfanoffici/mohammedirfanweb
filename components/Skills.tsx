"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";

type Skill = {
    name: string;
    url: string;
    description: string;
};

type Category = {
    title: string;
    items: Skill[];
};

const skillCategories: Category[] = [
    {
        title: "CORE",
        items: [
            { name: "Next.js", url: "https://nextjs.org/", description: "The React Framework for the Web" },
            { name: "React", url: "https://react.dev/", description: "The library for web and native user interfaces" },
            { name: "TypeScript", url: "https://www.typescriptlang.org/", description: "JavaScript with syntax for types" },
            { name: "Node.js", url: "https://nodejs.org/", description: "JavaScript runtime built on Chrome's V8" },
            { name: "System Design", url: "https://en.wikipedia.org/wiki/Systems_design", description: "Defining architecture and interfaces" },
        ],
    },
    {
        title: "TOOLS",
        items: [
            { name: "Git", url: "https://git-scm.com/", description: "Distributed version control system" },
            { name: "Linux", url: "https://www.linux.org/", description: "Open source operating system" },
            { name: "Docker", url: "https://www.docker.com/", description: "Accelerate how you build, share, and run applications" },
            { name: "Figma", url: "https://www.figma.com/", description: "Collaborative interface design tool" },
            { name: "AI Workflows", url: "#", description: "Integrating LLMs into development pipelines" },
        ],
    },
    {
        title: "LANGUAGES",
        items: [
            { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", description: "The programming language of the Web" },
            { name: "Java", url: "https://www.java.com/", description: "Object-oriented programming language" },
            { name: "C++", url: "https://isocpp.org/", description: "High-performance programming language" },
            { name: "Python", url: "https://www.python.org/", description: "Programming language that lets you work quickly" },
            { name: "SQL", url: "https://en.wikipedia.org/wiki/SQL", description: "Standard language for storing and manipulating data" },
        ],
    },
];

export function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        // Relative to the viewport/container is tricky with fixed/absolute. 
        // Let's use simple offset from the target element or simple generic cursor tracking if restricted.
        // For simplicity and performance in this specific component context:
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <section id="skills" className="py-32 px-6 md:px-12 bg-black relative">
            <SectionReveal className="max-w-6xl mx-auto w-full border-t border-white/10 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {skillCategories.map((category, idx) => (
                        <div key={category.title}>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">
                                {category.title}
                            </h3>
                            <ul className="space-y-4">
                                {category.items.map((item) => (
                                    <li key={item.name} className="relative block w-fit">
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl md:text-2xl font-light text-text-secondary hover:text-white transition-colors cursor-pointer inline-block"
                                            onMouseEnter={(e) => {
                                                setHoveredSkill(item.name);
                                                setMousePos({ x: e.clientX, y: e.clientY });
                                            }}
                                            onMouseMove={handleMouseMove}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                        >
                                            {item.name}
                                        </a>

                                        {/* Floating Tooltip */}
                                        <AnimatePresence>
                                            {hoveredSkill === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                    style={{
                                                        position: 'fixed',
                                                        left: mousePos.x + 20,
                                                        top: mousePos.y - 20,
                                                        zIndex: 50
                                                    }}
                                                    className="pointer-events-none hidden md:block" // Hide on mobile strictly
                                                >
                                                    <div className="glass-subtle px-4 py-3 rounded-xl border border-white/10 shadow-2xl bg-black/80 max-w-[200px]">
                                                        <p className="text-xs font-medium text-white leading-tight">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
