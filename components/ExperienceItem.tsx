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
    <div className="border-l-2 border-border-strong pl-4">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-foreground-muted">
        {company} • {dateRange}
      </p>
      <p className="mt-2 text-foreground">{description}</p>
    </div>
  );
}
