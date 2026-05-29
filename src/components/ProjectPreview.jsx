export default function ProjectPreview({ variant = 'portfolio', title }) {
  return (
    <div className={`project-preview project-preview--${variant}`}>
      <div className="project-preview__chrome">
        <span className="project-preview__dot project-preview__dot--red" />
        <span className="project-preview__dot project-preview__dot--yellow" />
        <span className="project-preview__dot project-preview__dot--green" />
        <span className="project-preview__url">{title}</span>
      </div>
      <div className="project-preview__screen">
        <div className="project-preview__hero-block" />
        <div className="project-preview__grid">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
