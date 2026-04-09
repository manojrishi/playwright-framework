# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: masters-full.spec.ts >> Masters — HCP >> TC-HCP-004: HCP form blocks submission when HCP Name is blank
- Location: tests/masters-full.spec.ts:417:7

# Error details

```
TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
  - waiting for locator('button[type="submit"]:has-text("Add"), button:has-text("Add")').first()
    - locator resolved to <button class="w-full flex items-center justify-between py-3 text-left transition-colors hover:bg-gray-50 disabled:cursor-default py-2 px-3">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="flex-1 overflow-x-auto overflow-y-auto border-t border-[#e9eaeb] bg-white relative">…</div> from <div class="flex flex-col flex-1 min-w-0 transition-all duration-300 ease-in-out">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="bg-white border-r border-gray-200 flex-shrink-0 transition-all duration-300 ease-in-out w-0 overflow-hidden">…</div> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <td data-column-id="hcp_my_internal_id" class="text-sm text-gray-900 px-3 py-3 h-[64px] min-h-[64px] overflow-hidden border-r border-gray-200 last:border-r-0">…</td> from <div class="flex flex-col flex-1 min-w-0 transition-all duration-300 ease-in-out">…</div> subtree intercepts pointer events
  9 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <a href="/app/task" class="menu-item" data-discover="true">…</a> from <nav class="navbar wide-sidebar ">…</nav> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="bg-white border-r border-gray-200 flex-shrink-0 transition-all duration-300 ease-in-out w-0 overflow-hidden">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <td data-column-id="hcp_my_internal_id" class="text-sm text-gray-900 px-3 py-3 h-[64px] min-h-[64px] overflow-hidden border-r border-gray-200 last:border-r-0">…</td> from <div class="flex flex-col flex-1 min-w-0 transition-all duration-300 ease-in-out">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <td data-column-id="hcp_my_internal_id" class="text-sm text-gray-900 px-3 py-3 h-[64px] min-h-[64px] overflow-hidden border-r border-gray-200 last:border-r-0">…</td> from <div class="flex flex-col flex-1 min-w-0 transition-all duration-300 ease-in-out">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <a href="/app/task" class="menu-item" data-discover="true">…</a> from <nav class="navbar wide-sidebar ">…</nav> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

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
        - generic [ref=e282]:
          - heading "HCPs (150)" [level=1] [ref=e283]:
            - generic [ref=e284]: HCPs
            - generic [ref=e285]: (150)
          - button "Add New HCP" [ref=e287] [cursor=pointer]
        - generic [ref=e288]:
          - generic [ref=e291]:
            - heading "Filters" [level=3] [ref=e294]
            - generic [ref=e296]:
              - generic [ref=e297]:
                - button "HCP ID" [ref=e298] [cursor=pointer]:
                  - generic [ref=e301]: HCP ID
                  - img [ref=e304]
                - generic [ref=e309]:
                  - generic:
                    - img
                  - textbox "Search hcp id" [ref=e310]
              - generic [ref=e311]:
                - button "HCP Internal ID" [ref=e312] [cursor=pointer]:
                  - generic [ref=e315]: HCP Internal ID
                  - img [ref=e318]
                - generic [ref=e323]:
                  - generic:
                    - img
                  - textbox "Search hcp internal id" [ref=e324]
              - generic [ref=e325]:
                - button "HCP Name" [ref=e326] [cursor=pointer]:
                  - generic [ref=e329]: HCP Name
                  - img [ref=e332]
                - generic [ref=e337]:
                  - generic:
                    - img
                  - textbox "Search hcp name" [ref=e338]
              - generic [ref=e339]:
                - button "Hospitals" [ref=e340] [cursor=pointer]:
                  - generic [ref=e343]: Hospitals
                  - img [ref=e346]
                - generic [ref=e351]:
                  - generic:
                    - img
                  - textbox "Search hospitals" [ref=e352]
              - generic [ref=e353]:
                - button "Speciality" [ref=e354] [cursor=pointer]:
                  - generic [ref=e357]: Speciality
                  - img [ref=e360]
                - generic [ref=e365]:
                  - generic:
                    - img
                  - textbox "Search speciality" [ref=e366]
              - generic [ref=e367]:
                - button "Contact Number" [ref=e368] [cursor=pointer]:
                  - generic [ref=e371]: Contact Number
                  - img [ref=e374]
                - generic [ref=e379]:
                  - generic:
                    - img
                  - textbox "Search contact number" [ref=e380]
              - generic [ref=e381]:
                - button "Email Address" [ref=e382] [cursor=pointer]:
                  - generic [ref=e385]: Email Address
                  - img [ref=e388]
                - generic [ref=e393]:
                  - generic:
                    - img
                  - textbox "Search email address" [ref=e394]
              - generic [ref=e395]:
                - button "Notes" [ref=e396] [cursor=pointer]:
                  - generic [ref=e399]: Notes
                  - img [ref=e402]
                - generic [ref=e407]:
                  - generic:
                    - img
                  - textbox "Search notes" [ref=e408]
              - generic [ref=e409]:
                - button "Enrolment Status" [ref=e410] [cursor=pointer]:
                  - generic [ref=e413]: Enrolment Status
                  - img [ref=e416]
                - generic [ref=e422]:
                  - log [ref=e424]
                  - generic [ref=e425]:
                    - generic [ref=e426]:
                      - generic [ref=e427]: Select Enrolment Status
                      - combobox [ref=e429]
                    - img [ref=e432]
              - generic [ref=e434]:
                - button "HCP Enrolment Date" [ref=e435] [cursor=pointer]:
                  - generic [ref=e438]: HCP Enrolment Date
                  - img [ref=e441]
                - generic [ref=e449]:
                  - generic [ref=e450]:
                    - textbox "From" [ref=e451]
                    - paragraph [ref=e452]: Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                  - generic [ref=e453]: "-"
                  - generic [ref=e454]:
                    - textbox "To" [ref=e455]
                    - paragraph [ref=e456]: Navigate backward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                  - button "Interact with the calendar and add the check-in date for your trip." [ref=e457] [cursor=pointer]:
                    - img [ref=e458]
              - generic [ref=e460]:
                - button "Discontinuation Reason" [ref=e461] [cursor=pointer]:
                  - generic [ref=e464]: Discontinuation Reason
                  - img [ref=e467]
                - generic [ref=e472]:
                  - generic:
                    - img
                  - textbox "Search discontinuation reason" [ref=e473]
              - generic [ref=e474]:
                - button "Discontinuation Date" [ref=e475] [cursor=pointer]:
                  - generic [ref=e478]: Discontinuation Date
                  - img [ref=e481]
                - generic [ref=e489]:
                  - generic [ref=e490]:
                    - textbox "From" [ref=e491]
                    - paragraph [ref=e492]: Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                  - generic [ref=e493]: "-"
                  - generic [ref=e494]:
                    - textbox "To" [ref=e495]
                    - paragraph [ref=e496]: Navigate backward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                  - button "Interact with the calendar and add the check-in date for your trip." [ref=e497] [cursor=pointer]:
                    - img [ref=e498]
          - generic [ref=e500]:
            - generic [ref=e502]:
              - button "Filters" [ref=e504] [cursor=pointer]:
                - img [ref=e505]
                - text: Filters
              - generic [ref=e509]:
                - generic [ref=e512]:
                  - generic:
                    - img
                  - textbox "Search..." [ref=e513]
                - button "Download" [ref=e514] [cursor=pointer]:
                  - img [ref=e515]
                - generic [ref=e520]:
                  - button "View" [ref=e522] [cursor=pointer]:
                    - img [ref=e523]
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
            - table [ref=e528]:
              - rowgroup [ref=e529]:
                - row "HCP ID HCP Internal ID HCP Name Hospitals Speciality Contact Number Email Address Notes Enrolment Status HCP Enrolment Date Discontinuation Reason Discontinuation Date" [ref=e530]:
                  - columnheader "HCP ID" [ref=e531]:
                    - button "HCP ID" [ref=e532] [cursor=pointer]:
                      - text: HCP ID
                      - img [ref=e534]
                  - columnheader "HCP Internal ID" [ref=e537]:
                    - button "HCP Internal ID" [ref=e538] [cursor=pointer]:
                      - text: HCP Internal ID
                      - img [ref=e540]
                  - columnheader "HCP Name" [ref=e543]:
                    - button "HCP Name" [ref=e544] [cursor=pointer]:
                      - text: HCP Name
                      - img [ref=e546]
                  - columnheader "Hospitals" [ref=e549]
                  - columnheader "Speciality" [ref=e550]:
                    - button "Speciality" [ref=e551] [cursor=pointer]:
                      - text: Speciality
                      - img [ref=e553]
                  - columnheader "Contact Number" [ref=e556]
                  - columnheader "Email Address" [ref=e557]:
                    - button "Email Address" [ref=e558] [cursor=pointer]:
                      - text: Email Address
                      - img [ref=e560]
                  - columnheader "Notes" [ref=e563]:
                    - button "Notes" [ref=e564] [cursor=pointer]:
                      - text: Notes
                      - img [ref=e566]
                  - columnheader "Enrolment Status" [ref=e569]:
                    - button "Enrolment Status" [ref=e570] [cursor=pointer]:
                      - text: Enrolment Status
                      - img [ref=e572]
                  - columnheader "HCP Enrolment Date" [ref=e575]
                  - columnheader "Discontinuation Reason" [ref=e576]
                  - columnheader "Discontinuation Date" [ref=e577]:
                    - button "Discontinuation Date" [ref=e578] [cursor=pointer]:
                      - text: Discontinuation Date
                      - img [ref=e580]
              - rowgroup [ref=e583]:
                - row "10154 NA AutoHCP_09A6F0 AutoHospital_09A6F0 Dermatology +60330824070 autohcp_09a6f0@test.com NA Enrolled 07 April 2026 06:16 PM NA NA" [ref=e584] [cursor=pointer]:
                  - cell "10154" [ref=e585]:
                    - generic [ref=e587]: "10154"
                  - cell "NA" [ref=e588]:
                    - generic [ref=e590]: NA
                  - cell "AutoHCP_09A6F0" [ref=e591]:
                    - generic [ref=e593]: AutoHCP_09A6F0
                  - cell "AutoHospital_09A6F0" [ref=e594]:
                    - generic [ref=e596]: AutoHospital_09A6F0
                  - cell "Dermatology" [ref=e597]:
                    - generic [ref=e599]: Dermatology
                  - cell "+60330824070" [ref=e600]:
                    - generic [ref=e602]: "+60330824070"
                  - cell "autohcp_09a6f0@test.com" [ref=e603]:
                    - generic [ref=e605]: autohcp_09a6f0@test.com
                  - cell "NA" [ref=e606]:
                    - generic [ref=e608]: NA
                  - cell "Enrolled" [ref=e609]:
                    - generic [ref=e613]: Enrolled
                  - cell "07 April 2026 06:16 PM" [ref=e614]:
                    - generic [ref=e616]: 07 April 2026 06:16 PM
                  - cell "NA" [ref=e617]:
                    - generic [ref=e619]: NA
                  - cell "NA" [ref=e620]:
                    - generic [ref=e622]: NA
                - row "10153 NA AutoHCP_4AF70B AutoHospital_4AF70B Dermatology +60352880677 autohcp_4af70b@test.com NA Enrolled 07 April 2026 03:56 PM NA NA" [ref=e623] [cursor=pointer]:
                  - cell "10153" [ref=e624]:
                    - generic [ref=e626]: "10153"
                  - cell "NA" [ref=e627]:
                    - generic [ref=e629]: NA
                  - cell "AutoHCP_4AF70B" [ref=e630]:
                    - generic [ref=e632]: AutoHCP_4AF70B
                  - cell "AutoHospital_4AF70B" [ref=e633]:
                    - generic [ref=e635]: AutoHospital_4AF70B
                  - cell "Dermatology" [ref=e636]:
                    - generic [ref=e638]: Dermatology
                  - cell "+60352880677" [ref=e639]:
                    - generic [ref=e641]: "+60352880677"
                  - cell "autohcp_4af70b@test.com" [ref=e642]:
                    - generic [ref=e644]: autohcp_4af70b@test.com
                  - cell "NA" [ref=e645]:
                    - generic [ref=e647]: NA
                  - cell "Enrolled" [ref=e648]:
                    - generic [ref=e652]: Enrolled
                  - cell "07 April 2026 03:56 PM" [ref=e653]:
                    - generic [ref=e655]: 07 April 2026 03:56 PM
                  - cell "NA" [ref=e656]:
                    - generic [ref=e658]: NA
                  - cell "NA" [ref=e659]:
                    - generic [ref=e661]: NA
                - row "10152 NA AutoHCP_1AD198 AutoHospital_1AD198 Dermatology +6085796280 autohcp_1ad198@test.com NA Enrolled 07 April 2026 01:17 PM NA NA" [ref=e662] [cursor=pointer]:
                  - cell "10152" [ref=e663]:
                    - generic [ref=e665]: "10152"
                  - cell "NA" [ref=e666]:
                    - generic [ref=e668]: NA
                  - cell "AutoHCP_1AD198" [ref=e669]:
                    - generic [ref=e671]: AutoHCP_1AD198
                  - cell "AutoHospital_1AD198" [ref=e672]:
                    - generic [ref=e674]: AutoHospital_1AD198
                  - cell "Dermatology" [ref=e675]:
                    - generic [ref=e677]: Dermatology
                  - cell "+6085796280" [ref=e678]:
                    - generic [ref=e680]: "+6085796280"
                  - cell "autohcp_1ad198@test.com" [ref=e681]:
                    - generic [ref=e683]: autohcp_1ad198@test.com
                  - cell "NA" [ref=e684]:
                    - generic [ref=e686]: NA
                  - cell "Enrolled" [ref=e687]:
                    - generic [ref=e691]: Enrolled
                  - cell "07 April 2026 01:17 PM" [ref=e692]:
                    - generic [ref=e694]: 07 April 2026 01:17 PM
                  - cell "NA" [ref=e695]:
                    - generic [ref=e697]: NA
                  - cell "NA" [ref=e698]:
                    - generic [ref=e700]: NA
                - row "10150 HCP250146 LOH YOON DOONG Hospital Kuala Lumpur Dermatology +60163323187 yoondoong@moh.gov.my Enrolled 19 February 2026 05:30 AM NA NA" [ref=e701] [cursor=pointer]:
                  - cell "10150" [ref=e702]:
                    - generic [ref=e704]: "10150"
                  - cell "HCP250146" [ref=e705]:
                    - generic [ref=e707]: HCP250146
                  - cell "LOH YOON DOONG" [ref=e708]:
                    - generic [ref=e710]: LOH YOON DOONG
                  - cell "Hospital Kuala Lumpur" [ref=e711]:
                    - generic [ref=e713]: Hospital Kuala Lumpur
                  - cell "Dermatology" [ref=e714]:
                    - generic [ref=e716]: Dermatology
                  - cell "+60163323187" [ref=e717]:
                    - generic [ref=e719]: "+60163323187"
                  - cell "yoondoong@moh.gov.my" [ref=e720]:
                    - generic [ref=e722]: yoondoong@moh.gov.my
                  - cell [ref=e723]
                  - cell "Enrolled" [ref=e724]:
                    - generic [ref=e728]: Enrolled
                  - cell "19 February 2026 05:30 AM" [ref=e729]:
                    - generic [ref=e731]: 19 February 2026 05:30 AM
                  - cell "NA" [ref=e732]:
                    - generic [ref=e734]: NA
                  - cell "NA" [ref=e735]:
                    - generic [ref=e737]: NA
                - row "10149 HCP250145 CHIA YUEN KANG Hospital Queen Elizabeth Neurology +60162179601 cyk1118@gmail.com Enrolled 19 February 2026 05:30 AM NA NA" [ref=e738] [cursor=pointer]:
                  - cell "10149" [ref=e739]:
                    - generic [ref=e741]: "10149"
                  - cell "HCP250145" [ref=e742]:
                    - generic [ref=e744]: HCP250145
                  - cell "CHIA YUEN KANG" [ref=e745]:
                    - generic [ref=e747]: CHIA YUEN KANG
                  - cell "Hospital Queen Elizabeth" [ref=e748]:
                    - generic [ref=e750]: Hospital Queen Elizabeth
                  - cell "Neurology" [ref=e751]:
                    - generic [ref=e753]: Neurology
                  - cell "+60162179601" [ref=e754]:
                    - generic [ref=e756]: "+60162179601"
                  - cell "cyk1118@gmail.com" [ref=e757]:
                    - generic [ref=e759]: cyk1118@gmail.com
                  - cell [ref=e760]
                  - cell "Enrolled" [ref=e761]:
                    - generic [ref=e765]: Enrolled
                  - cell "19 February 2026 05:30 AM" [ref=e766]:
                    - generic [ref=e768]: 19 February 2026 05:30 AM
                  - cell "NA" [ref=e769]:
                    - generic [ref=e771]: NA
                  - cell "NA" [ref=e772]:
                    - generic [ref=e774]: NA
                - row "10148 HCP250144 THUBASHINI MARIMUTU Hospital Selayang Internal Medicine +60146386762 Thubashinimarimutu@yahoo.com Enrolled 10 February 2026 05:30 AM NA NA" [ref=e775] [cursor=pointer]:
                  - cell "10148" [ref=e776]:
                    - generic [ref=e778]: "10148"
                  - cell "HCP250144" [ref=e779]:
                    - generic [ref=e781]: HCP250144
                  - cell "THUBASHINI MARIMUTU" [ref=e782]:
                    - generic [ref=e784]: THUBASHINI MARIMUTU
                  - cell "Hospital Selayang" [ref=e785]:
                    - generic [ref=e787]: Hospital Selayang
                  - cell "Internal Medicine" [ref=e788]:
                    - generic [ref=e790]: Internal Medicine
                  - cell "+60146386762" [ref=e791]:
                    - generic [ref=e793]: "+60146386762"
                  - cell "Thubashinimarimutu@yahoo.com" [ref=e794]:
                    - generic [ref=e796]: Thubashinimarimutu@yahoo.com
                  - cell [ref=e797]
                  - cell "Enrolled" [ref=e798]:
                    - generic [ref=e802]: Enrolled
                  - cell "10 February 2026 05:30 AM" [ref=e803]:
                    - generic [ref=e805]: 10 February 2026 05:30 AM
                  - cell "NA" [ref=e806]:
                    - generic [ref=e808]: NA
                  - cell "NA" [ref=e809]:
                    - generic [ref=e811]: NA
                - row "10147 HCP250143 SUBASH A/L MURALI DHARAN Hospital Sultan Aminah Dermatologist +60167770734 subash_praba88@yahoo.com Enrolled 09 February 2026 05:30 AM NA NA" [ref=e812] [cursor=pointer]:
                  - cell "10147" [ref=e813]:
                    - generic [ref=e815]: "10147"
                  - cell "HCP250143" [ref=e816]:
                    - generic [ref=e818]: HCP250143
                  - cell "SUBASH A/L MURALI DHARAN" [ref=e819]:
                    - generic [ref=e821]: SUBASH A/L MURALI DHARAN
                  - cell "Hospital Sultan Aminah" [ref=e822]:
                    - generic [ref=e824]: Hospital Sultan Aminah
                  - cell "Dermatologist" [ref=e825]:
                    - generic [ref=e827]: Dermatologist
                  - cell "+60167770734" [ref=e828]:
                    - generic [ref=e830]: "+60167770734"
                  - cell "subash_praba88@yahoo.com" [ref=e831]:
                    - generic [ref=e833]: subash_praba88@yahoo.com
                  - cell [ref=e834]
                  - cell "Enrolled" [ref=e835]:
                    - generic [ref=e839]: Enrolled
                  - cell "09 February 2026 05:30 AM" [ref=e840]:
                    - generic [ref=e842]: 09 February 2026 05:30 AM
                  - cell "NA" [ref=e843]:
                    - generic [ref=e845]: NA
                  - cell "NA" [ref=e846]:
                    - generic [ref=e848]: NA
                - row "10146 HCP250142 TAY LI LIAN Hospital Serdang Dermatology +60173300605 lilian5686@hotmail.com Enrolled 05 February 2026 05:30 AM NA NA" [ref=e849] [cursor=pointer]:
                  - cell "10146" [ref=e850]:
                    - generic [ref=e852]: "10146"
                  - cell "HCP250142" [ref=e853]:
                    - generic [ref=e855]: HCP250142
                  - cell "TAY LI LIAN" [ref=e856]:
                    - generic [ref=e858]: TAY LI LIAN
                  - cell "Hospital Serdang" [ref=e859]:
                    - generic [ref=e861]: Hospital Serdang
                  - cell "Dermatology" [ref=e862]:
                    - generic [ref=e864]: Dermatology
                  - cell "+60173300605" [ref=e865]:
                    - generic [ref=e867]: "+60173300605"
                  - cell "lilian5686@hotmail.com" [ref=e868]:
                    - generic [ref=e870]: lilian5686@hotmail.com
                  - cell [ref=e871]
                  - cell "Enrolled" [ref=e872]:
                    - generic [ref=e876]: Enrolled
                  - cell "05 February 2026 05:30 AM" [ref=e877]:
                    - generic [ref=e879]: 05 February 2026 05:30 AM
                  - cell "NA" [ref=e880]:
                    - generic [ref=e882]: NA
                  - cell "NA" [ref=e883]:
                    - generic [ref=e885]: NA
                - row "10145 HCP250141 NURUL ATIQAH Hospital Serdang Internal Medicine +60133215166 atisouless@gmail.com Enrolled 05 February 2026 05:30 AM NA NA" [ref=e886] [cursor=pointer]:
                  - cell "10145" [ref=e887]:
                    - generic [ref=e889]: "10145"
                  - cell "HCP250141" [ref=e890]:
                    - generic [ref=e892]: HCP250141
                  - cell "NURUL ATIQAH" [ref=e893]:
                    - generic [ref=e895]: NURUL ATIQAH
                  - cell "Hospital Serdang" [ref=e896]:
                    - generic [ref=e898]: Hospital Serdang
                  - cell "Internal Medicine" [ref=e899]:
                    - generic [ref=e901]: Internal Medicine
                  - cell "+60133215166" [ref=e902]:
                    - generic [ref=e904]: "+60133215166"
                  - cell "atisouless@gmail.com" [ref=e905]:
                    - generic [ref=e907]: atisouless@gmail.com
                  - cell [ref=e908]
                  - cell "Enrolled" [ref=e909]:
                    - generic [ref=e913]: Enrolled
                  - cell "05 February 2026 05:30 AM" [ref=e914]:
                    - generic [ref=e916]: 05 February 2026 05:30 AM
                  - cell "NA" [ref=e917]:
                    - generic [ref=e919]: NA
                  - cell "NA" [ref=e920]:
                    - generic [ref=e922]: NA
                - row "10144 HCP250140 SITI KHAIRANI BT ZAINAL ABIDIN HTAA Cardiology +60199822502 Tirani5393@gmail.com Enrolled 05 February 2026 05:30 AM NA NA" [ref=e923] [cursor=pointer]:
                  - cell "10144" [ref=e924]:
                    - generic [ref=e926]: "10144"
                  - cell "HCP250140" [ref=e927]:
                    - generic [ref=e929]: HCP250140
                  - cell "SITI KHAIRANI BT ZAINAL ABIDIN" [ref=e930]:
                    - generic [ref=e932]: SITI KHAIRANI BT ZAINAL ABIDIN
                  - cell "HTAA" [ref=e933]:
                    - generic [ref=e935]: HTAA
                  - cell "Cardiology" [ref=e936]:
                    - generic [ref=e938]: Cardiology
                  - cell "+60199822502" [ref=e939]:
                    - generic [ref=e941]: "+60199822502"
                  - cell "Tirani5393@gmail.com" [ref=e942]:
                    - generic [ref=e944]: Tirani5393@gmail.com
                  - cell [ref=e945]
                  - cell "Enrolled" [ref=e946]:
                    - generic [ref=e950]: Enrolled
                  - cell "05 February 2026 05:30 AM" [ref=e951]:
                    - generic [ref=e953]: 05 February 2026 05:30 AM
                  - cell "NA" [ref=e954]:
                    - generic [ref=e956]: NA
                  - cell "NA" [ref=e957]:
                    - generic [ref=e959]: NA
            - generic [ref=e960]:
              - generic [ref=e962]:
                - generic [ref=e963]: "Rows per page:"
                - generic [ref=e965]:
                  - log [ref=e967]
                  - generic [ref=e968]:
                    - generic [ref=e969]:
                      - generic [ref=e970]: "10"
                      - 'combobox "Rows per page: 10" [ref=e972]'
                    - img [ref=e975]
              - generic [ref=e978]:
                - button "Previous" [disabled] [ref=e979]:
                  - img [ref=e980]
                  - generic [ref=e982]: Previous
                - generic [ref=e983]:
                  - button "1" [ref=e984] [cursor=pointer]
                  - button "2" [ref=e985] [cursor=pointer]
                  - button "3" [ref=e986] [cursor=pointer]
                  - button "4" [ref=e987] [cursor=pointer]
                  - button "5" [ref=e988] [cursor=pointer]
                  - generic [ref=e989]: ...
                  - button "15" [ref=e990] [cursor=pointer]
                - button "Next" [ref=e991] [cursor=pointer]:
                  - generic [ref=e992]: Next
                  - img [ref=e993]
  - region "Notifications alt+T"
```

# Test source

```ts
  80  |         await this.page.waitForTimeout(1000);
  81  |         return;
  82  |       }
  83  |     }
  84  |   }
  85  | 
  86  |   async fillAndSubmitForm(fields: Record<string, string>) {
  87  |     for (const [label, value] of Object.entries(fields)) {
  88  |       console.log(`Filling field: ${label} = ${value}`);
  89  |       try {
  90  |         await this.fillInputByLabelOrPlaceholder(label, value);
  91  |       } catch (e) {
  92  |         console.warn(`Could not fill field "${label}": ${e}`);
  93  |       }
  94  |     }
  95  |   }
  96  | 
  97  |   async fillInputByLabelOrPlaceholder(
  98  |     labelOrPlaceholder: string,
  99  |     value: string
  100 |   ) {
  101 |     // 1. Try getByPlaceholder (most reliable for these forms)
  102 |     try {
  103 |       const input = this.page.getByPlaceholder(labelOrPlaceholder, {
  104 |         exact: false,
  105 |       });
  106 |       if (await input.first().isVisible({ timeout: 3000 })) {
  107 |         await input.first().clear();
  108 |         await input.first().fill(value);
  109 |         return;
  110 |       }
  111 |     } catch {}
  112 | 
  113 |     // 2. Try getByLabel
  114 |     try {
  115 |       const input = this.page.getByLabel(labelOrPlaceholder, { exact: false });
  116 |       if (await input.first().isVisible({ timeout: 3000 })) {
  117 |         await input.first().clear();
  118 |         await input.first().fill(value);
  119 |         return;
  120 |       }
  121 |     } catch {}
  122 | 
  123 |     // 3. Try label text → sibling input (inside modal)
  124 |     try {
  125 |       const label = this.page
  126 |         .locator(`label`)
  127 |         .filter({ hasText: new RegExp(labelOrPlaceholder, "i") })
  128 |         .first();
  129 |       if (await label.isVisible({ timeout: 2000 })) {
  130 |         const input = label
  131 |           .locator("~ input, ~ textarea, + input, + textarea")
  132 |           .first();
  133 |         if (await input.isVisible({ timeout: 2000 })) {
  134 |           await input.clear();
  135 |           await input.fill(value);
  136 |           return;
  137 |         }
  138 |       }
  139 |     } catch {}
  140 |   }
  141 | 
  142 |   async searchAndSelectFromDropdown(searchText: string) {
  143 |     console.log(`Searching and selecting: ${searchText}`);
  144 |     // Type in search field
  145 |     const searchInputs = this.page.locator(
  146 |       'input[placeholder*="search" i], input[placeholder*="Search" i], input[placeholder*="type" i], [class*="search"] input'
  147 |     );
  148 | 
  149 |     const count = await searchInputs.count();
  150 |     if (count > 0) {
  151 |       await searchInputs.last().fill(searchText);
  152 |       await this.page.waitForTimeout(1000);
  153 |     }
  154 | 
  155 |     // Select option from dropdown
  156 |     const option = this.page.locator(
  157 |       `[class*="option"]:has-text("${searchText}"),
  158 |        [role="option"]:has-text("${searchText}"),
  159 |        li:has-text("${searchText}"),
  160 |        [class*="dropdown"] div:has-text("${searchText}"),
  161 |        [class*="menu"] div:has-text("${searchText}")`
  162 |     );
  163 | 
  164 |     await option.first().waitFor({ state: "visible", timeout: 10000 });
  165 |     await option.first().click();
  166 |   }
  167 | 
  168 |   async submitForm() {
  169 |     const submitBtns = ["Submit", "Save", "Create", "Add", "Save & Continue"];
  170 |     for (const text of submitBtns) {
  171 |       const btn = this.page.locator(
  172 |         `button[type="submit"]:has-text("${text}"), button:has-text("${text}")`
  173 |       );
  174 |       if (
  175 |         await btn
  176 |           .first()
  177 |           .isVisible({ timeout: 2000 })
  178 |           .catch(() => false)
  179 |       ) {
> 180 |         await btn.first().click();
      |                           ^ TimeoutError: locator.click: Timeout 20000ms exceeded.
  181 |         await this.page.waitForLoadState("domcontentloaded");
  182 |         await this.page.waitForTimeout(2000);
  183 |         return;
  184 |       }
  185 |     }
  186 | 
  187 |     // Try generic submit
  188 |     const submitBtn = this.page.locator('button[type="submit"]');
  189 |     if (
  190 |       await submitBtn
  191 |         .first()
  192 |         .isVisible({ timeout: 2000 })
  193 |         .catch(() => false)
  194 |     ) {
  195 |       await submitBtn.first().click();
  196 |       await this.page.waitForLoadState("domcontentloaded");
  197 |       await this.page.waitForTimeout(2000);
  198 |     }
  199 |   }
  200 | 
  201 |   async selectFollowUpTimeline(value: string) {
  202 |     console.log(`Selecting follow-up timeline: ${value}`);
  203 |     // Look for timeline/frequency dropdowns
  204 |     const timelineLabels = ["follow up", "followup", "timeline", "frequency"];
  205 |     for (const label of timelineLabels) {
  206 |       const dropdown = this.page.locator(
  207 |         `label:has-text("${label}") ~ * select,
  208 |          label:has-text("${label}") ~ * [class*="select"],
  209 |          [placeholder*="${label}" i]`
  210 |       );
  211 |       if (
  212 |         await dropdown
  213 |           .first()
  214 |           .isVisible({ timeout: 2000 })
  215 |           .catch(() => false)
  216 |       ) {
  217 |         await dropdown.first().click();
  218 |         break;
  219 |       }
  220 |     }
  221 | 
  222 |     // Select the option
  223 |     const option = this.page.locator(
  224 |       `option:has-text("${value}"),
  225 |        [role="option"]:has-text("${value}"),
  226 |        [class*="option"]:has-text("${value}"),
  227 |        li:has-text("${value}")`
  228 |     );
  229 | 
  230 |     if (
  231 |       await option
  232 |         .first()
  233 |         .isVisible({ timeout: 5000 })
  234 |         .catch(() => false)
  235 |     ) {
  236 |       await option.first().click();
  237 |     } else {
  238 |       // Try native select
  239 |       const select = this.page.locator("select");
  240 |       const count = await select.count();
  241 |       for (let i = 0; i < count; i++) {
  242 |         try {
  243 |           await select.nth(i).selectOption({ label: value });
  244 |           break;
  245 |         } catch {}
  246 |       }
  247 |     }
  248 |   }
  249 | }
  250 | 
```