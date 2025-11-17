
import React, { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#showcase-3d', label: '3D Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add('dark') : root.classList.remove('dark');
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-800/20 dark:color-white border-b border-black/5 dark:border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="font-bold text-lg">Nikhil • Portfolio</a>
        <div className="flex items-center gap-3">
          <button onClick={() => setDark((d) => !d)}
            className="px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10">
            {dark ? 'Light' : 'Dark'}
          </button>
          <button className="md:hidden px-3 py-1.5 rounded-lg border" onClick={() => setOpen(o => !o)}>Menu</button>
        </div>
      </nav>
      <div className={`md:block ${open ? 'block' : 'hidden'}`}>
        <div className="max-w-6xl mx-auto px-4 pb-3 grid grid-cols-2 md:flex md:flex-wrap md:gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               className="py-2 text-sm hover:text-accent">{l.label}</a>
          ))}
        </div>
      </div>
    </header>
  );
}
