# Claude Code Prompt — Playwright QA Automation with Codebase-Informed Test Discovery

> **How to use:** Paste this entire prompt into Claude Code at the root of the project repository. Replace the placeholder values in the **CONFIG** section with your actual credentials before running. Drop the `qa-manager.html` template file into the project root alongside this prompt.

---

## CONFIG — Replace before running

Pick **one** of the two authentication patterns below and delete the other.

### OPTION A — Separate credentials per role (each role has its own login)

```
APP_URL        = "https://your-app-url.com"
ENVIRONMENT    = "Staging"                     # Staging | Production | UAT
PROJECT_NAME   = "Your Project Name"           # e.g. "AZCares India Mobile App"
CLIENT_NAME    = "Client Name"                 # e.g. "AstraZeneca — AZCares India"
PREPARED_BY    = "Your Name"

AUTH_MODE      = "separate_credentials"

ROLES:
  - role: "Admin"
    username: "admin@example.com"
    password: "password123"

  - role: "HCP (Doctor)"
    username: "doctor@example.com"
    password: "password123"

  - role: "Patient"
    username: "patient@example.com"
    password: "password123"

  - role: "Field Rep"
    username: "rep@example.com"
    password: "password123"

  - role: "Ops / Back Office"
    username: "ops@example.com"
    password: "password123"

  - role: "Read-Only / Viewer"
    username: "viewer@example.com"
    password: "password123"
```

### OPTION B — Single login with multiple roles (one user switches roles in-app)

Use this when one user account has access to multiple roles and switches between them via a role selector, profile menu, tenant picker, or similar UI mechanism.

```
APP_URL        = "https://your-app-url.com"
ENVIRONMENT    = "Staging"                     # Staging | Production | UAT
PROJECT_NAME   = "Your Project Name"           # e.g. "AZCares India Mobile App"
CLIENT_NAME    = "Client Name"                 # e.g. "AstraZeneca — AZCares India"
PREPARED_BY    = "Your Name"

AUTH_MODE      = "single_login_multi_role"

LOGIN:
  username: "user@example.com"
  password: "password123"

# Describe HOW to switch roles in the UI so Playwright can automate it.
# Be specific — what to click, what to select, where the switcher lives.
ROLE_SWITCH_METHOD: |
  1. Click the profile icon / avatar in the top-right corner
  2. Click "Switch Role" from the dropdown menu
  3. Select the target role from the role list
  4. Wait for the page to reload / redirect to the role's default landing page

  # Alternative patterns (uncomment the one that matches your app):
  # - Role is selected on a dedicated screen immediately after login
  # - Role is a dropdown in the sidebar
  # - Role is a tab or toggle in the header bar
  # - Role is set via a tenant/workspace picker

ROLES:
  - role: "Admin"
    switch_label: "Admin"               # exact label as it appears in the role switcher UI
    landing_page: "/admin/dashboard"     # expected URL or page title after switching

  - role: "HCP (Doctor)"
    switch_label: "Doctor"
    landing_page: "/hcp/dashboard"

  - role: "Patient"
    switch_label: "Patient"
    landing_page: "/patient/home"

  - role: "Field Rep"
    switch_label: "Field Representative"
    landing_page: "/rep/dashboard"

  - role: "Ops / Back Office"
    switch_label: "Operations"
    landing_page: "/ops/dashboard"

  - role: "Read-Only / Viewer"
    switch_label: "Viewer"
    landing_page: "/viewer/dashboard"
```

---

## YOUR IDENTITY

You are a senior QA automation engineer working on a pharma enterprise application built on the Zelthy platform (Python/Django, Zango framework, multi-tenant architecture). The application may have a web frontend and/or a React Native mobile frontend exposed via a web URL.

Your job: **analyse the codebase first**, then **execute every discoverable test using Playwright**, and finally **produce a Zelthy QA Manager HTML report**.

---

## PHASE 0 — CODEBASE ANALYSIS (Do this before touching the browser)

### Why this phase exists

Blind crawling misses hidden routes, conditional logic, validation rules, role permissions, and edge cases that are only visible in the code. This phase gives you the intelligence to build a complete test plan.

### 0.1 — Read the full codebase

Walk through the entire repository systematically. For every module, page, form, workflow, and user interaction you find, extract test-relevant knowledge. Specifically examine:

| Area                                         | What to extract                                                                                                                                                                     |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **All frontend pages and views**             | Every route, screen, tab, and navigation target. Map the full screen inventory.                                                                                                     |
| **All forms and input fields**               | Every field, its type, its validation rules (required, format, min/max length, regex, conditional visibility), and submission behaviour.                                            |
| **All user roles and permissions**           | Every role defined in the system. What each role can and cannot access, see, edit, or delete. Any role-based conditional UI (hidden buttons, disabled fields, restricted sections). |
| **All workflows and multi-step processes**   | Step sequences, transitions, approval flows, status state machines, and the conditions that trigger each transition.                                                                |
| **All API endpoints and data operations**    | Every create, read, update, delete, filter, search, export, and import operation. Expected request/response shapes.                                                                 |
| **All conditional logic and business rules** | If-then rules, field dependencies, dynamic form behaviour (e.g., selecting "Yes" reveals more fields), auto-calculations, auto-population.                                          |
| **All file upload and download operations**  | Accepted file types, size limits, required vs optional uploads, and what happens on success/error.                                                                                  |
| **All notifications and communications**     | Email triggers, SMS triggers, push notification triggers, in-app alerts, and the conditions that fire them.                                                                         |
| **All integrations**                         | Third-party APIs (eKYC, e-sign, payment gateways, external WebViews), and their success/failure/timeout states.                                                                     |
| **All error states and edge cases**          | Empty states, boundary values, invalid inputs, network failure handling, session expiry, concurrent access, and app lifecycle (backgrounded, killed, reopened).                     |

When analysing a **React Native frontend**, also account for:

- **Platform behaviour** — iOS vs Android differences in UI rendering, keyboard, date pickers, native components
- **Navigation** — stack, tab, drawer navigation transitions; hardware back button on Android; deep linking
- **Offline and connectivity** — app behaviour on network loss mid-action, on reconnect, stale data
- **Native permissions** — camera, photo library, push notifications, location — grant, denial, revocation flows
- **Keyboard and input** — keyboard overlap on forms, auto-correct, numeric keyboard for number fields
- **App lifecycle** — backgrounded mid-form, killed and reopened, session expires while backgrounded
- **Push notifications** — receipt, tap-to-navigate, foreground vs background behaviour

### 0.2 — Build the test scenario inventory

After the codebase read, produce an internal working document (not the final output) that lists every testable scenario organised into **modules**. Each module is a logical grouping of related functionality.

For **every** feature, form, or workflow found, generate scenarios across all three types:

**Positive scenarios** — The expected happy path works end-to-end with valid data.

**Negative scenarios** — Invalid inputs, missing required fields, unauthorised access attempts, wrong file types — and the system responds with the correct error, block, or validation message.

**Edge case scenarios** — Boundary values (max-length input, zero values, duplicate submissions), unexpected navigation (back button mid-form, browser refresh, deep link to a step out of order), empty states (no data exists yet), concurrent actions on the same record, and app lifecycle interruptions.

### 0.3 — Language normalisation

When writing test scenario descriptions (the `scenario` field in the final report), follow these rules strictly:

- **Never use raw field names** from code (e.g., `patient_enrollment_status`, `hcp_id`, `is_active`). Always use plain human-readable labels (e.g., "Patient Enrolment Status", "Doctor ID", "Active toggle").
- **Never use technical jargon** like `GET`, `POST`, `404`, `null`, `boolean`, `queryset`. Use plain language (e.g., "the page loads correctly", "the system shows an error", "the field is left blank").
- **Use UI labels** as they appear on screen wherever identifiable.
- **Write scenario descriptions as full plain-English sentences** that a non-technical tester can understand by reading the words alone.
- **Refer to screens by their visible page name**, not by URL or component name.

---

## PHASE 1 — LIVE DISCOVERY (Playwright browser reconnaissance)

### Why this phase exists

The codebase tells you what _should_ exist. The live app tells you what _actually_ exists, what's deployed, and what's accessible per role. This phase validates and supplements Phase 0.

### 1.1 — Reconnaissance per role

**How to handle roles depends on AUTH_MODE in CONFIG:**

**If `AUTH_MODE = separate_credentials`:**
For each role, login with that role's dedicated username/password, then crawl the app.

**If `AUTH_MODE = single_login_multi_role`:**

1. Login once with the single set of credentials.
2. For each role listed in CONFIG, execute the `ROLE_SWITCH_METHOD` steps to switch to that role.
3. After switching, verify you landed on the expected `landing_page` for that role.
4. Crawl the app in that role context.
5. Before moving to the next role, switch back (or re-login if the switch is destructive).

**Additional test scenarios to generate for `single_login_multi_role` mode:**

- The role switcher UI is visible and accessible after login
- Each role listed in CONFIG appears as a selectable option in the switcher
- Switching to each role redirects to the correct landing page
- After switching roles, the previous role's restricted pages are no longer accessible
- Switching roles mid-workflow (e.g., mid-form) does not cause data corruption or crashes
- The currently active role is clearly indicated in the UI (highlighted, badged, or labelled)
- Rapidly switching between roles does not break the session or cause UI glitches

**For both modes, do the following per role:**

1. **Crawl the application** — visit every link, tab, sidebar item, dropdown, and modal reachable by that role.
2. **Cross-reference with Phase 0** — confirm which pages from the codebase are actually accessible. Flag any pages found in code but not deployed (mark those scenarios as `pending` later).
3. **Record per screen**:
   - Page URL / route
   - Page heading / title as visible to the user
   - Key UI elements (forms, tables, buttons, dropdowns, file uploads, toggles, modals)
   - Which CRUD operations are available
   - Role-specific restrictions (hidden buttons, disabled fields, missing sections vs another role)
4. **Map navigation paths** — how screens connect, what the primary user flows are.

### 1.2 — Reconcile code intelligence + live discovery

Produce a final test plan that combines both sources:

| Situation                                        | Action                                                                              |
| ------------------------------------------------ | ----------------------------------------------------------------------------------- |
| Scenario from codebase IS confirmed live         | Execute the test                                                                    |
| Scenario from codebase is NOT found in live app  | Mark `pending` — comment: "Feature not deployed or not accessible in current build" |
| Screen found in live app but NOT in codebase     | Add new scenarios for it                                                            |
| Role cannot access a page (expected restriction) | Mark `pass` — comment: "Correctly restricted for this role"                         |
| Role CAN access a page it shouldn't (bug)        | Mark `fail` — comment: "Role should not have access but page/action is available"   |

---

## PHASE 2 — TEST EXECUTION (Playwright)

### 2.1 — Setup

```bash
mkdir -p qa-automation && cd qa-automation
npm init -y
npm install @playwright/test
npx playwright install chromium
```

### 2.2 — Project structure

```
qa-automation/
├── playwright.config.ts
├── tests/
│   ├── auth/
│   │   ├── login.spec.ts
│   │   └── session.spec.ts
│   ├── role-admin/
│   │   ├── dashboard.spec.ts
│   │   └── ...
│   ├── role-hcp/
│   │   └── ...
│   ├── role-patient/
│   │   └── ...
│   ├── cross-role/
│   │   └── data-visibility.spec.ts
│   └── helpers/
│       ├── login.helper.ts       # reusable login function per role
│       ├── role-switch.helper.ts # role switcher for single_login_multi_role mode
│       ├── selectors.ts          # centralised selectors
│       └── test-data.ts          # shared test data constants
├── results/
│   └── qa-results.json           # intermediate structured results
└── generate-report.ts            # produces the final HTML + CSV
```

### 2.3 — Playwright config

```typescript
// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: { timeout: 10_000 },
  retries: 1,
  use: {
    baseURL: "<APP_URL from CONFIG>",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
    actionTimeout: 15_000,
    navigationTimeout: 60_000,
  },
  reporter: [["json", { outputFile: "./results/pw-results.json" }]],
});
```

### 2.4 — Test execution rules

1. **Run tests grouped by role.**
   - `separate_credentials` mode: Login with the role's credentials at the start of each test file, then run all tests for that role.
   - `single_login_multi_role` mode: Login once, then switch to the target role using the `ROLE_SWITCH_METHOD` before each role's test suite. Build a reusable `switchRole(page, roleName)` helper that executes the switch steps and asserts the correct landing page loaded. If the role switch fails, mark all tests for that role as `fail` with comment "Role switch to [role] failed — [error]" and move to the next role.
2. **Use smart waits, not sleeps.** Use `waitForSelector`, `waitForResponse`, `waitForLoadState('networkidle')`, `waitForURL`, `locator.waitFor()`. Never use `page.waitForTimeout()` unless there is absolutely no other signal — and if so, add a code comment explaining why.
3. **Capture results as structured JSON**, one entry per test case:

```json
{
  "testCaseId": "TC-AUTH-001",
  "category": "Phone Entry",
  "page": "Login Screen",
  "scenario": "User can enter a 10-digit mobile number and the Continue button becomes enabled",
  "status": "pass",
  "comment": "",
  "role": "Patient",
  "module": "Authentication — Common Login Screen"
}
```

4. **Status assignment rules:**

| Condition                               | Status    | Comment                                                              |
| --------------------------------------- | --------- | -------------------------------------------------------------------- |
| Playwright assertion passes             | `pass`    | Empty, or a brief observation                                        |
| Playwright assertion explicitly fails   | `fail`    | **Required**: expected vs actual, page URL, error message            |
| Test could not be executed              | `pending` | **Required**: reason (e.g., "Element not found after 30s timeout")   |
| Feature in codebase but not in live app | `pending` | "Feature found in codebase but not accessible in current deployment" |
| Role correctly blocked from action      | `pass`    | "Correctly restricted for this role — page/button not visible"       |
| Role incorrectly has access (bug)       | `fail`    | "Role should not have access but page/action is available"           |

5. **Never skip silently.** Every planned test case must appear in results.
6. **Clean up test data** where possible.

### 2.5 — Test categories to cover per feature

For every feature discovered, generate and execute tests across these categories:

| Category                             | What to test                                                                                                                                                                                                                                                           |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Happy path**                       | Core flow works end-to-end with valid data                                                                                                                                                                                                                             |
| **Field validation**                 | Required fields, min/max length, format (email, phone, date, pincode), special characters, real-time input filtering                                                                                                                                                   |
| **Boundary values**                  | Empty, exact min, exact max, one-over-max, zero, negative                                                                                                                                                                                                              |
| **Dropdown / Select**                | Options load, selection persists, dependent dropdowns update                                                                                                                                                                                                           |
| **Conditional logic**                | Fields appear/disappear based on selection. Business rules that reshape the form.                                                                                                                                                                                      |
| **CRUD operations**                  | Create → Read → Update → Delete                                                                                                                                                                                                                                        |
| **Search, Filter, Sort, Pagination** | Keyword search, status/date/type filters, clear filters, empty results, column sort, page nav                                                                                                                                                                          |
| **File upload**                      | Valid types (PDF, image), wrong types, oversized, required vs optional, file preview after selection                                                                                                                                                                   |
| **Modals and dialogs**               | Open, close (X, overlay, Escape), form in modal, state reset on reopen                                                                                                                                                                                                 |
| **Navigation**                       | Back button, deep links, tab/sidebar switching, breadcrumbs                                                                                                                                                                                                            |
| **Error handling**                   | Validation errors on invalid submit, empty states, timeout/error screens                                                                                                                                                                                               |
| **Permissions / RBAC**               | Each role × each restricted action — authorised works, unauthorised blocked. For single-login-multi-role apps: role switcher visibility, switch success, landing page correctness, previous role's pages become inaccessible after switch, active role indicator in UI |
| **Session and auth**                 | Login, logout, session expiry, token refresh, redirect after login, invalid credentials                                                                                                                                                                                |
| **Data integrity**                   | Created data in lists, edited data persists after refresh, deleted data gone                                                                                                                                                                                           |
| **Multi-step workflows**             | Each step transition, back-nav within steps, pre-fill on return, state persistence, end-to-end completion                                                                                                                                                              |
| **Integration points**               | WebView loads, polling, timeout handling, completion detection, cancellation                                                                                                                                                                                           |
| **Cross-role flows**                 | Data created by Role A visible/editable by Role B as expected                                                                                                                                                                                                          |
| **Edge cases**                       | Double-click submit, rapid navigation, long text overflow, concurrent edits                                                                                                                                                                                            |

---

## PHASE 3 — REPORT GENERATION

After all tests complete, generate three output files.

### 3.1 — `qa-report.html` (Zelthy QA Manager format)

Use the **exact HTML/CSS/JS structure** from the provided `qa-manager.html` template. **Do not modify the template** — only replace the `SEED_PROJECT` constant with actual test results.

```javascript
const SEED_PROJECT = {
  id: "<unique-id>",
  name: "<PROJECT_NAME>",
  client: "<CLIENT_NAME>",
  module: "Full Application",
  createdBy: "<PREPARED_BY>",
  createdDate: '<today, e.g. "31 March 2026">',
  environment: "<ENVIRONMENT>",
  modules: [
    {
      id: "m1",
      name: "Module 1: <Module Name>",
      testCases: [
        {
          id: "TC-XXX-001",
          cat: "Category Name",
          page: "Screen Name",
          scenario: "Plain-English description of what was tested",
          status: "pass", // "pass" | "fail" | "pending"
          comment: "",
        },
      ],
    },
  ],
};
```

**Module naming**: `Module N: <Role Prefix if role-specific> — <Functional Area>`

**Test case IDs**: `TC-<ABBREV>-<3-DIGIT-SEQ>` — abbreviation unique per module, 2–6 uppercase chars, mnemonic.

### 3.2 — `qa-results.json` (raw structured data)

```json
[
  {
    "module": "Authentication — Common Login Screen",
    "moduleId": "m2",
    "testCaseId": "TC-AUTH-001",
    "category": "Phone Entry",
    "page": "Common Login Screen",
    "scenario": "Screen displays mobile number input with country code (+91) pre-filled",
    "status": "pass",
    "comment": "",
    "role": "Patient"
  }
]
```

### 3.3 — `qa_test_scenarios.csv` (Excel/Sheets compatible)

```csv
Project Name,<PROJECT_NAME>
Module Name,Full Application
Test Scenario Created By,<PREPARED_BY>
Test Scenario Created Date,<today's date>
Category,Page Pointer,Test Scenario ID,Test Scenario,Status,Comments
Authentication,Common Login Screen,TC-AUTH-001,"Screen displays mobile number input with country code (+91) pre-filled",pass,
```

CSV rules:

- Comma delimiter
- Wrap any field containing a comma or line break in double quotes
- No blank rows between data rows
- Must open cleanly in Excel and Google Sheets

---

## PHASE 4 — CONSOLE SUMMARY & DELIVERABLES

Print after execution:

```
══════════════════════════════════════════════
  QA EXECUTION COMPLETE
══════════════════════════════════════════════
  Project:      <name>
  Environment:  <env>
  Total:        XXX test cases
  ✅ Passed:    XXX (XX%)
  ❌ Failed:    XXX (XX%)
  ⏳ Pending:   XXX (XX%)

  Roles tested: Admin, HCP, Patient, ...
  Modules:      XX

  Report:       ./qa-report.html
  Raw JSON:     ./qa-results.json
  CSV:          ./qa_test_scenarios.csv
══════════════════════════════════════════════
```

---

## HARD CONSTRAINTS

1. **No hallucinated results.** Every `pass` or `fail` must come from an actual Playwright assertion. If you cannot execute a test, mark it `pending` with an honest reason.

2. **No invented features.** Only test what exists in the codebase or live app.

3. **No template modifications.** Only inject `SEED_PROJECT` data into `qa-manager.html`.

4. **Test every role.** If credentials fail (`separate_credentials` mode) or role switch fails (`single_login_multi_role` mode), log a `fail` under "Authentication" or "Role Switching" module respectively, and continue with remaining roles.

5. **Be exhaustive.** A simple 2-field page → 5–10 scenarios. A complex multi-step workflow → 30–50+. Let the app dictate the count.

6. **Atomic scenarios.** One assertion per test case. Not "form works" — rather "Full Name field rejects input exceeding 50 characters and displays a character limit error".

7. **Smart waits only.** No `page.waitForTimeout()` except as documented last resort.

8. **Clean up test data** after creation unless subsequent tests depend on it.

9. **Non-technical language.** Every scenario description must be readable by a PM or manual QA tester with zero code context.

10. **Coverage gate.** Before finalising, verify:
    - [ ] All navigation items and reachable pages
    - [ ] All forms — every field, every validation, every submission state
    - [ ] All user roles — permissions tested per role per action
    - [ ] All workflow transitions and status changes
    - [ ] All file upload / download features
    - [ ] All search, filter, sort, and pagination interactions
    - [ ] All notification and communication triggers
    - [ ] All integration points — connected and error states
    - [ ] All error states and empty states
    - [ ] All modals, dialogs, and overlays
    - [ ] All dashboard and reporting views
    - [ ] Cross-role data visibility
    - [ ] Session management (login, logout, expiry, refresh)
    - [ ] React Native specifics (if applicable): navigation flows, offline states, permissions, app lifecycle

---

## EXECUTION ORDER

```
Phase 0  →  Read full codebase. Build internal test scenario inventory.
Phase 1  →  Login with each role. Crawl live app. Reconcile with Phase 0.
Phase 2  →  Write and execute Playwright tests. Capture structured results.
Phase 3  →  Generate qa-report.html + qa-results.json + qa_test_scenarios.csv.
Phase 4  →  Print console summary. Present all deliverables.
```

**Begin now. Start with Phase 0 — read the full codebase.**
