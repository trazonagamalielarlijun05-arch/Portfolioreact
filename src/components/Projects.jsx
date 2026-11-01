import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHeading eyebrow="Featured Projects" title="Some of My Recent Work" centered />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
