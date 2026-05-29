export default function SkillCard({ name, icon, color, level = 75 }) {
  return (
    <article className="skill-card">
      <div className="skill-card__shine" aria-hidden="true" />
      <div
        className="skill-card__icon"
        style={{ '--skill-color': color }}
        aria-hidden="true"
      >
        <span>{icon}</span>
      </div>
      <h3 className="skill-card__name">{name}</h3>
      <div className="skill-card__progress" role="presentation">
        <div
          className="skill-card__progress-fill"
          style={{ '--progress': `${level}%`, '--skill-color': color }}
        />
      </div>
      <span className="skill-card__level">{level}%</span>
    </article>
  );
}
