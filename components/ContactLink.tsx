interface ContactLinkProps {
  href: string;
  label: string;
  external?: boolean;
}

export function ContactLink({ href, label, external = false }: ContactLinkProps) {
  return (
    <a
      href={href}
      className="text-foreground hover:underline"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
}
