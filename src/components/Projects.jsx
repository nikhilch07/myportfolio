import React, { useEffect, useRef, useState } from "react";
import meditationImg from "../assets/meditation.png";
import budgerPlannerImg from "../assets/budget_planner.png";

const TiltCard = ({ src, title, href = "#", tech = [] }) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState("rotateX(0) rotateY(0) scale(1)");
  const [shineStyle, setShineStyle] = useState({ opacity: 0 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    );
    const touch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
    if (prefersReduced?.matches || touch) setEnabled(false);
    const onChange = (e) => setEnabled(!e.matches && !touch);
    prefersReduced?.addEventListener?.("change", onChange);
    return () => prefersReduced?.removeEventListener?.("change", onChange);
  }, []);

  const reset = () => {
    setTransform("rotateX(0) rotateY(0) scale(1)");
    setShineStyle({ opacity: 0 });
  };

  const onMove = (e) => {
    if (!enabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rotX = (0.5 - py) * 18;
    const rotY = (px - 0.5) * 18;
    setTransform(`rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`);
    const x = px * 100,
      y = py * 100;
    setShineStyle({
      opacity: 1,
      background: `radial-gradient(300px circle at ${x}% ${y}%, rgba(255,255,255,0.35), rgba(255,255,255,0.08) 35%, rgba(255,255,255,0) 60%)`,
      transition: "opacity 150ms ease",
    });
  };

  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      <div className="[perspective:1200px]">
        <div
          ref={ref}
          onMouseEnter={() =>
            enabled && setShineStyle((s) => ({ ...s, opacity: 1 }))
          }
          onMouseMove={onMove}
          onMouseLeave={reset}
          className="relative h-[35rem] rounded-2xl overflow-hidden shadow-lg transition-transform duration-200 transform-gpu bg-gradient-to-br from-slate-900 to-slate-800 [will-change:transform]"
          style={{ transform }}
        >
          <img
            src={src}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
            draggable="false"
          />
          <div
            className="absolute inset-0 mix-blend-overlay pointer-events-none"
            style={shineStyle}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-semibold">{title}</h3>
            {tech.length > 0 && (
              <p className="mt-1 text-sm opacity-80">{tech.join(" • ")}</p>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default function Projects() {
  const items = [
    {
      title: "Meditation Web App",
      tech: ["React", "Micro-FE", "TypeScript"],
      href: "#projects",
      src: meditationImg,
    },
    {
      title: "Budget Planner",
      tech: ["Node", "GraphQL", "Redux Toolkit"],
      href: "#projects",
      src: budgerPlannerImg,
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-4 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(234,88,12,0.2), rgba(251,113,133,0.2))",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <TiltCard key={i.title} {...i} />
          ))}
        </div>
      </div>
    </section>
  );
}
