import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/language-context";

export default function Home() {
  return (
    <LanguageProvider>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Team />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

