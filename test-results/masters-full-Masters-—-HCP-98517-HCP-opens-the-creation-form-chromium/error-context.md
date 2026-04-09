# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: masters-full.spec.ts >> Masters — HCP >> TC-HCP-001: Clicking Add New on HCP opens the creation form
- Location: tests/masters-full.spec.ts:368:7

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - main [ref=e4]:
    - navigation [ref=e5]:
      - link "sarapsp" [ref=e7] [cursor=pointer]:
        - /url: /app
        - img "sarapsp" [ref=e8]
      - list [ref=e10]:
        - listitem [ref=e11] [cursor=pointer]:
          - link "Patient" [ref=e12]:
            - /url: /app/patient
            - img [ref=e14]
            - generic [ref=e18]: Patient
        - listitem [ref=e19] [cursor=pointer]:
          - link "AF Request" [ref=e20]:
            - /url: /app/af-request
            - img [ref=e22]
            - generic [ref=e25]: AF Request
        - listitem [ref=e26] [cursor=pointer]:
          - link "F2F visit" [ref=e27]:
            - /url: /app/f2f-visit
            - img [ref=e29]
            - generic [ref=e31]: F2F visit
        - listitem [ref=e32] [cursor=pointer]:
          - link "Adverse Event" [ref=e33]:
            - /url: /app/adverse-event
            - img [ref=e35]
            - generic [ref=e37]: Adverse Event
        - listitem [ref=e38] [cursor=pointer]:
          - generic [ref=e39]:
            - img [ref=e41]
            - generic [ref=e43]: Masters
            - img [ref=e45]
        - list [ref=e47]:
          - listitem [ref=e48] [cursor=pointer]:
            - link "Hospitals" [ref=e49]:
              - /url: /app/hospital
              - generic [ref=e51]: Hospitals
          - listitem [ref=e52] [cursor=pointer]:
            - link "HCPs" [active] [ref=e53]:
              - /url: /app/hcp
              - img [ref=e55]
              - generic [ref=e57]: HCPs
          - listitem [ref=e58] [cursor=pointer]:
            - link "AF Bodies" [ref=e59]:
              - /url: /app/af-body
              - generic [ref=e61]: AF Bodies
          - listitem [ref=e62] [cursor=pointer]:
            - link "Bumi Agents" [ref=e63]:
              - /url: /app/bhumi-agent
              - generic [ref=e65]: Bumi Agents
        - listitem [ref=e66] [cursor=pointer]:
          - link "Tasks" [ref=e67]:
            - /url: /app/task
            - img [ref=e69]
            - generic [ref=e71]: Tasks
        - listitem [ref=e72] [cursor=pointer]:
          - generic [ref=e73]:
            - img [ref=e75]
            - generic [ref=e88]: Reports
            - img [ref=e90]
        - list:
          - listitem [ref=e92] [cursor=pointer]:
            - link "Enrolled Patient Report" [ref=e93]:
              - /url: /app/enrolled-patients
              - generic [ref=e95]: Enrolled Patient Report
          - listitem [ref=e96] [cursor=pointer]:
            - link "Patients by AF Status Report" [ref=e97]:
              - /url: /app/enrolled-patients-by-af-status
              - generic [ref=e99]: Patients by AF Status Report
          - listitem [ref=e100] [cursor=pointer]:
            - link "Total AF Submitted Report" [ref=e101]:
              - /url: /app/af-submitted-by-body
              - generic [ref=e103]: Total AF Submitted Report
          - listitem [ref=e104] [cursor=pointer]:
            - link "Total AF Approved Report" [ref=e105]:
              - /url: /app/af-approved-by-body
              - generic [ref=e107]: Total AF Approved Report
          - listitem [ref=e108] [cursor=pointer]:
            - link "Patient Enrolment by Hospitals" [ref=e109]:
              - /url: /app/hospital-enrolment
              - generic [ref=e111]: Patient Enrolment by Hospitals
          - listitem [ref=e112] [cursor=pointer]:
            - link "Enrolled Patients and Milestones" [ref=e113]:
              - /url: /app/enrolled-patients-and-milestones
              - generic [ref=e115]: Enrolled Patients and Milestones
        - listitem [ref=e116] [cursor=pointer]:
          - generic [ref=e117]:
            - img [ref=e119]
            - generic [ref=e124]: KPI
            - img [ref=e126]
        - list:
          - listitem [ref=e128] [cursor=pointer]:
            - 'link "Welcome Call - #Days" [ref=e129]':
              - /url: /app/kpi
              - generic [ref=e131]: "Welcome Call - #Days"
          - listitem [ref=e132] [cursor=pointer]:
            - link "Welcome Call 3 Attempts" [ref=e133]:
              - /url: /app/welcome-call-3-attempts
              - generic [ref=e135]: Welcome Call 3 Attempts
          - listitem [ref=e136] [cursor=pointer]:
            - link "Application Submission follow-up" [ref=e137]:
              - /url: /app/submission-confirmation-kpi
              - generic [ref=e139]: Application Submission follow-up
          - listitem [ref=e140] [cursor=pointer]:
            - link "Quotation Turnaround" [ref=e141]:
              - /url: /app/app-submission-follow-up-kpi
              - generic [ref=e143]: Quotation Turnaround
          - listitem [ref=e144] [cursor=pointer]:
            - link "Long-Pending AF Cases" [ref=e145]:
              - /url: /app/long-pending-af-cases-kpi
              - generic [ref=e147]: Long-Pending AF Cases
          - listitem [ref=e148] [cursor=pointer]:
            - link "Inactive Patients" [ref=e149]:
              - /url: /app/drop-inactive-patient-kpi
              - generic [ref=e151]: Inactive Patients
        - listitem [ref=e152] [cursor=pointer]:
          - generic [ref=e153]:
            - img [ref=e155]
            - generic [ref=e159]: Configurations
            - img [ref=e161]
        - list:
          - listitem [ref=e163] [cursor=pointer]:
            - link "Speciality" [ref=e164]:
              - /url: /app/speciality
              - generic [ref=e166]: Speciality
          - listitem [ref=e167] [cursor=pointer]:
            - link "Medication" [ref=e168]:
              - /url: /app/medication
              - generic [ref=e170]: Medication
        - listitem [ref=e171] [cursor=pointer]:
          - generic [ref=e172]:
            - img [ref=e174]
            - generic [ref=e181]: Communication
            - img [ref=e183]
        - list:
          - listitem [ref=e185] [cursor=pointer]:
            - link "Emails" [ref=e186]:
              - /url: /app/email
              - generic [ref=e188]: Emails
          - listitem [ref=e189] [cursor=pointer]:
            - link "Whatsapp" [ref=e190]:
              - /url: /app/whatsapp
              - generic [ref=e192]: Whatsapp
          - listitem [ref=e193] [cursor=pointer]:
            - link "Calls" [ref=e194]:
              - /url: /app/call
              - generic [ref=e196]: Calls
        - listitem [ref=e197] [cursor=pointer]:
          - link "My Downloads" [ref=e198]:
            - /url: /app/downloads
            - img [ref=e200]
            - generic [ref=e203]: My Downloads
        - listitem [ref=e204] [cursor=pointer]:
          - link "📄 Dashboard" [ref=e205]:
            - /url: /app/dashboard
            - generic [ref=e206]: 📄
            - generic [ref=e207]: Dashboard
    - generic [ref=e208]:
      - generic [ref=e209]:
        - generic [ref=e213] [cursor=pointer]:
          - generic [ref=e214]:
            - img "Profile" [ref=e215]
            - generic [ref=e216]:
              - generic [ref=e217]: Arun Singh
              - generic [ref=e218]: PAP Executive
          - img [ref=e219]
        - generic [ref=e221]:
          - button [ref=e223] [cursor=pointer]:
            - img [ref=e224]
          - generic [ref=e227]:
            - generic [ref=e229]:
              - img [ref=e230]
              - img [ref=e233] [cursor=pointer]
            - generic [ref=e235]:
              - heading "Welcome!" [level=2] [ref=e236]
              - img [ref=e238]
          - generic [ref=e242]:
            - generic [ref=e243]:
              - button "Account" [ref=e244] [cursor=pointer]
              - button "Security" [ref=e245] [cursor=pointer]
            - generic [ref=e247]:
              - generic [ref=e248]:
                - img [ref=e249]
                - heading "Complete Your Profile" [level=3] [ref=e252]
                - paragraph [ref=e253]: Add your name and other details to personalize your account. Click the edit button next to each field to get started.
              - generic [ref=e254]:
                - generic [ref=e255]:
                  - generic [ref=e256]: Name
                  - button "Edit" [ref=e257] [cursor=pointer]
                - generic [ref=e259]: Click edit to add your name
              - generic [ref=e260]:
                - text: Roles
                - generic [ref=e262]:
                  - generic [ref=e263]:
                    - img [ref=e264]
                    - generic [ref=e267]: Admin
                  - generic [ref=e268]: Current
              - button "Log Out" [ref=e270] [cursor=pointer]:
                - img [ref=e271]
                - generic [ref=e274]: Log Out
      - generic [ref=e279]:
        - heading "HCPs (0)" [level=1] [ref=e283]:
          - generic [ref=e284]: HCPs
          - generic [ref=e285]: (0)
        - generic [ref=e286]:
          - generic [ref=e289]:
            - heading "Filters" [level=3] [ref=e292]
            - generic [ref=e294]:
              - generic [ref=e295]:
                - button "HCP ID" [ref=e296] [cursor=pointer]:
                  - generic [ref=e299]: HCP ID
                  - img [ref=e302]
                - generic [ref=e307]:
                  - generic:
                    - img
                  - textbox "Search hcp id" [ref=e308]
              - generic [ref=e309]:
                - button "HCP Internal ID" [ref=e310] [cursor=pointer]:
                  - generic [ref=e313]: HCP Internal ID
                  - img [ref=e316]
                - generic [ref=e321]:
                  - generic:
                    - img
                  - textbox "Search hcp internal id" [ref=e322]
              - generic [ref=e323]:
                - button "HCP Name" [ref=e324] [cursor=pointer]:
                  - generic [ref=e327]: HCP Name
                  - img [ref=e330]
                - generic [ref=e335]:
                  - generic:
                    - img
                  - textbox "Search hcp name" [ref=e336]
              - generic [ref=e337]:
                - button "Hospitals" [ref=e338] [cursor=pointer]:
                  - generic [ref=e341]: Hospitals
                  - img [ref=e344]
                - generic [ref=e349]:
                  - generic:
                    - img
                  - textbox "Search hospitals" [ref=e350]
              - generic [ref=e351]:
                - button "Speciality" [ref=e352] [cursor=pointer]:
                  - generic [ref=e355]: Speciality
                  - img [ref=e358]
                - generic [ref=e363]:
                  - generic:
                    - img
                  - textbox "Search speciality" [ref=e364]
              - generic [ref=e365]:
                - button "Contact Number" [ref=e366] [cursor=pointer]:
                  - generic [ref=e369]: Contact Number
                  - img [ref=e372]
                - generic [ref=e377]:
                  - generic:
                    - img
                  - textbox "Search contact number" [ref=e378]
              - generic [ref=e379]:
                - button "Email Address" [ref=e380] [cursor=pointer]:
                  - generic [ref=e383]: Email Address
                  - img [ref=e386]
                - generic [ref=e391]:
                  - generic:
                    - img
                  - textbox "Search email address" [ref=e392]
              - generic [ref=e393]:
                - button "Notes" [ref=e394] [cursor=pointer]:
                  - generic [ref=e397]: Notes
                  - img [ref=e400]
                - generic [ref=e405]:
                  - generic:
                    - img
                  - textbox "Search notes" [ref=e406]
              - generic [ref=e407]:
                - button "Enrolment Status" [ref=e408] [cursor=pointer]:
                  - generic [ref=e411]: Enrolment Status
                  - img [ref=e414]
                - generic [ref=e420]:
                  - log [ref=e422]
                  - generic [ref=e423]:
                    - generic [ref=e424]:
                      - generic [ref=e425]: Select Enrolment Status
                      - combobox [ref=e427]
                    - img [ref=e430]
              - generic [ref=e432]:
                - button "HCP Enrolment Date" [ref=e433] [cursor=pointer]:
                  - generic [ref=e436]: HCP Enrolment Date
                  - img [ref=e439]
                - generic [ref=e447]:
                  - generic [ref=e448]:
                    - textbox "From" [ref=e449]
                    - paragraph [ref=e450]: Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                  - generic [ref=e451]: "-"
                  - generic [ref=e452]:
                    - textbox "To" [ref=e453]
                    - paragraph [ref=e454]: Navigate backward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                  - button "Interact with the calendar and add the check-in date for your trip." [ref=e455] [cursor=pointer]:
                    - img [ref=e456]
              - generic [ref=e458]:
                - button "Discontinuation Reason" [ref=e459] [cursor=pointer]:
                  - generic [ref=e462]: Discontinuation Reason
                  - img [ref=e465]
                - generic [ref=e470]:
                  - generic:
                    - img
                  - textbox "Search discontinuation reason" [ref=e471]
              - generic [ref=e472]:
                - button "Discontinuation Date" [ref=e473] [cursor=pointer]:
                  - generic [ref=e476]: Discontinuation Date
                  - img [ref=e479]
                - generic [ref=e487]:
                  - generic [ref=e488]:
                    - textbox "From" [ref=e489]
                    - paragraph [ref=e490]: Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                  - generic [ref=e491]: "-"
                  - generic [ref=e492]:
                    - textbox "To" [ref=e493]
                    - paragraph [ref=e494]: Navigate backward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                  - button "Interact with the calendar and add the check-in date for your trip." [ref=e495] [cursor=pointer]:
                    - img [ref=e496]
          - generic [ref=e498]:
            - generic [ref=e500]:
              - button "Filters" [ref=e502] [cursor=pointer]:
                - img [ref=e503]
                - text: Filters
              - generic [ref=e507]:
                - generic [ref=e510]:
                  - generic:
                    - img
                  - textbox "Search..." [ref=e511]
                - button "Download" [ref=e512] [cursor=pointer]:
                  - img [ref=e513]
                - generic [ref=e518]:
                  - button "View" [ref=e520] [cursor=pointer]:
                    - img [ref=e521]
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - img
                          - textbox "Search columns"
                    - generic:
                      - generic:
                        - generic:
                          - checkbox [checked]
                        - generic: HCP ID
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
                      - generic:
                        - generic:
                          - checkbox [checked]
                        - generic: HCP Internal ID
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
                      - generic:
                        - generic:
                          - checkbox [checked]
                        - generic: HCP Name
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
                      - generic:
                        - generic:
                          - checkbox [checked]
                        - generic: Hospitals
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
                      - generic:
                        - generic:
                          - checkbox [checked]
                        - generic: Speciality
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
                      - generic:
                        - generic:
                          - checkbox [checked]
                        - generic: Contact Number
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
                      - generic:
                        - generic:
                          - checkbox [checked]
                        - generic: Email Address
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
                      - generic:
                        - generic:
                          - checkbox [checked]
                        - generic: Notes
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
                      - generic:
                        - generic:
                          - checkbox [checked]
                        - generic: Enrolment Status
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
                      - generic:
                        - generic:
                          - checkbox [checked]
                        - generic: HCP Enrolment Date
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
                      - generic:
                        - generic:
                          - checkbox [checked]
                        - generic: Discontinuation Reason
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
                      - generic:
                        - generic:
                          - checkbox [checked]
                        - generic: Discontinuation Date
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
            - table [ref=e526]:
              - rowgroup [ref=e527]:
                - row "HCP ID HCP Internal ID HCP Name Hospitals Speciality Contact Number Email Address Notes Enrolment Status HCP Enrolment Date Discontinuation Reason Discontinuation Date" [ref=e528]:
                  - columnheader "HCP ID" [ref=e529]:
                    - button "HCP ID" [ref=e530] [cursor=pointer]:
                      - text: HCP ID
                      - img [ref=e532]
                  - columnheader "HCP Internal ID" [ref=e535]:
                    - button "HCP Internal ID" [ref=e536] [cursor=pointer]:
                      - text: HCP Internal ID
                      - img [ref=e538]
                  - columnheader "HCP Name" [ref=e541]:
                    - button "HCP Name" [ref=e542] [cursor=pointer]:
                      - text: HCP Name
                      - img [ref=e544]
                  - columnheader "Hospitals" [ref=e547]
                  - columnheader "Speciality" [ref=e548]:
                    - button "Speciality" [ref=e549] [cursor=pointer]:
                      - text: Speciality
                      - img [ref=e551]
                  - columnheader "Contact Number" [ref=e554]
                  - columnheader "Email Address" [ref=e555]:
                    - button "Email Address" [ref=e556] [cursor=pointer]:
                      - text: Email Address
                      - img [ref=e558]
                  - columnheader "Notes" [ref=e561]:
                    - button "Notes" [ref=e562] [cursor=pointer]:
                      - text: Notes
                      - img [ref=e564]
                  - columnheader "Enrolment Status" [ref=e567]:
                    - button "Enrolment Status" [ref=e568] [cursor=pointer]:
                      - text: Enrolment Status
                      - img [ref=e570]
                  - columnheader "HCP Enrolment Date" [ref=e573]
                  - columnheader "Discontinuation Reason" [ref=e574]
                  - columnheader "Discontinuation Date" [ref=e575]:
                    - button "Discontinuation Date" [ref=e576] [cursor=pointer]:
                      - text: Discontinuation Date
                      - img [ref=e578]
              - rowgroup [ref=e581]:
                - row "Loading data..." [ref=e582]:
                  - cell "Loading data..." [ref=e583]:
                    - generic [ref=e587]: Loading data...
  - region "Notifications alt+T"
```

# Test source

```ts
  275 |     const mp = new MastersPage(page);
  276 |     await navToSection(mp, 'Hospital');
  277 |     await page.waitForTimeout(2000);
  278 |     const search = page.locator('input[placeholder*="search" i], input[type="search"]').first();
  279 |     if (!(await search.isVisible({ timeout: 3000 }).catch(() => false))) {
  280 |       saveResult('TC-HSP-014', 'pending', 'Search input not found on Hospital list');
  281 |       return;
  282 |     }
  283 |     await search.fill(name);
  284 |     await page.waitForTimeout(2000);
  285 |     const text = await page.evaluate(() => document.body.innerText);
  286 |     saveResult('TC-HSP-014', text.includes(name) ? 'pass' : 'fail',
  287 |       text.includes(name) ? `Search returned matching record for "${name}"` : `Search did not return "${name}"`);
  288 |   });
  289 | 
  290 |   test('TC-HSP-015: Searching with a non-existent name shows no results', async ({ page }) => {
  291 |     const mp = new MastersPage(page);
  292 |     await navToSection(mp, 'Hospital');
  293 |     await page.waitForTimeout(2000);
  294 |     const search = page.locator('input[placeholder*="search" i], input[type="search"]').first();
  295 |     if (!(await search.isVisible({ timeout: 3000 }).catch(() => false))) {
  296 |       saveResult('TC-HSP-015', 'pending', 'Search input not found on Hospital list');
  297 |       return;
  298 |     }
  299 |     await search.fill('ZZZNOMATCH_XYZ999');
  300 |     await page.waitForTimeout(2000);
  301 |     const noResultMsg = await page.locator(':text("No records"), :text("No data"), :text("No results"), :text("0 record"), [class*="empty"]').first().isVisible({ timeout: 3000 }).catch(() => false);
  302 |     const text = await page.evaluate(() => document.body.innerText);
  303 |     const stillHasData = text.includes('AutoHospital') || text.includes('TestHospital');
  304 |     saveResult('TC-HSP-015', (noResultMsg || !stillHasData) ? 'pass' : 'fail',
  305 |       (noResultMsg || !stillHasData) ? 'Search for non-existent name showed empty state' : 'Records still visible after searching for non-existent name');
  306 |   });
  307 | 
  308 |   test('TC-HSP-016: Hospital form opens with no pre-filled data', async ({ page }) => {
  309 |     const mp = new MastersPage(page);
  310 |     await navToSection(mp, 'Hospital');
  311 |     await openForm(mp);
  312 |     const modal = page.locator(MODAL).last();
  313 |     const code = await modal.getByPlaceholder('Hospital Code').inputValue().catch(() => '');
  314 |     const name = await modal.getByPlaceholder('Hospital Name').inputValue().catch(() => '');
  315 |     await page.keyboard.press('Escape').catch(() => {});
  316 |     saveResult('TC-HSP-016', (code === '' && name === '') ? 'pass' : 'fail',
  317 |       (code === '' && name === '') ? 'Form opened with all fields empty' : `Pre-filled: Code="${code}", Name="${name}"`);
  318 |   });
  319 | 
  320 |   test('TC-HSP-017: Pressing Escape or clicking overlay closes the Hospital form', async ({ page }) => {
  321 |     const mp = new MastersPage(page);
  322 |     await navToSection(mp, 'Hospital');
  323 |     await openForm(mp);
  324 |     const modal = page.locator(MODAL).last();
  325 |     await page.keyboard.press('Escape');
  326 |     await page.waitForTimeout(1000);
  327 |     const gone = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  328 |     if (gone) {
  329 |       saveResult('TC-HSP-017', 'pass', 'Form closed on Escape key');
  330 |     } else {
  331 |       await page.mouse.click(10, 10).catch(() => {});
  332 |       await page.waitForTimeout(1000);
  333 |       const goneAfterClick = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  334 |       saveResult('TC-HSP-017', goneAfterClick ? 'pass' : 'pending',
  335 |         goneAfterClick ? 'Form closed on overlay click' : 'Escape and overlay click did not close modal — may need explicit Cancel button');
  336 |     }
  337 |   });
  338 | 
  339 |   test('TC-HSP-018: Selecting Hospital from Masters sidebar opens Hospital list page', async ({ page }) => {
  340 |     const mp = new MastersPage(page);
  341 |     await navToSection(mp, 'Hospital');
  342 |     await page.waitForTimeout(1500);
  343 |     const url = page.url();
  344 |     const title = await page.locator('h1, h2, [class*="title"]').first().textContent().catch(() => '');
  345 |     const pass = url.includes('hospital') || title.toLowerCase().includes('hospital');
  346 |     saveResult('TC-HSP-018', pass ? 'pass' : 'fail', `URL: ${url}`);
  347 |     expect(pass).toBeTruthy();
  348 |   });
  349 | 
  350 |   test('TC-HSP-019: Hospital list page loads and displays a table or list', async ({ page }) => {
  351 |     const mp = new MastersPage(page);
  352 |     await navToSection(mp, 'Hospital');
  353 |     await page.waitForTimeout(2000);
  354 |     const list = page.locator('table, [class*="table"], [class*="list"], [class*="grid"]').first();
  355 |     const visible = await list.isVisible({ timeout: 8000 }).catch(() => false);
  356 |     saveResult('TC-HSP-019', visible ? 'pass' : 'fail',
  357 |       visible ? 'Hospital list loaded with table/grid' : 'Hospital list page did not show any table or list');
  358 |   });
  359 | 
  360 | });
  361 | 
  362 | 
  363 | // ════════════════════════════════════════
  364 | // HCP TESTS
  365 | // ════════════════════════════════════════
  366 | test.describe('Masters — HCP', () => {
  367 | 
  368 |   test('TC-HCP-001: Clicking Add New on HCP opens the creation form', async ({ page }) => {
  369 |     const mp = new MastersPage(page);
  370 |     await navToSection(mp, 'HCP');
  371 |     await openForm(mp);
  372 |     const modal = page.locator(MODAL).last();
  373 |     const visible = await modal.isVisible({ timeout: 8000 }).catch(() => false);
  374 |     saveResult('TC-HCP-001', visible ? 'pass' : 'fail', visible ? '' : 'HCP Add New did not open a form modal');
> 375 |     expect(visible).toBeTruthy();
      |                     ^ Error: expect(received).toBeTruthy()
  376 |   });
  377 | 
  378 |   test('TC-HCP-002: Create HCP with all mandatory fields — form submits successfully', async ({ page }) => {
  379 |     const data = loadCreatedData();
  380 |     const hospitalName = data.hospital?.name ?? 'AutoHospital_DF4169';
  381 |     const mp = new MastersPage(page);
  382 |     await navToSection(mp, 'HCP');
  383 |     await openForm(mp);
  384 |     const modal = page.locator(MODAL).last();
  385 |     await modal.getByPlaceholder('HCP Name').fill(`TestHCP_${SUFFIX}`).catch(() => {});
  386 |     await reactSelect(page, modal, 'Hospitals', hospitalName);
  387 |     await reactSelect(page, modal, 'Speciality', 'Dermatology');
  388 |     const tel = modal.locator('input[type="tel"]').first();
  389 |     if (await tel.isVisible({ timeout: 2000 }).catch(() => false)) {
  390 |       await tel.fill('398765432');
  391 |     } else {
  392 |       await modal.getByPlaceholder('Contact Number').fill('398765432').catch(() => {});
  393 |     }
  394 |     await modal.getByPlaceholder('Email Address').fill(`hcp${SUFFIX}@test.com`).catch(() => {});
  395 |     await mp.submitForm();
  396 |     await page.waitForTimeout(2000);
  397 |     const closed = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  398 |     const success = await page.locator(SUCCESS_SEL).first().isVisible({ timeout: 3000 }).catch(() => false);
  399 |     saveResult('TC-HCP-002', (closed || success) ? 'pass' : 'fail',
  400 |       (closed || success) ? '' : 'HCP form did not close or show success after filling all mandatory fields');
  401 |     expect(closed || success).toBeTruthy();
  402 |   });
  403 | 
  404 |   test('TC-HCP-003: Created HCP appears in HCP list after submission', async ({ page }) => {
  405 |     const data = loadCreatedData();
  406 |     const name = data.hcp?.name ?? `TestHCP_${SUFFIX}`;
  407 |     const mp = new MastersPage(page);
  408 |     await navToSection(mp, 'HCP');
  409 |     await page.waitForTimeout(2000);
  410 |     const text = await page.evaluate(() => document.body.innerText);
  411 |     const found = text.includes(name) || text.includes('AutoHCP') || text.includes('TestHCP');
  412 |     saveResult('TC-HCP-003', found ? 'pass' : 'fail',
  413 |       found ? '' : `HCP "${name}" not found in HCP list`);
  414 |     expect(found).toBeTruthy();
  415 |   });
  416 | 
  417 |   test('TC-HCP-004: HCP form blocks submission when HCP Name is blank', async ({ page }) => {
  418 |     const mp = new MastersPage(page);
  419 |     await navToSection(mp, 'HCP');
  420 |     await openForm(mp);
  421 |     const modal = page.locator(MODAL).last();
  422 |     await mp.submitForm();
  423 |     await page.waitForTimeout(2000);
  424 |     const blocked = await checkValidation(page, modal);
  425 |     saveResult('TC-HCP-004', blocked ? 'pass' : 'fail',
  426 |       blocked ? 'Form blocked without HCP Name' : 'Form submitted without HCP Name — no validation error');
  427 |     expect(blocked).toBeTruthy();
  428 |   });
  429 | 
  430 |   test('TC-HCP-005: HCP form blocks submission when Hospital is not selected', async ({ page }) => {
  431 |     const mp = new MastersPage(page);
  432 |     await navToSection(mp, 'HCP');
  433 |     await openForm(mp);
  434 |     const modal = page.locator(MODAL).last();
  435 |     await modal.getByPlaceholder('HCP Name').fill('NameWithoutHospital').catch(() => {});
  436 |     await mp.submitForm();
  437 |     await page.waitForTimeout(2000);
  438 |     const blocked = await checkValidation(page, modal);
  439 |     saveResult('TC-HCP-005', blocked ? 'pass' : 'fail',
  440 |       blocked ? 'Form blocked without Hospital selection' : 'Form submitted without Hospital — no error shown');
  441 |     expect(blocked).toBeTruthy();
  442 |   });
  443 | 
  444 |   test('TC-HCP-006: HCP email field shows error for invalid email format', async ({ page }) => {
  445 |     const mp = new MastersPage(page);
  446 |     await navToSection(mp, 'HCP');
  447 |     await openForm(mp);
  448 |     const modal = page.locator(MODAL).last();
  449 |     await modal.getByPlaceholder('HCP Name').fill('SomeHCPName').catch(() => {});
  450 |     await modal.getByPlaceholder('Email Address').fill('bademail').catch(() => {});
  451 |     await mp.submitForm();
  452 |     await page.waitForTimeout(2000);
  453 |     const blocked = await checkValidation(page, modal);
  454 |     saveResult('TC-HCP-006', blocked ? 'pass' : 'fail',
  455 |       blocked ? 'Invalid email on HCP form blocked submission' : 'Form accepted invalid HCP email without error');
  456 |     expect(blocked).toBeTruthy();
  457 |   });
  458 | 
  459 |   test('TC-HCP-007: Contact Number accepts a valid Malaysian phone number', async ({ page }) => {
  460 |     const mp = new MastersPage(page);
  461 |     await navToSection(mp, 'HCP');
  462 |     await openForm(mp);
  463 |     const modal = page.locator(MODAL).last();
  464 |     const tel = modal.locator('input[type="tel"]').first();
  465 |     if (await tel.isVisible({ timeout: 3000 }).catch(() => false)) {
  466 |       await tel.fill('398765432');
  467 |       const val = await tel.inputValue().catch(() => '');
  468 |       await page.keyboard.press('Escape').catch(() => {});
  469 |       saveResult('TC-HCP-007', val === '398765432' ? 'pass' : 'fail',
  470 |         val === '398765432' ? 'Valid 9-digit phone accepted' : `Expected "398765432" but got "${val}"`);
  471 |     } else {
  472 |       await page.keyboard.press('Escape').catch(() => {});
  473 |       saveResult('TC-HCP-007', 'pending', 'Phone tel input not found — cannot verify numeric acceptance');
  474 |     }
  475 |   });
```