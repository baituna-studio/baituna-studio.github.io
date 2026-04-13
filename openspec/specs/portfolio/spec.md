# Portfolio

Defines the structure for the portfolio listing and detail pages.

## Requirements

### Requirement: Portfolio listing page

The `/portfolio` page SHALL display a list of completed projects, each showing:
- Project name
- Category
- Visual preview (screenshot or image)
- Link to the detail page

#### Scenario: Portfolio lists sample projects
- **WHEN** a user visits `/portfolio`
- **THEN** at least 2 portfolio items (logo-branding, company-profile) SHALL be listed

### Requirement: Portfolio detail pages

Each portfolio detail page SHALL include:
- Project name
- Category
- Client problem description
- Solution delivered
- Final results / outcomes
- Screenshots or visual previews

#### Scenario: Branding portfolio detail
- **WHEN** a user visits `/portfolio/logo-branding`
- **THEN** the page SHALL display the project name, category, problem, solution, result, and visuals

#### Scenario: Company profile portfolio detail
- **WHEN** a user visits `/portfolio/company-profile`
- **THEN** the page SHALL display the project name, category, problem, solution, result, and visuals

### Requirement: Portfolio content uses MDX

All portfolio pages SHALL be authored in MDX format.

#### Scenario: Portfolio MDX rendering
- **WHEN** a portfolio page is requested
- **THEN** the server SHALL render the MDX content within the shared layout
