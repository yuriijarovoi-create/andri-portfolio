import { person } from '../data/content';
import Button from './Button';
import ProfilePhoto from './ProfilePhoto';
import FloatingBadges from './FloatingBadges';
import HeroParticles from './HeroParticles';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <HeroParticles />
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__badge">Frontend · 2026</span>
          <p className="hero__greeting">
            <span className="hero__wave" aria-hidden="true">
              👋
            </span>
            Willkommen auf meinem Portfolio
          </p>
          <h1 id="hero-heading" className="hero__name">
            {person.name}
          </h1>
          <p className="hero__title">{person.title}</p>
          <p className="hero__location">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z" />
              <circle cx="12" cy="11" r="2.5" />
            </svg>
            {person.location}
          </p>
          <p className="hero__bio">{person.shortBio}</p>
          <div className="hero__actions">
            <Button to="/lebenslauf" variant="primary">
              Lebenslauf ansehen
            </Button>
            <Button to="/kontakt" variant="secondary">
              Kontakt aufnehmen
            </Button>
            <Button href={person.linkedIn} variant="outline" external>
              LinkedIn Profil
            </Button>
          </div>
        </div>
        <div className="hero__visual">
          <FloatingBadges />
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}
