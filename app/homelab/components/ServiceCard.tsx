import Image from "next/image";
import "./ServiceCard.css";
import { Service } from "@/lib/homelab-config";

export function ServiceCard({
  title,
  description,
  url,
  status,
  icon,
  tags,
}: Service) {
  return (
    <div className="service-card">
      <div className="service-card__header">
        <div className="service-card__icon">
          {icon && <Image src={icon} alt={title} width={32} height={32} />}
        </div>
          <h4 className="service-card__title">{title}</h4>
      </div>
      <div className="service-card__body">
      <p className="service-card__description">{description}</p>

      {tags && tags.length > 0 && (
        <div className="service-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="service-card__tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      </div>


      <div className="service-card__footer">
      {url && (
        <a
          href={url}
          className="service-card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More →
        </a>
      )}
      {status && (
          <span className={`service-card__status service-card__status--${status}`}>
              {status}
            </span>
      )}
      </div>
    </div>
  );
}
