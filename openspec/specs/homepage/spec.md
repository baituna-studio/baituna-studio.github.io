# Homepage

Defines the structure and content sections for the homepage at `/`.

## Requirements

### Requirement: Hero section

The homepage SHALL display a hero section containing:
- A headline conveying the studio's value proposition
- A subheadline expanding on the headline
- A primary CTA linking to `/catalog`
- A secondary CTA linking to `/portfolio`

#### Scenario: Hero renders above the fold
- **WHEN** a user visits `/`
- **THEN** the hero section SHALL be the first visible content with headline, subheadline, and both CTAs

### Requirement: Services summary section

The homepage SHALL include a section summarising the studio's main services, displaying service cards with title and brief description.

#### Scenario: Services section shows key offerings
- **WHEN** a user scrolls past the hero
- **THEN** a services summary section SHALL be visible with at least 3 service highlights

### Requirement: Studio advantages section

The homepage SHALL include a section highlighting the studio's key advantages (e.g. fast delivery, clean design, affordable pricing).

#### Scenario: Advantages are listed
- **WHEN** a user views the homepage
- **THEN** at least 3 advantages SHALL be displayed with icons or visual indicators

### Requirement: Catalog preview section

The homepage SHALL display a preview of available catalog items linking to `/catalog`.

#### Scenario: Catalog preview links to catalog page
- **WHEN** a user clicks a catalog preview item
- **THEN** they SHALL be navigated to the catalog page or a specific catalog detail

### Requirement: Portfolio preview section

The homepage SHALL display a preview of recent portfolio work linking to `/portfolio`.

#### Scenario: Portfolio preview shows project thumbnails
- **WHEN** a user views the portfolio preview
- **THEN** at least 2 portfolio items SHALL be visible with project name and visual

### Requirement: Testimonial section

The homepage SHALL include a testimonial section with at least one client quote.

#### Scenario: Testimonials build trust
- **WHEN** a user views the testimonial section
- **THEN** at least one testimonial SHALL be displayed with client name and quote text

### Requirement: Contact CTA section

The homepage SHALL end with a call-to-action section encouraging visitors to contact/consult, linking to `/contact` and/or WhatsApp.

#### Scenario: CTA drives conversion
- **WHEN** a user scrolls to the bottom of the homepage content
- **THEN** a prominent CTA section SHALL be visible with a link to `/contact` or WhatsApp
