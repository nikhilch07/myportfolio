"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const showToast = (type, message) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ type, message });
    timerRef.current = setTimeout(() => setToast(null), 4000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      showToast(
        "error",
        "Form says: ‘I’m not ready yet!’ — please fill all fields 😊"
      );
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setForm({ name: "", email: "", message: "" });
      showToast(
        "success",
        "Your message is officially airborne 🚀 I’ll read it, sip some chai, and reply soon!"
      );
    } catch (err) {
      console.error(err);
      showToast(
        "error",
        "Uh oh, that one hit a turbulence pocket. Try again in a bit ✨"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
          Contact
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl">
          Have a project, role, or idea you’d like to chat about? Drop a note
          below and I’ll get back to you shortly.
        </p>
      </div>

      <div className="max-w-xl">
        <div
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
            py-6
            dark:border-slate-700/80
            dark:bg-slate-900/85
            dark:shadow-sky-900/60
            dark:ring-slate-900/60
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/6 via-transparent to-indigo-500/6" />

          <form onSubmit={onSubmit} className="relative space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="
                    mt-1
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    bg-white/90
                    px-3
                    py-2.5
                    text-sm
                    text-slate-900
                    shadow-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-sky-500
                    focus:border-sky-500
                    dark:border-slate-700
                    dark:bg-slate-900
                    dark:text-slate-100
                  "
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="
                    mt-1
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    bg-white/90
                    px-3
                    py-2.5
                    text-sm
                    text-slate-900
                    shadow-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-sky-500
                    focus:border-sky-500
                    dark:border-slate-700
                    dark:bg-slate-900
                    dark:text-slate-100
                  "
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                className="
                  mt-1
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  bg-white/90
                  px-3
                  py-2.5
                  text-sm
                  text-slate-900
                  shadow-sm
                  min-h-[130px]
                  resize-vertical
                  focus:outline-none
                  focus:ring-2
                  focus:ring-sky-500
                  focus:border-sky-500
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-100
                "
                placeholder="Tell me a bit about what you have in mind..."
              />
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <p className="text-xs text-slate-400 dark:text-slate-500">
                No spam, no bots — just me reading your message with a cup of
                chai ☕
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-sky-600
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  shadow-md
                  shadow-sky-400/50
                  transition
                  hover:bg-sky-700
                  hover:shadow-lg
                  hover:shadow-sky-400/60
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >
                <PaperAirplaneIcon className="h-4 w-4 -rotate-6" />
                {submitting ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              fixed
              bottom-6
              left-1/2
              z-50
              w-[90%]
              max-w-sm
              -translate-x-1/2
            "
          >
            <div
              className={`
                flex items-start gap-3
                rounded-2xl
                border
                px-4
                py-3
                shadow-lg
                backdrop-blur-xl
                ${
                  toast.type === "success"
                    ? "border-emerald-400/60 bg-emerald-50/90 text-emerald-900 shadow-emerald-200/80 dark:bg-emerald-900/70 dark:border-emerald-400/70 dark:text-emerald-50"
                    : "border-rose-400/60 bg-rose-50/90 text-rose-900 shadow-rose-200/80 dark:bg-rose-900/70 dark:border-rose-400/70 dark:text-rose-50"
                }
              `}
            >
              <div className="mt-0.5 text-lg">
                {toast.type === "success" ? "✅" : "⚠️"}
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                {toast.message}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
