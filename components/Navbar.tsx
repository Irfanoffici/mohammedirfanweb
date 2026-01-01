"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Work", to: "work" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
    { name: "Resume", to: "resume", isExternal: true },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const handleClick = (item: typeof navItems[0]) => {
        if (item.isExternal) {
            window.open("/Mohammed-Irfan-Resume.pdf", "_blank");
            setIsOpen(false);
            return;
        }
        scrollToSection(item.to);
    };

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth" });
            }, 400);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <>
            <motion.button
                onClick={toggleMenu}
                className="fixed top-6 right-6 z-[60] p-3 text-white mix-blend-difference opacity-80 hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="sr-only">Toggle Menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center glass-overlay"
                    >
                        <nav className="relative z-10 flex flex-col items-center gap-6 md:gap-8">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => handleClick(item)}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                    className="group relative"
                                >
                                    <span className="text-4xl md:text-5xl font-bold tracking-tight text-white hover:text-accent transition-colors duration-300">
                                        {item.name}
                                    </span>
                                </motion.button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
