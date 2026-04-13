## ADDED Requirements

### Requirement: Portfolio listing page
The `/portfolio` page SHALL list completed projects with name, category, visual preview, and link to detail page.

#### Scenario: At least 2 projects listed
- **WHEN** a user visits `/portfolio`
- **THEN** at least logo-branding and company-profile items SHALL be listed

### Requirement: Portfolio detail pages
Each detail page SHALL include project name, category, client problem, solution, results, and screenshots/visuals.

#### Scenario: Branding portfolio detail
- **WHEN** a user visits `/portfolio/logo-branding`
- **THEN** the page SHALL show name, category, problem, solution, result, and visuals

#### Scenario: Company profile portfolio detail
- **WHEN** a user visits `/portfolio/company-profile`
- **THEN** the page SHALL show name, category, problem, solution, result, and visuals

### Requirement: Portfolio content uses MDX
All portfolio pages SHALL be `.mdx` files under `app/portfolio/`.

#### Scenario: MDX rendering
- **WHEN** any portfolio route is requested
- **THEN** the MDX content SHALL render within the shared layout
