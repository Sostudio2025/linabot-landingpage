# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev     # Start development server (http://localhost:5173)
npm run build   # Build for production (outputs to dist/)
```

## Architecture

This is a React/TypeScript landing page for LinaBot, a WhatsApp-based accommodation matching platform connecting hosts with guests. The site uses Hebrew with RTL layout.

### Content System

The site uses a JSON-based content management system that dynamically switches between host and guest content:

- `src/content/hosts.json` - Content for מארחים (Hosts) view
- `src/content/guests.json` - Content for מתארחים (Guests) view
- `public/hosts.json` and `public/guests.json` - Runtime copies fetched by the app

The `useContent` hook (`src/hooks/useContent.ts`) fetches and manages content based on active user type. Content changes trigger a fade transition between views.

### Routes

- `/` - Home page with host/guest toggle (HomePageHosts)
- `/packages` - Packages page (OurPackages)
- `/terms` - Terms & Conditions page (TermsPage)

### Key Components

- `StickyTabs` - Floating tab switcher for host/guest content toggle
- `HeroSection` - Header with navigation, mobile hamburger menu, scroll-aware sticky behavior
- `FooterSection` - Contact form with validation and thank-you state

### Styling

- Tailwind CSS with custom color scheme defined in `tailwind.config.js`
- CSS variables for theme colors in `tailwind.css`
- Custom fonts: Secular One (Hebrew headings), IBM Plex Sans (body)
- Primary purple: `#7f6cff`, Secondary turquoise: `#1fd1cc`, WhatsApp green: `#25D366`

### UI Components

Shadcn UI components are in `src/components/ui/`. The project uses Radix UI primitives for accordion, label, radio group, and separator.

## Environment Variables

- `VITE_CRM_API_URL` - CRM API endpoint for contact form submissions
