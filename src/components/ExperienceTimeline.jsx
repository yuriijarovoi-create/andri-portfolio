import { experience } from '../data/content';

export default function ExperienceTimeline() {
  return (
    <ol className="experience-timeline">
      {experience.map((item, index) => (
        <li
          key={`${item.period}-${item.title}`}
          className={`experience-timeline__item${item.highlight ? ' experience-timeline__item--highlight' : ''}`}
          style={{ '--timeline-index': index }}
        >
          <div className="experience-timeline__marker" aria-hidden="true" />
          <article className="experience-card">
            <time className="experience-card__period">{item.period}</time>
            <h3 className="experience-card__title">{item.title}</h3>
            <p className="experience-card__place">{item.place}</p>
          </article>
        </li>
      ))}
    </ol>
  );
}
