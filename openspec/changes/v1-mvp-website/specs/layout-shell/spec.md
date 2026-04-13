## ADDED Requirements

### Requirement: Root layout wrapper
The root layout SHALL wrap all pages with `<html lang="id">`, shared fonts, Navbar, Footer, and a `<main>` content area.

#### Scenario: Shell is consistent across routes
- **WHEN** a user navigates to any route
- **THEN** the Navbar and Footer SHALL be visible

### Requirement: Navbar component
The Navbar SHALL contain brand name/logo linking to `/`, navigation links from site config, WhatsApp CTA button, and responsive mobile hamburger menu.

#### Scenario: Desktop layout
- **WHEN** viewport ≥ 768px
- **THEN** all links and WhatsApp CTA SHALL be visible horizontally

#### Scenario: Mobile layout
- **WHEN** viewport < 768px
- **THEN** a hamburger icon SHALL toggle navigation visibility

### Requirement: Footer component
The Footer SHALL contain studio description, quick nav links, contact info (email, WhatsApp), and copyright with current year.

#### Scenario: Footer renders completely
- **WHEN** a user scrolls to the bottom
- **THEN** all footer sections SHALL be visible

### Requirement: WhatsApp CTA
A WhatsApp CTA SHALL link to `https://wa.me/{whatsapp_number}` with a pre-filled greeting message, present in Navbar and Footer.

#### Scenario: WhatsApp link works
- **WHEN** a user clicks the WhatsApp CTA
- **THEN** WhatsApp SHALL open with the studio's number and default greeting
