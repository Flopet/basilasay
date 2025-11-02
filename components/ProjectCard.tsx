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
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-zinc-700 dark:text-zinc-300 mb-4">{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-sm px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a
          href={link}
          className="text-foreground font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
