import Image from "next/image";
import "./HardwareItem.css";
import { HardwareComponent } from "@/lib/homelab-config";

interface HardwareItemProps extends HardwareComponent {}

export function HardwareItem({
  componentType,
  brand,
  model,
  additionalDetails,
  icon,
  link,
}: HardwareItemProps) {
  const specification = [brand, model, additionalDetails]
    .filter(Boolean)
    .join(" ");

  const content = (
    <tr className={`hardware-item ${link ? "hardware-item--clickable" : ""}`}>
      <td className="hardware-item__type">
        {icon && (
          <div className="hardware-item__icon">
            <Image src={icon} alt={componentType} width={24} height={24} />
          </div>
        )}
        <span>{componentType}</span>
      </td>
      <td className="hardware-item__spec">{specification}</td>
    </tr>
  );

  if (link) {
    return (
      <tr className="hardware-item hardware-item--clickable">
        <td className="hardware-item__type">
          {icon && (
            <div className="hardware-item__icon">
              <Image src={icon} alt={componentType} width={24} height={24} />
            </div>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hardware-item__link"
          >
            {componentType}
          </a>
        </td>
        <td className="hardware-item__spec">{specification}</td>
      </tr>
    );
  }

  return content;
}
