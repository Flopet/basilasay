import "./css/ContactLink.css";
import { Contact } from "@/lib/config";

export function ContactLink({ href, label, external = false }: Contact) {
  // Auto-detect email and add mailto: if needed
  const isEmail = label.toLowerCase() === "email";
  const finalHref = isEmail && !href.startsWith("mailto:") ? `mailto:${href}` : href;

  return (
    <a
      href={finalHref}
      title={href}
      className="contact-link"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
}
