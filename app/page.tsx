import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Gallery from "@/components/Gallery";
import Interests from "@/components/Interests";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-main-bg text-main-text">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Gallery />
      <Achievements />
      <Interests />
      <Contact />
    </main>
  );
}
