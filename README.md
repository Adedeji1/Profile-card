# Profile Card + Contact + About Pages

A 3-page responsive web project built using **HTML**, **CSS**, and **Vanilla JavaScript** following strict semantic, accessibility, and testing ID standards.

---

## Pages Included

### 1. Profile Card (`index.html`)
Displays:
- Name, Bio, Avatar, Current Time
- Social Links (with test IDs)
- Hobbies & Dislikes lists
- Responsive layout using Flexbox

---

### 2. Contact Us (`contact.html`)
Features:
- Form with validation and accessibility
- Fields:
  - Full Name (`test-contact-name`)
  - Email (`test-contact-email`)
  - Subject (`test-contact-subject`)
  - Message (`test-contact-message`)
- Error messages:
  - `test-contact-error-<field>`
- Submit button: `test-contact-submit`
- Success message: `test-contact-success`
- Validation ensures:
  - All fields filled
  - Valid email format
  - Message ≥ 10 characters
  - Success shown only after valid input

---

### 3. About Me (`about.html`)
Sections:
- Bio — `test-about-bio`
- Goals — `test-about-goals`
- Low Confidence — `test-about-confidence`
- Note to Future Self — `test-about-future-note`
- Extra Thoughts — `test-about-extra`

Semantic structure:
- `<main data-testid="test-about-page">`
- `<section>` and `<h2>` for organization

---

## File Structure

profile-card/

│
├── index.html          # Profile Card
├── contact.html        # Contact Us Page
├── about.html          # About Me Page
├── style.css           # Shared styling
├── script.js           # Profile time script
├── contact.js          # Contact page logic + validation
├── README.md           # Documentation
