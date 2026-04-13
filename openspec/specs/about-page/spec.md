# About Page

Defines the structure for the `/about` page.

## Requirements

### Requirement: About page content

The `/about` page SHALL answer the following questions:
- Who is Baituna Studio?
- What is the service focus?
- Who is the target client?
- What are the studio's core values?

#### Scenario: About page displays studio identity
- **WHEN** a user visits `/about`
- **THEN** the page SHALL display the studio positioning statement and core values

### Requirement: About page uses MDX

The `/about` page content SHALL be authored in MDX format.

#### Scenario: About MDX rendering
- **WHEN** the `/about` page is requested
- **THEN** the server SHALL render the MDX content within the shared layout
