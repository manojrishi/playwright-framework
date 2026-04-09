# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: masters-full.spec.ts >> Masters — HCP >> TC-HCP-017: Cancel button closes HCP form without saving
- Location: tests/masters-full.spec.ts:629:7

# Error details

```
Error: locator.click: Element is outside of the viewport
Call log:
  - waiting for locator('button:has-text("Cancel"), button:has-text("Close"), [class*="close"]').first()
    - locator resolved to <button class="profile-close-btn">…</button>
  - attempting click action
    - scrolling into view if needed
    - done scrolling

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
  537 |       await page.waitForTimeout(1000);
  538 |       const opts = await page.locator('[class*="option"], [role="option"]').count();
  539 |       await page.keyboard.press('Escape').catch(() => {});
  540 |       saveResult('TC-HCP-011', opts > 0 ? 'pass' : 'fail',
  541 |         opts > 0 ? `Speciality dropdown shows ${opts} option(s)` : 'Speciality dropdown opened but no options');
  542 |     } else {
  543 |       await page.keyboard.press('Escape').catch(() => {});
  544 |       saveResult('TC-HCP-011', 'pending', 'Could not identify Speciality dropdown — fewer than 2 dropdowns in form');
  545 |     }
  546 |   });
  547 | 
  548 |   test('TC-HCP-012: Selecting Dermatology in Speciality dropdown retains the selection', async ({ page }) => {
  549 |     const mp = new MastersPage(page);
  550 |     await navToSection(mp, 'HCP');
  551 |     await openForm(mp);
  552 |     const modal = page.locator(MODAL).last();
  553 |     const selected = await reactSelect(page, modal, 'Speciality', 'Dermatology');
  554 |     await page.keyboard.press('Escape').catch(() => {});
  555 |     saveResult('TC-HCP-012', selected ? 'pass' : 'fail',
  556 |       selected ? 'Dermatology selected and retained in Speciality field' : 'Could not select Dermatology from Speciality dropdown');
  557 |   });
  558 | 
  559 |   test('TC-HCP-013: Typing in Speciality dropdown filters options', async ({ page }) => {
  560 |     const mp = new MastersPage(page);
  561 |     await navToSection(mp, 'HCP');
  562 |     await openForm(mp);
  563 |     const modal = page.locator(MODAL).last();
  564 |     const found = await reactSelect(page, modal, 'Speciality', 'Derm');
  565 |     await page.keyboard.press('Escape').catch(() => {});
  566 |     saveResult('TC-HCP-013', found ? 'pass' : 'fail',
  567 |       found ? 'Typing "Derm" filtered Speciality dropdown results' : 'Speciality dropdown filter did not respond to typed input');
  568 |   });
  569 | 
  570 |   test('TC-HCP-014: Submitting blank HCP form blocks submission', async ({ page }) => {
  571 |     const mp = new MastersPage(page);
  572 |     await navToSection(mp, 'HCP');
  573 |     await openForm(mp);
  574 |     const modal = page.locator(MODAL).last();
  575 |     await mp.submitForm();
  576 |     await page.waitForTimeout(2000);
  577 |     const open = await modal.isVisible({ timeout: 3000 }).catch(() => false);
  578 |     saveResult('TC-HCP-014', open ? 'pass' : 'fail',
  579 |       open ? 'Blank HCP form blocked submission' : 'Blank HCP form submitted without validation');
  580 |     expect(open).toBeTruthy();
  581 |   });
  582 | 
  583 |   test('TC-HCP-015: HCP list shows correct data for created HCP', async ({ page }) => {
  584 |     const data = loadCreatedData();
  585 |     const name = data.hcp?.name;
  586 |     if (!name) { saveResult('TC-HCP-015', 'pending', 'No HCP data in created-data.json'); return; }
  587 |     const mp = new MastersPage(page);
  588 |     await navToSection(mp, 'HCP');
  589 |     await page.waitForTimeout(2000);
  590 |     const text = await page.evaluate(() => document.body.innerText);
  591 |     saveResult('TC-HCP-015', text.includes(name) ? 'pass' : 'fail',
  592 |       text.includes(name) ? 'HCP visible with correct data in list' : `"${name}" not found in HCP list — may be on different page`);
  593 |   });
  594 | 
  595 |   test('TC-HCP-016: Editing an existing HCP record saves the updated name', async ({ page }) => {
  596 |     const data = loadCreatedData();
  597 |     const name = data.hcp?.name;
  598 |     if (!name) { saveResult('TC-HCP-016', 'pending', 'No HCP data in created-data.json'); return; }
  599 |     const mp = new MastersPage(page);
  600 |     await navToSection(mp, 'HCP');
  601 |     await page.waitForTimeout(2000);
  602 |     const row = page.locator(`tr:has-text("${name}"), [class*="row"]:has-text("${name}")`).first();
  603 |     if (!(await row.isVisible({ timeout: 5000 }).catch(() => false))) {
  604 |       saveResult('TC-HCP-016', 'pending', `HCP row for "${name}" not visible in current list view`);
  605 |       return;
  606 |     }
  607 |     const editBtn = row.locator('button, a, [class*="edit"]').first();
  608 |     if (!(await editBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
  609 |       saveResult('TC-HCP-016', 'pending', 'Edit button not found in HCP row');
  610 |       return;
  611 |     }
  612 |     await editBtn.click({ force: true });
  613 |     await page.waitForTimeout(1500);
  614 |     const modal = page.locator(MODAL).last();
  615 |     if (!(await modal.isVisible({ timeout: 5000 }).catch(() => false))) {
  616 |       saveResult('TC-HCP-016', 'pending', 'Edit modal did not open');
  617 |       return;
  618 |     }
  619 |     const field = modal.getByPlaceholder('HCP Name');
  620 |     await field.clear().catch(() => {});
  621 |     await field.fill(`${name}_Edited`).catch(() => {});
  622 |     await mp.submitForm();
  623 |     await page.waitForTimeout(2000);
  624 |     const closed = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  625 |     saveResult('TC-HCP-016', closed ? 'pass' : 'fail',
  626 |       closed ? 'HCP edit saved successfully' : 'Edit form did not close after saving');
  627 |   });
  628 | 
  629 |   test('TC-HCP-017: Cancel button closes HCP form without saving', async ({ page }) => {
  630 |     const mp = new MastersPage(page);
  631 |     await navToSection(mp, 'HCP');
  632 |     await openForm(mp);
  633 |     const modal = page.locator(MODAL).last();
  634 |     await modal.getByPlaceholder('HCP Name').fill('ShouldNotSaveHCP').catch(() => {});
  635 |     const cancel = page.locator('button:has-text("Cancel"), button:has-text("Close"), [class*="close"]').first();
  636 |     if (await cancel.isVisible({ timeout: 3000 }).catch(() => false)) {
> 637 |       await cancel.click({ force: true });
      |                    ^ Error: locator.click: Element is outside of the viewport
  638 |     } else {
  639 |       await page.keyboard.press('Escape');
  640 |     }
  641 |     await page.waitForTimeout(1000);
  642 |     const gone = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  643 |     saveResult('TC-HCP-017', gone ? 'pass' : 'fail',
  644 |       gone ? 'HCP form closed on Cancel without saving' : 'HCP form still visible after Cancel');
  645 |   });
  646 | 
  647 |   test('TC-HCP-018: Searching by HCP name returns matching records', async ({ page }) => {
  648 |     const data = loadCreatedData();
  649 |     const name = data.hcp?.name;
  650 |     if (!name) { saveResult('TC-HCP-018', 'pending', 'No HCP data in created-data.json'); return; }
  651 |     const mp = new MastersPage(page);
  652 |     await navToSection(mp, 'HCP');
  653 |     await page.waitForTimeout(2000);
  654 |     const search = page.locator('input[placeholder*="search" i], input[type="search"]').first();
  655 |     if (!(await search.isVisible({ timeout: 3000 }).catch(() => false))) {
  656 |       saveResult('TC-HCP-018', 'pending', 'Search input not found on HCP list');
  657 |       return;
  658 |     }
  659 |     await search.fill(name);
  660 |     await page.waitForTimeout(2000);
  661 |     const text = await page.evaluate(() => document.body.innerText);
  662 |     saveResult('TC-HCP-018', text.includes(name) ? 'pass' : 'fail',
  663 |       text.includes(name) ? `Search returned "${name}"` : `Search did not return "${name}"`);
  664 |   });
  665 | 
  666 |   test('TC-HCP-019: HCP form opens with no pre-filled data', async ({ page }) => {
  667 |     const mp = new MastersPage(page);
  668 |     await navToSection(mp, 'HCP');
  669 |     await openForm(mp);
  670 |     const modal = page.locator(MODAL).last();
  671 |     const val = await modal.getByPlaceholder('HCP Name').inputValue().catch(() => '');
  672 |     await page.keyboard.press('Escape').catch(() => {});
  673 |     saveResult('TC-HCP-019', val === '' ? 'pass' : 'fail',
  674 |       val === '' ? 'HCP form opened with empty fields' : `HCP Name pre-filled with: "${val}"`);
  675 |   });
  676 | 
  677 |   test('TC-HCP-020: Navigating via Masters sidebar to HCP opens the HCP list page', async ({ page }) => {
  678 |     const mp = new MastersPage(page);
  679 |     await navToSection(mp, 'HCP');
  680 |     await page.waitForTimeout(1500);
  681 |     const url = page.url();
  682 |     const title = await page.locator('h1, h2, [class*="title"]').first().textContent().catch(() => '');
  683 |     const pass = url.includes('hcp') || title.toLowerCase().includes('hcp');
  684 |     saveResult('TC-HCP-020', pass ? 'pass' : 'fail', `URL: ${url}`);
  685 |     expect(pass).toBeTruthy();
  686 |   });
  687 | 
  688 |   test('TC-HCP-021: HCP list page loads and displays a table or list', async ({ page }) => {
  689 |     const mp = new MastersPage(page);
  690 |     await navToSection(mp, 'HCP');
  691 |     await page.waitForTimeout(2000);
  692 |     const list = page.locator('table, [class*="table"], [class*="list"], [class*="grid"]').first();
  693 |     const visible = await list.isVisible({ timeout: 8000 }).catch(() => false);
  694 |     saveResult('TC-HCP-021', visible ? 'pass' : 'fail',
  695 |       visible ? 'HCP list loaded with table/grid' : 'HCP list page did not show any table or list');
  696 |   });
  697 | 
  698 | });
  699 | 
  700 | 
  701 | // ════════════════════════════════════════
  702 | // AF BODIES TESTS
  703 | // ════════════════════════════════════════
  704 | test.describe('Masters — AF Bodies', () => {
  705 | 
  706 |   test('TC-AFB-001: Clicking Add New on AF Bodies opens the creation form', async ({ page }) => {
  707 |     const mp = new MastersPage(page);
  708 |     await navToSection(mp, 'AF Bodies');
  709 |     await openForm(mp);
  710 |     const modal = page.locator(MODAL).last();
  711 |     const visible = await modal.isVisible({ timeout: 8000 }).catch(() => false);
  712 |     saveResult('TC-AFB-001', visible ? 'pass' : 'fail', visible ? '' : 'AF Bodies Add New did not open a form modal');
  713 |     expect(visible).toBeTruthy();
  714 |   });
  715 | 
  716 |   test('TC-AFB-002: Create AF Body with name, internal ID, and Weekly follow-up — submits successfully', async ({ page }) => {
  717 |     const mp = new MastersPage(page);
  718 |     await navToSection(mp, 'AF Bodies');
  719 |     await openForm(mp);
  720 |     const modal = page.locator(MODAL).last();
  721 |     await modal.getByPlaceholder('AF Body Name').fill(`TestAFB_${SUFFIX}`).catch(() => {});
  722 |     await modal.getByPlaceholder('AF Bodies Internal ID').fill(`AFB${SUFFIX}`).catch(() =>
  723 |       modal.getByPlaceholder('AF Body Internal ID').fill(`AFB${SUFFIX}`).catch(() => {})
  724 |     );
  725 |     await mp.selectFollowUpTimeline('Weekly');
  726 |     await mp.submitForm();
  727 |     await page.waitForTimeout(2000);
  728 |     const closed = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  729 |     const success = await page.locator(SUCCESS_SEL).first().isVisible({ timeout: 3000 }).catch(() => false);
  730 |     saveResult('TC-AFB-002', (closed || success) ? 'pass' : 'fail',
  731 |       (closed || success) ? '' : 'AF Body form did not close or show success after all mandatory fields');
  732 |     expect(closed || success).toBeTruthy();
  733 |   });
  734 | 
  735 |   test('TC-AFB-003: Created AF Body appears in AF Bodies list', async ({ page }) => {
  736 |     const data = loadCreatedData();
  737 |     const name = data.afBodies?.name ?? `TestAFB_${SUFFIX}`;
```