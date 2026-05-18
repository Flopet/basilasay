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
  uptime_status_key?: number;
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

export interface NetworkNode {
  id: string;
  label: string;
  detail?: string;
  cloud?: boolean;
}

export interface NetworkConnection {
  from: string;
  to: string;
  label?: string;
  bidirectional?: boolean;
}

export interface NetworkAccessPath {
  title: string;
  nodes: NetworkNode[];
  connections: NetworkConnection[];
}

export interface NetworkTopology {
  mainFlow: {
    nodes: NetworkNode[];
    connections: NetworkConnection[];
  };
  accessPaths: NetworkAccessPath[];
}

/* ============================================
   HARDWARE COMPONENTS
   ============================================ */

export const hardwareComponents: HardwareComponent[] = [
  {
    componentType: "Chassis",
    brand: "Rosewill",
    model: "4U Rackmount Server Chassis",
    additionalDetails: "7x 3.5\" + 2x 5.25\" drive bays",
    icon: "/server.svg",
    link: "https://a.co/d/0bc0jFmv",
  },
  {
    componentType: "Motherboard",
    brand: "ASUS",
    model: "TUF B360M-PLUS GAMING S",
    additionalDetails: "",
    icon: "/motherboard.svg",
    link: "https://www.amazon.com/Gaming-Motherboard-LGA1151-TUF-B360M-PLUS/dp/B07GRC63JM",
  },
  {
    componentType: "CPU",
    brand: "Intel",
    model: "Core i5-8400",
    additionalDetails: "6-Core @ 2.80GHz",
    icon: "/cpu.svg",
    link: "https://www.amazon.com/Intel-i5-8400-Desktop-Processor-Cores/dp/B0759FGJ3Q",
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
    brand: "Intel",
    model: "Arc A380 6GB",
    additionalDetails: "",
    icon: "/gpu.svg",
    link: "https://a.co/d/00Xbps7U",
  },
  /*
  {
    componentType: "Wireless Access Point",
    brand: "TP-Link",
    model: "EAP610",
    additionalDetails: "WiFi 6, WPA3, PoE+",
    icon: "/wifi.svg",
    link: "",
  },
  */
  {
    componentType: "Network Switch",
    brand: "Netgear",
    model: "GS308EP",
    additionalDetails: "[8 port, 1000Mbps, PoE+]",
    icon: "/network-switch.svg",
    link: "https://www.amazon.com/NETGEAR-Gigabit-Ethernet-Switch-GS308EP/dp/B08MBFLMDC",
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
    brand: "GL.iNet",
    model: "Comet",
    additionalDetails: "IP KVM",
    icon: "/terminal.svg",
    link: "https://a.co/d/0ihn5zI4",
  },
  {
    componentType: "Power Protection",
    brand: "APC",
    model: "BE600M1",
    additionalDetails: "UPS & Surge Protector",
    icon: "/electric.svg",
    link: "https://a.co/d/05MfwDN5",
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
    capacity: "240GB",
    formFactor: "ssd",
  },
  {
    usage: "other",
    brand: "",
    speed: "",
    capacity: "1TB",
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
    title: "Plex",
    description:
      "Media streaming server for movies, TV shows, and music. Uses the dedicated GPU for hardware-accelerated transcoding to support multiple simultaneous streams.",
    category: "Media & Content",
    url: "https://plex.tv/",
    uptime_status_key: 20,
    icon: "/plex.svg",
    tags: ["Media", "Streaming", "Transcoding"],
  },
  {
    title: "Audiobookshelf",
    description:
      "Audiobook and podcast server with progress tracking and mobile app support.",
    category: "Media & Content",
    url: "https://www.audiobookshelf.org/",
    uptime_status_key: 2,
    icon: "/audiobookshelf.svg",
    tags: ["Media", "Audiobooks", "Podcasts"],
  },
  {
    title: "Immich",
    description:
      "Self-hosted photo and video backup solution. A Google Photos alternative that keeps my data under my control.",
    category: "Media & Content",
    url: "https://immich.app/",
    uptime_status_key: 6,
    icon: "/immich.svg",
    tags: ["Photos", "Backup", "Privacy"],
  },

  // Productivity & Collaboration
  {
    title: "AFFiNE",
    description: "Open-source workspace for notes, docs, and project planning.",
    category: "Productivity & Collaboration",
    url: "https://affine.pro/",
    uptime_status_key: 10,
    icon: "/affine.svg",
    tags: ["Productivity", "Notes", "Collaboration"],
  },
  {
    title: "OwnCloud",
    description:
      "Personal cloud storage for file sync and sharing across devices, serving as a self-hosted alternative to Google Drive or Dropbox.",
    category: "Productivity & Collaboration",
    url: "https://owncloud.dev/ocis/#owncloud-infinite-scale",
    uptime_status_key: 7,
    icon: "/owncloud.svg",
    tags: ["Cloud Storage", "File Sync", "Privacy"],
  },
  {
    title: "Open WebUI",
    description:
      "Open WebUI is a self-hosted web interface for interacting with local AI models via Ollama or OpenAI-compatible APIs, with support for chat history, model switching, and multimodal input.",
    category: "Productivity & Collaboration",
    url: "https://openwebui.com/",
    uptime_status_key: 17,
    icon: "/open-webui.svg",
    tags: ["AI", "LLM", "Self-Hosted"],
  },
  {
    title: "n8n",
    description:
      "Open-source workflow automation tool that connects APIs, databases, and other services. Supports custom workflows and integrations.",
    category: "Productivity & Collaboration",
    url: "https://n8n.io/",
    uptime_status_key: 15,
    icon: "/n8n.svg",
    tags: ["Automation", "Workflows", "Integrations"],
  },
  {
    title: "Omnitools",
    description:
      "OmniTools is a self-hosted collection of everyday utility tools — unit converters, text formatters, encoders, calculators, and more — accessible from a single web interface without sending data to third-party sites.",
    category: "Productivity & Collaboration",
    url: "https://omnitools.dev/",
    uptime_status_key: 16,
    icon: "/omnitools.webp",
    tags: ["Utilities", "Privacy", "Self-Hosted"],
  },
  {
    title: "Picoshare",
    description:
      "Self-hosted file sharing service that allows users to upload and share files with friends and family.",
    category: "Productivity & Collaboration",
    url: "https://picoshare.io/",
    uptime_status_key: 18,
    icon: "/picoshare.svg",
    tags: ["File Sharing", "Privacy", "Self-Hosted"],
  },

  // Infrastructure & Management
  {
    title: "Homarr",
    description:
      "Customizable dashboard that serves as the central hub for all my services. Displays real-time container status with start/stop/restart controls, plus live server resource monitoring.",
    category: "Infrastructure & Management",
    url: "https://homarr.dev/",
    uptime_status_key: 5,
    icon: "/homarr.svg",
    tags: ["Dashboard", "Monitoring", "Management"],
  },
  {
    title: "AMP (Application Management Platform)",
    description: "Manages and hosts game servers for friends.",
    category: "Infrastructure & Management",
    url: "https://cubecoders.com/AMP",
    uptime_status_key: 8,
    icon: "/cubecoders-amp.png",
    tags: ["Gaming", "Server Management"],
  },
  {
    title: "Cloudflare Tunnel",
    description:
      "Securely exposes public-facing services to the internet without opening ports on my router. Each service gets its own custom domain.",
    category: "Infrastructure & Management",
    url: "https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/",
    uptime_status_key: 11,
    icon: "/cloudflare.svg",
    tags: ["Security", "Networking", "Tunnel"],
  },
  {
    title: "Duplicati",
    description: "Automated backup solution for critical data and configurations.",
    category: "Infrastructure & Management",
    url: "https://duplicati.com/",
    uptime_status_key: 12,
    icon: "/duplicati.svg",
    tags: ["Backup", "Automation"],
  },
  {
    title: "Dockhand",
    description: "Organized and interactive management interface for Docker containers and Compose stacks.",
    category: "Infrastructure & Management",
    url: "https://dockhand.pro/",
    uptime_status_key: 21,
    icon: "/dockhand.webp",
    tags: ["Container Management", "Docker", "Docker Compose"],
  },
  {
    title: "Uptime Kuma",
    description: "Real-time monitoring dashboard for all my services.",
    category: "Infrastructure & Management",
    url: "https://uptime.kuma.pet/",
    uptime_status_key: 14,
    icon: "/uptime-kuma.svg",
    tags: ["Monitoring", "Dashboard"],
  },
  {
    title: "Syncthing",
    description:
      "Self-hosted file synchronization and sharing tool that uses peer-to-peer technology to sync files across multiple devices.",
    category: "Infrastructure & Management",
    url: "https://syncthing.net/",
    uptime_status_key: 19,
    icon: "/syncthing.svg",
    tags: ["File Sync", "Privacy"],
  },

  // Security & Access
  {
    title: "Tailscale",
    description:
      "Zero-trust mesh VPN for secure remote access to the server and admin panels. All sensitive services stay behind the VPN and aren't exposed publicly.",
    category: "Security & Access",
    url: "https://tailscale.com/",
    icon: "/tailscale.svg",
    tags: ["VPN", "Security", "Remote Access"],
  },
  {
    title: "Vaultwarden",
    description:
      "Password manager that stores encrypted credentials in a local database. Supports two-factor authentication and password generation.",
    category: "Security & Access",
    url: "https://github.com/dani-garcia/vaultwarden",
    uptime_status_key: 9,
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
      "Public-facing services (like Plex, Immich, AFFiNE) are accessible via custom domains that route through Cloudflare's infrastructure. This means no ports are opened on my router, and Cloudflare provides DDoS protection and SSL encryption automatically.",
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

/* ============================================
   NETWORK TOPOLOGY
   ============================================ */

export const networkTopology: NetworkTopology = {
  mainFlow: {
    nodes: [
      { id: "internet", label: "Internet / ISP", cloud: true },
      { id: "router", label: "ISP Router", detail: "Primary gateway" },
      { id: "switch", label: "Netgear GS308EP", detail: "Managed PoE+ switch" },
      { id: "server", label: "Homelab Server", detail: "Unraid OS • Docker" },
    ],
    connections: [
      { from: "internet", to: "router" },
      { from: "router", to: "switch", label: "Ethernet" },
      { from: "switch", to: "server", label: "Ethernet" },
    ],
  },
  accessPaths: [
    {
      title: "Remote Access",
      nodes: [
        { id: "tailscale", label: "Tailscale VPN", detail: "Mesh VPN overlay", cloud: true },
        { id: "remote-devices", label: "Remote Devices", detail: "Phone, laptop, etc.", cloud: true },
      ],
      connections: [
        { from: "tailscale", to: "remote-devices", label: "Encrypted tunnel", bidirectional: true },
      ],
    },
    {
      title: "Public Access",
      nodes: [
        { id: "cloudflare", label: "Cloudflare Tunnel", detail: "Zero-trust proxy", cloud: true },
        { id: "public-users", label: "Public Users", detail: "Custom domains", cloud: true },
      ],
      connections: [
        { from: "cloudflare", to: "public-users", label: "HTTPS", bidirectional: true },
      ],
    },
  ],
};