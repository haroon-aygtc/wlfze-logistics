# WLFZE - World Link Logistics Services FZE Website

A modern, static Next.js website for WLFZE, a Dubai-based (DAFZA) logistics provider offering air freight, sea freight, land freight, warehousing, courier, and last-mile delivery services.

## Features

- **Modern Design**: Clean, minimalist aesthetic with premium feel
- **Fully Static**: No backend required, optimized for `next export`
- **Responsive**: Mobile-first design with Tailwind CSS
- **Animations**: Smooth scroll-triggered animations with Framer Motion
- **SEO Optimized**: Dynamic meta tags and semantic HTML
- **Accessible**: ARIA labels and good contrast ratios

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Pages

- `/` - Home (Hero, Services, Stats, Testimonials, CTA)
- `/about` - Company story, values, team, global reach
- `/services` - Services overview with links to sub-pages
- `/services/air-freight` - Air freight details
- `/services/sea-freight` - Sea freight details
- `/services/land-freight` - Land freight details
- `/services/warehousing` - Warehousing details
- `/services/courier` - Courier services details
- `/services/last-mile-delivery` - Last mile delivery details
- `/tracking` - Mock tracking interface
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog posts
- `/contact` - Contact form with map

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd wlfze-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build static export
npm run build
```

The static files will be generated in the `dist` folder.

## Project Structure

```
wlfze-website/
├── app/
│   ├── (pages)/
│   │   ├── page.tsx              # Home page
│   │   ├── about/page.tsx        # About page
│   │   ├── services/
│   │   │   ├── page.tsx          # Services overview
│   │   │   ├── air-freight/
│   │   │   ├── sea-freight/
│   │   │   ├── land-freight/
│   │   │   ├── warehousing/
│   │   │   ├── courier/
│   │   │   └── last-mile-delivery/
│   │   ├── tracking/page.tsx     # Tracking page
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing
│   │   │   └── [slug]/page.tsx   # Blog post
│   │   └── contact/page.tsx      # Contact page
│   ├── layout.tsx                # Root layout with fonts
│   └── globals.css               # Global styles
├── components/                   # Reusable components
├── lib/                          # Utilities
├── public/                       # Static assets
└── package.json
```

## Color Scheme

- **Primary**: #001F3F (Navy Blue)
- **Accent**: #FF6B35 (Vibrant Orange)
- **Neutral**: #FFFFFF / #F8FAFC / #1E293B

## Typography

- **Headings**: Montserrat (700-900)
- **Body**: Inter (400-600)

## Contact Information

- **Address**: QB-03, WH-10, DAFZA, Dubai, UAE
- **Phone**: +971 56 345 7433
- **Email**: info@wlfze.com

## License

© 2026 WLFZE. All rights reserved.
