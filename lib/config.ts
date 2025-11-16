// Site data - Update this file with your personal information

export const siteMetadata = {
  title: "Basil Asay's Portfolio",
  description: "Personal portfolio with downloadable resume and showcasing projects, experience, and skills.",
};

export const personalInfo = {
    coverImage: "/BasilAndKaitlyn.png",
    coverImageAlt: "Basil and his wife Kaitlyn",
    name: "Basil Asay",
    title: "Data Center Technician",
    company: "Meta",
    bio: "My journey into technology began at 14, building my first computer and discovering a passion that would define my career. After 10+ years working in retail, medicine, and warehouse environments, I made the leap into IT when Meta gave me my first opportunity in the field. Now I specialize in fiber optic troubleshooting and data center operations, backed by CompTIA A+ and Network+ certifications. I give 110% every day—I'm never late, I prioritize efficiency, I'm detail-oriented, I learn fast, I think outside the box, and I'm a strong leader who thrives on solving complex technical challenges.",
    elevator: "Data center technician passionate about fiber optics, networking, and continuous learning through hands-on projects.",
};

export const experience = [
  {
    title: "Data Center Technician",
    company: "Meta",
    dateRange: "February 2024 - Present",
    description: "Layer 1 technician for Meta's data centers in Henrico, Virginia, specializing in fiber optic troubleshooting and network infrastructure maintenance. Responsible for diagnosing and resolving cabling and optical connectivity issues across data center racks, ensuring maximum uptime for critical infrastructure. Work with cutting-edge networking equipment, perform hardware diagnostics, and maintain detailed documentation of all troubleshooting procedures.",
    highlights: [
      "Primary focus on fiber optic connection troubleshooting and repair",
      "Maintain high uptime across data center infrastructure",
      "Work with enterprise-grade networking equipment and monitoring systems",
      "Document technical procedures and solutions for knowledge sharing"
    ]
  },
];

// Skills organized by proficiency level
export const skills = {
  proficient: [
    "Fiber Optic Troubleshooting",
    "Hardware Troubleshooting",
    "Windows/macOS/Linux",
    "Docker Containerization",
    "Networking & Security",
    "Data Center Operations",
    "System Administration",
  ],
  intermediate: [
    "Python",
    "TypeScript/JavaScript",
    "Next.js/React",
    "VPN Configuration",
    "Storage Architecture",
  ],
  learning: [
    "SQL Databases",
    "Bash Scripting",
    "Git Version Control",
    "Tailwind CSS",
  ],
};

export const projects = [
  {
    title: "Production Homelab Server",
    description: "Custom-built server infrastructure running 9+ self-hosted services including Jellyfin, AudioBookshelf, Home Assistant, and Immich. Features multi-tier storage with 22TB capacity, parity protection, and secure remote access via Tailscale VPN.",
    link: "/projects/homelab",
    tags: ["Unraid", "Docker", "Tailscale VPN", "Linux", "Networking", "Hardware"],
  },
  {
    title: "Portfolio Website",
    description: "Modern, accessible portfolio built with Next.js 16 and React 19. Features responsive design with Tailwind CSS v4, dynamic resume generation, and optimized performance achieving 95+ Lighthouse scores.",
    link: "https://github.com/Flopet/basilasay",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "The Encryptor",
    description: "Terminal-based encryption tool with Text User Interface supporting multiple algorithms including AES, RSA, and Caesar cipher. Built to learn Python cryptography concepts while creating a practical CLI application.",
    link: "https://github.com/Flopet/The-Encryptor",
    tags: ["Python", "Cryptography", "CLI", "TUI"],
  }
];

export const certifications = [
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    year: "2025",
    description: "Validates skills in network troubleshooting, configuration, and security. Covers network architecture, operations, and security fundamentals.",
  },
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    year: "2024",
    description: "Industry-standard certification for IT operational roles. Covers hardware, operating systems, networking, mobile devices, and troubleshooting.",
  },
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
