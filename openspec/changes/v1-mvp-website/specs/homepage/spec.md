## ADDED Requirements

### Requirement: Hero section
The homepage SHALL display a hero with headline, subheadline, primary CTA to `/catalog`, and secondary CTA to `/portfolio`.

#### Scenario: Hero is above the fold
- **WHEN** a user visits `/`
- **THEN** the hero SHALL be the first visible content

### Requirement: Services summary section
The homepage SHALL display service cards summarising key offerings.

#### Scenario: At least 3 services shown
- **WHEN** a user scrolls past the hero
- **THEN** at least 3 service highlights SHALL be visible

### Requirement: Studio advantages section
The homepage SHALL highlight at least 3 studio advantages with visual indicators.

#### Scenario: Advantages listed
- **WHEN** a user views the homepage
- **THEN** advantages SHALL be displayed with icons or visual elements

### Requirement: Catalog preview section
The homepage SHALL preview catalog items linking to `/catalog`.

#### Scenario: Preview links to catalog
- **WHEN** a user clicks a catalog preview
- **THEN** navigation to catalog page or detail SHALL occur

### Requirement: Portfolio preview section
The homepage SHALL preview at least 2 portfolio items linking to `/portfolio`.

#### Scenario: Portfolio previews visible
- **WHEN** a user views the portfolio preview section
- **THEN** at least 2 items with names and visuals SHALL be shown

### Requirement: Testimonial section
The homepage SHALL include at least one client testimonial with name and quote.

#### Scenario: Testimonial displays
- **WHEN** a user views the testimonial section
- **THEN** at least one testimonial SHALL be visible

### Requirement: Contact CTA section
The homepage SHALL end with a CTA section linking to `/contact` or WhatsApp.

#### Scenario: CTA is prominent
- **WHEN** a user reaches the bottom of homepage content
- **THEN** a CTA section SHALL be visible
