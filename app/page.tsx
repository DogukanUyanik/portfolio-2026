import { LanguageProvider } from "@/src/i18n/LanguageContext";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import TechStack from "@/src/components/TechStack";
import Experience from "@/src/components/Experience";
import Projects from "@/src/components/Projects";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
