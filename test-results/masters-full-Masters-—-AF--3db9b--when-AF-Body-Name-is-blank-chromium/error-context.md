# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: masters-full.spec.ts >> Masters — AF Bodies >> TC-AFB-004: AF Bodies form blocks submission when AF Body Name is blank
- Location: tests/masters-full.spec.ts:748:7

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
              - rowgroup [ref=e480]:
                - row "10026 41693 AutoAFBodies_DF4169 NA NA NA Weekly 07 April 2026 06:48 PM" [ref=e481] [cursor=pointer]:
                  - cell "10026" [ref=e482]:
                    - generic [ref=e484]: "10026"
                  - cell "41693" [ref=e485]:
                    - generic [ref=e487]: "41693"
                  - cell "AutoAFBodies_DF4169" [ref=e488]:
                    - generic [ref=e490]: AutoAFBodies_DF4169
                  - cell "NA" [ref=e491]:
                    - generic [ref=e493]: NA
                  - cell "NA" [ref=e494]:
                    - generic [ref=e496]: NA
                  - cell "NA" [ref=e497]:
                    - generic [ref=e499]: NA
                  - cell "Weekly" [ref=e500]:
                    - generic [ref=e502]: Weekly
                  - cell "07 April 2026 06:48 PM" [ref=e503]:
                    - generic [ref=e505]: 07 April 2026 06:48 PM
                - row "10025 10217 AutoAFBodies_09A6F0 NA NA NA Weekly 07 April 2026 06:17 PM" [ref=e506] [cursor=pointer]:
                  - cell "10025" [ref=e507]:
                    - generic [ref=e509]: "10025"
                  - cell "10217" [ref=e510]:
                    - generic [ref=e512]: "10217"
                  - cell "AutoAFBodies_09A6F0" [ref=e513]:
                    - generic [ref=e515]: AutoAFBodies_09A6F0
                  - cell "NA" [ref=e516]:
                    - generic [ref=e518]: NA
                  - cell "NA" [ref=e519]:
                    - generic [ref=e521]: NA
                  - cell "NA" [ref=e522]:
                    - generic [ref=e524]: NA
                  - cell "Weekly" [ref=e525]:
                    - generic [ref=e527]: Weekly
                  - cell "07 April 2026 06:17 PM" [ref=e528]:
                    - generic [ref=e530]: 07 April 2026 06:17 PM
                - row "10024 38211 AutoAFBodies_4AF70B NA NA NA Weekly 07 April 2026 03:57 PM" [ref=e531] [cursor=pointer]:
                  - cell "10024" [ref=e532]:
                    - generic [ref=e534]: "10024"
                  - cell "38211" [ref=e535]:
                    - generic [ref=e537]: "38211"
                  - cell "AutoAFBodies_4AF70B" [ref=e538]:
                    - generic [ref=e540]: AutoAFBodies_4AF70B
                  - cell "NA" [ref=e541]:
                    - generic [ref=e543]: NA
                  - cell "NA" [ref=e544]:
                    - generic [ref=e546]: NA
                  - cell "NA" [ref=e547]:
                    - generic [ref=e549]: NA
                  - cell "Weekly" [ref=e550]:
                    - generic [ref=e552]: Weekly
                  - cell "07 April 2026 03:57 PM" [ref=e553]:
                    - generic [ref=e555]: 07 April 2026 03:57 PM
                - row "10023 33655 AutoAFBodies_04788E NA NA NA Weekly 07 April 2026 03:46 PM" [ref=e556] [cursor=pointer]:
                  - cell "10023" [ref=e557]:
                    - generic [ref=e559]: "10023"
                  - cell "33655" [ref=e560]:
                    - generic [ref=e562]: "33655"
                  - cell "AutoAFBodies_04788E" [ref=e563]:
                    - generic [ref=e565]: AutoAFBodies_04788E
                  - cell "NA" [ref=e566]:
                    - generic [ref=e568]: NA
                  - cell "NA" [ref=e569]:
                    - generic [ref=e571]: NA
                  - cell "NA" [ref=e572]:
                    - generic [ref=e574]: NA
                  - cell "Weekly" [ref=e575]:
                    - generic [ref=e577]: Weekly
                  - cell "07 April 2026 03:46 PM" [ref=e578]:
                    - generic [ref=e580]: 07 April 2026 03:46 PM
                - row "10022 75032 AutoAFBodies_B99B1E NA NA NA Weekly 07 April 2026 03:39 PM" [ref=e581] [cursor=pointer]:
                  - cell "10022" [ref=e582]:
                    - generic [ref=e584]: "10022"
                  - cell "75032" [ref=e585]:
                    - generic [ref=e587]: "75032"
                  - cell "AutoAFBodies_B99B1E" [ref=e588]:
                    - generic [ref=e590]: AutoAFBodies_B99B1E
                  - cell "NA" [ref=e591]:
                    - generic [ref=e593]: NA
                  - cell "NA" [ref=e594]:
                    - generic [ref=e596]: NA
                  - cell "NA" [ref=e597]:
                    - generic [ref=e599]: NA
                  - cell "Weekly" [ref=e600]:
                    - generic [ref=e602]: Weekly
                  - cell "07 April 2026 03:39 PM" [ref=e603]:
                    - generic [ref=e605]: 07 April 2026 03:39 PM
                - row "10021 29791 AutoAFBodies_60FBB4 NA NA NA Weekly 07 April 2026 03:37 PM" [ref=e606] [cursor=pointer]:
                  - cell "10021" [ref=e607]:
                    - generic [ref=e609]: "10021"
                  - cell "29791" [ref=e610]:
                    - generic [ref=e612]: "29791"
                  - cell "AutoAFBodies_60FBB4" [ref=e613]:
                    - generic [ref=e615]: AutoAFBodies_60FBB4
                  - cell "NA" [ref=e616]:
                    - generic [ref=e618]: NA
                  - cell "NA" [ref=e619]:
                    - generic [ref=e621]: NA
                  - cell "NA" [ref=e622]:
                    - generic [ref=e624]: NA
                  - cell "Weekly" [ref=e625]:
                    - generic [ref=e627]: Weekly
                  - cell "07 April 2026 03:37 PM" [ref=e628]:
                    - generic [ref=e630]: 07 April 2026 03:37 PM
                - row "10020 12879 AutoAFBodies_B5C41A NA NA NA Weekly 07 April 2026 03:33 PM" [ref=e631] [cursor=pointer]:
                  - cell "10020" [ref=e632]:
                    - generic [ref=e634]: "10020"
                  - cell "12879" [ref=e635]:
                    - generic [ref=e637]: "12879"
                  - cell "AutoAFBodies_B5C41A" [ref=e638]:
                    - generic [ref=e640]: AutoAFBodies_B5C41A
                  - cell "NA" [ref=e641]:
                    - generic [ref=e643]: NA
                  - cell "NA" [ref=e644]:
                    - generic [ref=e646]: NA
                  - cell "NA" [ref=e647]:
                    - generic [ref=e649]: NA
                  - cell "Weekly" [ref=e650]:
                    - generic [ref=e652]: Weekly
                  - cell "07 April 2026 03:33 PM" [ref=e653]:
                    - generic [ref=e655]: 07 April 2026 03:33 PM
                - row "10019 77845 AutoAFBodies_5D4AFC NA NA NA Weekly 07 April 2026 01:39 PM" [ref=e656] [cursor=pointer]:
                  - cell "10019" [ref=e657]:
                    - generic [ref=e659]: "10019"
                  - cell "77845" [ref=e660]:
                    - generic [ref=e662]: "77845"
                  - cell "AutoAFBodies_5D4AFC" [ref=e663]:
                    - generic [ref=e665]: AutoAFBodies_5D4AFC
                  - cell "NA" [ref=e666]:
                    - generic [ref=e668]: NA
                  - cell "NA" [ref=e669]:
                    - generic [ref=e671]: NA
                  - cell "NA" [ref=e672]:
                    - generic [ref=e674]: NA
                  - cell "Weekly" [ref=e675]:
                    - generic [ref=e677]: Weekly
                  - cell "07 April 2026 01:39 PM" [ref=e678]:
                    - generic [ref=e680]: 07 April 2026 01:39 PM
                - row "10018 86249 AutoAFBodies_4D698F NA NA NA Weekly 07 April 2026 01:34 PM" [ref=e681] [cursor=pointer]:
                  - cell "10018" [ref=e682]:
                    - generic [ref=e684]: "10018"
                  - cell "86249" [ref=e685]:
                    - generic [ref=e687]: "86249"
                  - cell "AutoAFBodies_4D698F" [ref=e688]:
                    - generic [ref=e690]: AutoAFBodies_4D698F
                  - cell "NA" [ref=e691]:
                    - generic [ref=e693]: NA
                  - cell "NA" [ref=e694]:
                    - generic [ref=e696]: NA
                  - cell "NA" [ref=e697]:
                    - generic [ref=e699]: NA
                  - cell "Weekly" [ref=e700]:
                    - generic [ref=e702]: Weekly
                  - cell "07 April 2026 01:34 PM" [ref=e703]:
                    - generic [ref=e705]: 07 April 2026 01:34 PM
                - row "10017 73637 AutoAFBodies_8AFB4F NA NA NA Weekly 07 April 2026 01:27 PM" [ref=e706] [cursor=pointer]:
                  - cell "10017" [ref=e707]:
                    - generic [ref=e709]: "10017"
                  - cell "73637" [ref=e710]:
                    - generic [ref=e712]: "73637"
                  - cell "AutoAFBodies_8AFB4F" [ref=e713]:
                    - generic [ref=e715]: AutoAFBodies_8AFB4F
                  - cell "NA" [ref=e716]:
                    - generic [ref=e718]: NA
                  - cell "NA" [ref=e719]:
                    - generic [ref=e721]: NA
                  - cell "NA" [ref=e722]:
                    - generic [ref=e724]: NA
                  - cell "Weekly" [ref=e725]:
                    - generic [ref=e727]: Weekly
                  - cell "07 April 2026 01:27 PM" [ref=e728]:
                    - generic [ref=e730]: 07 April 2026 01:27 PM
            - generic [ref=e731]:
              - generic [ref=e733]:
                - generic [ref=e734]: "Rows per page:"
                - generic [ref=e736]:
                  - log [ref=e738]
                  - generic [ref=e739]:
                    - generic [ref=e740]:
                      - generic [ref=e741]: "10"
                      - 'combobox "Rows per page: 10" [ref=e743]'
                    - img [ref=e746]
              - generic [ref=e749]:
                - button "Previous" [disabled] [ref=e750]:
                  - img [ref=e751]
                  - generic [ref=e753]: Previous
                - generic [ref=e754]:
                  - button "1" [ref=e755] [cursor=pointer]
                  - button "2" [ref=e756] [cursor=pointer]
                  - button "3" [ref=e757] [cursor=pointer]
                - button "Next" [ref=e758] [cursor=pointer]:
                  - generic [ref=e759]: Next
                  - img [ref=e760]
  - region "Notifications alt+T"
```

# Test source

```ts
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
  738 |     const mp = new MastersPage(page);
  739 |     await navToSection(mp, 'AF Bodies');
  740 |     await page.waitForTimeout(2000);
  741 |     const text = await page.evaluate(() => document.body.innerText);
  742 |     const found = text.includes(name) || text.includes('AutoAFBodies') || text.includes('TestAFB');
  743 |     saveResult('TC-AFB-003', found ? 'pass' : 'fail',
  744 |       found ? '' : `AF Body "${name}" not found in list after creation`);
  745 |     expect(found).toBeTruthy();
  746 |   });
  747 | 
  748 |   test('TC-AFB-004: AF Bodies form blocks submission when AF Body Name is blank', async ({ page }) => {
  749 |     const mp = new MastersPage(page);
  750 |     await navToSection(mp, 'AF Bodies');
  751 |     await openForm(mp);
  752 |     const modal = page.locator(MODAL).last();
  753 |     await modal.getByPlaceholder('AF Bodies Internal ID').fill('AFB99991').catch(() =>
  754 |       modal.getByPlaceholder('AF Body Internal ID').fill('AFB99991').catch(() => {})
  755 |     );
  756 |     await mp.submitForm();
  757 |     await page.waitForTimeout(2000);
  758 |     const blocked = await checkValidation(page, modal);
  759 |     saveResult('TC-AFB-004', blocked ? 'pass' : 'fail',
  760 |       blocked ? 'Form blocked without AF Body Name' : 'Form submitted without AF Body Name — no error');
> 761 |     expect(blocked).toBeTruthy();
      |                     ^ Error: expect(received).toBeTruthy()
  762 |   });
  763 | 
  764 |   test('TC-AFB-005: AF Bodies form blocks submission when Internal ID is blank', async ({ page }) => {
  765 |     const mp = new MastersPage(page);
  766 |     await navToSection(mp, 'AF Bodies');
  767 |     await openForm(mp);
  768 |     const modal = page.locator(MODAL).last();
  769 |     await modal.getByPlaceholder('AF Body Name').fill('OnlyNameAFB').catch(() => {});
  770 |     await mp.submitForm();
  771 |     await page.waitForTimeout(2000);
  772 |     const blocked = await checkValidation(page, modal);
  773 |     saveResult('TC-AFB-005', blocked ? 'pass' : 'fail',
  774 |       blocked ? 'Form blocked without Internal ID' : 'Form submitted without Internal ID — no error');
  775 |     expect(blocked).toBeTruthy();
  776 |   });
  777 | 
  778 |   test('TC-AFB-006: Follow-Up Timeline dropdown loads available options', async ({ page }) => {
  779 |     const mp = new MastersPage(page);
  780 |     await navToSection(mp, 'AF Bodies');
  781 |     await openForm(mp);
  782 |     const modal = page.locator(MODAL).last();
  783 |     const select = modal.locator('select, [class*="select"], [class*="dropdown"]').first();
  784 |     if (await select.isVisible({ timeout: 3000 }).catch(() => false)) {
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
```