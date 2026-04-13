## ADDED Requirements

### Requirement: Contact page
The `/contact` page SHALL display a headline, consultation description, ContactForm component, business email, and WhatsApp CTA.

#### Scenario: All contact elements visible
- **WHEN** a user visits `/contact`
- **THEN** headline, description, form, email, and WhatsApp CTA SHALL all be present

### Requirement: ContactForm component
The ContactForm SHALL have name (min 2 chars), email (valid format), message (min 10 chars) inputs, a submit button, client-side validation preview, and success/error feedback in Indonesian.

#### Scenario: Valid submission
- **WHEN** a user submits a valid form
- **THEN** the form SHALL POST to `/api/leads` and display a success message

#### Scenario: Validation errors
- **WHEN** a user submits invalid/missing fields
- **THEN** Indonesian error messages SHALL be displayed per field

### Requirement: Leads API endpoint
`POST /api/leads` SHALL accept JSON with name, email, message; validate with Zod; return 200 on success, 400 on validation failure.

#### Scenario: Valid payload
- **WHEN** valid JSON is POSTed to `/api/leads`
- **THEN** HTTP 200 with `{ success: true }` SHALL be returned

#### Scenario: Invalid payload
- **WHEN** invalid JSON is POSTed to `/api/leads`
- **THEN** HTTP 400 with field-level errors SHALL be returned

### Requirement: Zod validation schema
The lead schema SHALL enforce name (min 2), email (valid), message (min 10) with Indonesian error messages.

#### Scenario: Short name rejected
- **WHEN** name is 1 character
- **THEN** "Nama minimal 2 karakter" SHALL be returned

#### Scenario: Invalid email rejected
- **WHEN** email is malformed
- **THEN** "Email tidak valid" SHALL be returned

#### Scenario: Short message rejected
- **WHEN** message is under 10 characters
- **THEN** "Pesan minimal 10 karakter" SHALL be returned
