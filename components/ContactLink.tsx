import "./css/ContactLink.css";

interface ContactLinkProps {
  href: string;
  label: string;
  external?: boolean;
}

export function ContactLink({ href, label, external = false }: ContactLinkProps) {
  // Auto-detect email and add mailto: if needed
  const isEmail = label.toLowerCase() === "email";
  const finalHref = isEmail && !href.startsWith("mailto:")
    ? `mailto:${href}`
    : href;

  return (
    <a
      href={finalHref}
      className="contact-link"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
}
