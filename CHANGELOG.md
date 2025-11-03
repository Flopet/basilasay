# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Removed - 2025-11-03

**Complete removal of Tailwind CSS - Migration to vanilla CSS**

Completely removed Tailwind CSS from the project and migrated all styles to vanilla CSS with dedicated component stylesheets.

**Changes:**
- Removed Tailwind directives from `app/globals.css` and converted to standard CSS with CSS variables
- Created `app/page.css` for page-specific layout styles
- Created component-specific CSS files using BEM naming convention:
  - `components/ExperienceItem.css`
  - `components/ProjectCard.css`
  - `components/EducationItem.css`
  - `components/ContactLink.css`
  - `components/FontToggle.css`
- Removed `@tailwindcss/postcss` and `tailwindcss` dependencies from package.json
- Deleted `postcss.config.mjs` configuration file
- Cleaned up 35 Tailwind-related packages from node_modules
- Converted all Tailwind utility classes to semantic CSS class names
- Preserved existing color palette and design aesthetic
- All styles now use pure CSS with no framework dependencies

**Files Modified:**
- `app/globals.css` - Removed Tailwind, added base styles and CSS variables
- `app/layout.tsx` - Removed Tailwind classes from body element
- `app/page.tsx` - Converted to semantic class names
- All component files - Converted to vanilla CSS with dedicated stylesheets
- `package.json` - Removed Tailwind dependencies

**Files Created:**
- `app/page.css`
- `components/ExperienceItem.css`
- `components/ProjectCard.css`
- `components/EducationItem.css`
- `components/ContactLink.css`
- `components/FontToggle.css`

**Files Deleted:**
- `postcss.config.mjs`
