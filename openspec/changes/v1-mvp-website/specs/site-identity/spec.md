## ADDED Requirements

### Requirement: Brand identity constants
The system SHALL expose a site configuration object containing `name`, `url`, `description`, `email`, and `whatsapp` fields as defined in the baseline spec.

#### Scenario: Site config is importable
- **WHEN** any component imports from `lib/site.ts`
- **THEN** all brand identity fields SHALL be present and non-empty

### Requirement: Navigation structure
The site config SHALL include a `nav` array with entries for Layanan, Portfolio, Katalog, Tentang, and Kontak as defined in the baseline spec.

#### Scenario: Nav array matches sitemap
- **WHEN** the navbar renders
- **THEN** it SHALL display all 5 navigation entries

### Requirement: SEO baseline metadata
Every page SHALL include title, meta description, and Open Graph tags as defined in the baseline spec.

#### Scenario: Homepage has complete metadata
- **WHEN** a search engine crawls `/`
- **THEN** title, description, og:title, og:description, og:image, and canonical URL SHALL be present

### Requirement: Favicon and OG image
The site SHALL serve `/favicon.ico` and `/og.jpg` from the `public/` directory.

#### Scenario: Assets are accessible
- **WHEN** a browser requests `/favicon.ico` or `/og.jpg`
- **THEN** the server SHALL return the corresponding image file
