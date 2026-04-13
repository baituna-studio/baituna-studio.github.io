# Layout Shell

Defines the shared layout structure: Navbar, Footer, and page wrapper.

## Requirements

### Requirement: Root layout wrapper

The root layout SHALL wrap all pages with:
- A global `<html lang="id">` tag
- Shared font loading (Google Fonts or system stack)
- A consistent Navbar at the top
- A consistent Footer at the bottom
- A `<main>` content area between Navbar and Footer

#### Scenario: Every page inherits the shell
- **WHEN** a user navigates to any route
- **THEN** the Navbar and Footer SHALL be visible on every page

### Requirement: Navbar component

The Navbar SHALL contain:
- The brand name or logo linking to `/`
- Navigation links matching the `nav` array from site config
- A WhatsApp CTA button (visible on desktop, accessible on mobile)
- Responsive mobile menu (hamburger toggle)

#### Scenario: Desktop navigation
- **WHEN** viewport width is ≥ 768px
- **THEN** all navigation links and WhatsApp CTA SHALL be visible in a horizontal bar

#### Scenario: Mobile navigation
- **WHEN** viewport width is < 768px
- **THEN** a hamburger icon SHALL be displayed; tapping it SHALL reveal the navigation links

### Requirement: Footer component

The Footer SHALL contain:
- A brief studio description
- Quick navigation links
- Contact information (email, WhatsApp)
- Copyright notice with current year

#### Scenario: Footer renders on every page
- **WHEN** a user scrolls to the bottom of any page
- **THEN** the Footer SHALL be visible with all required sections

### Requirement: WhatsApp CTA

A WhatsApp call-to-action SHALL be present in the Navbar and Footer, linking to `https://wa.me/{whatsapp_number}` with a pre-filled message.

#### Scenario: WhatsApp link opens correctly
- **WHEN** a user clicks the WhatsApp CTA
- **THEN** the browser SHALL open WhatsApp (web or app) with the studio's number and a default greeting message
