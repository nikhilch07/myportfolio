
import React from 'react';
import { education } from '../data/data';

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 px-4 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'linear-gradient(to right, rgba(244,114,182,0.2), rgba(251,191,36,0.2))' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="grid gap-4">
          {education.map((ed) => (
            <div key={ed.id} className="rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-black/30 backdrop-blur">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{ed.degree}</h3>
                <span className="text-sm opacity-70">{ed.dates}</span>
              </div>
              <p className="mt-1 text-sm opacity-80">{ed.school} • {ed.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
