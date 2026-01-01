"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";

export function Contact() {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 bg-black min-h-[50vh] flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full text-center">
                <SectionReveal>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12">
                        Construct
                    </p>

                    <a
                        href="mailto:mailtomohammedirfank@gmail.com"
                        className="group relative inline-block"
                    >
                        <h2 className="text-5xl md:text-8xl lg:text-9xl font-black italic tracking-tighter text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-accent transition-all duration-500">
                            LET'S TALK
                        </h2>
                        <div className="h-2 w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center mt-4" />
                    </a>

                    <div className="flex justify-center gap-12 mt-20 mb-20">
                        <a href="https://github.com/irfanoffici" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-text-secondary hover:text-white transition-colors">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/irfaanoffici" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-text-secondary hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://instagram.com/irfanoffici" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-text-secondary hover:text-white transition-colors">
                            Instagram
                        </a>
                    </div>

                    {/* Footer Clean - SoundWave Removed */}
                    <div className="flex flex-col items-center gap-4 opacity-50">
                        <p className="text-[10px] uppercase tracking-widest text-zinc-600">
                            System Verified · {new Date().getFullYear()}
                        </p>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}
