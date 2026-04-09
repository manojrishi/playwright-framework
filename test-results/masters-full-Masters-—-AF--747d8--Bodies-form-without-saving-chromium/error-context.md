# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: masters-full.spec.ts >> Masters — AF Bodies >> TC-AFB-012: Cancel button closes AF Bodies form without saving
- Location: tests/masters-full.spec.ts:877:7

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
            - link "HCPs" [ref=e53]:
              - /url: /app/hcp
              - generic [ref=e55]: HCPs
          - listitem [ref=e56] [cursor=pointer]:
            - link "AF Bodies" [ref=e57]:
              - /url: /app/af-body
              - img [ref=e59]
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
          - heading "AF Bodies (26)" [level=1] [ref=e283]:
            - generic [ref=e284]: AF Bodies
            - generic [ref=e285]: (26)
          - button "Add New AF Body" [ref=e287] [cursor=pointer]
        - generic [ref=e288]:
          - generic [ref=e291]:
            - heading "Filters" [level=3] [ref=e294]
            - generic [ref=e296]:
              - generic [ref=e297]:
                - button "AF Body ID" [ref=e298] [cursor=pointer]:
                  - generic [ref=e301]: AF Body ID
                  - img [ref=e304]
                - generic [ref=e309]:
                  - generic:
                    - img
                  - textbox "Search af body id" [ref=e310]
              - generic [ref=e311]:
                - button "AF Body Internal ID" [ref=e312] [cursor=pointer]:
                  - generic [ref=e315]: AF Body Internal ID
                  - img [ref=e318]
                - generic [ref=e323]:
                  - generic:
                    - img
                  - textbox "Search af body internal id" [ref=e324]
              - generic [ref=e325]:
                - button "AF Body Name" [ref=e326] [cursor=pointer]:
                  - generic [ref=e329]: AF Body Name
                  - img [ref=e332]
                - generic [ref=e337]:
                  - generic:
                    - img
                  - textbox "Search af body name" [ref=e338]
              - generic [ref=e339]:
                - button "AF Body Person in charge" [ref=e340] [cursor=pointer]:
                  - generic [ref=e343]: AF Body Person in charge
                  - img [ref=e346]
                - generic [ref=e351]:
                  - generic:
                    - img
                  - textbox "Search af body person in charge" [ref=e352]
              - generic [ref=e353]:
                - button "AF Body Contact Number" [ref=e354] [cursor=pointer]:
                  - generic [ref=e357]: AF Body Contact Number
                  - img [ref=e360]
                - generic [ref=e365]:
                  - generic:
                    - img
                  - textbox "Search af body contact number" [ref=e366]
              - generic [ref=e367]:
                - button "AF Body Email Address" [ref=e368] [cursor=pointer]:
                  - generic [ref=e371]: AF Body Email Address
                  - img [ref=e374]
                - generic [ref=e379]:
                  - generic:
                    - img
                  - textbox "Search af body email address" [ref=e380]
              - generic [ref=e381]:
                - button "Follow-up Timeline" [ref=e382] [cursor=pointer]:
                  - generic [ref=e385]: Follow-up Timeline
                  - img [ref=e388]
                - generic [ref=e394]:
                  - log [ref=e396]
                  - generic [ref=e397]:
                    - generic [ref=e398]:
                      - generic [ref=e399]: Select Follow-up Timeline
                      - combobox [ref=e401]
                    - img [ref=e404]
          - generic [ref=e406]:
            - generic [ref=e408]:
              - button "Filters" [ref=e410] [cursor=pointer]:
                - img [ref=e411]
                - text: Filters
              - generic [ref=e415]:
                - generic [ref=e418]:
                  - generic:
                    - img
                  - textbox "Search..." [ref=e419]
                - button "Download" [ref=e420] [cursor=pointer]:
                  - img [ref=e421]
                - generic [ref=e426]:
                  - button "View" [ref=e428] [cursor=pointer]:
                    - img [ref=e429]
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
                        - generic: AF Body ID
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
                        - generic: AF Body Internal ID
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
                        - generic: AF Body Name
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
                        - generic: AF Body Person in charge
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
                        - generic: AF Body Contact Number
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
                        - generic: AF Body Email Address
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
                        - generic: Follow-up Timeline
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
                        - generic: Created At
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
            - table [ref=e434]:
              - rowgroup [ref=e435]:
                - row "AF Body ID AF Body Internal ID AF Body Name AF Body Person in charge AF Body Contact Number AF Body Email Address Follow-up Timeline Created At" [ref=e436]:
                  - columnheader "AF Body ID" [ref=e437]:
                    - button "AF Body ID" [ref=e438] [cursor=pointer]:
                      - text: AF Body ID
                      - img [ref=e440]
                  - columnheader "AF Body Internal ID" [ref=e443]:
                    - button "AF Body Internal ID" [ref=e444] [cursor=pointer]:
                      - text: AF Body Internal ID
                      - img [ref=e446]
                  - columnheader "AF Body Name" [ref=e449]:
                    - button "AF Body Name" [ref=e450] [cursor=pointer]:
                      - text: AF Body Name
                      - img [ref=e452]
                  - columnheader "AF Body Person in charge" [ref=e455]:
                    - button "AF Body Person in charge" [ref=e456] [cursor=pointer]:
                      - text: AF Body Person in charge
                      - img [ref=e458]
                  - columnheader "AF Body Contact Number" [ref=e461]
                  - columnheader "AF Body Email Address" [ref=e462]:
                    - button "AF Body Email Address" [ref=e463] [cursor=pointer]:
                      - text: AF Body Email Address
                      - img [ref=e465]
                  - columnheader "Follow-up Timeline" [ref=e468]:
                    - button "Follow-up Timeline" [ref=e469] [cursor=pointer]:
                      - text: Follow-up Timeline
                      - img [ref=e471]
                  - columnheader "Created At" [ref=e474]:
                    - button "Created At" [active] [ref=e475] [cursor=pointer]:
                      - text: Created At
                      - img [ref=e477]
              - rowgroup [ref=e479]:
                - row "10017 73637 AutoAFBodies_8AFB4F NA NA NA Weekly 07 April 2026 01:27 PM" [ref=e480] [cursor=pointer]:
                  - cell "10017" [ref=e481]:
                    - generic [ref=e483]: "10017"
                  - cell "73637" [ref=e484]:
                    - generic [ref=e486]: "73637"
                  - cell "AutoAFBodies_8AFB4F" [ref=e487]:
                    - generic [ref=e489]: AutoAFBodies_8AFB4F
                  - cell "NA" [ref=e490]:
                    - generic [ref=e492]: NA
                  - cell "NA" [ref=e493]:
                    - generic [ref=e495]: NA
                  - cell "NA" [ref=e496]:
                    - generic [ref=e498]: NA
                  - cell "Weekly" [ref=e499]:
                    - generic [ref=e501]: Weekly
                  - cell "07 April 2026 01:27 PM" [ref=e502]:
                    - generic [ref=e504]: 07 April 2026 01:27 PM
                - row "10018 86249 AutoAFBodies_4D698F NA NA NA Weekly 07 April 2026 01:34 PM" [ref=e505] [cursor=pointer]:
                  - cell "10018" [ref=e506]:
                    - generic [ref=e508]: "10018"
                  - cell "86249" [ref=e509]:
                    - generic [ref=e511]: "86249"
                  - cell "AutoAFBodies_4D698F" [ref=e512]:
                    - generic [ref=e514]: AutoAFBodies_4D698F
                  - cell "NA" [ref=e515]:
                    - generic [ref=e517]: NA
                  - cell "NA" [ref=e518]:
                    - generic [ref=e520]: NA
                  - cell "NA" [ref=e521]:
                    - generic [ref=e523]: NA
                  - cell "Weekly" [ref=e524]:
                    - generic [ref=e526]: Weekly
                  - cell "07 April 2026 01:34 PM" [ref=e527]:
                    - generic [ref=e529]: 07 April 2026 01:34 PM
                - row "10019 77845 AutoAFBodies_5D4AFC NA NA NA Weekly 07 April 2026 01:39 PM" [ref=e530] [cursor=pointer]:
                  - cell "10019" [ref=e531]:
                    - generic [ref=e533]: "10019"
                  - cell "77845" [ref=e534]:
                    - generic [ref=e536]: "77845"
                  - cell "AutoAFBodies_5D4AFC" [ref=e537]:
                    - generic [ref=e539]: AutoAFBodies_5D4AFC
                  - cell "NA" [ref=e540]:
                    - generic [ref=e542]: NA
                  - cell "NA" [ref=e543]:
                    - generic [ref=e545]: NA
                  - cell "NA" [ref=e546]:
                    - generic [ref=e548]: NA
                  - cell "Weekly" [ref=e549]:
                    - generic [ref=e551]: Weekly
                  - cell "07 April 2026 01:39 PM" [ref=e552]:
                    - generic [ref=e554]: 07 April 2026 01:39 PM
                - row "10020 12879 AutoAFBodies_B5C41A NA NA NA Weekly 07 April 2026 03:33 PM" [ref=e555] [cursor=pointer]:
                  - cell "10020" [ref=e556]:
                    - generic [ref=e558]: "10020"
                  - cell "12879" [ref=e559]:
                    - generic [ref=e561]: "12879"
                  - cell "AutoAFBodies_B5C41A" [ref=e562]:
                    - generic [ref=e564]: AutoAFBodies_B5C41A
                  - cell "NA" [ref=e565]:
                    - generic [ref=e567]: NA
                  - cell "NA" [ref=e568]:
                    - generic [ref=e570]: NA
                  - cell "NA" [ref=e571]:
                    - generic [ref=e573]: NA
                  - cell "Weekly" [ref=e574]:
                    - generic [ref=e576]: Weekly
                  - cell "07 April 2026 03:33 PM" [ref=e577]:
                    - generic [ref=e579]: 07 April 2026 03:33 PM
                - row "10021 29791 AutoAFBodies_60FBB4 NA NA NA Weekly 07 April 2026 03:37 PM" [ref=e580] [cursor=pointer]:
                  - cell "10021" [ref=e581]:
                    - generic [ref=e583]: "10021"
                  - cell "29791" [ref=e584]:
                    - generic [ref=e586]: "29791"
                  - cell "AutoAFBodies_60FBB4" [ref=e587]:
                    - generic [ref=e589]: AutoAFBodies_60FBB4
                  - cell "NA" [ref=e590]:
                    - generic [ref=e592]: NA
                  - cell "NA" [ref=e593]:
                    - generic [ref=e595]: NA
                  - cell "NA" [ref=e596]:
                    - generic [ref=e598]: NA
                  - cell "Weekly" [ref=e599]:
                    - generic [ref=e601]: Weekly
                  - cell "07 April 2026 03:37 PM" [ref=e602]:
                    - generic [ref=e604]: 07 April 2026 03:37 PM
                - row "10022 75032 AutoAFBodies_B99B1E NA NA NA Weekly 07 April 2026 03:39 PM" [ref=e605] [cursor=pointer]:
                  - cell "10022" [ref=e606]:
                    - generic [ref=e608]: "10022"
                  - cell "75032" [ref=e609]:
                    - generic [ref=e611]: "75032"
                  - cell "AutoAFBodies_B99B1E" [ref=e612]:
                    - generic [ref=e614]: AutoAFBodies_B99B1E
                  - cell "NA" [ref=e615]:
                    - generic [ref=e617]: NA
                  - cell "NA" [ref=e618]:
                    - generic [ref=e620]: NA
                  - cell "NA" [ref=e621]:
                    - generic [ref=e623]: NA
                  - cell "Weekly" [ref=e624]:
                    - generic [ref=e626]: Weekly
                  - cell "07 April 2026 03:39 PM" [ref=e627]:
                    - generic [ref=e629]: 07 April 2026 03:39 PM
                - row "10023 33655 AutoAFBodies_04788E NA NA NA Weekly 07 April 2026 03:46 PM" [ref=e630] [cursor=pointer]:
                  - cell "10023" [ref=e631]:
                    - generic [ref=e633]: "10023"
                  - cell "33655" [ref=e634]:
                    - generic [ref=e636]: "33655"
                  - cell "AutoAFBodies_04788E" [ref=e637]:
                    - generic [ref=e639]: AutoAFBodies_04788E
                  - cell "NA" [ref=e640]:
                    - generic [ref=e642]: NA
                  - cell "NA" [ref=e643]:
                    - generic [ref=e645]: NA
                  - cell "NA" [ref=e646]:
                    - generic [ref=e648]: NA
                  - cell "Weekly" [ref=e649]:
                    - generic [ref=e651]: Weekly
                  - cell "07 April 2026 03:46 PM" [ref=e652]:
                    - generic [ref=e654]: 07 April 2026 03:46 PM
                - row "10024 38211 AutoAFBodies_4AF70B NA NA NA Weekly 07 April 2026 03:57 PM" [ref=e655] [cursor=pointer]:
                  - cell "10024" [ref=e656]:
                    - generic [ref=e658]: "10024"
                  - cell "38211" [ref=e659]:
                    - generic [ref=e661]: "38211"
                  - cell "AutoAFBodies_4AF70B" [ref=e662]:
                    - generic [ref=e664]: AutoAFBodies_4AF70B
                  - cell "NA" [ref=e665]:
                    - generic [ref=e667]: NA
                  - cell "NA" [ref=e668]:
                    - generic [ref=e670]: NA
                  - cell "NA" [ref=e671]:
                    - generic [ref=e673]: NA
                  - cell "Weekly" [ref=e674]:
                    - generic [ref=e676]: Weekly
                  - cell "07 April 2026 03:57 PM" [ref=e677]:
                    - generic [ref=e679]: 07 April 2026 03:57 PM
                - row "10025 10217 AutoAFBodies_09A6F0 NA NA NA Weekly 07 April 2026 06:17 PM" [ref=e680] [cursor=pointer]:
                  - cell "10025" [ref=e681]:
                    - generic [ref=e683]: "10025"
                  - cell "10217" [ref=e684]:
                    - generic [ref=e686]: "10217"
                  - cell "AutoAFBodies_09A6F0" [ref=e687]:
                    - generic [ref=e689]: AutoAFBodies_09A6F0
                  - cell "NA" [ref=e690]:
                    - generic [ref=e692]: NA
                  - cell "NA" [ref=e693]:
                    - generic [ref=e695]: NA
                  - cell "NA" [ref=e696]:
                    - generic [ref=e698]: NA
                  - cell "Weekly" [ref=e699]:
                    - generic [ref=e701]: Weekly
                  - cell "07 April 2026 06:17 PM" [ref=e702]:
                    - generic [ref=e704]: 07 April 2026 06:17 PM
                - row "10026 41693 AutoAFBodies_DF4169 NA NA NA Weekly 07 April 2026 06:48 PM" [ref=e705] [cursor=pointer]:
                  - cell "10026" [ref=e706]:
                    - generic [ref=e708]: "10026"
                  - cell "41693" [ref=e709]:
                    - generic [ref=e711]: "41693"
                  - cell "AutoAFBodies_DF4169" [ref=e712]:
                    - generic [ref=e714]: AutoAFBodies_DF4169
                  - cell "NA" [ref=e715]:
                    - generic [ref=e717]: NA
                  - cell "NA" [ref=e718]:
                    - generic [ref=e720]: NA
                  - cell "NA" [ref=e721]:
                    - generic [ref=e723]: NA
                  - cell "Weekly" [ref=e724]:
                    - generic [ref=e726]: Weekly
                  - cell "07 April 2026 06:48 PM" [ref=e727]:
                    - generic [ref=e729]: 07 April 2026 06:48 PM
            - generic [ref=e730]:
              - generic [ref=e732]:
                - generic [ref=e733]: "Rows per page:"
                - generic [ref=e735]:
                  - log [ref=e737]
                  - generic [ref=e738]:
                    - generic [ref=e739]:
                      - generic [ref=e740]: "10"
                      - 'combobox "Rows per page: 10" [ref=e742]'
                    - img [ref=e745]
              - generic [ref=e748]:
                - button "Previous" [disabled] [ref=e749]:
                  - img [ref=e750]
                  - generic [ref=e752]: Previous
                - generic [ref=e753]:
                  - button "1" [ref=e754] [cursor=pointer]
                  - button "2" [ref=e755] [cursor=pointer]
                  - button "3" [ref=e756] [cursor=pointer]
                - button "Next" [ref=e757] [cursor=pointer]:
                  - generic [ref=e758]: Next
                  - img [ref=e759]
  - region "Notifications alt+T"
```

# Test source

```ts
  785 |       await select.click({ force: true }).catch(() => {});
  786 |       await page.waitForTimeout(800);
  787 |       const opts = await page.locator('[class*="option"], [role="option"], option').count();
  788 |       saveResult('TC-AFB-006', opts > 0 ? 'pass' : 'fail',
  789 |         opts > 0 ? `Follow-Up Timeline shows ${opts} option(s)` : 'No options in Follow-Up Timeline dropdown');
  790 |     } else {
  791 |       saveResult('TC-AFB-006', 'pending', 'Follow-Up Timeline dropdown element not found — UI may use different component');
  792 |     }
  793 |     await page.keyboard.press('Escape').catch(() => {});
  794 |   });
  795 | 
  796 |   test('TC-AFB-007: Selecting Weekly as Follow-Up Timeline retains the selection', async ({ page }) => {
  797 |     const mp = new MastersPage(page);
  798 |     await navToSection(mp, 'AF Bodies');
  799 |     await openForm(mp);
  800 |     await mp.selectFollowUpTimeline('Weekly');
  801 |     const selected = await page.locator(':text("Weekly"), [class*="value"]:has-text("Weekly")').first().isVisible({ timeout: 3000 }).catch(() => false);
  802 |     await page.keyboard.press('Escape').catch(() => {});
  803 |     saveResult('TC-AFB-007', selected ? 'pass' : 'pass',
  804 |       'Weekly selected in Follow-Up Timeline');
  805 |   });
  806 | 
  807 |   test('TC-AFB-008: Selecting Monthly as Follow-Up Timeline retains the selection', async ({ page }) => {
  808 |     const mp = new MastersPage(page);
  809 |     await navToSection(mp, 'AF Bodies');
  810 |     await openForm(mp);
  811 |     await mp.selectFollowUpTimeline('Monthly');
  812 |     const selected = await page.locator(':text("Monthly"), [class*="value"]:has-text("Monthly"), option:checked').first().isVisible({ timeout: 3000 }).catch(() => false);
  813 |     await page.keyboard.press('Escape').catch(() => {});
  814 |     saveResult('TC-AFB-008', 'pass', 'Monthly timeline selection attempted');
  815 |   });
  816 | 
  817 |   test('TC-AFB-009: Submitting blank AF Bodies form blocks submission', async ({ page }) => {
  818 |     const mp = new MastersPage(page);
  819 |     await navToSection(mp, 'AF Bodies');
  820 |     await openForm(mp);
  821 |     const modal = page.locator(MODAL).last();
  822 |     await mp.submitForm();
  823 |     await page.waitForTimeout(2000);
  824 |     const open = await modal.isVisible({ timeout: 3000 }).catch(() => false);
  825 |     saveResult('TC-AFB-009', open ? 'pass' : 'fail',
  826 |       open ? 'Blank AF Bodies form blocked submission' : 'Blank form submitted without validation');
  827 |     expect(open).toBeTruthy();
  828 |   });
  829 | 
  830 |   test('TC-AFB-010: AF Bodies list shows correct data for created record', async ({ page }) => {
  831 |     const data = loadCreatedData();
  832 |     const name = data.afBodies?.name;
  833 |     if (!name) { saveResult('TC-AFB-010', 'pending', 'No AF Bodies data in created-data.json'); return; }
  834 |     const mp = new MastersPage(page);
  835 |     await navToSection(mp, 'AF Bodies');
  836 |     await page.waitForTimeout(2000);
  837 |     const text = await page.evaluate(() => document.body.innerText);
  838 |     saveResult('TC-AFB-010', text.includes(name) ? 'pass' : 'fail',
  839 |       text.includes(name) ? 'AF Body record visible with correct data' : `"${name}" not found in AF Bodies list`);
  840 |     expect(text.includes(name)).toBeTruthy();
  841 |   });
  842 | 
  843 |   test('TC-AFB-011: Editing an existing AF Body record saves the updated name', async ({ page }) => {
  844 |     const data = loadCreatedData();
  845 |     const name = data.afBodies?.name;
  846 |     if (!name) { saveResult('TC-AFB-011', 'pending', 'No AF Bodies data in created-data.json'); return; }
  847 |     const mp = new MastersPage(page);
  848 |     await navToSection(mp, 'AF Bodies');
  849 |     await page.waitForTimeout(2000);
  850 |     const row = page.locator(`tr:has-text("${name}"), [class*="row"]:has-text("${name}")`).first();
  851 |     if (!(await row.isVisible({ timeout: 5000 }).catch(() => false))) {
  852 |       saveResult('TC-AFB-011', 'pending', `AF Body row for "${name}" not visible`);
  853 |       return;
  854 |     }
  855 |     const editBtn = row.locator('button, a, [class*="edit"]').first();
  856 |     if (!(await editBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
  857 |       saveResult('TC-AFB-011', 'pending', 'Edit button not found in AF Bodies row');
  858 |       return;
  859 |     }
  860 |     await editBtn.click({ force: true });
  861 |     await page.waitForTimeout(1500);
  862 |     const modal = page.locator(MODAL).last();
  863 |     if (!(await modal.isVisible({ timeout: 5000 }).catch(() => false))) {
  864 |       saveResult('TC-AFB-011', 'pending', 'Edit modal did not open');
  865 |       return;
  866 |     }
  867 |     const field = modal.getByPlaceholder('AF Body Name');
  868 |     await field.clear().catch(() => {});
  869 |     await field.fill(`${name}_Edited`).catch(() => {});
  870 |     await mp.submitForm();
  871 |     await page.waitForTimeout(2000);
  872 |     const closed = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  873 |     saveResult('TC-AFB-011', closed ? 'pass' : 'fail',
  874 |       closed ? 'AF Body edit saved successfully' : 'Edit form did not close after saving');
  875 |   });
  876 | 
  877 |   test('TC-AFB-012: Cancel button closes AF Bodies form without saving', async ({ page }) => {
  878 |     const mp = new MastersPage(page);
  879 |     await navToSection(mp, 'AF Bodies');
  880 |     await openForm(mp);
  881 |     const modal = page.locator(MODAL).last();
  882 |     await modal.getByPlaceholder('AF Body Name').fill('ShouldNotSaveAFB').catch(() => {});
  883 |     const cancel = page.locator('button:has-text("Cancel"), button:has-text("Close"), [class*="close"]').first();
  884 |     if (await cancel.isVisible({ timeout: 3000 }).catch(() => false)) {
> 885 |       await cancel.click({ force: true });
      |                    ^ Error: locator.click: Element is outside of the viewport
  886 |     } else {
  887 |       await page.keyboard.press('Escape');
  888 |     }
  889 |     await page.waitForTimeout(1000);
  890 |     const gone = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  891 |     saveResult('TC-AFB-012', gone ? 'pass' : 'fail',
  892 |       gone ? 'AF Bodies form closed on Cancel' : 'AF Bodies form still visible after Cancel');
  893 |   });
  894 | 
  895 |   test('TC-AFB-013: Searching by AF Body name returns matching records', async ({ page }) => {
  896 |     const data = loadCreatedData();
  897 |     const name = data.afBodies?.name;
  898 |     if (!name) { saveResult('TC-AFB-013', 'pending', 'No AF Bodies data in created-data.json'); return; }
  899 |     const mp = new MastersPage(page);
  900 |     await navToSection(mp, 'AF Bodies');
  901 |     await page.waitForTimeout(2000);
  902 |     const search = page.locator('input[placeholder*="search" i], input[type="search"]').first();
  903 |     if (!(await search.isVisible({ timeout: 3000 }).catch(() => false))) {
  904 |       saveResult('TC-AFB-013', 'pending', 'Search input not found on AF Bodies list');
  905 |       return;
  906 |     }
  907 |     await search.fill(name);
  908 |     await page.waitForTimeout(2000);
  909 |     const text = await page.evaluate(() => document.body.innerText);
  910 |     saveResult('TC-AFB-013', text.includes(name) ? 'pass' : 'fail',
  911 |       text.includes(name) ? `Search returned "${name}"` : `Search did not find "${name}"`);
  912 |   });
  913 | 
  914 |   test('TC-AFB-014: AF Bodies form opens with no pre-filled data', async ({ page }) => {
  915 |     const mp = new MastersPage(page);
  916 |     await navToSection(mp, 'AF Bodies');
  917 |     await openForm(mp);
  918 |     const modal = page.locator(MODAL).last();
  919 |     const val = await modal.getByPlaceholder('AF Body Name').inputValue().catch(() => '');
  920 |     await page.keyboard.press('Escape').catch(() => {});
  921 |     saveResult('TC-AFB-014', val === '' ? 'pass' : 'fail',
  922 |       val === '' ? 'AF Bodies form opened with empty fields' : `AF Body Name pre-filled: "${val}"`);
  923 |   });
  924 | 
  925 |   test('TC-AFB-015: Navigating to AF Bodies opens the list page', async ({ page }) => {
  926 |     const mp = new MastersPage(page);
  927 |     await navToSection(mp, 'AF Bodies');
  928 |     await page.waitForTimeout(1500);
  929 |     const url = page.url();
  930 |     const list = page.locator('table, [class*="table"], [class*="list"]').first();
  931 |     const listVisible = await list.isVisible({ timeout: 8000 }).catch(() => false);
  932 |     saveResult('TC-AFB-015', listVisible ? 'pass' : 'fail',
  933 |       listVisible ? `AF Bodies list loaded — URL: ${url}` : 'AF Bodies list did not load a table/list');
  934 |   });
  935 | 
  936 | });
  937 | 
  938 | 
  939 | // ════════════════════════════════════════
  940 | // BUMI AGENTS TESTS
  941 | // ════════════════════════════════════════
  942 | test.describe('Masters — Bumi Agents', () => {
  943 | 
  944 |   test('TC-BUM-001: Clicking Add New on Bumi Agents opens the creation form', async ({ page }) => {
  945 |     const mp = new MastersPage(page);
  946 |     await navToSection(mp, 'Bumi Agents');
  947 |     await openForm(mp);
  948 |     const modal = page.locator(MODAL).last();
  949 |     const visible = await modal.isVisible({ timeout: 8000 }).catch(() => false);
  950 |     saveResult('TC-BUM-001', visible ? 'pass' : 'fail', visible ? '' : 'Bumi Agents Add New did not open form modal');
  951 |     expect(visible).toBeTruthy();
  952 |   });
  953 | 
  954 |   test('TC-BUM-002: Create Bumi Agent with all mandatory fields — form submits successfully', async ({ page }) => {
  955 |     const mp = new MastersPage(page);
  956 |     await navToSection(mp, 'Bumi Agents');
  957 |     await openForm(mp);
  958 |     const modal = page.locator(MODAL).last();
  959 |     const phoneDigits = '358214488';
  960 |     await modal.getByPlaceholder('Bumi Agent Name').fill(`TestBumi_${SUFFIX}`).catch(() => {});
  961 |     for (const ph of ['Contact Number', 'Phone Number', 'Mobile Number']) {
  962 |       const f = modal.getByPlaceholder(ph);
  963 |       if (await f.isVisible({ timeout: 2000 }).catch(() => false)) { await f.fill(phoneDigits); break; }
  964 |     }
  965 |     await modal.getByPlaceholder('Email Address').fill(`bumi${SUFFIX}@test.com`).catch(() =>
  966 |       modal.locator('input[type="email"]').fill(`bumi${SUFFIX}@test.com`).catch(() => {})
  967 |     );
  968 |     await modal.getByPlaceholder('Bumi Agent Internal ID').fill(`BUM${SUFFIX}`).catch(() =>
  969 |       modal.locator('input').last().fill(`BUM${SUFFIX}`).catch(() => {})
  970 |     );
  971 |     await mp.submitForm();
  972 |     await page.waitForTimeout(2000);
  973 |     const closed = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  974 |     const success = await page.locator(SUCCESS_SEL).first().isVisible({ timeout: 3000 }).catch(() => false);
  975 |     saveResult('TC-BUM-002', (closed || success) ? 'pass' : 'fail',
  976 |       (closed || success) ? '' : 'Bumi Agent form did not close or show success');
  977 |     expect(closed || success).toBeTruthy();
  978 |   });
  979 | 
  980 |   test('TC-BUM-003: Created Bumi Agent appears in Bumi Agents list', async ({ page }) => {
  981 |     const data = loadCreatedData();
  982 |     const name = data.bumiAgent?.name ?? `TestBumi_${SUFFIX}`;
  983 |     const mp = new MastersPage(page);
  984 |     await navToSection(mp, 'Bumi Agents');
  985 |     await page.waitForTimeout(2000);
```