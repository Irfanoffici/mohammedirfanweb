import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { ParticleCursor } from "@/components/ui/ParticleCursor";
import { SystemPet } from "@/components/ui/SystemPet";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammed Irfan — Portfolio",
  description: "Systems Thinker & Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <GrainOverlay />
          <AmbientBackground />
          <ParticleCursor />
          <SystemPet />
          <main className="relative z-10 flex-grow">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
