## ADDED Requirements

### Requirement: About page content
The `/about` page SHALL answer: who is Baituna Studio, service focus, target clients, and core values.

#### Scenario: Studio identity displayed
- **WHEN** a user visits `/about`
- **THEN** the positioning statement and core values SHALL be visible

### Requirement: About page uses MDX
The `/about` page SHALL be authored as `app/about/page.mdx`.

#### Scenario: MDX rendering
- **WHEN** `/about` is requested
- **THEN** the MDX content SHALL render within the shared layout
