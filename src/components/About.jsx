
import React from 'react';
import '../styles/portfolio.css';

export default function About() {
  return (
    <section
      id="about"
      className="h-screen flex items-center bg-fixed bg-cover bg-center  bg-[linear-gradient(135deg,_rgba(2,6,23,.85),_rgba(30,58,138,.75))]
    dark:bg-[linear-gradient(180 deg,_rgba(2,6,23,.85),_rgba(15,23,42,.85))]"
    >
      <div className="max-w-5xl mx-auto px-4 py-24">
        <h2 className="text-4xl text-gray-200 font-bold">About Me</h2>
        <p className="mt-4 text-gray-200 font-header">
        I love turning rough ideas into smooth, tappable moments. Curiosity drives me I’m always exploring new UI tricks to make apps feel lighter.
        </p>
      </div>
    </section>
  );
}
