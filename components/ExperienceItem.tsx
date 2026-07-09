import "./css/ExperienceItem.css";
import { Experience } from "@/lib/config";

export function ExperienceItem({
  title,
  company,
  dateRange,
  description,
  highlights = [],
  tag,
}: Experience) {
  return (
    <div className="experience-item">
      <h3 className="experience-item__title">
        <u>{title}</u>
        {tag && <span className="experience-item__tag">({tag})</span>}
      </h3>
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
