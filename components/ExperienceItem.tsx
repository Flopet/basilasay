interface ExperienceItemProps {
  title: string;
  company: string;
  dateRange: string;
  description: string;
}

export function ExperienceItem({
  title,
  company,
  dateRange,
  description,
}: ExperienceItemProps) {
  return (
    <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400">
        {company} • {dateRange}
      </p>
      <p className="mt-2 text-zinc-700 dark:text-zinc-300">{description}</p>
    </div>
  );
}
