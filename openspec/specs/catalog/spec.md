# Catalog

Defines the structure for the catalog listing and detail pages.

## Requirements

### Requirement: Catalog listing page

The `/catalog` page SHALL display a list of available service packages, each showing:
- Service name
- Brief description
- Link to the detail page

#### Scenario: Catalog lists all packages
- **WHEN** a user visits `/catalog`
- **THEN** at least 2 service packages (branding, website) SHALL be listed with links to their detail pages

### Requirement: Catalog detail pages

Each catalog detail page (e.g. `/catalog/branding`, `/catalog/website`) SHALL include:
- Service name
- Description
- Target audience ("cocok untuk siapa")
- Deliverables / output list
- Workflow summary ("alur kerja singkat")
- CTA for order / consultation (linking to `/contact` or WhatsApp)

#### Scenario: Branding detail page
- **WHEN** a user visits `/catalog/branding`
- **THEN** the page SHALL show branding deliverables: logo utama, logo alternatif, warna brand, tipografi dasar, arahan visual

#### Scenario: Website detail page
- **WHEN** a user visits `/catalog/website`
- **THEN** the page SHALL show website deliverables: homepage, about, services, portfolio, contact, basic SEO metadata

### Requirement: Catalog content uses MDX

All catalog pages SHALL be authored in MDX format.

#### Scenario: Catalog MDX rendering
- **WHEN** a catalog page is requested
- **THEN** the server SHALL render the MDX content within the shared layout
