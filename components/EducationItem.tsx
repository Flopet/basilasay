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
      <h3 className="text-xl font-semibold text-foreground">{degree}</h3>
      <p className="text-foreground-muted">
        {institution} • {year}
      </p>
      {details && (
        <p className="mt-2 text-foreground">{details}</p>
      )}
    </div>
  );
}
