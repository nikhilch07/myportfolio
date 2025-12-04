import React from "react";
import {
  CodeBracketIcon,
  RectangleStackIcon,
  WrenchScrewdriverIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";

const skillGroups = [
  {
    title: "Frontend & UI",
    note: "Modern, accessible web interfaces",
    icon: CodeBracketIcon,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Design Systems",
    ],
  },
  {
    title: "State & Data Flow",
    note: "Predictable, well-structured data handling",
    icon: RectangleStackIcon,
    items: ["Redux Toolkit", "React Hooks & Context", "REST APIs", "GraphQL"],
  },
  {
    title: "Tooling, Performance & Quality",
    note: "Fast builds, smooth UX, safe releases",
    icon: WrenchScrewdriverIcon,
    items: [
      "Vite / Webpack",
      "Jest",
      "React Testing Library",
      "Cypress",
      "Lighthouse & Web Vitals",
      "Axe DevTools (a11y)",
      "Git & CI/CD",
    ],
  },
  {
    title: "Backend & DevOps",
    note: "API-driven experiences in production",
    icon: CloudArrowUpIcon,
    items: ["Node.js", "Express", "REST services", "Docker", "Nginx", "AWS / Vercel"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          Skills
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl">
          A focused stack around modern frontend engineering, design systems, and the
          tooling needed to ship reliable, production-ready experiences.
        </p>

        {/* Core stack chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS"].map(
            (core) => (
              <span
                key={core}
                className="
                  inline-flex items-center gap-1
                  rounded-full
                  bg-sky-500/10
                  border border-sky-500/30
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-sky-700
                  shadow-sm
                  dark:bg-sky-500/10
                  dark:border-sky-400/40
                  dark:text-sky-200
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                {core}
              </span>
            )
          )}
        </div>
      </div>

      <div
        className="
          grid
          gap-8
          sm:grid-cols-2
        "
      >
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.title}
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/60
                bg-white/75
                shadow-lg
                shadow-sky-200/60
                ring-1
                ring-slate-900/5
                backdrop-blur-xl
                px-5
                py-5
                transition
                duration-200
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-sky-300/70
                dark:border-slate-700/80
                dark:bg-slate-900/85
                dark:shadow-sky-900/60
                dark:ring-slate-900/60
                dark:hover:shadow-sky-500/40
              "
            >
              {/* subtle inner gradient accent */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-indigo-500/5" />

              <div className="relative flex items-start gap-3 mb-4">
                <div
                  className="
                    inline-flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-2xl
                    bg-sky-500/10
                    border
                    border-sky-500/30
                    shadow-sm
                    shadow-sky-200/70
                    dark:bg-sky-500/15
                    dark:border-sky-400/40
                    dark:shadow-sky-900/60
                  "
                >
                  <Icon className="h-5 w-5 text-sky-600 dark:text-sky-300" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                    {group.title}
                  </h3>
                  {group.note && (
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {group.note}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      border
                      border-slate-200
                      bg-white/90
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      text-slate-700
                      shadow-sm
                      dark:border-slate-700
                      dark:bg-slate-900
                      dark:text-slate-200
                    "
                  >
                    <span className="mr-1 h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
