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
  highlights,
}: ExperienceItemProps) {
  return (
    <div className="experience-item">
      <div className="experience-item__header">
        <h3 className="experience-item__title">{title}</h3>
        <span className="experience-item__date">{dateRange}</span>
      </div>
      <p className="experience-item__company">{company}</p>
      <p className="experience-item__description">{description}</p>
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
