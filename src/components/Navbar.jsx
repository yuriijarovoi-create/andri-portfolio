import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navLinks, person } from '../data/content';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__brand-mark">AY</span>
          <span className="navbar__brand-text">{person.name.split(' ')[0]}</span>
        </Link>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`} aria-label="Hauptnavigation">
          <ul className="navbar__list">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <ThemeToggle className="navbar__theme" />
          <Link to="/kontakt" className="navbar__cta btn btn--primary btn--sm" onClick={closeMenu}>
            Kontakt
          </Link>
        </div>

        <button
          type="button"
          className={`navbar__toggle ${open ? 'navbar__toggle--open' : ''}`}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {open && <button type="button" className="navbar__backdrop" aria-label="Menü schließen" onClick={closeMenu} />}
    </header>
  );
}
