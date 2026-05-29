import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { techStack, projects, heroStats, heroStatsExtra } from '../data/content';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      <section className="section section--stats" aria-label="Kurzübersicht">
        <div className="container">
          <div className="stats-grid stats-grid--premium">
            {heroStats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className={`stat-card${stat.compact ? ' stat-card--compact' : ''}`}>
                  {stat.icon && (
                    <span className="stat-card__icon" aria-hidden="true">
                      {stat.icon}
                    </span>
                  )}
                  <span className="stat-card__value">{stat.value}</span>
                  <span className="stat-card__label">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="stats-grid stats-grid--secondary">
            {heroStatsExtra.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 60}>
                <div className="stat-card stat-card--subtle">
                  <span className="stat-card__value">{stat.value}</span>
                  <span className="stat-card__label">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              label="Technologien"
              title="Featured Skills"
              subtitle="Mein aktueller Tech-Stack für Webentwicklung und moderne Projekte"
            />
          </ScrollReveal>
          <div className="skills-grid">
            {techStack.map((skill, i) => (
              <ScrollReveal key={skill.name} delay={i * 60}>
                <SkillCard {...skill} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="section__cta">
            <Button to="/lebenslauf" variant="outline">
              Alle Kenntnisse im Lebenslauf
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              label="Projekte"
              title="Featured Projects"
              subtitle="Ausgewählte Arbeiten und Lernprojekte aus der Webentwicklung"
            />
          </ScrollReveal>
          <div className="projects-grid projects-grid--featured">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 100}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="section__cta">
            <Button to="/portfolio" variant="primary">
              Alle Projekte ansehen
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="section cta-banner">
        <div className="container">
          <ScrollReveal>
            <div className="cta-banner__inner">
              <h2>Bereit für den nächsten Schritt?</h2>
              <p>
                Ob Bewerbung, Praktikum oder erste Zusammenarbeit – ich freue mich auf Ihre Nachricht.
              </p>
              <div className="cta-banner__actions">
                <Button to="/kontakt" variant="primary">
                  Jetzt Kontakt aufnehmen
                </Button>
                <Link to="/ueber-mich" className="btn btn--ghost">
                  Mehr über mich
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
