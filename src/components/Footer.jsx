import React, { useState, useEffect } from "react";
import { EnvelopeIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const sections = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const [showScroll, setShowScroll] = useState(false);

useEffect(() => {
  const aboutSection = document.querySelector("#about");
  if (!aboutSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      // When ABOUT is fully or partially visible, hide button
      if (entry.isIntersecting) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    },
    {
      root: null,
      threshold: 0.25, // adjust if needed
    }
  );

  observer.observe(aboutSection);

  return () => observer.disconnect();
}, []);


  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="w-full mt-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto relative">
          {/* Animated gradient border glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-3xl
              bg-gradient-to-r
              from-sky-400/40
              via-indigo-400/40
              to-sky-400/40
              blur-xl
              opacity-70
              animate-pulse
            "
          />

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/60
              bg-white/70
              shadow-lg
              shadow-sky-200/50
              backdrop-blur-xl
              ring-1
              ring-slate-900/5
              py-6
              px-6
              text-center
              dark:border-slate-700/80
              dark:bg-slate-900/80
              dark:shadow-sky-900/50
              dark:ring-slate-900/60
              transition
              duration-200
              hover:shadow-xl
              hover:shadow-sky-300/60
              dark:hover:shadow-sky-500/40
            "
          >
            {/* subtle inner wash */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10" />

            {/* Mini nav */}
            <nav className="relative z-10 mb-3 flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
              {sections.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="
                    text-slate-500
                    hover:text-sky-600
                    dark:text-slate-400
                    dark:hover:text-sky-400
                    transition-colors
                  "
                >
                  {s.label}
                </a>
              ))}
            </nav>

            <p className="relative z-10 text-sm text-slate-600 dark:text-slate-300">
              © {year} <span className="font-semibold">Nikhil Cheriyala</span>.
              Bringing ideas to life through thoughtful interfaces.
            </p>

            {/* Social icons */}
            <div className="relative z-10 mt-5 flex items-center justify-center gap-5">
              {/* GitHub */}
              <a
                href="https://github.com/nikhilch07"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  h-10 w-10
                  rounded-full
                  border border-slate-300/40
                  bg-white/70
                  shadow-sm
                  shadow-sky-100/60
                  backdrop-blur
                  hover:bg-sky-50
                  hover:border-sky-400/50
                  hover:shadow-md
                  hover:shadow-sky-200/70
                  transition
                  dark:bg-slate-900/70
                  dark:border-slate-600/50
                  dark:hover:bg-slate-800
                  dark:hover:border-sky-400/60
                  dark:shadow-sky-900/40
                "
              >
                <FaGithub className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/nikhilch07"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  h-10 w-10
                  rounded-full
                  border border-slate-300/40
                  bg-white/70
                  shadow-sm
                  shadow-sky-100/60
                  backdrop-blur
                  hover:bg-sky-50
                  hover:border-sky-400/50
                  hover:shadow-md
                  hover:shadow-sky-200/70
                  transition
                  dark:bg-slate-900/70
                  dark:border-slate-600/50
                  dark:hover:bg-slate-800
                  dark:hover:border-sky-400/60
                  dark:shadow-sky-900/40
                "
              >
                <FaLinkedin className="h-5 w-5 text-sky-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400" />
              </a>

              {/* Email */}
              <a
                href="mailto:ntej18.ui@gmail.com"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  h-10 w-10
                  rounded-full
                  border border-slate-300/40
                  bg-white/70
                  shadow-sm
                  shadow-sky-100/60
                  backdrop-blur
                  hover:bg-sky-50
                  hover:border-sky-400/50
                  hover:shadow-md
                  hover:shadow-sky-200/70
                  transition
                  dark:bg-slate-900/70
                  dark:border-slate-600/50
                  dark:hover:bg-slate-800
                  dark:hover:border-sky-400/60
                  dark:shadow-sky-900/40
                "
              >
                <EnvelopeIcon className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400" />
              </a>
            </div>

            {/* Fun tiny note */}
            <p className="relative z-10 mt-4 text-xs text-slate-400 dark:text-slate-500">
              Built with React, Vite, Tailwind, and just the right amount of nerdiness ✨
            </p>
          </div>
        </div>

        {/* bottom glow / wave */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-6
            left-1/2
            h-16
            w-64
            -translate-x-1/2
            rounded-full
            bg-sky-400/25
            blur-3xl
            opacity-70
            animate-pulse
            dark:bg-sky-500/25
          "
        />
      </footer>

      {/* Back to top button */}
      {showScroll && ( <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          fixed
          bottom-6
          right-6
          z-40
          inline-flex
          items-center
          justify-center
          h-11
          w-11
          rounded-full
          border
          border-white/60
          bg-white/80
          shadow-lg
          shadow-sky-200/70
          backdrop-blur-xl
          text-slate-700
          hover:bg-sky-50
          hover:text-sky-700
          hover:shadow-xl
          hover:shadow-sky-300/80
          transition
          dark:bg-slate-900/85
          dark:border-slate-700/80
          dark:text-slate-200
          dark:hover:bg-slate-800
          dark:hover:text-sky-400
          dark:shadow-sky-900/70
        "
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>
      )}
    </>
  );
}
