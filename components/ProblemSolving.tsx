"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";

export function ProblemSolving() {
    return (
        <section id="problem-solving" className="py-32 px-6 md:px-12 bg-black">
            <div className="max-w-4xl mx-auto w-full">
                <SectionReveal>
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12">
                        Methodology
                    </h2>

                    <div className="text-2xl md:text-3xl font-light leading-relaxed text-text-secondary max-w-3xl">
                        <span className="text-white">Clarity before code.</span> I deconstruct systems into their base constraints, then rebuild them with structural intent. No bloat, just logic.
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}
