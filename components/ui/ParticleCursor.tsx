"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function ParticleCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();
    const isLight = theme === 'light';

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let mouse = { x: 0, y: 0 };
        let isActive = false;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;
            life: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 2 + 0.5; // Tiny specks
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;

                const isLight = theme === 'light';
                // Dark particles in light mode, Violet/White in dark mode
                this.color = isLight
                    ? `rgba(${50 + Math.random() * 50}, ${50 + Math.random() * 50}, ${50 + Math.random() * 50}, ${Math.random() * 0.4 + 0.2})`
                    : `rgba(${167 + Math.random() * 50}, ${139 + Math.random() * 50}, 250, ${Math.random() * 0.5 + 0.5})`;
                this.life = 100;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life -= 2; // Fade out speed
                if (this.size > 0.1) this.size -= 0.05;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.strokeStyle = this.color;

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.globalAlpha = this.life / 100;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            isActive = true;

            // Spawn particles on move
            for (let i = 0; i < 2; i++) {
                particles.push(new Particle(mouse.x, mouse.y));
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                if (particles[i].life <= 0) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [theme]);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 pointer-events-none z-50 ${isLight ? 'mix-blend-normal' : 'mix-blend-screen'}`}
        />
    );
}
