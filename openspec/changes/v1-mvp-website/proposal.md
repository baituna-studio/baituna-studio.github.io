## Why

Baituna Studio needs its initial website to establish a professional online presence, showcase services and portfolio, and capture leads from prospective clients. The studio currently has no website. Building the v1 MVP website enables the studio to start acquiring clients through a digital channel while keeping the technology simple and maintainable.

## What Changes

- **Project scaffold**: Initialize a Next.js App Router project with Nextra, MDX, TypeScript, Tailwind CSS, and Zod
- **Layout shell**: Create shared Navbar (with mobile menu & WhatsApp CTA) and Footer components
- **Homepage**: Build hero section, services summary, advantages, catalog preview, portfolio preview, testimonials, and contact CTA
- **Services page**: MDX page listing all service types with target audience and CTA
- **Catalog pages**: MDX listing page + 2 detail pages (`/catalog/branding`, `/catalog/website`) with deliverables and workflow
- **Portfolio pages**: MDX listing page + 2 detail pages (`/portfolio/logo-branding`, `/portfolio/company-profile`) with case study format
- **About page**: MDX page with studio identity, focus, target clients, and values
- **Contact page**: TSX page with ContactForm component submitting to `/api/leads`
- **Leads API**: `POST /api/leads` Route Handler with Zod validation (in-memory/log only, no database)
- **SEO baseline**: Per-page metadata (title, description, OG tags), favicon, OG image
- **WhatsApp CTA**: Present in Navbar, Footer, catalog detail pages, and contact page
- **Server-runtime deployment config**: `next.config.mjs` configured for server runtime (no static export)

## Capabilities

### New Capabilities
- `site-identity`: Brand constants, SEO metadata baseline, navigation config, favicon/OG assets
- `layout-shell`: Shared root layout with Navbar, Footer, WhatsApp CTA, responsive mobile menu
- `homepage`: Hero section, services summary, advantages, catalog/portfolio previews, testimonials, contact CTA
- `services-page`: Services listing page with MDX content
- `catalog`: Catalog listing + detail pages (branding, website) in MDX
- `portfolio`: Portfolio listing + detail pages (logo-branding, company-profile) in MDX
- `about-page`: About page with studio identity in MDX
- `contact-and-leads`: Contact page, ContactForm component, `/api/leads` endpoint, Zod validation
- `content-architecture`: Nextra/MDX integration, mdx-components bridge, folder structure, server-runtime deployment

### Modified Capabilities
_(none — this is the initial implementation)_

## Impact

- **New project**: Entire codebase is created from scratch
- **Dependencies**: next, react, react-dom, nextra, nextra-theme-docs, zod, tailwindcss, typescript
- **API surface**: Single endpoint `POST /api/leads`
- **Deployment**: Requires a hosting platform supporting Next.js server runtime (Vercel, Railway, etc.)
- **No database**: Leads are logged server-side only; database integration deferred to future change
