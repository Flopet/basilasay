import "./css/CertItem.css";
import Image from "next/image";

interface CertItemProps {
  certificate: string;
  issuer: string;
  year: string;
  details?: string;
  badge?: string;
}

export function CertItem({
  certificate,
  issuer,
  year,
  details,
  badge,
}: CertItemProps) {
  return (
    <div className="cert-item">
      <Image src={badge? badge : "no image"} alt={certificate + " Badge"} className="cert-item__badge" width={60} height={60} />
      <h3 className="cert-item__degree">{certificate}</h3>
      <p className="cert-item__meta">
        {issuer} • {year}
      </p>
      {details && (
        <p className="cert-item__details">{details}</p>
      )}
    </div>
  );
}
