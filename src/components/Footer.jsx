import { Link } from 'react-router-dom';
import { navLinks, person } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="navbar__brand-mark">AY</span>
            {person.name}
          </Link>
          <p className="footer__tagline">{person.title}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer Navigation">
          <h3 className="footer__heading">Navigation</h3>
          <ul>
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h3 className="footer__heading">Kontakt</h3>
          <a href={`mailto:${person.email}`}>{person.email}</a>
          <a href={`tel:${person.phone.replace(/\s/g, '')}`}>{person.phone}</a>
          <p>{person.location}</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} {person.name}. Alle Rechte vorbehalten.</p>
        <p className="footer__made">Erstellt mit React & Vite</p>
      </div>
    </footer>
  );
}
