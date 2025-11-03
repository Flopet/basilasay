import "./ExperienceItem.css";

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
    <div className="experience-item">
      <h3 className="experience-item__title">{title}</h3>
      <p className="experience-item__meta">
        {company} • {dateRange}
      </p>
      <p className="experience-item__description">{description}</p>
    </div>
  );
}
