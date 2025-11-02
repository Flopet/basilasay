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
- `app/layout.tsx` - Root layout with Geist font configuration and global styles
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles with Tailwind CSS v4 inline theme configuration

### Styling
- **Tailwind CSS v4**: Uses the new `@tailwindcss/postcss` plugin
- **No traditional tailwind.config file**: Tailwind v4 configuration is done inline in `globals.css` using `@theme inline` directive
- **CSS Variables**: Theme tokens defined as CSS custom properties in `:root`
- **Dark mode**: Automatically configured via `prefers-color-scheme` media query
- **Fonts**: Uses Geist Sans and Geist Mono from `next/font/google`

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

## Important Notes

- When adding new styles, modify `app/globals.css` using the `@theme inline` directive rather than creating a traditional `tailwind.config.js`
- This project uses the App Router, so all routes should be created in the `app/` directory
- Server Components are the default - use `"use client"` directive only when necessary for client interactivity
