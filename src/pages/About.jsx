import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { interests } from '../data/content';

const aboutSections = [
  {
    icon: '👤',
    title: 'Persönliche Vorstellung',
    text: 'Ich bin Andrii Yarovyi, 17 Jahre alt und wohne in Ellenz-Poltersdorf an der Mosel. Nach meiner Schulzeit in der Ukraine und Deutschland bringe ich vielfältige Erfahrungen mit und setze mich intensiv mit digitalen Technologien auseinander. Besonders fasziniert mich, wie moderne Websites und Anwendungen entstehen – vom ersten Entwurf bis zur fertigen Oberfläche.',
  },
  {
    icon: '💡',
    title: 'Interessen',
    text: 'Neben der Webentwicklung beschäftige ich mich gerne mit Computern, Technologie und Science-Fiction. In meiner Freizeit spiele ich Gitarre – Kreativität und Technik ergänzen sich für mich auf inspirierende Weise.',
  },
  {
    icon: '🎯',
    title: 'Ziele',
    text: 'Mein Ziel ist der Einstieg in die IT-Branche, zunächst mit Schwerpunkt Frontend-Entwicklung. Ich möchte fundierte Kenntnisse in modernen Webtechnologien aufbauen, an realen Projekten mitwirken und mich kontinuierlich weiterentwickeln – bis hin zu einer Ausbildung oder einem Studium im IT-Bereich.',
  },
  {
    icon: '🚀',
    title: 'Motivation',
    text: 'Was mich antreibt, ist die Möglichkeit, etwas Sichtbares und Nützliches zu schaffen. Jede neue Zeile Code und jedes gelöste Problem bringt mich näher an meinen Traum, professioneller Entwickler zu werden. Ich lerne selbstständig, bleibe neugierig und scheue mich nicht vor Herausforderungen.',
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="Über Mich"
        subtitle="Lernen Sie die Person hinter dem Portfolio kennen"
      />

      <section className="section section--timeline">
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              label="Werdegang"
              title="Meine Reise"
              subtitle="Bildung, Integration und der Weg in die Webentwicklung"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ExperienceTimeline />
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            {aboutSections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 80}>
                <article className="info-card info-card--animated">
                  <span className="info-card__icon" aria-hidden="true">
                    {section.icon}
                  </span>
                  <h2 className="info-card__title">{section.title}</h2>
                  <p className="info-card__text">{section.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              label="Freizeit"
              title="Meine Interessen"
              subtitle="Was mich neben der IT begeistert"
            />
          </ScrollReveal>
          <ul className="tag-list">
            {interests.map((item, i) => (
              <ScrollReveal key={item} delay={i * 50}>
                <li className="tag tag--animated" style={{ '--tag-index': i }}>
                  {item}
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
