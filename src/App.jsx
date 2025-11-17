
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Showcase3D from './components/Showcase3D';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Showcase3D />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
