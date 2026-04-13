# Site Identity

Defines the branding, metadata, and core identity of the Baituna Studio website.

## Requirements

### Requirement: Brand identity constants

The system SHALL expose a site configuration object containing:
- `name`: "Baituna Studio"
- `url`: "https://baitunastudio.biz.id"
- `description`: Studio description in Indonesian
- `email`: business email address
- `whatsapp`: WhatsApp number in international format (62...)

#### Scenario: Site config is available at build time
- **WHEN** any component or page imports the site config
- **THEN** all brand identity fields SHALL be present and non-empty

### Requirement: Navigation structure

The site config SHALL include a `nav` array defining the primary navigation:
- Layanan → `/services`
- Portfolio → `/portfolio`
- Katalog → `/catalog`
- Tentang → `/about`
- Kontak → `/contact`

#### Scenario: Navigation renders all links
- **WHEN** the navbar component renders
- **THEN** it SHALL display links for all entries in the `nav` array

### Requirement: SEO baseline metadata

Every page SHALL include:
- A descriptive `<title>` tag incorporating the page name and brand
- A `<meta name="description">` tag with page-specific content
- Open Graph `og:title`, `og:description`, `og:image` meta tags
- The canonical URL

#### Scenario: Homepage metadata
- **WHEN** a search engine crawls `/`
- **THEN** it SHALL find a title containing "Baituna Studio" and a description summarising the studio's services

#### Scenario: Subpage metadata
- **WHEN** a search engine crawls any subpage (e.g. `/services`)
- **THEN** it SHALL find a unique title and description relevant to that page's content

### Requirement: Favicon and OG image

The site SHALL serve:
- `/favicon.ico`
- `/og.jpg` as the default Open Graph image

#### Scenario: Social media share preview
- **WHEN** the homepage URL is shared on social media
- **THEN** the platform SHALL display the OG image, title, and description
