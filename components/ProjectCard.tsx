import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  technologies?: string[];
}

export function ProjectCard({
  title,
  description,
  link,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="project-card__tags">
          {technologies.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a
          href={link}
          className="project-card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
