import "./css/ProjectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
}

export function ProjectCard({
  title,
  description,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      {tags && tags.length > 0 && (
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      {link? (
        <a
          href={link}
          className="project-card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      ) : (
          <a
           className="project-card__link pointer-events-none"
           style={{ cursor: "not-allowed", textDecoration: "none", color: "var(--border)"}}
           target="_blank"
           rel="noopener noreferrer"
          >
            Project Showcase Coming soon!
          </a>

      )}
    </div>
  );
}
