"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "American Express",
    title: "Senior Software Engineer",
    period: "May 2023 – Present",
    location: "Phoenix, AZ",
    highlights: [
      "Lead frontend architecture for Card-on-File and merchant integrations (Amazon, PayPal, Macy’s, Bloomingdale’s) using React, TypeScript, and Node.js.",
      "Modernized the frontend stack with Next.js and Vite, improving Core Web Vitals and build times.",
      "Implemented enterprise design system components with Tailwind CSS, Material UI, and DLS-React to standardize UI across apps.",
      "Achieved strong accessibility compliance (WCAG 2.1/2.2) using Axe DevTools and Lighthouse.",
      "Built reusable component libraries and internal npm packages, improving reusability and consistency across Amex digital properties.",
    ],
  },
  {
    company: "Charles Schwab",
    title: "Senior Software Engineer",
    period: "Apr 2022 – May 2023",
    location: "Phoenix, AZ",
    highlights: [
      "Developed a self-service portal and playground for internal API registry access across environments.",
      "Designed responsive, mobile-friendly banking UIs using Figma mockups and modern React patterns.",
      "Implemented secure authentication and authorization flows with OIDC/OAuth.",
      "Integrated MSSQL and Redis for CRUD operations, caching, and session management.",
      "Mentored junior engineers on TypeScript, testing strategy, and React (hooks, context, lazy loading).",
    ],
  },
  {
    company: "American Express",
    title: "Senior Software Developer",
    period: "Apr 2020 – Apr 2022",
    location: "Phoenix, AZ",
    highlights: [
      "Built an enterprise application that converted natural language queries into SQL and rendered real-time results.",
      "Created the TTYD portal using React and Node.js, focusing on usability and performance.",
      "Integrated Okta for secure authorization across Node.js services.",
      "Improved discoverability and performance using SEO optimization strategies with Next.js.",
      "Maintained strong unit test coverage using Jest and Enzyme.",
    ],
  },
  {
    company: "American Express",
    title: "UI Developer",
    period: "Sep 2019 – Apr 2020",
    location: "Phoenix, AZ",
    highlights: [
      "Developed a Machine Learning Platform portal used by data scientists, engineers, and analysts.",
      "Delivered a single-page application on AWS using React and Node.js.",
      "Conducted user research and usability testing to validate design decisions.",
      "Styled web applications with CSS3 and SASS/LESS for maintainable, scalable UI.",
      "Migrated class-based components to functional components with hooks for cleaner, modern React code.",
    ],
  },
  {
    company: "American Express",
    title: "Software Engineer",
    period: "Jul 2018 – Sep 2019",
    location: "Phoenix, AZ",
    highlights: [
      "Built an AI marketplace web app enabling users to explore and publish AI applications.",
      "Leveraged the One-Amex framework to create fast, scalable, and secure web components.",
      "Designed wireframes, mockups, and high-fidelity prototypes, incorporating stakeholder feedback.",
      "Constructed modular UI components to support independent development and deployment.",
      "Integrated Iguazu REST plugin for async REST calls with Redux-based caching and React Router navigation.",
    ],
  },
  {
    company: "American Express",
    title: "Application Programmer",
    period: "Jan 2018 – Jun 2018",
    location: "Phoenix, AZ",
    highlights: [
      "Developed a chatbot widget for publishing packages to an internal registry.",
      "Integrated external APIs using Socket.IO and NLU-trained data to enhance UX.",
      "Implemented rich UI interactions using JavaScript, AJAX, and modern DOM patterns.",
      "Collaborated with design teams using Adobe XD, Illustrator, and Figma to ship visually consistent UI.",
      "Used Git for version control and Rally for defect tracking within agile sprints.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function ExperienceItem({ exp, isLast, index }) {
  return (
    <li className="ms-4">
      {/* Timeline dot */}
      <div className="absolute -left-1.5 mt-2 flex h-3 w-3 items-center justify-center">
        <span className="h-3 w-3 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 shadow-md shadow-sky-500/30" />
      </div>

      <motion.article
        className="mb-10 rounded-xl border border-slate-100 bg-white/80 p-4 shadow-sm ring-1 ring-slate-900/5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:ring-slate-900/40 sm:p-6"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false, // 👈 re-animate whenever the card comes back into view
          amount: 0.5, // 👈 ~half of card must be visible to trigger
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: index * 0.03, // tiny stagger as you scroll
        }}
      >
        <header className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-50">
              {exp.title}
            </h3>
            <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
              {exp.company}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {exp.period}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {exp.location}
            </p>
          </div>
        </header>

        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {exp.highlights.map((item, i) => (
            <li
              key={i}
              className={`gap-2 ${i >= 3 ? "hidden sm:flex" : "flex"}`}
            >
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-60" />
      </motion.article>

      {isLast && <div className="h-2 sm:h-4" aria-hidden="true" />}
    </li>
  );
}

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="w-full max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Experience
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400">
          A focused snapshot of my recent roles, highlighting impact, ownership,
          and modern frontend engineering.
        </p>
      </div>

      <ol className="relative border-s border-slate-200 dark:border-slate-800">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={exp.company + exp.period}
            exp={exp}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}
