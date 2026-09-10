import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Team />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
