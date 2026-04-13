## ADDED Requirements

### Requirement: Nextra integration
The project SHALL use Nextra configured via `next.config.mjs` with the `nextra` wrapper function.

#### Scenario: Nextra processes MDX
- **WHEN** the project builds
- **THEN** all `.mdx` files in `app/` SHALL be processed by Nextra

### Requirement: MDX content pages
Content pages SHALL be authored as `.mdx` files: about, services, portfolio (+ sub-pages), catalog (+ sub-pages).

#### Scenario: MDX pages render within layout
- **WHEN** a user visits an MDX-backed route
- **THEN** content SHALL render inside root layout with Navbar and Footer

### Requirement: MDX components bridge
The project SHALL include `mdx-components.tsx` registering custom components for all MDX files.

#### Scenario: Custom components available in MDX
- **WHEN** an MDX file uses a registered component
- **THEN** it SHALL render without explicit imports

### Requirement: Server runtime deployment
The project SHALL deploy with server runtime. `next.config.mjs` SHALL NOT include `output: 'export'`.

#### Scenario: API routes functional
- **WHEN** the project is deployed
- **THEN** `POST /api/leads` SHALL respond to requests

#### Scenario: No static export
- **WHEN** `next build` runs
- **THEN** output SHALL be a server bundle

### Requirement: Project folder structure
The project SHALL follow: `app/` (pages + API), `components/` (UI), `lib/` (utils), `public/` (assets).

#### Scenario: Structure is consistent
- **WHEN** a developer inspects the root
- **THEN** directories SHALL match the convention
