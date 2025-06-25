
'use client';

import { useEffect, useState } from 'react';

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<{ top: number; left: number; delay: number }[]>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }).map(() => ({
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
      delay: Math.random() * 5
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <>
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: `${s.delay}s`,
            position: 'fixed',
            zIndex: 0
          }}
        />
      ))}
    </>
  );
}
