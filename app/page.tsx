import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { ProblemSolving } from "@/components/ProblemSolving";
import { Learning } from "@/components/Learning";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <ProblemSolving />
      <Learning />
      <Contact />
      <Footer />
    </main>
  );
}
