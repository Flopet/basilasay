// Homelab Configuration
// This file contains all configurable data for the homelab project page

/* ============================================
   TYPE DEFINITIONS
   ============================================ */

export interface HardwareComponent {
  componentType: string;
  brand: string;
  model: string;
  additionalDetails: string;
  icon: string;
  link: string;
}

export interface OperatingSystem {
  name: string;
  version?: string;
  icon: string;
  link: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  category: string;
  url: string;
  status?: "running" | "planned" | "maintenance" | "offline";
  icon: string;
  tags?: string[];
}

export type StorageUsage = "parity" | "array" | "cache" | "boot" | "cloud" | "other";
export type FormFactor = "hdd" | "ssd" | "nvme" | "flash";

export interface StorageDevice {
  usage: StorageUsage;
  brand?: string;
  speed?: string;
  capacity: string;
  formFactor: FormFactor;
}

export interface SecurityStrategy {
  icon: string;
  name: string;
  shortDescription: string;
  longDescription: string;
}

/* ============================================
   HARDWARE COMPONENTS
   ============================================ */

export const hardwareComponents: HardwareComponent[] = [
  {
    componentType: "Case",
    brand: "Rosewill",
    model: "Helium Mid-Tower ATX",
    additionalDetails: "10x 3.5\" + 3x 2.5\" drive bays",
    icon: "/computer-case.svg",
    link: "",
  },
  {
    componentType: "Motherboard",
    brand: "ASUS",
    model: "TUF B360M-PLUS GAMING S",
    additionalDetails: "",
    icon: "/motherboard.svg",
    link: "",
  },
  {
    componentType: "CPU",
    brand: "Intel",
    model: "Core i5-8400",
    additionalDetails: "6-Core @ 2.80GHz",
    icon: "/cpu.svg",
    link: "",
  },
  {
    componentType: "RAM",
    brand: "",
    model: "32GB DDR4-2666MHz",
    additionalDetails: "",
    icon: "/ram.svg",
    link: "",
  },
  {
    componentType: "GPU",
    brand: "Nvidia",
    model: "GeForce GTX 1060 3GB",
    additionalDetails: "For hardware transcoding",
    icon: "/gpu.svg",
    link: "",
  },
  {
    componentType: "Wireless Access Point",
    brand: "TP-Link",
    model: "EAP610",
    additionalDetails: "WiFi 6, WPA3, PoE+",
    icon: "/wifi.svg",
    link: "",
  },
  {
    componentType: "Router",
    brand: "",
    model: "ISP-provided gateway",
    additionalDetails: "",
    icon: "/router.svg",
    link: "",
  },
  {
    componentType: "Remote Management",
    brand: "",
    model: "IP KVM",
    additionalDetails: "",
    icon: "/terminal.svg",
    link: "",
  },
  {
    componentType: "Power Protection",
    brand: "",
    model: "UPS Surge Protector",
    additionalDetails: "",
    icon: "/electric.svg",
    link: "",
  },
];

export const operatingSystem: OperatingSystem = {
  name: "Unraid OS",
  version: "",
  icon: "",
  link: "https://unraid.net/",
  description: "Unraid runs entirely from RAM but boots from USB. The USB drive stores the OS and configuration.",
};

/* ============================================
   STORAGE ARCHITECTURE
   ============================================ */

export const storageArchitecture: StorageDevice[] = [
  {
    usage: "parity",
    brand: "",
    speed: "",
    capacity: "20TB",
    formFactor: "hdd",
  },
  {
    usage: "array",
    brand: "",
    speed: "",
    capacity: "20TB",
    formFactor: "hdd",
  },
  {
    usage: "array",
    brand: "",
    speed: "",
    capacity: "2TB",
    formFactor: "hdd",
  },
  {
    usage: "array",
    brand: "",
    speed: "",
    capacity: "2TB",
    formFactor: "hdd",
  },
  {
    usage: "cache",
    brand: "",
    speed: "",
    capacity: "512GB",
    formFactor: "nvme",
  },
  {
    usage: "other",
    brand: "",
    speed: "",
    capacity: "128GB",
    formFactor: "ssd",
  },
  {
    usage: "boot",
    brand: "",
    speed: "",
    capacity: "128GB",
    formFactor: "flash",
  },
];

/* ============================================
   HOSTED SERVICES
   ============================================ */

export const services: Service[] = [
  // Media & Content
  {
    title: "Jellyfin",
    description:
      "Media streaming server for movies, TV shows, and music. Uses the GTX 1060 for hardware-accelerated transcoding to support multiple simultaneous streams.",
    category: "Media & Content",
    url: "https://jellyfin.org/",
    status: "running",
    icon: "/jellyfin.svg",
    tags: ["Media", "Streaming", "Transcoding"],
  },
  {
    title: "Audiobookshelf",
    description:
      "Audiobook and podcast server with progress tracking and mobile app support.",
    category: "Media & Content",
    url: "https://www.audiobookshelf.org/",
    status: "running",
    icon: "/audiobookshelf.svg",
    tags: ["Media", "Audiobooks", "Podcasts"],
  },
  {
    title: "Immich",
    description:
      "Self-hosted photo and video backup solution. A Google Photos alternative that keeps my data under my control.",
    category: "Media & Content",
    url: "https://immich.app/",
    status: "running",
    icon: "/immich.svg",
    tags: ["Photos", "Backup", "Privacy"],
  },

  // Productivity & Collaboration
  {
    title: "AFFiNE",
    description: "Open-source workspace for notes, docs, and project planning.",
    category: "Productivity & Collaboration",
    url: "https://affine.pro/",
    status: "running",
    icon: "/affine.svg",
    tags: ["Productivity", "Notes", "Collaboration"],
  },
  {
    title: "OwnCloud",
    description:
      "Personal cloud storage for file backup and sharing across devices.",
    category: "Productivity & Collaboration",
    url: "https://owncloud.dev/ocis/#owncloud-infinite-scale",
    status: "running",
    icon: "/owncloud.svg",
    tags: ["Cloud Storage", "File Sync"],
  },
  {
    title: "Peppermint",
    description:
      "IT ticketing and help desk system. I use this to track family tech support requests, log server maintenance tasks, and document solutions to problems I've solved. It includes a built-in knowledge base for storing guides and manuals.",
    category: "Productivity & Collaboration",
    url: "https://peppermint.sh/",
    status: "running",
    icon: "/peppermint.svg",
    tags: ["Help Desk", "Ticketing", "Documentation"],
  },

  // Infrastructure & Management
  {
    title: "Homarr",
    description:
      "Customizable dashboard that serves as the central hub for all my services. Displays real-time container status with start/stop/restart controls, plus live server resource monitoring.",
    category: "Infrastructure & Management",
    url: "https://homarr.dev/",
    status: "running",
    icon: "/homarr.svg",
    tags: ["Dashboard", "Monitoring", "Management"],
  },
  {
    title: "AMP (Application Management Platform)",
    description: "Manages and hosts game servers for friends.",
    category: "Infrastructure & Management",
    url: "https://cubecoders.com/AMP",
    status: "running",
    icon: "/cubecoders-amp.png",
    tags: ["Gaming", "Server Management"],
  },
  {
    title: "Cloudflare Tunnel",
    description:
      "Securely exposes public-facing services to the internet without opening ports on my router. Each service gets its own custom domain.",
    category: "Infrastructure & Management",
    url: "https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/",
    status: "running",
    icon: "/cloudflare.svg",
    tags: ["Security", "Networking", "Tunnel"],
  },
  {
    title: "PostgreSQL & Redis",
    description: "Database services that support multiple applications.",
    category: "Infrastructure & Management",
    url: "",
    status: "running",
    icon: "/database-server-icon.svg",
    tags: ["Database", "Cache"],
  },
  {
    title: "Duplicati",
    description: "Automated backup solution for critical data and configurations.",
    category: "Infrastructure & Management",
    url: "https://duplicati.com/",
    status: "running",
    icon: "/duplicati.svg",
    tags: ["Backup", "Automation"],
  },

  // Security & Access
  {
    title: "Tailscale",
    description:
      "Zero-trust mesh VPN for secure remote access to the server and admin panels. All sensitive services stay behind the VPN and aren't exposed publicly.",
    category: "Security & Access",
    url: "https://tailscale.com/",
    status: "running",
    icon: "/tailscale.svg",
    tags: ["VPN", "Security", "Remote Access"],
  },
  {
    title: "Vaultwarden",
    description:
      "Password manager that stores encrypted credentials in a local database. Supports two-factor authentication and password generation.",
    category: "Security & Access",
    url: "https://github.com/dani-garcia/vaultwarden",
    status: "running",
    icon: "/vaultwarden.svg",
    tags: ["Password Manager", "2FA", "Encryption"],
  }
];

// Helper function to get services by category
export function getServicesByCategory(category: string): Service[] {
  return services.filter((service) => service.category === category);
}

// Get unique categories from services
export const serviceCategories = Array.from(
  new Set(services.map((s) => s.category))
);

/* ============================================
   SECURITY STRATEGIES
   ============================================ */

export const securityStrategies: SecurityStrategy[] = [
  {
    icon: "",
    name: "Cloudflare Tunnel",
    shortDescription: "Cloud Tunneling Service",
    longDescription:
      "Public-facing services (like Jellyfin, Immich, AFFiNE) are accessible via custom domains that route through Cloudflare's infrastructure. This means no ports are opened on my router, and Cloudflare provides DDoS protection and SSL encryption automatically.",
  },
  {
    icon: "",
    name: "Tailscale VPN",
    shortDescription: "Private VPN",
    longDescription:
      "All administrative interfaces and sensitive services are only accessible through Tailscale's mesh VPN. This includes server management panels, databases, and configuration tools. Even when I'm remote, I connect through Tailscale before accessing anything sensitive.",
  },
  {
    icon: "",
    name: "Separation of Access",
    shortDescription: "Access Control Strategy",
    longDescription:
      "Public services get Cloudflare domains for convenience. Private/admin services stay VPN-only. This keeps management interfaces completely isolated from the internet.",
  },
  {
    icon: "",
    name: "Docker Network Isolation",
    shortDescription: "Container Security",
    longDescription:
      "Services run in isolated Docker networks with only necessary ports exposed to the host.",
  },
];