"use client";

import React from "react";
import portfolio_image from '../assets/portfolio_image.png';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="
        h-screen
        w-full
        flex
        items-center
        justify-center
        px-6
      "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        className="
          w-full
          max-w-5xl
          mx-auto
          flex
          flex-col-reverse
          md:flex-row
          items-center
          justify-between
          gap-10
          md:gap-16
        "
      >
        {/* Text block */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            variants={itemVariants}
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-semibold
              tracking-tight
              text-slate-900
              dark:text-slate-100
            "
          >
            About Me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="
              mt-6
              max-w-xl
              mx-auto
              md:mx-0
              text-xl
              sm:text-2xl
              text-slate-800
              dark:text-slate-200
              leading-relaxed
            "
          >
            I’m a Senior Frontend Engineer focused on crafting fast, elegant, and accessible React & TypeScript experiences for modern financial and enterprise products.
          </motion.p>
        </div>

        {/* Image block */}
        <div
          className="flex-1 flex justify-center md:justify-end"
          style={{ perspective: 1000 }}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ rotateX: 8, rotateY: -8, y: -6 }}
            whileTap={{ rotateX: 0, rotateY: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="
              max-w-[10rem]
              sm:max-w-[12rem]
              md:max-w-[14rem]
              rounded-2xl
              border
              border-white/60
              bg-white/80
              shadow-md
              shadow-orange-900/5
              ring-1
              ring-slate-900/5
              overflow-hidden
              backdrop-blur
              dark:border-slate-800
              dark:bg-slate-900/80
              dark:ring-slate-900/40
            "
          >
            <div className="relative aspect-[4/5]">
              {/* TODO: change this to your actual image path */}
              <img
                src={portfolio_image}
                alt="Nikhil Cheriyala"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                <p className="text-sm font-semibold text-slate-50">
                  Nikhil Cheriyala
                </p>
                <p className="text-xs text-slate-200/85">
                  Senior Frontend / UI Engineer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
