import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useActiveSection from './hooks/useActiveSection';
import { SECTION_IDS } from './data/portfolio';

export default function App() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <>
      <Navbar activeId={activeId} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
