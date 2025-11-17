
import React from 'react';
import { experiences } from '../data/data';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 px-4 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'linear-gradient(to right, rgba(16,185,129,0.2), rgba(96,165,250,0.2))' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((e) => (
            <div key={e.id} className="rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-black/30 backdrop-blur">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{e.title}</h3>
                <span className="text-sm opacity-70">{e.dates}</span>
              </div>
              <p className="mt-1 text-sm opacity-80">{e.company} • {e.location}</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                {e.points.map((p,i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
