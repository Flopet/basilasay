# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application built with React 19, TypeScript, and Tailwind CSS v4. The project uses the Next.js App Router architecture (not Pages Router).

## Development Commands

- `npm run dev` - Start the development server at http://localhost:3000
- `npm run build` - Build the application for production
- `npm start` - Start the production server (requires build first)
- `npm run lint` - Run ESLint to check code quality

## Architecture

### App Router Structure
- Uses Next.js App Router (app directory)
- `app/layout.tsx` - Root layout with Zalando Sans SemiExpanded font configuration and global styles
- `app/page.tsx` - Home page component with two-column layout
- `app/globals.css` - Global styles with Tailwind CSS v4 inline theme configuration
- `app/config.ts` - Configuration file for site settings (WIP)

### Page Layout
- **Two-column design**:
  - Left column (33% width): Cover image that fills entire sidebar, sticky on scroll
  - Right column (67% width): Scrollable content with all portfolio sections
  - Responsive: Stacks vertically on mobile/tablet
- **Cover Image**: `public/BasilAndKaitlyn.png` fills the left aside using Next.js Image with `fill` prop and `object-cover`
- **Sections**: Hero, Experience, Projects, Education, Contact

### Styling
- **Tailwind CSS v4**: Uses the new `@tailwindcss/postcss` plugin
- **No traditional tailwind.config file**: Tailwind v4 configuration is done inline in `globals.css` using `@theme inline` directive
- **CSS Variables**: Theme tokens defined as CSS custom properties in `:root`
- **No dark mode**: Light mode only with aged paper aesthetic
- **Fonts**: Uses Zalando Sans SemiExpanded from `next/font/google` with weights 400, 600, 700

### Color Palette
All colors use CSS variables for easy customization:
- **Background**: `#f5f1e8` - Warm eggshell/aged paper tone
- **Background Subtle**: `#ebe5d6` - Slightly darker aged paper (used for sidebar)
- **Foreground**: `#1a1a1a` - Near black for primary text
- **Foreground Muted**: `#4a4a4a` - Medium grey for secondary text
- **Border**: `#8b2635` - Rose red for borders
- **Border Strong**: `#5a1822` - Darker blood red for emphasis (experience timeline)
- **Card Background**: `#ffffff` - Clean white for project cards

### Custom CSS Classes
- `.inner-shadow` - Custom inset box-shadow for cover image overlay effect

### TypeScript Configuration
- Path alias `@/*` maps to root directory for imports
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler

### ESLint
- Uses ESLint v9 with flat config format (`eslint.config.mjs`)
- Next.js core-web-vitals and TypeScript configs
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Technologies

- **Next.js 16.0.1**: App Router with React Server Components
- **React 19.2.0**: Latest React with concurrent features
- **TypeScript 5**: Full type safety
- **Tailwind CSS v4**: Using new `@tailwindcss/postcss` plugin (not traditional setup)

## Component Structure

All reusable components are in the `components/` directory:

- **ExperienceItem**: Displays work experience with left border timeline (uses `--border-strong`)
- **ProjectCard**: Shows projects with title, description, technology tags, and optional link
- **CertItem**: Displays education history
- **ContactLink**: Styled links for contact information with underline
- **FontToggle**: Temporary testing component to toggle between custom font and Arial

### Data Structure

Portfolio content is centralized in `lib/config.ts`:

```typescript
personalInfo: { name, title, company, bio }
experience: [{ title, company, dateRange, description }]
projects: [{ title, description, link, tags }]  // Note: uses 'tags' not 'technologies'
education: [{ degree, institution, year, details }]
contacts: [{ label, href, external }]
```

## Important Notes

- When adding new styles, modify `app/globals.css` using the `@theme inline` directive rather than creating a traditional `tailwind.config.js`
- This project uses the App Router, so all routes should be created in the `app/` directory
- Server Components are the default - use `"use client"` directive only when necessary for client interactivity
- Cover image uses Next.js `Image` component with `fill` prop for optimal performance
- Font configuration in `layout.tsx` uses static imports (cannot be dynamically imported from config)
- Projects use `tags` property (not `technologies`) for technology lists
