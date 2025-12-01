import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Showcase3D from "./components/Showcase3D";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { useThrottle } from "./hooks/useThrottle";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = useThrottle(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
        {showBackToTop && (
          <div>
            <a href="#top" aria-label="Back to top">
              <div className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-800/50 hover:bg-gray-800/70 cursor-pointer">
                <ChevronDoubleUpIcon className="h-6 w-6 text-white" />
              </div>
            </a>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
