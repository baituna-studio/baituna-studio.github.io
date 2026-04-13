# Content Architecture

Defines the MDX content structure, Nextra integration, and deployment constraints.

## Requirements

### Requirement: Nextra integration

The project SHALL use Nextra as the content framework, configured via `next.config.mjs` with the `nextra` wrapper.

#### Scenario: Nextra processes MDX files
- **WHEN** the project builds
- **THEN** all `.mdx` files in the `app/` directory SHALL be processed and rendered by Nextra

### Requirement: MDX content pages

Content-heavy pages SHALL be authored as `.mdx` files:
- `app/about/page.mdx`
- `app/services/page.mdx`
- `app/portfolio/page.mdx` and sub-pages
- `app/catalog/page.mdx` and sub-pages

#### Scenario: MDX pages render within layout
- **WHEN** a user visits an MDX-backed route
- **THEN** the content SHALL render inside the root layout with Navbar and Footer

### Requirement: MDX components bridge

The project SHALL include an `mdx-components.tsx` file that registers custom components available in all MDX files.

#### Scenario: Custom components in MDX
- **WHEN** an MDX file uses a registered custom component
- **THEN** the component SHALL render correctly without explicit imports in the MDX file

### Requirement: Server runtime deployment

The project SHALL be deployed using Next.js server runtime (not static export). The `next.config.mjs` SHALL NOT include `output: 'export'`.

#### Scenario: API routes are functional in production
- **WHEN** the project is deployed
- **THEN** `POST /api/leads` SHALL respond to requests (server-side execution)

#### Scenario: Build does not produce static export
- **WHEN** `next build` runs
- **THEN** the output SHALL be a server bundle, not a static export

### Requirement: Project folder structure

The project SHALL follow the folder structure defined in the PRD:
- `app/` — pages and API routes (App Router)
- `components/` — reusable UI components
- `lib/` — utilities, config, validation schemas, server actions
- `public/` — static assets (favicon, OG image, images)

#### Scenario: Folder structure is consistent
- **WHEN** a developer inspects the project root
- **THEN** the directory structure SHALL match the defined convention
