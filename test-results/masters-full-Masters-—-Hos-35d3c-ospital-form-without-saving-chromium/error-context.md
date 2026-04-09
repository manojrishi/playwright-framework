# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: masters-full.spec.ts >> Masters — Hospital >> TC-HSP-013: Cancel button closes Hospital form without saving
- Location: tests/masters-full.spec.ts:253:7

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
            - link "Hospitals" [active] [ref=e49]:
              - /url: /app/hospital
              - img [ref=e51]
              - generic [ref=e53]: Hospitals
          - listitem [ref=e54] [cursor=pointer]:
            - link "HCPs" [ref=e55]:
              - /url: /app/hcp
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
          - heading "Hospitals (39)" [level=1] [ref=e283]:
            - generic [ref=e284]: Hospitals
            - generic [ref=e285]: (39)
          - button "Add New Hospital" [ref=e287] [cursor=pointer]
        - generic [ref=e288]:
          - generic [ref=e291]:
            - heading "Filters" [level=3] [ref=e294]
            - generic [ref=e296]:
              - generic [ref=e297]:
                - button "Hospital ID" [ref=e298] [cursor=pointer]:
                  - generic [ref=e301]: Hospital ID
                  - img [ref=e304]
                - generic [ref=e309]:
                  - generic:
                    - img
                  - textbox "Search hospital id" [ref=e310]
              - generic [ref=e311]:
                - button "Hospital Internal ID" [ref=e312] [cursor=pointer]:
                  - generic [ref=e315]: Hospital Internal ID
                  - img [ref=e318]
                - generic [ref=e323]:
                  - generic:
                    - img
                  - textbox "Search hospital internal id" [ref=e324]
              - generic [ref=e325]:
                - button "Hospital Code" [ref=e326] [cursor=pointer]:
                  - generic [ref=e329]: Hospital Code
                  - img [ref=e332]
                - generic [ref=e337]:
                  - generic:
                    - img
                  - textbox "Search hospital code" [ref=e338]
              - generic [ref=e339]:
                - button "Hospital Name" [ref=e340] [cursor=pointer]:
                  - generic [ref=e343]: Hospital Name
                  - img [ref=e346]
                - generic [ref=e351]:
                  - generic:
                    - img
                  - textbox "Search hospital name" [ref=e352]
              - generic [ref=e353]:
                - button "Telephone Number" [ref=e354] [cursor=pointer]:
                  - generic [ref=e357]: Telephone Number
                  - img [ref=e360]
                - generic [ref=e365]:
                  - generic:
                    - img
                  - textbox "Search telephone number" [ref=e366]
              - generic [ref=e367]:
                - button "Email Address" [ref=e368] [cursor=pointer]:
                  - generic [ref=e371]: Email Address
                  - img [ref=e374]
                - generic [ref=e379]:
                  - generic:
                    - img
                  - textbox "Search email address" [ref=e380]
              - generic [ref=e381]:
                - button "State" [ref=e382] [cursor=pointer]:
                  - generic [ref=e385]: State
                  - img [ref=e388]
                - generic [ref=e394]:
                  - log [ref=e396]
                  - generic [ref=e397]:
                    - generic [ref=e398]:
                      - generic [ref=e399]: Select State
                      - combobox [ref=e401]
                    - img [ref=e404]
              - generic [ref=e406]:
                - button "Postal Code" [ref=e407] [cursor=pointer]:
                  - generic [ref=e410]: Postal Code
                  - img [ref=e413]
                - generic [ref=e418]:
                  - generic:
                    - img
                  - textbox "Search postal code" [ref=e419]
          - generic [ref=e420]:
            - generic [ref=e422]:
              - button "Filters" [ref=e424] [cursor=pointer]:
                - img [ref=e425]
                - text: Filters
              - generic [ref=e429]:
                - generic [ref=e432]:
                  - generic:
                    - img
                  - textbox "Search..." [ref=e433]
                - button "Download" [ref=e434] [cursor=pointer]:
                  - img [ref=e435]
                - generic [ref=e440]:
                  - button "View" [ref=e442] [cursor=pointer]:
                    - img [ref=e443]
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
                        - generic: Hospital ID
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
                        - generic: Hospital Internal ID
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
                        - generic: Hospital Code
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
                        - generic: Hospital Name
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
                        - generic: Telephone Number
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
                        - generic: Address Line 1
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
                        - generic: Address Line 2
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
                        - generic: State
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
                        - generic: Postal Code
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
            - table [ref=e448]:
              - rowgroup [ref=e449]:
                - row "Hospital ID Hospital Internal ID Hospital Code Hospital Name Telephone Number Email Address Address Line 1 Address Line 2 State Postal Code" [ref=e450]:
                  - columnheader "Hospital ID" [ref=e451]:
                    - button "Hospital ID" [ref=e452] [cursor=pointer]:
                      - text: Hospital ID
                      - img [ref=e454]
                  - columnheader "Hospital Internal ID" [ref=e457]:
                    - button "Hospital Internal ID" [ref=e458] [cursor=pointer]:
                      - text: Hospital Internal ID
                      - img [ref=e460]
                  - columnheader "Hospital Code" [ref=e463]:
                    - button "Hospital Code" [ref=e464] [cursor=pointer]:
                      - text: Hospital Code
                      - img [ref=e466]
                  - columnheader "Hospital Name" [ref=e469]:
                    - button "Hospital Name" [ref=e470] [cursor=pointer]:
                      - text: Hospital Name
                      - img [ref=e472]
                  - columnheader "Telephone Number" [ref=e475]
                  - columnheader "Email Address" [ref=e476]:
                    - button "Email Address" [ref=e477] [cursor=pointer]:
                      - text: Email Address
                      - img [ref=e479]
                  - columnheader "Address Line 1" [ref=e482]
                  - columnheader "Address Line 2" [ref=e483]
                  - columnheader "State" [ref=e484]:
                    - button "State" [ref=e485] [cursor=pointer]:
                      - text: State
                      - img [ref=e487]
                  - columnheader "Postal Code" [ref=e490]:
                    - button "Postal Code" [ref=e491] [cursor=pointer]:
                      - text: Postal Code
                      - img [ref=e493]
              - rowgroup [ref=e496]:
                - row "10042 HO40416 91337 AutoHospital_DF4169 NA autohospital_df4169@test.com NA NA" [ref=e497] [cursor=pointer]:
                  - cell "10042" [ref=e498]:
                    - generic [ref=e500]: "10042"
                  - cell "HO40416" [ref=e501]:
                    - generic [ref=e503]: HO40416
                  - cell "91337" [ref=e504]:
                    - generic [ref=e506]: "91337"
                  - cell "AutoHospital_DF4169" [ref=e507]:
                    - generic [ref=e509]: AutoHospital_DF4169
                  - cell "NA" [ref=e510]:
                    - generic [ref=e512]: NA
                  - cell "autohospital_df4169@test.com" [ref=e513]:
                    - generic [ref=e515]: autohospital_df4169@test.com
                  - cell [ref=e516]
                  - cell [ref=e517]
                  - cell "NA" [ref=e518]:
                    - generic [ref=e520]: NA
                  - cell "NA" [ref=e521]:
                    - generic [ref=e523]: NA
                - row "10041 HO51033 65665 AutoHospital_09A6F0 NA autohospital_09a6f0@test.com NA NA" [ref=e524] [cursor=pointer]:
                  - cell "10041" [ref=e525]:
                    - generic [ref=e527]: "10041"
                  - cell "HO51033" [ref=e528]:
                    - generic [ref=e530]: HO51033
                  - cell "65665" [ref=e531]:
                    - generic [ref=e533]: "65665"
                  - cell "AutoHospital_09A6F0" [ref=e534]:
                    - generic [ref=e536]: AutoHospital_09A6F0
                  - cell "NA" [ref=e537]:
                    - generic [ref=e539]: NA
                  - cell "autohospital_09a6f0@test.com" [ref=e540]:
                    - generic [ref=e542]: autohospital_09a6f0@test.com
                  - cell [ref=e543]
                  - cell [ref=e544]
                  - cell "NA" [ref=e545]:
                    - generic [ref=e547]: NA
                  - cell "NA" [ref=e548]:
                    - generic [ref=e550]: NA
                - row "10040 HO66554 57038 AutoHospital_4AF70B NA autohospital_4af70b@test.com NA NA" [ref=e551] [cursor=pointer]:
                  - cell "10040" [ref=e552]:
                    - generic [ref=e554]: "10040"
                  - cell "HO66554" [ref=e555]:
                    - generic [ref=e557]: HO66554
                  - cell "57038" [ref=e558]:
                    - generic [ref=e560]: "57038"
                  - cell "AutoHospital_4AF70B" [ref=e561]:
                    - generic [ref=e563]: AutoHospital_4AF70B
                  - cell "NA" [ref=e564]:
                    - generic [ref=e566]: NA
                  - cell "autohospital_4af70b@test.com" [ref=e567]:
                    - generic [ref=e569]: autohospital_4af70b@test.com
                  - cell [ref=e570]
                  - cell [ref=e571]
                  - cell "NA" [ref=e572]:
                    - generic [ref=e574]: NA
                  - cell "NA" [ref=e575]:
                    - generic [ref=e577]: NA
                - row "10039 HO46705 32063 AutoHospital_04788E NA autohospital_04788e@test.com NA NA" [ref=e578] [cursor=pointer]:
                  - cell "10039" [ref=e579]:
                    - generic [ref=e581]: "10039"
                  - cell "HO46705" [ref=e582]:
                    - generic [ref=e584]: HO46705
                  - cell "32063" [ref=e585]:
                    - generic [ref=e587]: "32063"
                  - cell "AutoHospital_04788E" [ref=e588]:
                    - generic [ref=e590]: AutoHospital_04788E
                  - cell "NA" [ref=e591]:
                    - generic [ref=e593]: NA
                  - cell "autohospital_04788e@test.com" [ref=e594]:
                    - generic [ref=e596]: autohospital_04788e@test.com
                  - cell [ref=e597]
                  - cell [ref=e598]
                  - cell "NA" [ref=e599]:
                    - generic [ref=e601]: NA
                  - cell "NA" [ref=e602]:
                    - generic [ref=e604]: NA
                - row "10038 HO12299 74134 AutoHospital_B99B1E NA autohospital_b99b1e@test.com NA NA" [ref=e605] [cursor=pointer]:
                  - cell "10038" [ref=e606]:
                    - generic [ref=e608]: "10038"
                  - cell "HO12299" [ref=e609]:
                    - generic [ref=e611]: HO12299
                  - cell "74134" [ref=e612]:
                    - generic [ref=e614]: "74134"
                  - cell "AutoHospital_B99B1E" [ref=e615]:
                    - generic [ref=e617]: AutoHospital_B99B1E
                  - cell "NA" [ref=e618]:
                    - generic [ref=e620]: NA
                  - cell "autohospital_b99b1e@test.com" [ref=e621]:
                    - generic [ref=e623]: autohospital_b99b1e@test.com
                  - cell [ref=e624]
                  - cell [ref=e625]
                  - cell "NA" [ref=e626]:
                    - generic [ref=e628]: NA
                  - cell "NA" [ref=e629]:
                    - generic [ref=e631]: NA
                - row "10037 HO55002 58468 AutoHospital_60FBB4 NA autohospital_60fbb4@test.com NA NA" [ref=e632] [cursor=pointer]:
                  - cell "10037" [ref=e633]:
                    - generic [ref=e635]: "10037"
                  - cell "HO55002" [ref=e636]:
                    - generic [ref=e638]: HO55002
                  - cell "58468" [ref=e639]:
                    - generic [ref=e641]: "58468"
                  - cell "AutoHospital_60FBB4" [ref=e642]:
                    - generic [ref=e644]: AutoHospital_60FBB4
                  - cell "NA" [ref=e645]:
                    - generic [ref=e647]: NA
                  - cell "autohospital_60fbb4@test.com" [ref=e648]:
                    - generic [ref=e650]: autohospital_60fbb4@test.com
                  - cell [ref=e651]
                  - cell [ref=e652]
                  - cell "NA" [ref=e653]:
                    - generic [ref=e655]: NA
                  - cell "NA" [ref=e656]:
                    - generic [ref=e658]: NA
                - row "10036 HO67698 39998 AutoHospital_B5C41A NA autohospital_b5c41a@test.com NA NA" [ref=e659] [cursor=pointer]:
                  - cell "10036" [ref=e660]:
                    - generic [ref=e662]: "10036"
                  - cell "HO67698" [ref=e663]:
                    - generic [ref=e665]: HO67698
                  - cell "39998" [ref=e666]:
                    - generic [ref=e668]: "39998"
                  - cell "AutoHospital_B5C41A" [ref=e669]:
                    - generic [ref=e671]: AutoHospital_B5C41A
                  - cell "NA" [ref=e672]:
                    - generic [ref=e674]: NA
                  - cell "autohospital_b5c41a@test.com" [ref=e675]:
                    - generic [ref=e677]: autohospital_b5c41a@test.com
                  - cell [ref=e678]
                  - cell [ref=e679]
                  - cell "NA" [ref=e680]:
                    - generic [ref=e682]: NA
                  - cell "NA" [ref=e683]:
                    - generic [ref=e685]: NA
                - row "10035 HO82664 79631 AutoHospital_B1A25C NA autohospital_b1a25c@test.com NA NA" [ref=e686] [cursor=pointer]:
                  - cell "10035" [ref=e687]:
                    - generic [ref=e689]: "10035"
                  - cell "HO82664" [ref=e690]:
                    - generic [ref=e692]: HO82664
                  - cell "79631" [ref=e693]:
                    - generic [ref=e695]: "79631"
                  - cell "AutoHospital_B1A25C" [ref=e696]:
                    - generic [ref=e698]: AutoHospital_B1A25C
                  - cell "NA" [ref=e699]:
                    - generic [ref=e701]: NA
                  - cell "autohospital_b1a25c@test.com" [ref=e702]:
                    - generic [ref=e704]: autohospital_b1a25c@test.com
                  - cell [ref=e705]
                  - cell [ref=e706]
                  - cell "NA" [ref=e707]:
                    - generic [ref=e709]: NA
                  - cell "NA" [ref=e710]:
                    - generic [ref=e712]: NA
                - row "10034 HO60253 68578 AutoHospital_5D4AFC NA autohospital_5d4afc@test.com NA NA" [ref=e713] [cursor=pointer]:
                  - cell "10034" [ref=e714]:
                    - generic [ref=e716]: "10034"
                  - cell "HO60253" [ref=e717]:
                    - generic [ref=e719]: HO60253
                  - cell "68578" [ref=e720]:
                    - generic [ref=e722]: "68578"
                  - cell "AutoHospital_5D4AFC" [ref=e723]:
                    - generic [ref=e725]: AutoHospital_5D4AFC
                  - cell "NA" [ref=e726]:
                    - generic [ref=e728]: NA
                  - cell "autohospital_5d4afc@test.com" [ref=e729]:
                    - generic [ref=e731]: autohospital_5d4afc@test.com
                  - cell [ref=e732]
                  - cell [ref=e733]
                  - cell "NA" [ref=e734]:
                    - generic [ref=e736]: NA
                  - cell "NA" [ref=e737]:
                    - generic [ref=e739]: NA
                - row "10033 HO93765 80580 AutoHospital_4D698F NA autohospital_4d698f@test.com NA NA" [ref=e740] [cursor=pointer]:
                  - cell "10033" [ref=e741]:
                    - generic [ref=e743]: "10033"
                  - cell "HO93765" [ref=e744]:
                    - generic [ref=e746]: HO93765
                  - cell "80580" [ref=e747]:
                    - generic [ref=e749]: "80580"
                  - cell "AutoHospital_4D698F" [ref=e750]:
                    - generic [ref=e752]: AutoHospital_4D698F
                  - cell "NA" [ref=e753]:
                    - generic [ref=e755]: NA
                  - cell "autohospital_4d698f@test.com" [ref=e756]:
                    - generic [ref=e758]: autohospital_4d698f@test.com
                  - cell [ref=e759]
                  - cell [ref=e760]
                  - cell "NA" [ref=e761]:
                    - generic [ref=e763]: NA
                  - cell "NA" [ref=e764]:
                    - generic [ref=e766]: NA
            - generic [ref=e767]:
              - generic [ref=e769]:
                - generic [ref=e770]: "Rows per page:"
                - generic [ref=e772]:
                  - log [ref=e774]
                  - generic [ref=e775]:
                    - generic [ref=e776]:
                      - generic [ref=e777]: "10"
                      - 'combobox "Rows per page: 10" [ref=e779]'
                    - img [ref=e782]
              - generic [ref=e785]:
                - button "Previous" [disabled] [ref=e786]:
                  - img [ref=e787]
                  - generic [ref=e789]: Previous
                - generic [ref=e790]:
                  - button "1" [ref=e791] [cursor=pointer]
                  - button "2" [ref=e792] [cursor=pointer]
                  - button "3" [ref=e793] [cursor=pointer]
                  - button "4" [ref=e794] [cursor=pointer]
                - button "Next" [ref=e795] [cursor=pointer]:
                  - generic [ref=e796]: Next
                  - img [ref=e797]
  - region "Notifications alt+T"
```

# Test source

```ts
  161 |     const blocked = await checkValidation(page, modal);
  162 |     saveResult('TC-HSP-007', blocked ? 'pass' : 'fail',
  163 |       blocked ? 'Invalid email format blocked form submission' : 'Form accepted "invalidemail" without error');
  164 |     expect(blocked).toBeTruthy();
  165 |   });
  166 | 
  167 |   test('TC-HSP-008: Valid email format is accepted in the Email field', async ({ page }) => {
  168 |     const mp = new MastersPage(page);
  169 |     await navToSection(mp, 'Hospital');
  170 |     await openForm(mp);
  171 |     const modal = page.locator(MODAL).last();
  172 |     await modal.getByPlaceholder('Email Address').fill('valid@email.com').catch(() => {});
  173 |     await page.waitForTimeout(500);
  174 |     const errVisible = await page.locator('[class*="error"]').first().isVisible({ timeout: 1500 }).catch(() => false);
  175 |     await page.keyboard.press('Escape').catch(() => {});
  176 |     saveResult('TC-HSP-008', !errVisible ? 'pass' : 'fail',
  177 |       !errVisible ? 'Valid email accepted without inline error' : 'Error shown immediately for a valid email format');
  178 |   });
  179 | 
  180 |   test('TC-HSP-009: Submitting blank Hospital form blocks submission with errors', async ({ page }) => {
  181 |     const mp = new MastersPage(page);
  182 |     await navToSection(mp, 'Hospital');
  183 |     await openForm(mp);
  184 |     const modal = page.locator(MODAL).last();
  185 |     await mp.submitForm();
  186 |     await page.waitForTimeout(2000);
  187 |     const modalOpen = await modal.isVisible({ timeout: 3000 }).catch(() => false);
  188 |     saveResult('TC-HSP-009', modalOpen ? 'pass' : 'fail',
  189 |       modalOpen ? 'Blank form submission blocked — form remained open' : 'Blank form submitted without validation');
  190 |     expect(modalOpen).toBeTruthy();
  191 |   });
  192 | 
  193 |   test('TC-HSP-010: Hospital Code field accepts alphanumeric characters', async ({ page }) => {
  194 |     const mp = new MastersPage(page);
  195 |     await navToSection(mp, 'Hospital');
  196 |     await openForm(mp);
  197 |     const modal = page.locator(MODAL).last();
  198 |     const field = modal.getByPlaceholder('Hospital Code');
  199 |     await field.fill('ALPHA123').catch(() => {});
  200 |     const val = await field.inputValue().catch(() => '');
  201 |     await page.keyboard.press('Escape').catch(() => {});
  202 |     saveResult('TC-HSP-010', val === 'ALPHA123' ? 'pass' : 'fail',
  203 |       val === 'ALPHA123' ? 'Alphanumeric input accepted in Hospital Code' : `Field showed "${val}" instead of "ALPHA123"`);
  204 |   });
  205 | 
  206 |   test('TC-HSP-011: Hospital list displays correct data for created record', async ({ page }) => {
  207 |     const data = loadCreatedData();
  208 |     const name = data.hospital?.name;
  209 |     if (!name) { saveResult('TC-HSP-011', 'pending', 'No hospital in created-data.json'); return; }
  210 |     const mp = new MastersPage(page);
  211 |     await navToSection(mp, 'Hospital');
  212 |     await page.waitForTimeout(2000);
  213 |     const text = await page.evaluate(() => document.body.innerText);
  214 |     saveResult('TC-HSP-011', text.includes(name) ? 'pass' : 'fail',
  215 |       text.includes(name) ? 'Hospital record visible with correct data' : `"${name}" not found in list view`);
  216 |     expect(text.includes(name)).toBeTruthy();
  217 |   });
  218 | 
  219 |   test('TC-HSP-012: Editing an existing Hospital record saves the updated name', async ({ page }) => {
  220 |     const data = loadCreatedData();
  221 |     const name = data.hospital?.name;
  222 |     if (!name) { saveResult('TC-HSP-012', 'pending', 'No hospital in created-data.json — skip edit test'); return; }
  223 |     const mp = new MastersPage(page);
  224 |     await navToSection(mp, 'Hospital');
  225 |     await page.waitForTimeout(2000);
  226 |     const row = page.locator(`tr:has-text("${name}"), [class*="row"]:has-text("${name}")`).first();
  227 |     if (!(await row.isVisible({ timeout: 5000 }).catch(() => false))) {
  228 |       saveResult('TC-HSP-012', 'pending', `Row for "${name}" not visible — may be on different page`);
  229 |       return;
  230 |     }
  231 |     const editBtn = row.locator('button, a, [class*="edit"]').first();
  232 |     if (!(await editBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
  233 |       saveResult('TC-HSP-012', 'pending', 'Edit button not found in Hospital row — UI may use different interaction pattern');
  234 |       return;
  235 |     }
  236 |     await editBtn.click({ force: true });
  237 |     await page.waitForTimeout(1500);
  238 |     const modal = page.locator(MODAL).last();
  239 |     if (!(await modal.isVisible({ timeout: 5000 }).catch(() => false))) {
  240 |       saveResult('TC-HSP-012', 'pending', 'Edit modal did not open after clicking edit');
  241 |       return;
  242 |     }
  243 |     const nameField = modal.getByPlaceholder('Hospital Name');
  244 |     await nameField.clear().catch(() => {});
  245 |     await nameField.fill(`${name}_Edited`).catch(() => {});
  246 |     await mp.submitForm();
  247 |     await page.waitForTimeout(2000);
  248 |     const closed = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  249 |     saveResult('TC-HSP-012', closed ? 'pass' : 'fail',
  250 |       closed ? 'Hospital edited and saved — form closed successfully' : 'Edit form did not close after saving');
  251 |   });
  252 | 
  253 |   test('TC-HSP-013: Cancel button closes Hospital form without saving', async ({ page }) => {
  254 |     const mp = new MastersPage(page);
  255 |     await navToSection(mp, 'Hospital');
  256 |     await openForm(mp);
  257 |     const modal = page.locator(MODAL).last();
  258 |     await modal.getByPlaceholder('Hospital Name').fill('ShouldNotSave').catch(() => {});
  259 |     const cancelBtn = page.locator('button:has-text("Cancel"), button:has-text("Close"), [class*="close"]').first();
  260 |     if (await cancelBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
> 261 |       await cancelBtn.click({ force: true });
      |                       ^ Error: locator.click: Element is outside of the viewport
  262 |     } else {
  263 |       await page.keyboard.press('Escape');
  264 |     }
  265 |     await page.waitForTimeout(1000);
  266 |     const gone = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  267 |     saveResult('TC-HSP-013', gone ? 'pass' : 'fail',
  268 |       gone ? 'Hospital form closed on Cancel without saving' : 'Hospital form still visible after Cancel');
  269 |   });
  270 | 
  271 |   test('TC-HSP-014: Searching by hospital name returns matching records', async ({ page }) => {
  272 |     const data = loadCreatedData();
  273 |     const name = data.hospital?.name;
  274 |     if (!name) { saveResult('TC-HSP-014', 'pending', 'No hospital in created-data.json'); return; }
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
```