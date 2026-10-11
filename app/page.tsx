import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import WorkDocuments from "@/components/sections/work-documents";
import Education from "@/components/sections/education";
import Achievements from "@/components/sections/achievements";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <WorkDocuments />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
