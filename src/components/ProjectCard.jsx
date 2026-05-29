import Button from './Button';
import ProjectPreview from './ProjectPreview';
import { useTilt } from '../hooks/useTilt';

export default function ProjectCard({
  title,
  description,
  demoUrl,
  githubUrl,
  preview = 'portfolio',
}) {
  const { ref, onMove, onLeave } = useTilt({ max: 9, scale: 1.015, lift: -10 });

  return (
    <article
      ref={ref}
      className="project-card project-card--tilt"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="project-card__glow" aria-hidden="true" />
      <div className="project-card__image">
        <ProjectPreview variant={preview} title={title} />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
        <div className="project-card__actions">
          <Button href={demoUrl} variant="primary" size="sm" external>
            Live Demo
          </Button>
          <Button href={githubUrl} variant="outline" size="sm" external>
            GitHub
          </Button>
        </div>
      </div>
    </article>
  );
}
