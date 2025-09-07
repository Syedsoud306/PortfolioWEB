import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} desc={p.desc} />
        ))}
      </div>
    </section>
  );
}
