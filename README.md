# Lina Bot - WhatsApp Accommodation Matching Platform

A modern React-based web application that connects hosts with guests through WhatsApp integration. The platform features dynamic content switching between host and guest views, with a clean and professional Hebrew interface.

## Form Features:

Collects: full name, phone, user type (host/guest), and message
Form validation (all fields required)
Phone number validation (9-10 digits)
Loading state during submission
Success screen after submission
How to use:

Replace VITE_CRM_API_URL in .env with your actual CRM API endpoint
The form sends this JSON structure:

{
  "name": "Full Name",
  "phone": "+972501234567",
  "type": "host",
  "message": "User message",
  "timestamp": "2025-11-23T10:30:00.000Z"
}
Note: If your CRM requires different field names or authentication headers (like API keys), you can easily modify the fetch request in the handleSubmit function.


## Features

- **Dynamic Content Switching**: Toggle between host and guest content with smooth transitions
- **Responsive Design**: Fully responsive layout optimized for mobile and desktop
- **Multi-Page Architecture**:
  - Home page with dual content (hosts/guests)
  - Packages page
  - Terms & Conditions page
- **WhatsApp Integration**: Direct WhatsApp contact buttons
- **Interactive Components**: FAQ accordions, contact forms, and navigation
- **RTL Support**: Full right-to-left language support for Hebrew

## Tech Stack

- **React** 18.2.0
- **TypeScript**
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - High-quality React components
  - Accordion
  - Button
  - Input
  - Label
  - Radio Group
  - Textarea
  - Card
  - Separator

## Project Structure

```
├── public/                    # Static assets (images, icons)
├── src/
│   ├── components/
│   │   ├── ui/               # Shadcn UI components
│   │   ├── SimpleFooter.tsx
│   │   └── StickyTabs.tsx
│   ├── content/              # Content management files
│   │   ├── hosts.json        # Content for hosts view
│   │   └── guests.json       # Content for guests view
│   ├── hooks/
│   │   └── useContent.ts     # Content loading hook
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   ├── screens/
│   │   ├── HomePageHosts/    # Main home page
│   │   │   └── sections/     # Page sections (Hero, FAQ, Footer)
│   │   ├── OurPackages/      # Packages page
│   │   └── TermsPage/        # Terms & Conditions page
│   └── index.tsx             # App entry point
├── CONTENT_GUIDE.md          # Content management documentation
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Content Management

This project uses a **JSON-based content management system** for easy content updates without touching code. See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for detailed instructions.

### Quick Overview

Content is managed through two JSON files:
- **`src/content/hosts.json`** - Content displayed when "מארחים" (Hosts) is selected
- **`src/content/guests.json`** - Content displayed when "מתארחים" (Guests) is selected

Each file contains structured content for:
- Hero section (title, background image)
- Introduction section (title, subtitle, button text, image)
- About section (title, description, image)
- Packages section (title, button text, images)
- FAQ section (questions, answers, icon)

### Editing Content

1. Open the relevant JSON file (`hosts.json` or `guests.json`)
2. Update the text or image paths
3. Save the file
4. Rebuild the project: `npm run build`

**Example**: Changing the hero title for guests
```json
{
  "hero": {
    "title": "Your new headline here",
    "backgroundImage": "/mask-group.png"
  }
}
```

For complete documentation on content management, including:
- Detailed file structure
- How to add images
- Step-by-step examples
- Tips and best practices

Please refer to **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)**

## Pages

### Home Page (`/`)
- Dynamic content switching between hosts and guests
- Hero section with navigation
- Introduction with call-to-action buttons
- About section
- Packages preview
- FAQ section with accordion
- Contact form
- Footer with site map

### Packages Page (`/packages`)
- Detailed package information
- Pricing and features

### Terms Page (`/terms`)
- Terms of service (תקנון ותנאי שימוש)
- Legal information
- Privacy policy reference

## Navigation Structure

The site includes both header and footer navigation:
- אודות (About)
- מי זו לינה? (Who is Lina?)
- FAQ מתארחים (Guests FAQ)
- FAQ מארחים (Hosts FAQ)
- צור קשר (Contact)
- תקנון ותנאי שימוש (Terms & Conditions)
- מדיניות הפרטיות (Privacy Policy)

## Styling

The project uses:
- **Tailwind CSS** for utility-based styling
- **Custom fonts**:
  - Secular One (Hebrew headings)
  - IBM Plex Sans (body text)
  - DM Sans (additional text)
- **Color scheme**:
  - Primary: `#7f6cff` (purple)
  - Secondary: `#1fd1cc` (turquoise)
  - Accent: `#17c3b2` (teal)
  - WhatsApp: `#25D366` (green)
  - Dark: `#073d37` (dark teal)

## Key Components

### StickyTabs
Floating tab switcher that allows users to toggle between host and guest content.

### HeroSection
- Responsive header with navigation
- Mobile hamburger menu
- Scroll-aware sticky header
- Dynamic title and background

### FooterSection
- Contact form with validation
- Thank you state after submission
- Site map navigation
- Copyright information

### FAQ Section
- Accordion-based questions and answers
- Smooth expand/collapse animations
- Optional view packages button

## Development Notes

- All text direction is RTL (right-to-left) for Hebrew
- Images are stored in `/public/` directory
- The content hook (`useContent`) handles dynamic content loading
- Navigation uses scroll-to-section on the home page
- Inter-page routing uses React Router

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 LinaBot - All rights reserved

## Support

For questions or support, contact: contact@lina-bot.com
