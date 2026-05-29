import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/content';

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Meine Projekte – von der persönlichen Website bis zu zukünftigen Kundenaufträgen"
      />

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              label="Arbeiten"
              title="Alle Projekte"
              subtitle="Jedes Projekt zeigt meinen Lernfortschritt und meine Leidenschaft für Webentwicklung"
            />
          </ScrollReveal>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 100}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
