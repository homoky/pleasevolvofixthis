# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js project for "Please Volvo Fix This" - a one-page website documenting infotainment issues with the Volvo EX30. The site will showcase problems and suggested improvements for the vehicle's infotainment system.

## Commands

- **Development**: `npm run dev` - Start development server on http://localhost:3000
- **Build**: `npm run build` - Build for production
- **Start**: `npm start` - Start production server  
- **Lint**: `npm run lint` - Run ESLint
- **Deploy**: `npm run deploy` - Deploy to Vercel staging
- **Deploy Production**: `npm run deploy:prod` - Deploy to Vercel production

## Architecture

### Content Structure
- **Issues**: Stored as markdown files in `/src/issues/{number}-{issue-name}.md`
- **Episodes**: Currently in `/src/episodes/` (legacy from template, may be repurposed)
- **Static Assets**: Public folder contains thumbnails, banners, and images

### Key Components
- **Page**: Main layout wrapper with head/meta management
- **parseEpisodes.ts**: Content parsing utility that can be adapted for issues
- Uses `zod-matter` for type-safe frontmatter parsing
- Auto-generates slugs and thumbnails from filenames

### Styling
- **Tailwind CSS** with custom color scheme
- Dark mode support (`darkMode: "class"`)
- Custom breakpoints with xl/2xl set to 1322px
- Primary colors: light (#FFD429), dark (#A48916)
- Extensive neutral color palette for light/dark themes

### TypeScript Configuration
- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`
- All standard Next.js TypeScript features enabled

### Deployment
- Configured for Vercel deployment
- Scripts available for both staging and production deployment

## Content Management

The existing episode parsing system can be adapted for issue management:
- Markdown files with frontmatter for metadata
- Automatic slug generation from filenames
- Type-safe schema validation with Zod
- Support for dates, URLs, and custom fields

### Adding New Issues

Use the **ISSUE_TEMPLATE.md** in the root directory as a guide for creating new issues:
- Follow the file naming convention: `/src/issues/{number}-{kebab-case-title}.md`
- Include proper frontmatter with title and date
- Use sequential numbering for issue numbers
- See ISSUE_TEMPLATE.md for detailed formatting guidelines