'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  const performers = [
    { name: 'Ariana Melody', category: 'Singer' },
    { name: 'DJ Blaze', category: 'DJ' },
    { name: 'Sophia Spin', category: 'Dancer' },
    { name: 'Mr. Talkwise', category: 'Speaker' },
    { name: 'Echo Vibe', category: 'DJ' },
    { name: 'Twirl Queen', category: 'Dancer' },
    { name: 'Melody Muse', category: 'Singer' },
    { name: 'Prof. Inspire', category: 'Speaker' },
  ];

  const filtered = performers.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!hasMounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0d0d2b] via-[#1a1a40] to-black text-white px-6 py-12 transition duration-500">
      {/* Dark/Light Mode Toggle */}
      <div className="absolute top-6 right-6">
        <button
          onClick={toggleTheme}
          className="text-white bg-[#333] dark:bg-[#f0f0f0] dark:text-black p-2 rounded-full shadow hover:scale-110 transition"
          aria-label="Toggle dark mode"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <h1 className="text-6xl font-extrabold text-center mb-4 text-[#c0c0c0] drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
        🎝️ Artistly
      </h1>

      <p
        className="text-center text-xl font-bold mb-10"
        style={{
          color: '#ff4cf5',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          padding: '0.75rem 1rem',
          borderRadius: '0.5rem',
          boxShadow: '0 0 15px #ff4cf5',
        }}
      >
        Book amazing performers. Plan unforgettable events.
      </p>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <Link
          href="/artists"
          className="bg-[#7f00ff] px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-[0_0_20px_#9f3dff] transition duration-300 text-white font-semibold"
        >
          Explore Artists
        </Link>
        <Link
          href="/onboarding"
          className="bg-[#00ffcc] px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-[0_0_20px_#33ffd9] transition duration-300 text-black font-semibold"
        >
          Onboard Artist
        </Link>
        <Link
          href="/dashboard"
          className="bg-[#ff4cf5] px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-[0_0_20px_#ff94fa] transition duration-300 text-white font-semibold"
        >
          Manager Dashboard
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search performers..."
          className="px-4 py-2 rounded-lg bg-[#fce7f3] text-black w-full max-w-md shadow focus:outline-none focus:ring-2 focus:ring-[#d59bff]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Performer Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map((p, index) => (
          <div
            key={index}
            className="bg-[rgba(255,255,255,0.05)] text-white p-4 rounded-xl shadow-lg border border-purple-500 hover:bg-[rgba(255,76,245,0.1)] transition duration-300"
            style={{
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 20px rgba(255,76,245,0.4)',
            }}
          >
            <h3 className="text-lg font-bold mb-1 text-center">{p.name}</h3>
            <p className="text-sm text-center text-[rgba(255,255,255,0.8)]">{p.category}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-sm mt-16 text-gray-400">
        © 2025 Artistly. All rights reserved. | Built by Nausheen 💜
      </footer>
    </main>
  );
}
