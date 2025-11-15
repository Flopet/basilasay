import "./css/EducationItem.css";

interface EducationItemProps {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export function EducationItem({
  degree,
  institution,
  year,
  details,
}: EducationItemProps) {
  return (
    <div>
      <h3 className="education-item__degree">{degree}</h3>
      <p className="education-item__meta">
        {institution} • {year}
      </p>
      {details && (
        <p className="education-item__details">{details}</p>
      )}
    </div>
  );
}
