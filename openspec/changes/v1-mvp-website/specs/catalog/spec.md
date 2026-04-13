## ADDED Requirements

### Requirement: Catalog listing page
The `/catalog` page SHALL list service packages with name, description, and link to detail page.

#### Scenario: At least 2 packages listed
- **WHEN** a user visits `/catalog`
- **THEN** at least branding and website packages SHALL be listed

### Requirement: Catalog detail pages
Each detail page SHALL include service name, description, target audience, deliverables, workflow summary, and consultation CTA.

#### Scenario: Branding detail page content
- **WHEN** a user visits `/catalog/branding`
- **THEN** deliverables SHALL include logo utama, logo alternatif, warna brand, tipografi dasar, arahan visual

#### Scenario: Website detail page content
- **WHEN** a user visits `/catalog/website`
- **THEN** deliverables SHALL include homepage, about, services, portfolio, contact, basic SEO metadata

### Requirement: Catalog content uses MDX
All catalog pages SHALL be `.mdx` files under `app/catalog/`.

#### Scenario: MDX rendering
- **WHEN** any catalog route is requested
- **THEN** the MDX content SHALL render within the shared layout
