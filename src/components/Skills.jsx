
import React from 'react';
import { skills } from '../data/data';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-4 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'linear-gradient(to right, rgba(59,130,246,0.2), rgba(34,197,94,0.2))' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="px-3 py-1 rounded-full bg-white/70 dark:bg-black/30 border border-black/10 dark:border-white/10 backdrop-blur text-sm">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
