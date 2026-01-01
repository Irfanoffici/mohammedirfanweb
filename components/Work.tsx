"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ArrowUpRight, Hammer, Code2, Rocket } from "lucide-react";

interface Project {
    title: string;
    category: string;
    description: string;
    link?: string;
    color: string;
    status: "Under Construction" | "On Development" | "Yet to Deploy";
}

const projects: Project[] = [
    {
        title: "AURA",
        category: "AI / Assistant",
        description: "Advanced voice-enabled AI assistant with emotion recognition and long-term memory.",
        link: "#",
        color: "from-purple-500/10 to-blue-500/10",
        status: "Under Construction",
    },
    {
        title: "NoteLytics",
        category: "SaaS / Productivity",
        description: "Intelligent note-taking platform with AI-powered analytics and study tools.",
        link: "#",
        color: "from-emerald-500/10 to-teal-500/10",
        status: "On Development",
    },
    {
        title: "Skrybe",
        category: "Design / Tool",
        description: "Collaborative whiteboard and design system generator for creative teams.",
        link: "#",
        color: "from-orange-500/10 to-red-500/10",
        status: "Yet to Deploy",
    },
    {
        title: "Vortex",
        category: "Web3 / DeFi",
        description: "Decentralized exchange aggregator with real-time analytics and gas optimization.",
        link: "#",
        color: "from-blue-500/10 to-cyan-500/10",
        status: "On Development",
    },
];

const StatusIcon = ({ status }: { status: Project["status"] }) => {
    switch (status) {
        case "Under Construction": return <Hammer size={14} className="animate-pulse" />;
        case "On Development": return <Code2 size={14} />;
        case "Yet to Deploy": return <Rocket size={14} />;
        default: return null;
    }
};

const StatusBadge = ({ status }: { status: Project["status"] }) => {
    const colors = {
        "Under Construction": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        "On Development": "bg-blue-500/10 text-blue-500 border-blue-500/20",
        "Yet to Deploy": "bg-purple-500/10 text-purple-500 border-purple-500/20",
    };

    return (
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold tracking-wide uppercase mt-6 w-fit ${colors[status]}`}>
            <StatusIcon status={status} />
            <span>{status}</span>
        </div>
    );
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-accent/50 transition-colors duration-500 cursor-pointer min-h-[300px]"
        >
            {/* Background Gradient Blob */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent border border-accent/20 px-3 py-1 rounded-full bg-accent/5">
                        {project.category}
                    </span>
                    <motion.div
                        whileHover={{ rotate: 45 }}
                        className="p-2 rounded-full bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <ArrowUpRight size={20} />
                    </motion.div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground group-hover:text-white transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground group-hover:text-zinc-300 transition-colors leading-relaxed">
                    {project.description}
                </p>

                <div className="mt-auto">
                    <StatusBadge status={project.status} />
                </div>
            </div>
        </motion.div>
    );
}

export function Work() {
    return (
        <section id="work" className="py-32 px-6 md:px-12 bg-background min-h-[80vh]">
            <div className="max-w-7xl mx-auto">
                <SectionReveal>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
                                Selected Work
                            </p>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground">
                                FEATURED<br />PROJECTS
                            </h2>
                        </div>
                        <p className="max-w-md text-muted-foreground text-sm md:text-base">
                            A collection of digital experiences focusing on interaction, utility, and motion.
                        </p>
                    </div>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
