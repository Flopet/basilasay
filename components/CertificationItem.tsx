import "./css/CertificationItem.css";

interface CertificationItemProps {
  name: string;
  issuer: string;
  year: string;
  description?: string;
}

export function CertificationItem({
  name,
  issuer,
  year,
  description,
}: CertificationItemProps) {
  return (
    <div className="certification-item">
      <div className="certification-item__header">
        <h3 className="certification-item__name">{name}</h3>
        <span className="certification-item__year">{year}</span>
      </div>
      <p className="certification-item__issuer">{issuer}</p>
      {description && (
        <p className="certification-item__description">{description}</p>
      )}
    </div>
  );
}
