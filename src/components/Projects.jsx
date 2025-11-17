
import React from 'react';
import { projects } from '../data/data';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-4 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'linear-gradient(to right, rgba(234,88,12,0.2), rgba(251,113,133,0.2))' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-black/30 backdrop-blur">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm opacity-80">{p.description}</p>
              <div className="mt-3 flex gap-4 text-sm">
                <a className="text-accent hover:underline" href={p.live} target="_blank" rel="noreferrer">Live</a>
                <a className="text-accent hover:underline" href={p.source} target="_blank" rel="noreferrer">Source</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
