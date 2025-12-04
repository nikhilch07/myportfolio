"use client";

import React from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { education } from "../data/data";

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Education() {
  return (
    <motion.section
      id="education"
      className="
        w-full
        max-w-5xl
        mx-auto
        px-4
        py-16
        sm:px-6
        lg:px-8
      "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Education
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl">
          Academic foundation and continuous learning that underpin my work as a
          frontend engineer.
        </p>
      </div>

      <div className="relative">
        {/* vertical timeline bar */}
        <div
          className="
            pointer-events-none
            absolute
            left-4
            top-0
            bottom-0
            w-1
            bg-gradient-to-b
            from-sky-400/45
            via-blue-500/30
            to-indigo-500/45
            rounded-full
            dark:from-sky-700/45
            dark:via-sky-800/30
            dark:to-indigo-700/45
          "
        />

        <motion.div
          className="flex flex-col gap-10 ml-10"
          variants={containerVariants}
        >
          {education.map((ed, index) => (
            <motion.article
              key={ed.id ?? index}
              variants={itemVariants}
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
                px-6
                py-6
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
              {/* subtle inner gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/6 via-transparent to-indigo-500/6" />

              {/* timeline dot */}
              <div
                className="
                  absolute
                  -left-8
                  top-6
                  h-5
                  w-5
                  rounded-full
                  border-2
                  border-sky-500
                  bg-white
                  dark:bg-slate-900
                  dark:border-sky-400
                  shadow-md
                  shadow-sky-300/70
                  dark:shadow-sky-900/70
                "
              />

              <div className="relative flex items-start gap-3">
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
                  <AcademicCapIcon className="h-5 w-5 text-sky-600 dark:text-sky-300" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {ed.degree}
                    </h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {ed.dates}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {ed.school} • {ed.location}
                  </p>

                  {ed.details && (
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                      {ed.details}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
