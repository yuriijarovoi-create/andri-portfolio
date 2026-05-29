export default function SectionTitle({ label, title, subtitle }) {
  return (
    <header className="section-title">
      {label && <span className="section-title__label">{label}</span>}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </header>
  );
}
