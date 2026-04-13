# Tasks: Baituna Studio v1 MVP Website

## Group 1: Project Setup
- [x] Task 1.1: Initialize Next.js project with App Router, TypeScript, and Tailwind CSS.
- [x] Task 1.2: Install dependencies (`nextra`, `nextra-theme-docs`, `zod`, `clsx`, `tailwind-merge`).
- [x] Task 1.3: Configure `next.config.mjs` with Nextra wrapper.
- [x] Task 1.4: Set up `theme.config.tsx` for Nextra (Branding, Logo, Socials).
- [x] Task 1.5: Verify project structure (no static export).

## Group 2: Layout Shell
- [x] Task 2.1: Implement Root Layout (`app/layout.tsx`) with SEO metadata.
- [x] Task 2.2: Implement `lib/site.ts` for central site configuration.
- [x] Task 2.3: Create reusable component `components/section-title.tsx`.
- [x] Task 2.4: Implement `components/navbar.tsx` (Responsive with CTA).
- [x] Task 2.5: Implement `components/footer.tsx` (Links, Contact, Socials).

## Group 3: Homepage
- [x] Task 3.1: Implement `components/hero.tsx` (Headline & Main CTA).
- [x] Task 3.2: Implement `components/service-card.tsx` for homepage highlights.
- [x] Task 3.3: Implement `components/portfolio-card.tsx` for homepage preview.
- [x] Task 3.4: Assemble `app/page.tsx` (Hero, Services, Portfolio Preview, CTA).

## Group 4: Content Pages (MDX)
- [x] Task 4.1: Create `app/services/page.mdx` (Detailed service descriptions).
- [x] Task 4.2: Create `app/catalog/page.mdx` (Catalog index).
- [x] Task 4.3: Create `app/catalog/branding/page.mdx` (Branding service details).
- [x] Task 4.4: Create `app/catalog/website/page.mdx` (Website service details).
- [x] Task 4.5: Create `app/portfolio/page.mdx` (Portfolio index).
- [x] Task 4.6: Create `app/portfolio/logo-branding/page.mdx` (Case study).
- [x] Task 4.7: Create `app/portfolio/company-profile/page.mdx` (Case study).
- [x] Task 4.8: Create `app/about/page.mdx` (Studio identity & values).

## Group 5: Contact & Leads
- [x] Task 5.1: Define lead validation schema in `lib/validations.ts`.
- [x] Task 5.2: Implement `app/api/leads/route.ts` (API endpoint).
- [x] Task 5.3: Create `components/contact-form.tsx` (Client-side form).
- [x] Task 5.4: Implement `app/contact/page.tsx` (Contact page assembly).

## Group 6: SEO & Metadata
- [x] Task 6.1: Set up default SEO metadata in root layout.
- [x] Task 6.2: Add page-specific titles and descriptions to MDX frontmatter.
- [x] Task 6.3: Verify OpenGraph and Twitter tags across key pages.

## Group 7: Polish & Verification
- [x] Task 7.1: Verify all routes and links are working.
- [x] Task 7.2: Test lead submission API with sample data.
- [x] Task 7.3: Verify WhatsApp click-to-chat links.
- [x] Task 7.4: Perform mobile responsiveness check on homepage.
- [x] Task 7.5: Run production build (`next build`) to ensure stability.
