## ADDED Requirements

### Requirement: Services overview
The `/services` page SHALL display an introduction, list of service types, target audience description, and CTA to `/contact`.

#### Scenario: All service categories listed
- **WHEN** a user visits `/services`
- **THEN** at least 6 service categories SHALL be listed (website bisnis, landing page, company profile, katalog digital, portfolio setup, branding visual)

#### Scenario: Target audience visible
- **WHEN** a user reads the services page
- **THEN** an ideal client description SHALL be present

### Requirement: Services page uses MDX
The `/services` page SHALL be authored as `app/services/page.mdx`.

#### Scenario: MDX renders within layout
- **WHEN** `/services` is requested
- **THEN** the MDX content SHALL render inside the shared layout
