import Header from "@/components/layout/Header";
import Hero from "@/pages/Home/sections/Hero";
import Projects from "@/pages/Home/sections/Projects";
import Contact from "@/pages/Home/sections/Contact";
import Container from "@/components/layout/Container";
import Experience from "@/pages/Home/sections/Experience";

export default function HomePage() {
  return (
    <Container>
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </Container>
  );
}
