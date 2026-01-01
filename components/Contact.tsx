"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { Github, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 bg-background min-h-[60vh] flex flex-col justify-center relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full text-center relative z-10">
                <SectionReveal>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">
                        Construct
                    </p>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground mb-12">
                        READY TO START<br />A NEW PROJECT?
                    </h2>

                    <div className="flex flex-col items-center gap-8 mb-20">
                        <a
                            href="mailto:mailtomohammedirfank@gmail.com"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold tracking-wide hover:bg-accent hover:text-white transition-all duration-300 w-full md:w-auto"
                        >
                            <Mail size={20} />
                            <span>SEND ME AN EMAIL</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="flex justify-center gap-8 md:gap-12 items-center">
                        <a
                            href="https://github.com/irfanoffici"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full bg-card-bg border border-card-border hover:bg-button-hover hover:scale-110 transition-all duration-300 group"
                            aria-label="GitHub"
                        >
                            <Github size={24} className="text-text-secondary group-hover:text-foreground transition-colors" />
                        </a>
                        <a
                            href="https://linkedin.com/in/irfaanoffici"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full bg-card-bg border border-card-border hover:bg-button-hover hover:scale-110 transition-all duration-300 group"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} className="text-text-secondary group-hover:text-foreground transition-colors" />
                        </a>
                        <a
                            href="https://instagram.com/irfanoffici"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full bg-card-bg border border-card-border hover:bg-button-hover hover:scale-110 transition-all duration-300 group"
                            aria-label="Instagram"
                        >
                            <Instagram size={24} className="text-text-secondary group-hover:text-foreground transition-colors" />
                        </a>
                    </div>

                    {/* Footer Clean */}
                    <div className="mt-24 flex flex-col items-center gap-4 opacity-50">
                        <p className="text-[10px] uppercase tracking-widest text-zinc-600">
                            System Verified · {new Date().getFullYear()}
                        </p>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}
