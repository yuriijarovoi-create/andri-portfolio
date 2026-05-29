import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SkillCard from '../components/SkillCard';
import {
  person,
  education,
  skills,
  languages,
  interests,
  techStack,
} from '../data/content';

export default function CV() {
  return (
    <>
      <PageHeader
        title="Lebenslauf"
        subtitle="Bildungsweg, Kenntnisse und Qualifikationen auf einen Blick"
      />

      <section className="section">
        <div className="container cv-layout">
          <ScrollReveal>
            <aside className="cv-sidebar card-glass">
              <h2 className="cv-sidebar__title">Persönliche Daten</h2>
              <dl className="cv-dl">
                <div>
                  <dt>Name</dt>
                  <dd>{person.name}</dd>
                </div>
                <div>
                  <dt>Geburtsdatum</dt>
                  <dd>{person.birthDate}</dd>
                </div>
                <div>
                  <dt>Standort</dt>
                  <dd>{person.location}</dd>
                </div>
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a href={`tel:${person.phone.replace(/\s/g, '')}`}>{person.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>E-Mail</dt>
                  <dd>
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                  </dd>
                </div>
              </dl>
            </aside>
          </ScrollReveal>

          <div className="cv-main">
            <ScrollReveal>
              <section className="cv-block card-glass">
                <SectionTitle label="Ausbildung" title="Bildungsweg" />
                <ol className="timeline">
                  {education.map((item) => (
                    <li key={item.period} className="timeline__item">
                      <span className="timeline__period">{item.period}</span>
                      <div className="timeline__content">
                        <h3>{item.title}</h3>
                        <p>{item.place}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <section className="cv-block card-glass">
                <SectionTitle label="Fähigkeiten" title="Kenntnisse" />
                <ul className="cv-list">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <section className="cv-block card-glass">
                <SectionTitle label="Kommunikation" title="Sprachen" />
                <div className="lang-bars">
                  {languages.map((lang) => (
                    <div key={lang.name} className="lang-bar">
                      <div className="lang-bar__header">
                        <span className="lang-bar__name">{lang.name}</span>
                        <span className="lang-bar__level">{lang.level}</span>
                      </div>
                      <div className="lang-bar__track">
                        <div
                          className="lang-bar__fill"
                          style={{ width: `${lang.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <section className="cv-block card-glass">
                <SectionTitle label="Freizeit" title="Interessen" />
                <ul className="tag-list tag-list--inline">
                  {interests.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <section className="cv-block">
                <SectionTitle label="Entwicklung" title="Technologie-Stack" />
                <div className="skills-grid skills-grid--compact">
                  {techStack.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
