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
    <div className="rounded-lg border border-border bg-card-bg p-6 hover:border-border-strong transition-colors shadow-sm" style={{ boxShadow: '0 2px 8px var(--shadow)' }}>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-foreground mb-4">{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-sm px-2 py-1 rounded bg-background-subtle text-foreground-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a
          href={link}
          className="text-foreground font-medium hover:text-foreground-muted transition-colors underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
