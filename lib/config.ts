// Site data - Update this file with your personal information

export const siteMetadata = {
  title: "Basil Asay's Portfolio",
  description: "Personal portfolio with downloadable resume and showcasing projects, experience, and skills.",
};

export const personalInfo = {
    coverImage: "/BasilAndKaitlyn.png",
    name: "Basil Asay",
    title: "Technician",
    company: "HCLTech On-Site at Meta",
    bio: "My journey into IT began at 14, building my first computer and discovering a passion that would define my career. After 10+ years working in retail, medicine, and warehouse environments, I made the leap into IT when Meta gave me my first opportunity in the field. Now I specialize in fiber optic troubleshooting and data center operations, backed by CompTIA A+ and Network+ certifications. I give 110% every day—I'm never late, I prioritize efficiency, I'm detail-oriented, I learn fast, I think outside the box, and I'm a strong leader who thrives on solving complex technical challenges.",
};

export const experience = [
  {
    title: "Data Center Technician",
    company: "HCLTech On-Site at Meta",
    dateRange: "February 2024 - Present",
    description: "Layer 1 technician for Meta's data centers in Henrico, Virginia, specializing in fiber optic troubleshooting and network infrastructure maintenance. Responsible for diagnosing and resolving cabling and optical connectivity issues across the data center campus and even between long-distance sites, ensuring maximum uptime for our critical infrastructure. I work with cutting-edge networking equipment, interpret network switch provision logs, and provide detailed notes for all troubleshooting tickets.",
    highlights: [
      "Primary focus is fiber optic connection troubleshooting and repair",
      "Maintain high uptime across data center infrastructure meeting SLA",
      "Work with enterprise-grade networking equipment and proprietary monitoring software",
      "Document technical procedures and solutions in detail for knowledge sharing"
    ]
  },
  // Add more experience items here
];

export const projects = [
  {
    title: "My Portfolio Website",
    description: "Modern and easily accessible portfolio built with Next.js and React. It features a responsive design for desktop and mobile, and up-to-date information on my current skills and projects.",
    link: "https://github.com/Flopet/basilasay",
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
    description: "Custom-built server running 9+ self-hosted services including Jellyfin, AudioBookshelf, Home Assistant, and Immich. Features multi-tier storage with 22TB capacity, parity protection, and secure remote access via Tailscale VPN.",
    link: "",
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

export const education = [
  {
    certificate: "CompTIA A+",
    issuer: "CompTIA",
    year: "2024",
    details: "", // Optional: What skills or knowledge does this demonstrate?
    badge: "/comptia-a-badge.png"
  },
  {
    certificate: "CompTIA Network+",
    issuer: "CompTIA",
    year: "2025",
    details: "",
    badge: "/comptia-network-badge.png"
  }
  // Add more education items here
];

export const contacts = [
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
