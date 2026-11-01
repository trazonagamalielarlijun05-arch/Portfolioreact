export default function ProjectCard({ title, description, thumb, thumbClass, href }) {
  return (
    <div className="project-card">
      <div className={`project-thumb ${thumbClass}`}>{thumb}</div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={href} className="project-link">View Project →</a>
      </div>
    </div>
  );
}
