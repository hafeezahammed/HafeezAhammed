import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
