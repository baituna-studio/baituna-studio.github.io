## Context

Baituna Studio is a new digital studio targeting Indonesian UMKM, personal brands, and professional services. No codebase exists yet. The v1 website must be built from scratch as a clean, professional, conversion-oriented site using Next.js App Router + Nextra for MDX content.

**Constraints from PRD:**
- Language: Indonesian (id)
- Domain: `baitunastudio.biz.id`
- Stack: Next.js App Router, Nextra, MDX, TypeScript, Tailwind CSS, Zod
- Server runtime deployment (no static export)
- No database in v1
- No external CMS
- Content managed via MDX files

## Goals / Non-Goals

**Goals:**
- Deliver a complete, deployable v1 website covering all pages in the PRD sitemap
- Establish a professional brand presence with clean, modern UI
- Enable lead capture via `/api/leads` with server-side validation
- Make content easily editable via MDX without technical overhead
- Ensure baseline SEO with per-page metadata
- Provide WhatsApp CTA as primary conversion channel

**Non-Goals:**
- Database integration (PostgreSQL, Drizzle, or any persistent storage) — deferred to future change
- Email notification on lead submission — deferred
- Google Sheets / Telegram / Discord webhook integration — deferred
- Analytics integration — deferred
- Blog / article section — deferred
- Pricing page — deferred
- FAQ page — deferred
- CMS for testimonials — deferred
- Multi-language support — Indonesian only
- Authentication / admin panel — not planned

## Decisions

### D1: Nextra as content framework
**Choice:** Use Nextra (latest, docs theme) for all MDX pages
**Rationale:** Nextra provides zero-config MDX support with file-based routing, eliminating the need for custom MDX loaders. The docs theme offers a clean, professional look aligned with the brand.
**Alternative considered:** Raw `@next/mdx` — rejected because Nextra offers better defaults and requires less configuration for a content-heavy site.

### D2: Tailwind CSS for styling
**Choice:** Tailwind CSS for all styling
**Rationale:** Utility-first CSS enables rapid development of a clean, responsive design. Aligns with the PRD's emphasis on modern, minimalist aesthetics.
**Alternative considered:** CSS Modules — rejected because Tailwind provides faster iteration for a small team.

### D3: Contact page as TSX, not MDX
**Choice:** `/contact/page.tsx` as a React component (not MDX)
**Rationale:** The contact page requires interactive form state management, API submission, and validation feedback — all of which are better handled in TSX.
**Alternative considered:** MDX with embedded component — rejected for complexity of state handling in MDX context.

### D4: Leads endpoint — log only, no persistence
**Choice:** `POST /api/leads` validates and logs to `console.log`, responds with success/failure
**Rationale:** The PRD says "no database yet." Console logging provides a functional endpoint for form validation and future extension without adding infrastructure.
**Alternative considered:** File-based JSON storage — rejected for deployment portability concerns (serverless environments have ephemeral file systems).
**Future extension note:** When ready, add PostgreSQL + Drizzle ORM for persistent lead storage. This would involve adding a `db/` directory with Drizzle schema, migrations, and updating the route handler to insert records.

### D5: Component architecture
**Choice:** Create focused, reusable components in `components/` directory:
- `hero.tsx` — homepage hero with CTAs
- `navbar.tsx` — responsive navigation with mobile menu
- `footer.tsx` — site footer with links and contact
- `section-title.tsx` — consistent section headings
- `service-card.tsx` — service display card
- `portfolio-card.tsx` — portfolio preview card
- `contact-form.tsx` — validated contact form with API submission

**Rationale:** Mirrors PRD's prescribed component list. Keeps each component small, single-responsibility, and testable.

### D6: Site config in `lib/site.ts`
**Choice:** Centralise all brand constants, navigation structure, and contact info in a single `lib/site.ts` file
**Rationale:** Single source of truth for brand metadata, used by layout, Navbar, Footer, SEO metadata, and WhatsApp CTAs.

### D7: Zod validation shared between client and server
**Choice:** Define the lead schema in `lib/validations.ts`, import in both the contact form (client-side preview) and the route handler (server-side enforcement)
**Rationale:** DRY validation ensures consistent error messages and rules.

## Risks / Trade-offs

| Risk | Impact | Mitigation |
|------|--------|------------|
| Nextra version compatibility with App Router | Build failures if APIs change | Pin Nextra version in `package.json`; test early |
| No lead persistence (console.log only) | Leads lost on server restart | Acceptable for v1; add database in next change |
| Placeholder portfolio content | May look unprofessional | Use realistic sample content and placeholder images generated for the brand |
| Single WhatsApp number hardcoded | Hard to change | Centralised in `lib/site.ts`; easy to update |
| No analytics | No visibility into traffic | Deferred; can add Plausible/GA in a future change |

## Open Questions

1. **WhatsApp pre-filled message template**: What should the default greeting text be? (Assumed: "Halo, saya tertarik dengan layanan Baituna Studio.")
2. **Nextra theme choice**: docs theme vs blog theme vs custom? (Assumed: docs theme for clean layout, can be customised)
3. **Testimonial data source**: Hardcoded in MDX or component data? (Assumed: hardcoded in homepage MDX for v1)
