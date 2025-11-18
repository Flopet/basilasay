import "./css/ExperienceItem.css";

interface ExperienceItemProps {
  title: string;
  company: string;
  dateRange: string;
  description: string;
  highlights?: string[];
}

export function ExperienceItem({
  title,
  company,
  dateRange,
  description,
  highlights = [],
}: ExperienceItemProps) {
  return (
    <div className="experience-item">
      <h3 className="experience-item__title">{title}</h3>
      <p className="experience-item__meta">
        {company} • {dateRange}
      </p>
      <p className="experience-item__description">{description}</p>

      {/* Ensure highlights are rendered only if they exist */}
      {highlights && highlights.length > 0 && (
      <ul className="experience-item__highlights">
        {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
        ))}
      </ul>
      )}

    </div>
  );
}
