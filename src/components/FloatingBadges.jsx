import { techStack } from '../data/content';

const badgeLayout = [
  { style: { top: '6%', left: '2%' }, delay: 0 },
  { style: { top: '18%', right: '-4%' }, delay: 0.8 },
  { style: { bottom: '28%', left: '-8%' }, delay: 1.6 },
  { style: { bottom: '12%', right: '0%' }, delay: 2.4 },
  { style: { top: '42%', right: '-10%' }, delay: 3.2 },
  { style: { bottom: '48%', left: '4%' }, delay: 4 },
  { style: { top: '62%', left: '-6%' }, delay: 4.8 },
];

export default function FloatingBadges() {
  const badges = techStack.map((tech, i) => ({
    ...tech,
    layout: badgeLayout[i % badgeLayout.length],
  }));

  return (
    <div className="floating-badges" aria-hidden="true">
      {badges.map(({ name, icon, color, layout }) => (
        <span
          key={name}
          className="floating-badge"
          style={{
            ...layout.style,
            '--badge-color': color,
            '--float-delay': `${layout.delay}s`,
          }}
        >
          <span className="floating-badge__inner">{icon}</span>
          <span className="floating-badge__label">{name}</span>
        </span>
      ))}
    </div>
  );
}
