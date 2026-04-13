# Services Page

Defines the structure for the `/services` page.

## Requirements

### Requirement: Services overview

The `/services` page SHALL display:
- An introductory paragraph describing the studio's services
- A list of all service types offered
- A description of the target audience ("siapa yang cocok")
- A CTA linking to `/contact`

#### Scenario: Services page lists all offerings
- **WHEN** a user visits `/services`
- **THEN** the page SHALL display at least the following service categories: website bisnis, landing page, company profile, katalog digital, portfolio setup, branding visual

#### Scenario: Target audience section is present
- **WHEN** a user reads the services page
- **THEN** a section describing ideal clients SHALL be visible

### Requirement: Services page uses MDX

The `/services` page content SHALL be authored in MDX format for easy editing.

#### Scenario: Services page renders MDX
- **WHEN** the `/services` page is requested
- **THEN** the server SHALL render the MDX content within the shared layout
