# Self-Hosted Portfolio & Resume

A modern, configurable portfolio and resume website built with Next.js 16 and React 19. Designed to be forked, personalized, and self-hosted — all of your content is driven by simple TypeScript config files, so you never have to dig through components to update your info.

## Features

- **Config-driven content** — personal info, experience, projects, certifications, and contacts all live in `lib/config.ts`. Update one file, see it everywhere.
- **Dedicated homelab/project page** — a full showcase page with hardware specs, hosted services (with live uptime badges), storage architecture, network topology flowchart, and skills. All data-driven via `lib/homelab-config.ts`.
- **Responsive design** — two-column desktop layout that stacks cleanly on mobile and tablet.
- **Aged paper aesthetic** — warm, distinctive visual style with CSS variables for easy theming.
- **Printable resume** — built-in print button that renders a clean, printer-friendly version.
- **Docker-ready** — ship it with a single `docker build`.

## Tech Stack

- **Next.js 16** with App Router and React Server Components
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** (inline theme configuration, no `tailwind.config.js`)
- **Docker** (Alpine-based Node 25 image)

---

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Docker (optional, for containerized deployment)

### Development

```bash
git clone https://github.com/Flopet/basilasay.git
cd basilasay
npm install
npm run dev
```

The dev server starts at [http://localhost:3000](http://localhost:3000) with hot reload.

### Production (standalone)

```bash
npm run build
npm start
```

### Production (Docker)

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint checks |

---

## Configuration & Personalization

Almost everything on the site is controlled through two config files. You should rarely need to edit components directly.

### Main Portfolio — `lib/config.ts`

This file drives the home page. Each section has a typed interface and an exported array or object you fill in:

| Export | What it controls |
|--------|-----------------|
| `siteMetadata` | Page title, meta description, last-updated date |
| `personalInfo` | Name, job title, company, email, phone, bio, and cover images |
| `experience` | Work history entries (title, company, date range, description, highlights) |
| `projects` | Project cards (title, description, link, tags) |
| `education` | Certifications and degrees (name, issuer, year, badge image) |
| `contacts` | Contact links (label, URL, external flag) |

**Example — adding a new job:**

```text
// lib/config.ts
export const experience: Experience[] = [
  {
    title: "Your Job Title",
    company: "Company Name",
    dateRange: "Month Year - Current",
    description: "What you do.",
    highlights: [
      "Key accomplishment or responsibility",
      "Another highlight",
    ],
  },
  // ...existing entries
];
```

### Homelab / Project Page — `lib/homelab-config.ts`

This file drives the `/homelab` page. Same pattern — typed interfaces at the top, exported data below:

| Export | What it controls |
|--------|-----------------|
| `hardwareComponents` | Server specs table (component type, brand, model, icon, link) |
| `services` | Hosted service cards with categories, descriptions, icons, tags, and optional uptime badge keys |
| `storageArchitecture` | Storage devices (usage type, capacity, form factor) |
| `securityStrategies` | Security approach cards (name, short/long descriptions) |
| `networkTopology` | Network flowchart diagram (nodes, connections, access paths) |

Helper functions like `getServicesByCategory()` and derived values like `serviceCategories` are computed automatically from your data.

**Example — adding a new service:**

```text
// lib/homelab-config.ts
{
  title: "Nextcloud",
  description: "Self-hosted cloud storage and collaboration platform.",
  category: "Productivity & Collaboration",
  url: "https://nextcloud.com",
  icon: "/nextcloud.svg",        // place the icon in public/
  tags: ["Cloud Storage", "Sync"],
  uptime_status_key: 15,          // optional, for Uptime Kuma badge
},
```

**Example — adding a network node:**

```text
// lib/homelab-config.ts — networkTopology.mainFlow.nodes
{ id: "firewall", label: "pfSense Firewall", detail: "VLAN routing" },
```

Then add a connection referencing it by `id`.

### Theming — `app/globals.css`

All colors, spacing, and fonts are CSS variables in `:root`. Change the palette without touching any components:

```css
:root {
  --bg-paper-light: #f5f1e8;    /* Main background */
  --bg-paper-dark: #d9d0ba;     /* Gradient accent */
  --bg-card-white: #ffffff;     /* Card backgrounds */
  --accent-red: #8b2635;        /* Primary accent / borders */
  --accent-red-dark: #5a1822;   /* Emphasis accent */
  --text-primary: #1a1a1a;      /* Main text */
  --text-secondary: #4a4a4a;    /* Secondary text */
}
```

The homelab page has additional variables scoped to `.homelab-page` in `app/homelab/homelab.css`.

### Images

Place images (icons, headshots, badges) in the `public/` directory. Reference them with a leading slash in config:

```text
icon: "/my-icon.svg",
coverImage: "/headshot.webp",
badge: "/cert-badge.png",
```

### Fonts

Fonts are loaded in `app/layout.tsx` via `next/font/google` and mapped to CSS variables (`--body-font`, `--heading-font`, `--code-font`). To change fonts, update the imports in `layout.tsx` — the rest of the site picks them up through the variables.

---

## Project Structure

```
├── app/
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout, font loading, metadata
│   ├── page.tsx                 # Home page (portfolio/resume)
│   └── homelab/
│       ├── homelab.css          # Homelab page styles
│       ├── page.tsx             # Homelab page
│       └── components/          # Homelab-specific components
│           ├── HardwareItem.tsx  # Server specs table row
│           ├── ServiceCard.tsx   # Hosted service card
│           └── NetworkDiagram.tsx # Network topology flowchart
├── components/                  # Shared/reusable components
│   ├── ExperienceItem.tsx       # Work history entry
│   ├── ProjectCard.tsx          # Project showcase card
│   ├── CertItem.tsx             # Certification/education entry
│   ├── ContactLink.tsx          # Contact link
│   ├── PrintButton.tsx          # Print-friendly resume button
│   └── GithubRibbon.tsx         # GitHub corner ribbon
├── lib/
│   ├── config.ts                # Main portfolio data & types
│   └── homelab-config.ts        # Homelab page data & types
├── public/                      # Static assets (icons, images, badges)
├── Dockerfile                   # Docker production build
└── package.json
```

---

## Making It Your Own

1. **Fork** this repo.
2. **Edit `lib/config.ts`** with your personal info, experience, projects, and certifications.
3. **Edit `lib/homelab-config.ts`** if you want the homelab page, or remove the `app/homelab/` directory if you don't.
4. **Replace images** in `public/` with your own headshot, icons, and badges.
5. **Tweak the theme** in `app/globals.css` to match your style.
6. **Deploy** — run it in Docker, on Vercel, or anywhere that supports Node.js.

---

## License

This project is open source. Feel free to fork, modify, and use it for your own portfolio.
