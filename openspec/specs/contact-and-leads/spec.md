# Contact & Leads

Defines the contact page, contact form, and `/api/leads` endpoint.

## Requirements

### Requirement: Contact page

The `/contact` page SHALL contain:
- A headline inviting contact
- A description encouraging consultation
- The ContactForm component
- Business email address display
- WhatsApp CTA button

#### Scenario: Contact page renders all elements
- **WHEN** a user visits `/contact`
- **THEN** the page SHALL display headline, description, contact form, email, and WhatsApp CTA

### Requirement: ContactForm component

The ContactForm component SHALL include:
- `name` text input (required, min 2 characters)
- `email` email input (required, valid email format)
- `message` textarea input (required, min 10 characters)
- A submit button
- Client-side validation feedback in Indonesian
- Success/error feedback messages after submission

#### Scenario: Valid form submission
- **WHEN** a user fills in valid name, email, and message and clicks submit
- **THEN** the form SHALL POST to `/api/leads` and display a success message

#### Scenario: Validation error display
- **WHEN** a user submits the form with invalid or missing fields
- **THEN** the form SHALL display Indonesian-language error messages for each invalid field

### Requirement: Leads API endpoint

The system SHALL expose `POST /api/leads` as a Next.js Route Handler that:
- Accepts JSON body with `name`, `email`, `message` fields
- Validates input using Zod with the lead schema
- Returns `200` with success response on valid input
- Returns `400` with validation error details on invalid input

#### Scenario: Successful lead submission
- **WHEN** a valid JSON payload is POSTed to `/api/leads`
- **THEN** the endpoint SHALL return HTTP 200 with `{ success: true }`

#### Scenario: Invalid lead submission
- **WHEN** an invalid JSON payload is POSTed to `/api/leads`
- **THEN** the endpoint SHALL return HTTP 400 with field-level error messages

### Requirement: Zod validation schema

The lead validation schema SHALL enforce:
- `name`: string, minimum 2 characters
- `email`: string, valid email format
- `message`: string, minimum 10 characters

#### Scenario: Schema rejects short name
- **WHEN** a payload with `name` of 1 character is validated
- **THEN** validation SHALL fail with message "Nama minimal 2 karakter"

#### Scenario: Schema rejects invalid email
- **WHEN** a payload with malformed `email` is validated
- **THEN** validation SHALL fail with message "Email tidak valid"

#### Scenario: Schema rejects short message
- **WHEN** a payload with `message` under 10 characters is validated
- **THEN** validation SHALL fail with message "Pesan minimal 10 karakter"
