import "./css/ContactLink.css";

interface ContactLinkProps {
  href: string;
  label: string;
  external?: boolean;
}

export function ContactLink({ href, label, external = false }: ContactLinkProps) {
  return (
    <a
      href={href}
      className="contact-link"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
}
