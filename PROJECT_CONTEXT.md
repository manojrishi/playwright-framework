# SARAPS PSP Staging — Playwright QA Automation Context

> **Purpose:** Reference document for Claude Code to understand project history, structure, and what has been done. Refer to this before executing any QA-related task in this repository.

---

## Project Overview

| Field | Value |
|-------|-------|
| **App** | SARAPS PSP Staging (Pharma CRM / Patient Support Program) |
| **Platform** | Zelthy (Python/Django, Zango framework, multi-tenant) |
| **Base URL** | `https://zel3-sarapspstaging.zelthy.in` |
| **Auth** | `arun@zelthy.com` / `Zelthy@123` |
| **Framework** | Playwright (TypeScript) |
| **Repo path** | `/Users/tejasdeshmukh/playwright-framework` |
| **Branch** | `E2E_Tests_Manoj` |
| **Git user** | `manojrishi` |

---

## Repository Structure

```
playwright-framework/
├── playwright.config.ts          # Main config (headless: false, workers: 1)
├── playwright.bg.config.ts       # Headless config for background runs (created by us)
├── qa_test_scenarios.csv         # 84 test cases — Masters + Patient modules (created by us)
├── PROJECT_CONTEXT.md            # This file
│
├── tests/
│   ├── auth.setup.ts             # Login setup — saves session to .auth/session.json
│   ├── flow.spec.ts              # Original E2E flow: Masters creation + Patient creation
│   ├── validate.spec.ts          # Validates created records appear in CRM lists
│   ├── masters-full.spec.ts      # Full Masters module test suite (71 TCs) — created by us
│   └── patient-full.spec.ts      # Full Patient module test suite (44 TCs) — created by us
│
├── pages/
│   ├── base.page.ts              # BasePage: sidebar nav, fill field, select dropdown helpers
│   ├── login.page.ts             # LoginPage: handles login flow
│   ├── masters.page.ts           # MastersPage: navigate, openSection, clickAdd, submitForm
│   └── patient.page.ts           # PatientPage: navigate, addNew, fill fields, upload, submit
│
├── utils/
│   ├── test-data.ts              # TEST_DATA constants (hospital/hcp/patient names, emails, phones)
│   └── created-records.ts        # saveCreatedData() / loadCreatedData() → reports/created-data.json
│
├── scripts/
│   └── update-csv.js             # Node.js script: reads tc-results.json → updates qa_test_scenarios.csv
│
├── reports/
│   ├── created-data.json         # Stores names of records created during test runs
│   ├── tc-results.json           # Raw test results written by masters-full + patient-full specs
│   ├── bg-run.log                # Log from last background test run
│   ├── qa-report.html            # Final HTML QA report (filterable: All/Pass/Fail/Pending)
│   └── *.png                     # Screenshots taken during test runs
│
└── tests/fixtures/
    └── consent-form.pdf          # Dummy PDF used for Patient consent form upload tests
```

---

## Application Modules Covered

### Masters Module (sidebar → Masters)
The Masters module has 4 sub-sections, each with a list view and a modal creation form:

| Section | URL | Key Form Fields |
|---------|-----|-----------------|
| **Hospital** | `/app/hospital` | Hospital Code *(required)*, Hospital Name *(required)*, Hospital Internal ID *(required)*, Email Address |
| **HCP** | `/app/hcp` | HCP Name *(required)*, Hospitals *(react-select, required)*, Speciality *(react-select)*, Contact Number (+60 prefix), Email Address |
| **AF Bodies** | `/app/af-body` | AF Body Name *(required)*, AF Bodies Internal ID *(required)*, Follow-Up Timeline (Weekly/Monthly) |
| **Bumi Agents** | `/app/bhumi-agent` | Bumi Agent Name *(required)*, Contact Number, Email Address, Bumi Agent Internal ID *(required)* |

### Patient Module (sidebar → Patient)
URL: `/app/patient`

| Field | Type | Notes |
|-------|------|-------|
| Patient Name | Text | Required |
| NRiC | Text | Required, should be 12-digit numeric (Malaysian IC) — **BUG: no numeric filter, no maxlength** |
| Contact Number | Tel input | Required, 9 digits after +60 prefix — **BUG: accepts non-numeric input** |
| Email Address | Email | Optional, validated on submit |
| Indication | React-Select | Required, 14 options including PsO |
| Hospital Name | React-Select | Required, loads all hospitals (~39 options) |
| HCP Name | React-Select | Required, filtered by selected Hospital |
| Consent Form | File upload | Required PDF, triggers file chooser — **NOTE: file input hidden in headless mode** |

---

## What Has Been Done

### Phase 1 — Original Test Run (flow.spec.ts + validate.spec.ts)
Ran the existing test suite which creates all master records and one patient.

**Results:**
- TC-001 Hospital Master → **PASSED** (AutoHospital_DF4169)
- TC-002 HCP Master → **PASSED** (AutoHCP_DF4169)
- TC-003 AF Bodies Master → **PASSED** (AutoAFBodies_DF4169)
- TC-004 Bumi Agents Master → **PASSED** (AutoBumiAgent_DF4169)
- TC-005 Patient Creation → **FAILED** — form stayed open after submit (HCP not fully selected before file upload started)
- VAL-001 Hospital verify → PASSED
- VAL-002 HCP verify → FAILED — record not found on last page (pagination nav bug in validator)
- VAL-003 AF Bodies verify → PASSED
- VAL-004 Bumi Agents verify → PASSED
- VAL-005 Patient verify → FAILED — patient was never created

**Created records stored in:** `reports/created-data.json`

### Phase 2 — Test Case Generation (qa_test_scenarios.csv)
Generated 84 manual + automatable test cases for Masters and Patient modules covering:
- Happy path, Field validation, Boundary values, Dropdown/Select, Conditional logic, CRUD, Search/Filter, Pagination, File upload, Modals, Navigation, Error handling, Cross-module flows

### Phase 3 — Full Automation Run (masters-full.spec.ts + patient-full.spec.ts)
Ran all test cases headless via `playwright.bg.config.ts`.

**Overall results: 57 pass | 23 fail | 22 pending (102 total)**

| Module | Pass | Fail | Pending |
|--------|------|------|---------|
| Hospital | 11 | 3 | 5 |
| HCP | 9 | 5 | 7 |
| AF Bodies | 8 | 4 | 3 |
| Bumi Agents | 8 | 4 | 4 |
| Patient | 21 | 7 | 12 |

### Phase 4 — HTML Report (qa-report.html)
Generated `reports/qa-report.html` — interactive report with:
- Summary cards + progress bar
- Filter tabs: All / Pass / Fail / Pending (clicking Fail shows only failed rows; empty module sections auto-hide)
- Live search box
- All 5 modules with TC ID, category, scenario, status badge, comment

---

## Known Bugs Found

### Critical / High
| TC ID | Module | Bug Description |
|-------|--------|-----------------|
| TC-AFB-004 | AF Bodies | AF Body Name is required but form submits without it — no validation error |
| TC-AFB-005 | AF Bodies | AF Bodies Internal ID is required but form submits without it |
| TC-BUM-004 | Bumi Agents | Bumi Agent Name is required but form submits without it |
| TC-BUM-005 | Bumi Agents | Bumi Agent Internal ID is required but form submits without it |
| TC-PAT-006 | Patient | NRiC field accepts alphabetic characters — should be numeric only |
| TC-PAT-007 | Patient | NRiC has no maxlength — accepts 16+ digits (should cap at 12) |
| TC-PAT-009 | Patient | Contact Number accepts non-numeric input |
| TC-PAT-002 | Patient | Patient creation fails — form stays open after submit (HCP selection timing issue) |

### Medium
| TC ID | Module | Bug Description |
|-------|--------|-----------------|
| TC-HCP-015/018 | HCP | HCP record not visible/searchable on first list page — pagination issue |
| TC-PAT-044 | Patient | AutoHCP_DF4169 not appearing in HCP dropdown after hospital selection |
| TC-HSP-010 | Hospital | Hospital Code field clears alphanumeric input unexpectedly |

### Automation Gaps (Pending — needs manual verification)
- Edit functionality for all modules — edit button not located by automation (UI pattern differs)
- Cancel/Close button on forms — selector hits wrong element (profile-close-btn)
- HCP Contact Number and Bumi Agent Contact Number — custom phone component, not type="tel"
- File type validation for Consent Form — file input hidden in headless mode
- Pagination on Patient list — insufficient data to trigger pagination controls
- Filter by Hospital/HCP on Patient list — filter UI interaction pattern not determined

---

## How to Re-run Things

### Run original E2E flow
```bash
npx playwright test tests/flow.spec.ts tests/validate.spec.ts --project=chromium
```

### Run full test suite (headless, background-friendly)
```bash
npx playwright test tests/masters-full.spec.ts tests/patient-full.spec.ts \
  --config=playwright.bg.config.ts --reporter=list
```

### Update CSV after a test run
```bash
node scripts/update-csv.js
```

### Re-auth if session expired
```bash
npx playwright test --project=setup --config=playwright.bg.config.ts
```

### Open HTML report
```bash
open reports/qa-report.html
```

---

## Important Technical Notes

### React-Select Dropdowns
All dropdowns in this app use React-Select. The helper function `reactSelect(page, container, placeholderText, searchText)` in both spec files handles this by:
1. Clicking the placeholder text inside the dropdown
2. Typing the search text with delay
3. Clicking the matching option from the dropdown menu

**Known issue:** When running headless, some react-select dropdowns don't render their control visibly, causing `__control` locator to fail.

### Modal Locator
```typescript
const modal = page.locator('[role="dialog"], [class*="modal"], [class*="slide"], [class*="panel"]').last();
```
The `.last()` is important — there are multiple matching elements on the page. In headed mode this works well, but in headless mode the modal sometimes doesn't match.

### Patient Form — HCP Selection Timing
The original TC-005 failure was because the HCP react-select search started before the Hospital selection was fully registered. Always add `await page.waitForTimeout(1000)` after Hospital selection before triggering HCP dropdown.

### Auth Session
- Session file: `.auth/session.json`
- The `setup` project in `playwright.config.ts` runs `auth.setup.ts` which logs in and saves the session
- All `chromium` project tests depend on `setup` and use `storageState: '.auth/session.json'`

### Results Tracking
- `masters-full.spec.ts` and `patient-full.spec.ts` call `saveResult(id, status, comment)` after each assertion
- Results are written to `reports/tc-results.json`
- `node scripts/update-csv.js` reads that JSON and updates `qa_test_scenarios.csv`

---

## Next Steps / Pending Work

1. **Fix patient creation (TC-PAT-002)** — Add extra wait + confirmation of HCP selection before uploading consent form
2. **Fix modal locator for headless mode** — The Add New button modal locator is failing in headless. Test with headed to isolate the correct selector
3. **Fix cancel button selector** — `[class*="close"]` is matching `profile-close-btn` — need a more specific selector scoped to the form modal
4. **Add edit functionality tests** — Investigate how edit is triggered (row click? icon? context menu?) and update TC-HSP-012, TC-HCP-016, TC-AFB-011, TC-BUM-011
5. **Add pagination data** — Create enough records to trigger pagination and run TC-PAT-035/036
6. **Test HCP contact number** — Identify the actual placeholder text or component for HCP phone field
