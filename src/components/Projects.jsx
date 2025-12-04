import React, { useRef, useState } from "react";

const TiltCard = ({ src, title, href = "#", tech = [] }) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg) scale(1)");

  const reset = () => {
    setTransform("rotateX(0deg) rotateY(0deg) scale(1)");
  };

  const onMove = (e) => {
    if (!ref.current) return;

    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;  // 0 → 1
    const py = (e.clientY - r.top) / r.height; // 0 → 1

    const rotX = (0.5 - py) * 26; // stronger tilt
    const rotY = (px - 0.5) * 26;

    setTransform(`rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.05)`);
  };

  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      <div className="relative [perspective:1200px]">
        {/* Outer glow glossy shadow */}
        <div
          className="
            pointer-events-none
            absolute
            -inset-3
            rounded-3xl
            bg-gradient-to-br
            from-sky-300/60
            via-cyan-100/50
            to-indigo-300/60
            opacity-70
            blur-2xl
            dark:from-sky-500/45
            dark:via-sky-700/35
            dark:to-indigo-500/45
          "
        />
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={reset}
          className="
            relative
            h-80 sm:h-96
            rounded-2xl
            overflow-hidden
            bg-slate-900
            border
            border-white/30
            dark:border-slate-700/80

            shadow-2xl
            shadow-sky-300/60
            dark:shadow-sky-900/70

            ring-1
            ring-white/40
            dark:ring-sky-500/40

            backdrop-blur-xl
            transition-transform
            duration-200
            transform-gpu
            [will-change:transform]
          "
          style={{ transform }}
        >
          <img
            src={src}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-95 pointer-events-none"
            draggable="false"
          />

          {/* dark gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

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
      // Techy / abstract / calming gradient with a UI-ish vibe
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Budget Planner",
      tech: ["Node", "GraphQL", "Redux Toolkit"],
      href: "#projects",
      // Tech / dashboard / charts and a bit of neon
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <section
      id="projects"
      className="
        w-full
        max-w-5xl
        mx-auto
        px-4
        py-16
        sm:px-6
        lg:px-8
      "
    >
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Projects
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl">
          A snapshot of the side products and experiments where I explore UX
          polish, performance, and clean, focused user flows.
        </p>
      </div>

      <div
        className="
          mt-8
          grid
          gap-8
          sm:grid-cols-2
        "
      >
        {items.map((i) => (
          <TiltCard key={i.title} {...i} />
        ))}
      </div>
    </section>
  );
}
