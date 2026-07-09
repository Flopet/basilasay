/* ============================================
   TYPE DEFINITIONS
   ============================================ */

export interface Experience {
  title: string;
  company: string;
  dateRange: string;
  description: string;
  highlights?: string[];
  tag?: string;
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
}

export interface Certificate {
  certificate: string;
  issuer: string;
  year: string;
  details?: string;
  badge?: string;
}

export interface Contact {
  label: string;
  href: string;
  external?: boolean;
}

/* ============================================
   SITE DATA
   ============================================ */

export const siteMetadata = {
  title: "Basil Asay's Portfolio",
  description: "Personal portfolio with downloadable resume and showcasing projects, experience, and skills.",
  updatedAt: "07.09.2026",
};

export const personalInfo = {
    coverImage: "/pro_headshot.webp",
    coverImageMobile: "/pro_headshot_cropped.webp",
    name: "Basil Asay",
    title: "Data Center Technician",
    company: "Microsoft",
    email: "basilrasay@gmail.com",
    phone: "(804) 519-3329",
    bio: "I built my first PC at 14 and have been tinkering with hardware ever since—these days I run a homelab as a hobby to keep learning. After 10+ years in retail and warehouse work, I made the jump into IT when Meta gave me my first shot in data center operations. From there I moved to Microsoft as a contractor, and recently converted to full-time. I specialize in hardware break/fix, fiber troubleshooting, and keeping production infrastructure running smoothly. I hold CompTIA A+ and Network+ certifications, and I bring the same hands-on curiosity to work that keeps me building things at home.",
};

export const experience: Experience[] = [
  {
    title: "Data Center Technician",
    company: "Microsoft",
    dateRange: "July 2026 - Present",
    description: "Full-time technician supporting Microsoft's cloud infrastructure. I handle hardware break/fix, incident response, and component replacements to keep production systems running. Converted from contractor after demonstrating consistent performance.",
    highlights: [
      "Perform hardware break/fix and server maintenance on production infrastructure",
      "Troubleshoot and resolve infrastructure issues to minimize customer impact",
      "Replace faulty components including drives, NICs, PSUs, and GPUs",
      "Validate fiber optic connectivity and troubleshoot cabling issues",
      "Respond to critical incidents and support operational excellence",
      "Document procedures and share knowledge with the team"
    ]
  },
  {
    title: "Data Center Technician",
    tag: "Contractor",
    company: "TekSystems at Microsoft",
    dateRange: "November 2025 - July 2026",
    description: "BreakFix technician responsible for diagnosing and resolving hardware failures, fiber optic connectivity issues, and component replacements across Microsoft's data center infrastructure to ensure OLA compliance and minimize downtime.",
    highlights: [
      "Troubleshoot fiber optic connectivity issues",
      "Replace faulty server components including PSUs, GPUs, drives, network interface cards and more",
      "Respond to critical incidents via ticketing system to maintain maximum uptime",
      "Document technical procedures and solutions in detail for knowledge sharing"
    ]
  },
  {
    title: "Data Center Technician",
    tag: "Contractor",
    company: "HCLTech at Meta",
    dateRange: "February 2025 - November 2025",
    description: "Layer 1 technician specializing in fiber optic troubleshooting and network infrastructure maintenance across Meta's Henrico, VA data center campus. Diagnose and resolve cabling and optical connectivity issues including long-distance fiber runs to ensure maximum uptime and SLA compliance.",
    highlights: [
      "Diagnose fiber optic failures using VFLs, loopbacks, light detector cards, and optical cleaning tools",
      "Troubleshoot MPO and LC fiber connectivity across campus and long-distance inter-site links",
      "Interpret network switch provision logs to isolate Layer 1 vs Layer 2/3 issues",
      "Use proprietary monitoring software to verify fiber optic signal integrity and performance metrics",
      "Document troubleshooting procedures and root cause analysis for future reference"
    ]
  },
  // Add more experience items here
];

export const projects: Project[] = [
  {
    title: "My Portfolio Website",
    description: "Modern and easily accessible portfolio built with Next.js and React. It features a responsive design for desktop and mobile, and up-to-date information on my current skills and projects.",
    link: "https://github.com/Flopet/resume-portfolio",
    tags: ["Next.JS", "React.JS", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "The Encryptor",
    description: "Basic script I built to learn Python cryptography concepts while creating a practical CLI application.",
    link: "https://github.com/Flopet/The-Encryptor",
    tags: ["Python", "Cryptography", "CLI", "TUI"],
  },
  {
    title: "Production Homelab Server",
    description: "Custom-built server running 9+ self-hosted services including Plex, AudioBookshelf, and Immich. Features multi-tier storage with 22TB capacity, parity protection, and secure remote access via Tailscale VPN.",
    link: "/homelab",
    tags: ["Unraid", "Docker", "Tailscale VPN", "Linux", "Networking", "Hardware"],
  },
  {
    title: "CSV to SQLite Converter",
    description: "A simple Python-based CLI tool to convert CSV files into SQLite tables and attaching them to a database for easy data analysis and manipulation.",
    link: "https://github.com/Flopet/csv-sqlite-conv",
    tags: ["Python", "SQLite", "CLI", "CSV"],
  }
  // Add more projects here
];

export const education: Certificate[] = [
  {
    certificate: "CompTIA A+",
    issuer: "CompTIA",
    year: "2023",
    details: "", // Optional: What skills or knowledge does this demonstrate?
    badge: "/comptia-a-badge.png"
  },
  {
    certificate: "CompTIA Network+",
    issuer: "CompTIA",
    year: "2026",
    details: "",
    badge: "/comptia-network-badge.png"
  }
  // Add more education items here
];

export const contacts: Contact[] = [
  {
    label: "Email",
    href: "basilrasay@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/basil-asay-03a260214/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Flopet",
    external: true,
  },
  // Add more contact links here (Twitter, Portfolio, etc.)
];
