
import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:nikhilch07@example.com?subject=Portfolio%20Contact&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'linear-gradient(to right, rgba(13,148,136,0.2), rgba(45,212,191,0.2))' }}
    >
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form onSubmit={onSubmit} className="rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-black/30 backdrop-blur space-y-3">
          <input className="w-full px-3 py-2 rounded-lg bg-white/80 dark:bg-black/30 border border-black/10 dark:border-white/10"
                 placeholder="Your name" name="name" value={form.name} onChange={onChange} />
          <input className="w-full px-3 py-2 rounded-lg bg-white/80 dark:bg-black/30 border border-black/10 dark:border-white/10"
                 placeholder="Your email" type="email" name="email" value={form.email} onChange={onChange} />
          <textarea className="w-full px-3 py-2 rounded-lg min-h-[120px] bg-white/80 dark:bg-black/30 border border-black/10 dark:border-white/10"
                    placeholder="Say hello..." name="message" value={form.message} onChange={onChange} />
          <button className="px-4 py-2 rounded-lg bg-accent text-white font-medium">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
