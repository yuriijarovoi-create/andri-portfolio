import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import { person } from '../data/content';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${formState.name}\nE-Mail: ${formState.email}\n\n${formState.message}`
    );
    const subject = encodeURIComponent(formState.subject || 'Kontakt über Portfolio');
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        title="Kontakt"
        subtitle="Schreiben Sie mir – ich melde mich so schnell wie möglich zurück"
      />

      <section className="section">
        <div className="container contact-grid">
          <ScrollReveal>
            <div className="contact-info card-glass">
              <h2>Kontaktdaten</h2>
              <ul className="contact-info__list">
                <li>
                  <span className="contact-info__label">Telefon</span>
                  <a href={`tel:${person.phone.replace(/\s/g, '')}`}>{person.phone}</a>
                </li>
                <li>
                  <span className="contact-info__label">E-Mail</span>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </li>
                <li>
                  <span className="contact-info__label">Standort</span>
                  <span>{person.location}</span>
                </li>
              </ul>

              <div className="contact-social">
                <h3>Netzwerke</h3>
                <div className="contact-social__links">
                  <a
                    href={person.linkedIn}
                    className="social-card social-card--linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-card__icon">in</span>
                    <span>
                      <strong>LinkedIn</strong>
                      <small>Profil ansehen</small>
                    </span>
                  </a>
                  <a
                    href="https://github.com"
                    className="social-card social-card--github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-card__icon">GH</span>
                    <span>
                      <strong>GitHub</strong>
                      <small>Repositories</small>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <form className="contact-form card-glass" onSubmit={handleSubmit}>
              <h2>Nachricht senden</h2>
              {submitted && (
                <p className="contact-form__success" role="status">
                  Vielen Dank! Ihr E-Mail-Programm wird geöffnet – senden Sie die Nachricht von dort ab.
                </p>
              )}
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">E-Mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="ihre@email.de"
                />
              </div>
              <div className="form-row">
                <label htmlFor="subject">Betreff</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Betreff Ihrer Nachricht"
                />
              </div>
              <div className="form-row">
                <label htmlFor="message">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Ihre Nachricht an mich..."
                />
              </div>
              <Button type="submit" variant="primary">
                Nachricht senden
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
