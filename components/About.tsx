"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";

export function About() {
    return (
        <section id="about" className="py-32 px-6 md:px-12 bg-background">
            <div className="max-w-4xl mx-auto w-full">
                <SectionReveal>
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12">
                        Philosophy
                    </h2>

                    <div className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight text-foreground space-y-12">
                        <p>
                            I build systems that clarify complexity.
                        </p>
                        <p className="text-text-secondary">
                            More than just code, I focus on the <span className="text-foreground font-normal">architecture of ideas</span>—ensuring that every line of code serves a clear, structural purpose.
                        </p>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}
