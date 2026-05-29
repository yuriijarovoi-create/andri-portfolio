import { useMemo } from 'react';

function createParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 7) % 100}%`,
    top: `${(i * 23 + 11) % 100}%`,
    size: 2 + (i % 4),
    duration: 12 + (i % 8) * 2,
    delay: (i % 6) * 1.2,
    opacity: 0.15 + (i % 5) * 0.08,
  }));
}

export default function HeroParticles() {
  const particles = useMemo(() => createParticles(28), []);

  return (
    <div className="hero-particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="hero-particles__dot"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
