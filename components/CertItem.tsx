import "./css/CertItem.css";
import Image from "next/image";
import { Certificate } from "@/lib/config";

export function CertItem({
  certificate,
  issuer,
  year,
  details,
  badge,
}: Certificate) {
  return (
    <div className="cert-item">
      <Image src={badge? badge : "no image"} alt={certificate + " Badge"} className="cert-item__badge" width={60} height={60} />
      <div style={{ display: "block", justifyContent: "space-between" }}>
      <h3 className="cert-item__degree">{certificate}</h3>
      <p className="cert-item__meta">
        {issuer} • {year}
      </p>
      {details && (
        <p className="cert-item__details">{details}</p>
      )}
      </div>
    </div>
  );
}
