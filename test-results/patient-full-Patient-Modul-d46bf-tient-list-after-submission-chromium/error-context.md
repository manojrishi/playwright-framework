# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: patient-full.spec.ts >> Patient Module >> TC-PAT-003: Created patient appears in Patient list after submission
- Location: tests/patient-full.spec.ts:125:7

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
          - link "Patient" [active] [ref=e12]:
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
        - list:
          - listitem [ref=e47] [cursor=pointer]:
            - link "Hospitals" [ref=e48]:
              - /url: /app/hospital
              - generic [ref=e50]: Hospitals
          - listitem [ref=e51] [cursor=pointer]:
            - link "HCPs" [ref=e52]:
              - /url: /app/hcp
              - generic [ref=e54]: HCPs
          - listitem [ref=e55] [cursor=pointer]:
            - link "AF Bodies" [ref=e56]:
              - /url: /app/af-body
              - generic [ref=e58]: AF Bodies
          - listitem [ref=e59] [cursor=pointer]:
            - link "Bumi Agents" [ref=e60]:
              - /url: /app/bhumi-agent
              - generic [ref=e62]: Bumi Agents
        - listitem [ref=e63] [cursor=pointer]:
          - link "Tasks" [ref=e64]:
            - /url: /app/task
            - img [ref=e66]
            - generic [ref=e68]: Tasks
        - listitem [ref=e69] [cursor=pointer]:
          - generic [ref=e70]:
            - img [ref=e72]
            - generic [ref=e85]: Reports
            - img [ref=e87]
        - list:
          - listitem [ref=e89] [cursor=pointer]:
            - link "Enrolled Patient Report" [ref=e90]:
              - /url: /app/enrolled-patients
              - generic [ref=e92]: Enrolled Patient Report
          - listitem [ref=e93] [cursor=pointer]:
            - link "Patients by AF Status Report" [ref=e94]:
              - /url: /app/enrolled-patients-by-af-status
              - generic [ref=e96]: Patients by AF Status Report
          - listitem [ref=e97] [cursor=pointer]:
            - link "Total AF Submitted Report" [ref=e98]:
              - /url: /app/af-submitted-by-body
              - generic [ref=e100]: Total AF Submitted Report
          - listitem [ref=e101] [cursor=pointer]:
            - link "Total AF Approved Report" [ref=e102]:
              - /url: /app/af-approved-by-body
              - generic [ref=e104]: Total AF Approved Report
          - listitem [ref=e105] [cursor=pointer]:
            - link "Patient Enrolment by Hospitals" [ref=e106]:
              - /url: /app/hospital-enrolment
              - generic [ref=e108]: Patient Enrolment by Hospitals
          - listitem [ref=e109] [cursor=pointer]:
            - link "Enrolled Patients and Milestones" [ref=e110]:
              - /url: /app/enrolled-patients-and-milestones
              - generic [ref=e112]: Enrolled Patients and Milestones
        - listitem [ref=e113] [cursor=pointer]:
          - generic [ref=e114]:
            - img [ref=e116]
            - generic [ref=e121]: KPI
            - img [ref=e123]
        - list:
          - listitem [ref=e125] [cursor=pointer]:
            - 'link "Welcome Call - #Days" [ref=e126]':
              - /url: /app/kpi
              - generic [ref=e128]: "Welcome Call - #Days"
          - listitem [ref=e129] [cursor=pointer]:
            - link "Welcome Call 3 Attempts" [ref=e130]:
              - /url: /app/welcome-call-3-attempts
              - generic [ref=e132]: Welcome Call 3 Attempts
          - listitem [ref=e133] [cursor=pointer]:
            - link "Application Submission follow-up" [ref=e134]:
              - /url: /app/submission-confirmation-kpi
              - generic [ref=e136]: Application Submission follow-up
          - listitem [ref=e137] [cursor=pointer]:
            - link "Quotation Turnaround" [ref=e138]:
              - /url: /app/app-submission-follow-up-kpi
              - generic [ref=e140]: Quotation Turnaround
          - listitem [ref=e141] [cursor=pointer]:
            - link "Long-Pending AF Cases" [ref=e142]:
              - /url: /app/long-pending-af-cases-kpi
              - generic [ref=e144]: Long-Pending AF Cases
          - listitem [ref=e145] [cursor=pointer]:
            - link "Inactive Patients" [ref=e146]:
              - /url: /app/drop-inactive-patient-kpi
              - generic [ref=e148]: Inactive Patients
        - listitem [ref=e149] [cursor=pointer]:
          - generic [ref=e150]:
            - img [ref=e152]
            - generic [ref=e156]: Configurations
            - img [ref=e158]
        - list:
          - listitem [ref=e160] [cursor=pointer]:
            - link "Speciality" [ref=e161]:
              - /url: /app/speciality
              - generic [ref=e163]: Speciality
          - listitem [ref=e164] [cursor=pointer]:
            - link "Medication" [ref=e165]:
              - /url: /app/medication
              - generic [ref=e167]: Medication
        - listitem [ref=e168] [cursor=pointer]:
          - generic [ref=e169]:
            - img [ref=e171]
            - generic [ref=e178]: Communication
            - img [ref=e180]
        - list:
          - listitem [ref=e182] [cursor=pointer]:
            - link "Emails" [ref=e183]:
              - /url: /app/email
              - generic [ref=e185]: Emails
          - listitem [ref=e186] [cursor=pointer]:
            - link "Whatsapp" [ref=e187]:
              - /url: /app/whatsapp
              - generic [ref=e189]: Whatsapp
          - listitem [ref=e190] [cursor=pointer]:
            - link "Calls" [ref=e191]:
              - /url: /app/call
              - generic [ref=e193]: Calls
        - listitem [ref=e194] [cursor=pointer]:
          - link "My Downloads" [ref=e195]:
            - /url: /app/downloads
            - img [ref=e197]
            - generic [ref=e200]: My Downloads
        - listitem [ref=e201] [cursor=pointer]:
          - link "📄 Dashboard" [ref=e202]:
            - /url: /app/dashboard
            - generic [ref=e203]: 📄
            - generic [ref=e204]: Dashboard
    - generic [ref=e205]:
      - generic [ref=e206]:
        - generic [ref=e210] [cursor=pointer]:
          - generic [ref=e211]:
            - img "Profile" [ref=e212]
            - generic [ref=e213]:
              - generic [ref=e214]: Arun Singh
              - generic [ref=e215]: PAP Executive
          - img [ref=e216]
        - generic [ref=e218]:
          - button [ref=e220] [cursor=pointer]:
            - img [ref=e221]
          - generic [ref=e224]:
            - generic [ref=e226]:
              - img [ref=e227]
              - img [ref=e230] [cursor=pointer]
            - generic [ref=e232]:
              - heading "Welcome!" [level=2] [ref=e233]
              - img [ref=e235]
          - generic [ref=e239]:
            - generic [ref=e240]:
              - button "Account" [ref=e241] [cursor=pointer]
              - button "Security" [ref=e242] [cursor=pointer]
            - generic [ref=e244]:
              - generic [ref=e245]:
                - img [ref=e246]
                - heading "Complete Your Profile" [level=3] [ref=e249]
                - paragraph [ref=e250]: Add your name and other details to personalize your account. Click the edit button next to each field to get started.
              - generic [ref=e251]:
                - generic [ref=e252]:
                  - generic [ref=e253]: Name
                  - button "Edit" [ref=e254] [cursor=pointer]
                - generic [ref=e256]: Click edit to add your name
              - generic [ref=e257]:
                - text: Roles
                - generic [ref=e259]:
                  - generic [ref=e260]:
                    - img [ref=e261]
                    - generic [ref=e264]: Admin
                  - generic [ref=e265]: Current
              - button "Log Out" [ref=e267] [cursor=pointer]:
                - img [ref=e268]
                - generic [ref=e271]: Log Out
      - generic [ref=e275]:
        - generic [ref=e278]:
          - heading "Patients (60)" [level=1] [ref=e279]:
            - generic [ref=e280]: Patients
            - generic [ref=e281]: (60)
          - button "Add New Patient" [ref=e283] [cursor=pointer]
        - generic [ref=e284]:
          - generic [ref=e287]:
            - heading "Filters" [level=3] [ref=e290]
            - generic [ref=e292]:
              - generic [ref=e293]:
                - button "Patient ID" [ref=e294] [cursor=pointer]:
                  - generic [ref=e297]: Patient ID
                  - img [ref=e300]
                - generic [ref=e305]:
                  - generic:
                    - img
                  - textbox "Search patient id" [ref=e306]
              - generic [ref=e307]:
                - button "Patient Internal ID" [ref=e308] [cursor=pointer]:
                  - generic [ref=e311]: Patient Internal ID
                  - img [ref=e314]
                - generic [ref=e319]:
                  - generic:
                    - img
                  - textbox "Search patient internal id" [ref=e320]
              - generic [ref=e321]:
                - button "Patient Name" [ref=e322] [cursor=pointer]:
                  - generic [ref=e325]: Patient Name
                  - img [ref=e328]
                - generic [ref=e333]:
                  - generic:
                    - img
                  - textbox "Search patient name" [ref=e334]
              - generic [ref=e335]:
                - button "Indication" [ref=e336] [cursor=pointer]:
                  - generic [ref=e339]: Indication
                  - img [ref=e342]
                - generic [ref=e348]:
                  - log [ref=e350]
                  - generic [ref=e351]:
                    - generic [ref=e352]:
                      - generic [ref=e353]: Select Indication
                      - combobox [ref=e355]
                    - img [ref=e358]
              - generic [ref=e360]:
                - button "NRIC" [ref=e361] [cursor=pointer]:
                  - generic [ref=e364]: NRIC
                  - img [ref=e367]
                - generic [ref=e372]:
                  - generic:
                    - img
                  - textbox "Search nric" [ref=e373]
              - generic [ref=e374]:
                - button "Contact Number" [ref=e375] [cursor=pointer]:
                  - generic [ref=e378]: Contact Number
                  - img [ref=e381]
                - generic [ref=e386]:
                  - generic:
                    - img
                  - textbox "Search contact number" [ref=e387]
              - generic [ref=e388]:
                - button "Email Address" [ref=e389] [cursor=pointer]:
                  - generic [ref=e392]: Email Address
                  - img [ref=e395]
                - generic [ref=e400]:
                  - generic:
                    - img
                  - textbox "Search email address" [ref=e401]
              - generic [ref=e402]:
                - button "Hospital Name" [ref=e403] [cursor=pointer]:
                  - generic [ref=e406]: Hospital Name
                  - img [ref=e409]
                - generic [ref=e414]:
                  - generic:
                    - img
                  - textbox "Search hospital name" [ref=e415]
              - generic [ref=e416]:
                - button "Hospital State" [ref=e417] [cursor=pointer]:
                  - generic [ref=e420]: Hospital State
                  - img [ref=e423]
                - generic [ref=e428]:
                  - generic:
                    - img
                  - textbox "Search hospital state" [ref=e429]
              - generic [ref=e430]:
                - button "HCP Name" [ref=e431] [cursor=pointer]:
                  - generic [ref=e434]: HCP Name
                  - img [ref=e437]
                - generic [ref=e442]:
                  - generic:
                    - img
                  - textbox "Search hcp name" [ref=e443]
              - generic [ref=e444]:
                - button "Specialty" [ref=e445] [cursor=pointer]:
                  - generic [ref=e448]: Specialty
                  - img [ref=e451]
                - generic [ref=e456]:
                  - generic:
                    - img
                  - textbox "Search specialty" [ref=e457]
              - generic [ref=e458]:
                - button "Enrolment Date" [ref=e459] [cursor=pointer]:
                  - generic [ref=e462]: Enrolment Date
                  - img [ref=e465]
                - generic [ref=e473]:
                  - generic [ref=e474]:
                    - textbox "From" [ref=e475]
                    - paragraph [ref=e476]: Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                  - generic [ref=e477]: "-"
                  - generic [ref=e478]:
                    - textbox "To" [ref=e479]
                    - paragraph [ref=e480]: Navigate backward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                  - button "Interact with the calendar and add the check-in date for your trip." [ref=e481] [cursor=pointer]:
                    - img [ref=e482]
              - generic [ref=e484]:
                - button "Discontinuation Reason" [ref=e485] [cursor=pointer]:
                  - generic [ref=e488]: Discontinuation Reason
                  - img [ref=e491]
                - generic [ref=e496]:
                  - generic:
                    - img
                  - textbox "Search discontinuation reason" [ref=e497]
              - generic [ref=e498]:
                - button "Discontinuation Date" [ref=e499] [cursor=pointer]:
                  - generic [ref=e502]: Discontinuation Date
                  - img [ref=e505]
                - generic [ref=e513]:
                  - generic [ref=e514]:
                    - textbox "From" [ref=e515]
                    - paragraph [ref=e516]: Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                  - generic [ref=e517]: "-"
                  - generic [ref=e518]:
                    - textbox "To" [ref=e519]
                    - paragraph [ref=e520]: Navigate backward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                  - button "Interact with the calendar and add the check-in date for your trip." [ref=e521] [cursor=pointer]:
                    - img [ref=e522]
              - generic [ref=e524]:
                - button "Enrollment Status" [ref=e525] [cursor=pointer]:
                  - generic [ref=e528]: Enrollment Status
                  - img [ref=e531]
                - generic [ref=e537]:
                  - log [ref=e539]
                  - generic [ref=e540]:
                    - generic [ref=e541]:
                      - generic [ref=e542]: Select Enrollment Status
                      - combobox [ref=e544]
                    - img [ref=e547]
          - generic [ref=e549]:
            - generic [ref=e551]:
              - button "Filters" [ref=e553] [cursor=pointer]:
                - img [ref=e554]
                - text: Filters
              - generic [ref=e558]:
                - generic [ref=e561]:
                  - generic:
                    - img
                  - textbox "Search..." [ref=e562]
                - button "Download" [ref=e563] [cursor=pointer]:
                  - img [ref=e564]
                - generic [ref=e569]:
                  - button "View" [ref=e571] [cursor=pointer]:
                    - img [ref=e572]
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
                        - generic: Patient ID
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
                        - generic: Patient Internal ID
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
                        - generic: Patient Name
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
                        - generic: Indication
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
                        - generic: NRIC
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
                        - generic: Hospital State
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
                        - generic: Specialty
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
                        - generic: Enrolment Date
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
                        - generic: Consent Form
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
                      - generic:
                        - generic:
                          - checkbox [checked]
                        - generic: Enrollment Status
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
                        - generic: Caregiver Name
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
                        - generic: Caregiver Addition Date
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
                        - generic: Caregiver's Contact Number
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
                        - generic: Caregiver's Relationship with patient
                        - generic:
                          - button:
                            - img
                          - button "Toggle text wrapping":
                            - img
                          - generic:
                            - img
            - table [ref=e577]:
              - rowgroup [ref=e578]:
                - row "Patient ID Patient Internal ID Patient Name Indication NRIC Contact Number Email Address Hospital Name Hospital State HCP Name Specialty Enrolment Date Consent Form Discontinuation Reason Discontinuation Date Enrollment Status Notes Caregiver Name Caregiver Addition Date Caregiver's Contact Number Caregiver's Relationship with patient" [ref=e579]:
                  - columnheader "Patient ID" [ref=e580]:
                    - button "Patient ID" [ref=e581] [cursor=pointer]:
                      - text: Patient ID
                      - img [ref=e583]
                  - columnheader "Patient Internal ID" [ref=e586]:
                    - button "Patient Internal ID" [ref=e587] [cursor=pointer]:
                      - text: Patient Internal ID
                      - img [ref=e589]
                  - columnheader "Patient Name" [ref=e592]:
                    - button "Patient Name" [ref=e593] [cursor=pointer]:
                      - text: Patient Name
                      - img [ref=e595]
                  - columnheader "Indication" [ref=e598]:
                    - button "Indication" [ref=e599] [cursor=pointer]:
                      - text: Indication
                      - img [ref=e601]
                  - columnheader "NRIC" [ref=e604]:
                    - button "NRIC" [ref=e605] [cursor=pointer]:
                      - text: NRIC
                      - img [ref=e607]
                  - columnheader "Contact Number" [ref=e610]
                  - columnheader "Email Address" [ref=e611]:
                    - button "Email Address" [ref=e612] [cursor=pointer]:
                      - text: Email Address
                      - img [ref=e614]
                  - columnheader "Hospital Name" [ref=e617]:
                    - button "Hospital Name" [ref=e618] [cursor=pointer]:
                      - text: Hospital Name
                      - img [ref=e620]
                  - columnheader "Hospital State" [ref=e623]:
                    - button "Hospital State" [ref=e624] [cursor=pointer]:
                      - text: Hospital State
                      - img [ref=e626]
                  - columnheader "HCP Name" [ref=e629]:
                    - button "HCP Name" [ref=e630] [cursor=pointer]:
                      - text: HCP Name
                      - img [ref=e632]
                  - columnheader "Specialty" [ref=e635]:
                    - button "Specialty" [ref=e636] [cursor=pointer]:
                      - text: Specialty
                      - img [ref=e638]
                  - columnheader "Enrolment Date" [ref=e641]:
                    - button "Enrolment Date" [ref=e642] [cursor=pointer]:
                      - text: Enrolment Date
                      - img [ref=e644]
                  - columnheader "Consent Form" [ref=e647]
                  - columnheader "Discontinuation Reason" [ref=e648]
                  - columnheader "Discontinuation Date" [ref=e649]:
                    - button "Discontinuation Date" [ref=e650] [cursor=pointer]:
                      - text: Discontinuation Date
                      - img [ref=e652]
                  - columnheader "Enrollment Status" [ref=e655]:
                    - button "Enrollment Status" [ref=e656] [cursor=pointer]:
                      - text: Enrollment Status
                      - img [ref=e658]
                  - columnheader "Notes" [ref=e661]
                  - columnheader "Caregiver Name" [ref=e662]:
                    - button "Caregiver Name" [ref=e663] [cursor=pointer]:
                      - text: Caregiver Name
                      - img [ref=e665]
                  - columnheader "Caregiver Addition Date" [ref=e668]:
                    - button "Caregiver Addition Date" [ref=e669] [cursor=pointer]:
                      - text: Caregiver Addition Date
                      - img [ref=e671]
                  - columnheader "Caregiver's Contact Number" [ref=e674]
                  - columnheader "Caregiver's Relationship with patient" [ref=e675]:
                    - button "Caregiver's Relationship with patient" [ref=e676] [cursor=pointer]:
                      - text: Caregiver's Relationship with patient
                      - img [ref=e678]
              - rowgroup [ref=e681]:
                - row "10103 NA AutoPatient 09A6F0 Plaque Psoriasis (PsO) 789943108981 +60367501046 autopatient_09a6f0@test.com AutoHospital_09A6F0 NA AutoHCP_09A6F0 Dermatology 07 April 2026 NA NA Enrolled NA NA NA NA" [ref=e682] [cursor=pointer]:
                  - cell "10103" [ref=e683]:
                    - generic [ref=e685]: "10103"
                  - cell "NA" [ref=e686]:
                    - generic [ref=e688]: NA
                  - cell "AutoPatient 09A6F0" [ref=e689]:
                    - generic [ref=e691]: AutoPatient 09A6F0
                  - cell "Plaque Psoriasis (PsO)" [ref=e692]:
                    - generic [ref=e694]: Plaque Psoriasis (PsO)
                  - cell "789943108981" [ref=e695]:
                    - generic [ref=e697]: "789943108981"
                  - cell "+60367501046" [ref=e698]:
                    - generic [ref=e700]: "+60367501046"
                  - cell "autopatient_09a6f0@test.com" [ref=e701]:
                    - generic [ref=e703]: autopatient_09a6f0@test.com
                  - cell "AutoHospital_09A6F0" [ref=e704]:
                    - generic [ref=e706]: AutoHospital_09A6F0
                  - cell "NA" [ref=e707]:
                    - generic [ref=e709]: NA
                  - cell "AutoHCP_09A6F0" [ref=e710]:
                    - generic [ref=e712]: AutoHCP_09A6F0
                  - cell "Dermatology" [ref=e713]:
                    - generic [ref=e715]: Dermatology
                  - cell "07 April 2026" [ref=e716]:
                    - generic [ref=e718]: 07 April 2026
                  - cell [ref=e719]:
                    - link [ref=e723]:
                      - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/6f789055-47fc-4c9b-b6f5-43c1828019b7.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064208Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ec814db08034db4969f21a0d440e474b6c909ced37aa39ddd7a53eb10a0aaaad
                      - img [ref=e724]
                  - cell "NA" [ref=e729]:
                    - generic [ref=e731]: NA
                  - cell "NA" [ref=e732]:
                    - generic [ref=e734]: NA
                  - cell "Enrolled" [ref=e735]:
                    - generic [ref=e739]: Enrolled
                  - cell [ref=e740]
                  - cell "NA" [ref=e741]:
                    - generic [ref=e743]: NA
                  - cell "NA" [ref=e744]:
                    - generic [ref=e746]: NA
                  - cell "NA" [ref=e747]:
                    - generic [ref=e749]: NA
                  - cell "NA" [ref=e750]:
                    - generic [ref=e752]: NA
                - row "10102 NA AutoPatient 982905 Plaque Psoriasis (PsO) 797232107415 +60341865208 autopatient_982905@test.com AutoHospital_4AF70B NA AutoHCP_4AF70B Dermatology 07 April 2026 NA NA Enrolled NA NA NA NA" [ref=e753] [cursor=pointer]:
                  - cell "10102" [ref=e754]:
                    - generic [ref=e756]: "10102"
                  - cell "NA" [ref=e757]:
                    - generic [ref=e759]: NA
                  - cell "AutoPatient 982905" [ref=e760]:
                    - generic [ref=e762]: AutoPatient 982905
                  - cell "Plaque Psoriasis (PsO)" [ref=e763]:
                    - generic [ref=e765]: Plaque Psoriasis (PsO)
                  - cell "797232107415" [ref=e766]:
                    - generic [ref=e768]: "797232107415"
                  - cell "+60341865208" [ref=e769]:
                    - generic [ref=e771]: "+60341865208"
                  - cell "autopatient_982905@test.com" [ref=e772]:
                    - generic [ref=e774]: autopatient_982905@test.com
                  - cell "AutoHospital_4AF70B" [ref=e775]:
                    - generic [ref=e777]: AutoHospital_4AF70B
                  - cell "NA" [ref=e778]:
                    - generic [ref=e780]: NA
                  - cell "AutoHCP_4AF70B" [ref=e781]:
                    - generic [ref=e783]: AutoHCP_4AF70B
                  - cell "Dermatology" [ref=e784]:
                    - generic [ref=e786]: Dermatology
                  - cell "07 April 2026" [ref=e787]:
                    - generic [ref=e789]: 07 April 2026
                  - cell [ref=e790]:
                    - link [ref=e794]:
                      - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/536f0e81-5a92-4ace-aa90-b24fc0b77e8e.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064208Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b7a2504799c7539fb8dbc72e5e37d50141fb982f6477728aae0caefb850e075c
                      - img [ref=e795]
                  - cell "NA" [ref=e800]:
                    - generic [ref=e802]: NA
                  - cell "NA" [ref=e803]:
                    - generic [ref=e805]: NA
                  - cell "Enrolled" [ref=e806]:
                    - generic [ref=e810]: Enrolled
                  - cell [ref=e811]
                  - cell "NA" [ref=e812]:
                    - generic [ref=e814]: NA
                  - cell "NA" [ref=e815]:
                    - generic [ref=e817]: NA
                  - cell "NA" [ref=e818]:
                    - generic [ref=e820]: NA
                  - cell "NA" [ref=e821]:
                    - generic [ref=e823]: NA
                - row "10101 NA 31 March Non-radiographic axial spondyloarthritis (nr-axSpA) 3131 +6088711198 31march@test.com Hospital Serdang NA AHMAD ZAKIYY BIN MOHAMED Rheumatology 31 March 2026 NA NA Active NA NA NA NA" [ref=e824] [cursor=pointer]:
                  - cell "10101" [ref=e825]:
                    - generic [ref=e827]: "10101"
                  - cell "NA" [ref=e828]:
                    - generic [ref=e830]: NA
                  - cell "31 March" [ref=e831]:
                    - generic [ref=e833]: 31 March
                  - cell "Non-radiographic axial spondyloarthritis (nr-axSpA)" [ref=e834]:
                    - generic [ref=e836]: Non-radiographic axial spondyloarthritis (nr-axSpA)
                  - cell "3131" [ref=e837]:
                    - generic [ref=e839]: "3131"
                  - cell "+6088711198" [ref=e840]:
                    - generic [ref=e842]: "+6088711198"
                  - cell "31march@test.com" [ref=e843]:
                    - generic [ref=e845]: 31march@test.com
                  - cell "Hospital Serdang" [ref=e846]:
                    - generic [ref=e848]: Hospital Serdang
                  - cell "NA" [ref=e849]:
                    - generic [ref=e851]: NA
                  - cell "AHMAD ZAKIYY BIN MOHAMED" [ref=e852]:
                    - generic [ref=e854]: AHMAD ZAKIYY BIN MOHAMED
                  - cell "Rheumatology" [ref=e855]:
                    - generic [ref=e857]: Rheumatology
                  - cell "31 March 2026" [ref=e858]:
                    - generic [ref=e860]: 31 March 2026
                  - cell [ref=e861]:
                    - link [ref=e865]:
                      - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/75bd0b27-eaa8-4e03-9379-ebe12f74bc58.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064208Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=621915b313108b18a0b9d9d9039e5e2c3cdb4f59a4a93857dc0e980d3ae618bb
                      - img [ref=e866]
                  - cell "NA" [ref=e871]:
                    - generic [ref=e873]: NA
                  - cell "NA" [ref=e874]:
                    - generic [ref=e876]: NA
                  - cell "Active" [ref=e877]:
                    - generic [ref=e881]: Active
                  - cell [ref=e882]
                  - cell "NA" [ref=e883]:
                    - generic [ref=e885]: NA
                  - cell "NA" [ref=e886]:
                    - generic [ref=e888]: NA
                  - cell "NA" [ref=e889]:
                    - generic [ref=e891]: NA
                  - cell "NA" [ref=e892]:
                    - generic [ref=e894]: NA
                - row "10100 NA Patient One BRAF 1123 +6088710923 patientone@test.com Hospital Putrajaya NA NAZATUL SHIMA ABDUL RAHIM Dermatology 13 March 2026 NA NA Active NA NA NA NA" [ref=e895] [cursor=pointer]:
                  - cell "10100" [ref=e896]:
                    - generic [ref=e898]: "10100"
                  - cell "NA" [ref=e899]:
                    - generic [ref=e901]: NA
                  - cell "Patient One" [ref=e902]:
                    - generic [ref=e904]: Patient One
                  - cell "BRAF" [ref=e905]:
                    - generic [ref=e907]: BRAF
                  - cell "1123" [ref=e908]:
                    - generic [ref=e910]: "1123"
                  - cell "+6088710923" [ref=e911]:
                    - generic [ref=e913]: "+6088710923"
                  - cell "patientone@test.com" [ref=e914]:
                    - generic [ref=e916]: patientone@test.com
                  - cell "Hospital Putrajaya" [ref=e917]:
                    - generic [ref=e919]: Hospital Putrajaya
                  - cell "NA" [ref=e920]:
                    - generic [ref=e922]: NA
                  - cell "NAZATUL SHIMA ABDUL RAHIM" [ref=e923]:
                    - generic [ref=e925]: NAZATUL SHIMA ABDUL RAHIM
                  - cell "Dermatology" [ref=e926]:
                    - generic [ref=e928]: Dermatology
                  - cell "13 March 2026" [ref=e929]:
                    - generic [ref=e931]: 13 March 2026
                  - cell [ref=e932]:
                    - link [ref=e936]:
                      - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/e32e49c5-1018-4560-88c2-8ff8755dadf1.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064208Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=8de688f34bc3658c440bef01e2a48e97160238ebb55cd2a7e39b9ad940fc9a2d
                      - img [ref=e937]
                  - cell "NA" [ref=e942]:
                    - generic [ref=e944]: NA
                  - cell "NA" [ref=e945]:
                    - generic [ref=e947]: NA
                  - cell "Active" [ref=e948]:
                    - generic [ref=e952]: Active
                  - cell [ref=e953]
                  - cell "NA" [ref=e954]:
                    - generic [ref=e956]: NA
                  - cell "NA" [ref=e957]:
                    - generic [ref=e959]: NA
                  - cell "NA" [ref=e960]:
                    - generic [ref=e962]: NA
                  - cell "NA" [ref=e963]:
                    - generic [ref=e965]: NA
                - row "10098 PT250065 Norazaha Bin Hassan NA 631012107587 +60107026279 norazahahassan80@gmail.com Hospital Kuala Lumpur NA YAP CHEE JIEK Cardiology 12 February 2026 NA NA NA Active Pending AF Submission NA NA NA NA" [ref=e966] [cursor=pointer]:
                  - cell "10098" [ref=e967]:
                    - generic [ref=e969]: "10098"
                  - cell "PT250065" [ref=e970]:
                    - generic [ref=e972]: PT250065
                  - cell "Norazaha Bin Hassan" [ref=e973]:
                    - generic [ref=e975]: Norazaha Bin Hassan
                  - cell "NA" [ref=e976]:
                    - generic [ref=e978]: NA
                  - cell "631012107587" [ref=e979]:
                    - generic [ref=e981]: "631012107587"
                  - cell "+60107026279" [ref=e982]:
                    - generic [ref=e984]: "+60107026279"
                  - cell "norazahahassan80@gmail.com" [ref=e985]:
                    - generic [ref=e987]: norazahahassan80@gmail.com
                  - cell "Hospital Kuala Lumpur" [ref=e988]:
                    - generic [ref=e990]: Hospital Kuala Lumpur
                  - cell "NA" [ref=e991]:
                    - generic [ref=e993]: NA
                  - cell "YAP CHEE JIEK" [ref=e994]:
                    - generic [ref=e996]: YAP CHEE JIEK
                  - cell "Cardiology" [ref=e997]:
                    - generic [ref=e999]: Cardiology
                  - cell "12 February 2026" [ref=e1000]:
                    - generic [ref=e1002]: 12 February 2026
                  - cell "NA" [ref=e1003]:
                    - generic [ref=e1006]: NA
                  - cell "NA" [ref=e1007]:
                    - generic [ref=e1009]: NA
                  - cell "NA" [ref=e1010]:
                    - generic [ref=e1012]: NA
                  - cell "Active" [ref=e1013]:
                    - generic [ref=e1017]: Active
                  - cell "Pending AF Submission" [ref=e1018]:
                    - generic [ref=e1020]: Pending AF Submission
                  - cell "NA" [ref=e1021]:
                    - generic [ref=e1023]: NA
                  - cell "NA" [ref=e1024]:
                    - generic [ref=e1026]: NA
                  - cell "NA" [ref=e1027]:
                    - generic [ref=e1029]: NA
                  - cell "NA" [ref=e1030]:
                    - generic [ref=e1032]: NA
                - row "10097 PT250064 Jamaluddin Bin Mansor NA 821113065053 +60126621847 jamiljamal73@gmail.com Hospital Kuala Lumpur NA YAP JEN FAI Internal Medicine 04 February 2026 NA NA Active Pending AF Submision NA NA NA NA" [ref=e1033] [cursor=pointer]:
                  - cell "10097" [ref=e1034]:
                    - generic [ref=e1036]: "10097"
                  - cell "PT250064" [ref=e1037]:
                    - generic [ref=e1039]: PT250064
                  - cell "Jamaluddin Bin Mansor" [ref=e1040]:
                    - generic [ref=e1042]: Jamaluddin Bin Mansor
                  - cell "NA" [ref=e1043]:
                    - generic [ref=e1045]: NA
                  - cell "821113065053" [ref=e1046]:
                    - generic [ref=e1048]: "821113065053"
                  - cell "+60126621847" [ref=e1049]:
                    - generic [ref=e1051]: "+60126621847"
                  - cell "jamiljamal73@gmail.com" [ref=e1052]:
                    - generic [ref=e1054]: jamiljamal73@gmail.com
                  - cell "Hospital Kuala Lumpur" [ref=e1055]:
                    - generic [ref=e1057]: Hospital Kuala Lumpur
                  - cell "NA" [ref=e1058]:
                    - generic [ref=e1060]: NA
                  - cell "YAP JEN FAI" [ref=e1061]:
                    - generic [ref=e1063]: YAP JEN FAI
                  - cell "Internal Medicine" [ref=e1064]:
                    - generic [ref=e1066]: Internal Medicine
                  - cell "04 February 2026" [ref=e1067]:
                    - generic [ref=e1069]: 04 February 2026
                  - cell [ref=e1070]:
                    - link [ref=e1074]:
                      - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/d3b7d08d-7f03-4dbd-a0f9-c9e6c04866db.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064208Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=75316442a6088c9ca1f411923e5ceb3b98396e284cf0051ba2441b6adcaab021
                      - img [ref=e1075]
                  - cell "NA" [ref=e1080]:
                    - generic [ref=e1082]: NA
                  - cell "NA" [ref=e1083]:
                    - generic [ref=e1085]: NA
                  - cell "Active" [ref=e1086]:
                    - generic [ref=e1090]: Active
                  - cell "Pending AF Submision" [ref=e1091]:
                    - generic [ref=e1093]: Pending AF Submision
                  - cell "NA" [ref=e1094]:
                    - generic [ref=e1096]: NA
                  - cell "NA" [ref=e1097]:
                    - generic [ref=e1099]: NA
                  - cell "NA" [ref=e1100]:
                    - generic [ref=e1102]: NA
                  - cell "NA" [ref=e1103]:
                    - generic [ref=e1105]: NA
                - row "10096 PT250062 Ernie Yusmila Binti Barkat Ali NA 841010105938 +60135989433 ernieyusmila23@yahoo.com Hospital Pulau Pinang NA TAN YIN YIN Neurology 04 February 2026 NA NA Active Pending AF Submision NA NA NA NA" [ref=e1106] [cursor=pointer]:
                  - cell "10096" [ref=e1107]:
                    - generic [ref=e1109]: "10096"
                  - cell "PT250062" [ref=e1110]:
                    - generic [ref=e1112]: PT250062
                  - cell "Ernie Yusmila Binti Barkat Ali" [ref=e1113]:
                    - generic [ref=e1115]: Ernie Yusmila Binti Barkat Ali
                  - cell "NA" [ref=e1116]:
                    - generic [ref=e1118]: NA
                  - cell "841010105938" [ref=e1119]:
                    - generic [ref=e1121]: "841010105938"
                  - cell "+60135989433" [ref=e1122]:
                    - generic [ref=e1124]: "+60135989433"
                  - cell "ernieyusmila23@yahoo.com" [ref=e1125]:
                    - generic [ref=e1127]: ernieyusmila23@yahoo.com
                  - cell "Hospital Pulau Pinang" [ref=e1128]:
                    - generic [ref=e1130]: Hospital Pulau Pinang
                  - cell "NA" [ref=e1131]:
                    - generic [ref=e1133]: NA
                  - cell "TAN YIN YIN" [ref=e1134]:
                    - generic [ref=e1136]: TAN YIN YIN
                  - cell "Neurology" [ref=e1137]:
                    - generic [ref=e1139]: Neurology
                  - cell "04 February 2026" [ref=e1140]:
                    - generic [ref=e1142]: 04 February 2026
                  - cell [ref=e1143]:
                    - link [ref=e1147]:
                      - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/1d8b40e5-37d3-4de9-a629-28be4bc75342.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064208Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=c6e37287d1405f2eb1b736e15b37eedff39401249963ffc9432cbe540fc73f28
                      - img [ref=e1148]
                  - cell "NA" [ref=e1153]:
                    - generic [ref=e1155]: NA
                  - cell "NA" [ref=e1156]:
                    - generic [ref=e1158]: NA
                  - cell "Active" [ref=e1159]:
                    - generic [ref=e1163]: Active
                  - cell "Pending AF Submision" [ref=e1164]:
                    - generic [ref=e1166]: Pending AF Submision
                  - cell "NA" [ref=e1167]:
                    - generic [ref=e1169]: NA
                  - cell "NA" [ref=e1170]:
                    - generic [ref=e1172]: NA
                  - cell "NA" [ref=e1173]:
                    - generic [ref=e1175]: NA
                  - cell "NA" [ref=e1176]:
                    - generic [ref=e1178]: NA
                - row "10095 PT250061 Nasuha binti Ahmad Tazini NA 950625085278 +60174425395 nasuhatazini@yahoo.com Hospital Pulau Pinang NA TAN YIN YIN Neurology 09 February 2026 NA NA Active Pending AF Submision NA NA NA NA" [ref=e1179] [cursor=pointer]:
                  - cell "10095" [ref=e1180]:
                    - generic [ref=e1182]: "10095"
                  - cell "PT250061" [ref=e1183]:
                    - generic [ref=e1185]: PT250061
                  - cell "Nasuha binti Ahmad Tazini" [ref=e1186]:
                    - generic [ref=e1188]: Nasuha binti Ahmad Tazini
                  - cell "NA" [ref=e1189]:
                    - generic [ref=e1191]: NA
                  - cell "950625085278" [ref=e1192]:
                    - generic [ref=e1194]: "950625085278"
                  - cell "+60174425395" [ref=e1195]:
                    - generic [ref=e1197]: "+60174425395"
                  - cell "nasuhatazini@yahoo.com" [ref=e1198]:
                    - generic [ref=e1200]: nasuhatazini@yahoo.com
                  - cell "Hospital Pulau Pinang" [ref=e1201]:
                    - generic [ref=e1203]: Hospital Pulau Pinang
                  - cell "NA" [ref=e1204]:
                    - generic [ref=e1206]: NA
                  - cell "TAN YIN YIN" [ref=e1207]:
                    - generic [ref=e1209]: TAN YIN YIN
                  - cell "Neurology" [ref=e1210]:
                    - generic [ref=e1212]: Neurology
                  - cell "09 February 2026" [ref=e1213]:
                    - generic [ref=e1215]: 09 February 2026
                  - cell [ref=e1216]:
                    - link [ref=e1220]:
                      - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/a0d8aef2-3b58-4177-9637-66353070afaa.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064208Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9a3bf12e4bfe95abd98641be4ca0ba9e902016fa4de2beeb6cffa65ace632a77
                      - img [ref=e1221]
                  - cell "NA" [ref=e1226]:
                    - generic [ref=e1228]: NA
                  - cell "NA" [ref=e1229]:
                    - generic [ref=e1231]: NA
                  - cell "Active" [ref=e1232]:
                    - generic [ref=e1236]: Active
                  - cell "Pending AF Submision" [ref=e1237]:
                    - generic [ref=e1239]: Pending AF Submision
                  - cell "NA" [ref=e1240]:
                    - generic [ref=e1242]: NA
                  - cell "NA" [ref=e1243]:
                    - generic [ref=e1245]: NA
                  - cell "NA" [ref=e1246]:
                    - generic [ref=e1248]: NA
                  - cell "NA" [ref=e1249]:
                    - generic [ref=e1251]: NA
                - row "10094 PT250060 SITI NUR AFIQAH BINTI MD ISA NA 910313075648 +601161008039 smilem13@yahoo.com UiTM Sungai Buloh NA MIMI NASHRA MOHD NOH Neurology 23 January 2026 NA NA Active Pending AF Submision NA NA NA NA" [ref=e1252] [cursor=pointer]:
                  - cell "10094" [ref=e1253]:
                    - generic [ref=e1255]: "10094"
                  - cell "PT250060" [ref=e1256]:
                    - generic [ref=e1258]: PT250060
                  - cell "SITI NUR AFIQAH BINTI MD ISA" [ref=e1259]:
                    - generic [ref=e1261]: SITI NUR AFIQAH BINTI MD ISA
                  - cell "NA" [ref=e1262]:
                    - generic [ref=e1264]: NA
                  - cell "910313075648" [ref=e1265]:
                    - generic [ref=e1267]: "910313075648"
                  - cell "+601161008039" [ref=e1268]:
                    - generic [ref=e1270]: "+601161008039"
                  - cell "smilem13@yahoo.com" [ref=e1271]:
                    - generic [ref=e1273]: smilem13@yahoo.com
                  - cell "UiTM Sungai Buloh" [ref=e1274]:
                    - generic [ref=e1276]: UiTM Sungai Buloh
                  - cell "NA" [ref=e1277]:
                    - generic [ref=e1279]: NA
                  - cell "MIMI NASHRA MOHD NOH" [ref=e1280]:
                    - generic [ref=e1282]: MIMI NASHRA MOHD NOH
                  - cell "Neurology" [ref=e1283]:
                    - generic [ref=e1285]: Neurology
                  - cell "23 January 2026" [ref=e1286]:
                    - generic [ref=e1288]: 23 January 2026
                  - cell [ref=e1289]:
                    - link [ref=e1293]:
                      - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/93f4db18-2e50-4eeb-b7c2-4c52b8a9988d.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064208Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4d5d02cc77cd4ffe4f0c5e75533abd84e4bb7a62f77b7b42b51c8af958b1cf8c
                      - img [ref=e1294]
                  - cell "NA" [ref=e1299]:
                    - generic [ref=e1301]: NA
                  - cell "NA" [ref=e1302]:
                    - generic [ref=e1304]: NA
                  - cell "Active" [ref=e1305]:
                    - generic [ref=e1309]: Active
                  - cell "Pending AF Submision" [ref=e1310]:
                    - generic [ref=e1312]: Pending AF Submision
                  - cell "NA" [ref=e1313]:
                    - generic [ref=e1315]: NA
                  - cell "NA" [ref=e1316]:
                    - generic [ref=e1318]: NA
                  - cell "NA" [ref=e1319]:
                    - generic [ref=e1321]: NA
                  - cell "NA" [ref=e1322]:
                    - generic [ref=e1324]: NA
                - row "10093 PT250058 Mek Siti Abidah NA 571011-03-5356 +601111415990 Medicalhkkb@gmail.com Hospital Kuala Kubu Bharu NA WONG JIA HUI Internal Medicine 22 January 2026 NA NA Active Pending AF Submision NA NA NA NA" [ref=e1325] [cursor=pointer]:
                  - cell "10093" [ref=e1326]:
                    - generic [ref=e1328]: "10093"
                  - cell "PT250058" [ref=e1329]:
                    - generic [ref=e1331]: PT250058
                  - cell "Mek Siti Abidah" [ref=e1332]:
                    - generic [ref=e1334]: Mek Siti Abidah
                  - cell "NA" [ref=e1335]:
                    - generic [ref=e1337]: NA
                  - cell "571011-03-5356" [ref=e1338]:
                    - generic [ref=e1340]: 571011-03-5356
                  - cell "+601111415990" [ref=e1341]:
                    - generic [ref=e1343]: "+601111415990"
                  - cell "Medicalhkkb@gmail.com" [ref=e1344]:
                    - generic [ref=e1346]: Medicalhkkb@gmail.com
                  - cell "Hospital Kuala Kubu Bharu" [ref=e1347]:
                    - generic [ref=e1349]: Hospital Kuala Kubu Bharu
                  - cell "NA" [ref=e1350]:
                    - generic [ref=e1352]: NA
                  - cell "WONG JIA HUI" [ref=e1353]:
                    - generic [ref=e1355]: WONG JIA HUI
                  - cell "Internal Medicine" [ref=e1356]:
                    - generic [ref=e1358]: Internal Medicine
                  - cell "22 January 2026" [ref=e1359]:
                    - generic [ref=e1361]: 22 January 2026
                  - cell [ref=e1362]:
                    - link [ref=e1366]:
                      - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/849a8022-4228-419d-8c8b-54bd55816cd4.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064208Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=638abb8ad5ec921ddc6a483083a523dfa8fccd83a778f5be016e09765b936cca
                      - img [ref=e1367]
                  - cell "NA" [ref=e1372]:
                    - generic [ref=e1374]: NA
                  - cell "NA" [ref=e1375]:
                    - generic [ref=e1377]: NA
                  - cell "Active" [ref=e1378]:
                    - generic [ref=e1382]: Active
                  - cell "Pending AF Submision" [ref=e1383]:
                    - generic [ref=e1385]: Pending AF Submision
                  - cell "NA" [ref=e1386]:
                    - generic [ref=e1388]: NA
                  - cell "NA" [ref=e1389]:
                    - generic [ref=e1391]: NA
                  - cell "NA" [ref=e1392]:
                    - generic [ref=e1394]: NA
                  - cell "NA" [ref=e1395]:
                    - generic [ref=e1397]: NA
            - generic [ref=e1398]:
              - generic [ref=e1400]:
                - generic [ref=e1401]: "Rows per page:"
                - generic [ref=e1403]:
                  - log [ref=e1405]
                  - generic [ref=e1406]:
                    - generic [ref=e1407]:
                      - generic [ref=e1408]: "10"
                      - 'combobox "Rows per page: 10" [ref=e1410]'
                    - img [ref=e1413]
              - generic [ref=e1416]:
                - button "Previous" [disabled] [ref=e1417]:
                  - img [ref=e1418]
                  - generic [ref=e1420]: Previous
                - generic [ref=e1421]:
                  - button "1" [ref=e1422] [cursor=pointer]
                  - button "2" [ref=e1423] [cursor=pointer]
                  - button "3" [ref=e1424] [cursor=pointer]
                  - button "4" [ref=e1425] [cursor=pointer]
                  - button "5" [ref=e1426] [cursor=pointer]
                  - button "6" [ref=e1427] [cursor=pointer]
                - button "Next" [ref=e1428] [cursor=pointer]:
                  - generic [ref=e1429]: Next
                  - img [ref=e1430]
  - region "Notifications alt+T"
```

# Test source

```ts
  35  |   await page.waitForTimeout(600);
  36  |   await page.keyboard.type(search, { delay: 80 });
  37  |   await page.waitForTimeout(1500);
  38  |   const opt = page.locator(`[class*="option"]:has-text("${search}"), [role="option"]:has-text("${search}"), li:has-text("${search}")`);
  39  |   if (await opt.first().isVisible({ timeout: 8000 }).catch(() => false)) {
  40  |     await opt.first().click({ force: true });
  41  |     return true;
  42  |   }
  43  |   return false;
  44  | }
  45  | 
  46  | async function openPatientForm(page: any, patientPage: PatientPage) {
  47  |   await patientPage.navigateToPatients();
  48  |   await patientPage.clickAddNewPatient();
  49  | }
  50  | 
  51  | async function checkValidation(page: any, modal: any): Promise<boolean> {
  52  |   const open = await modal.isVisible({ timeout: 3000 }).catch(() => false);
  53  |   const err = await page.locator(ERROR_SEL).first().isVisible({ timeout: 3000 }).catch(() => false);
  54  |   return open || err;
  55  | }
  56  | 
  57  | // ════════════════════════════════════════
  58  | // PATIENT TESTS
  59  | // ════════════════════════════════════════
  60  | test.describe('Patient Module', () => {
  61  | 
  62  |   test('TC-PAT-001: Clicking Add New Patient opens the Patient registration form', async ({ page }) => {
  63  |     const pp = new PatientPage(page);
  64  |     await pp.navigateToPatients();
  65  |     await pp.clickAddNewPatient();
  66  |     const modal = page.locator(MODAL).last();
  67  |     const visible = await modal.isVisible({ timeout: 8000 }).catch(() => false);
  68  |     saveResult('TC-PAT-001', visible ? 'pass' : 'fail', visible ? '' : 'Add New Patient did not open a form modal');
  69  |     expect(visible).toBeTruthy();
  70  |   });
  71  | 
  72  |   test('TC-PAT-002: Create patient with all mandatory fields — form submits successfully', async ({ page }) => {
  73  |     const data = loadCreatedData();
  74  |     const hospitalName = data.hospital?.name ?? 'AutoHospital_DF4169';
  75  |     const hcpName = data.hcp?.name ?? 'AutoHCP_DF4169';
  76  |     const pp = new PatientPage(page);
  77  |     await openPatientForm(page, pp);
  78  |     const modal = page.locator(MODAL).last();
  79  | 
  80  |     // Patient Name
  81  |     await modal.getByPlaceholder('Patient Name').fill(`AutoPatient_${SUFFIX}`).catch(() => {});
  82  |     // NRiC — 12 digits
  83  |     const nric = `${Math.floor(700101 + Math.random() * 100000)}10${Math.floor(1000 + Math.random() * 8999)}`;
  84  |     await modal.getByPlaceholder('NRiC').fill(nric).catch(() => {});
  85  |     // Contact Number
  86  |     const phone = '393111799';
  87  |     const tel = modal.locator('input[type="tel"]').first();
  88  |     if (await tel.isVisible({ timeout: 2000 }).catch(() => false)) {
  89  |       await tel.fill(phone);
  90  |     } else {
  91  |       await modal.getByPlaceholder('Contact Number').fill(phone).catch(() => {});
  92  |     }
  93  |     // Email
  94  |     await modal.getByPlaceholder('Email Address').fill(`patient${SUFFIX}@test.com`).catch(() => {});
  95  |     // Indication
  96  |     await reactSelect(page, modal, 'Indication', 'PsO');
  97  |     // Hospital
  98  |     await reactSelect(page, modal, 'Hospital Name', hospitalName);
  99  |     await page.waitForTimeout(1000);
  100 |     // HCP
  101 |     await reactSelect(page, modal, 'HCP Name', hcpName);
  102 |     await page.waitForTimeout(1000);
  103 |     // Consent form
  104 |     const fileInput = modal.locator('input[type="file"]').first();
  105 |     if (await fileInput.isVisible({ timeout: 3000 }).catch(() => false)) {
  106 |       await fileInput.setInputFiles(CONSENT_PDF);
  107 |     } else {
  108 |       const uploadBtn = modal.locator('button:has-text("Upload"), label:has-text("Upload"), [class*="upload"], [class*="dropzone"]').first();
  109 |       const [chooser] = await Promise.all([
  110 |         page.waitForEvent('filechooser', { timeout: 5000 }).catch(() => null),
  111 |         uploadBtn.click({ force: true }).catch(() => {}),
  112 |       ]);
  113 |       if (chooser) await chooser.setFiles(CONSENT_PDF);
  114 |     }
  115 |     await page.waitForTimeout(1000);
  116 |     await pp.submitPatientForm();
  117 |     await page.waitForTimeout(2000);
  118 |     const closed = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  119 |     const success = await page.locator(SUCCESS_SEL).first().isVisible({ timeout: 3000 }).catch(() => false);
  120 |     saveResult('TC-PAT-002', (closed || success) ? 'pass' : 'fail',
  121 |       (closed || success) ? '' : 'Patient form did not close or show success after all mandatory fields — check screenshot');
  122 |     expect(closed || success).toBeTruthy();
  123 |   });
  124 | 
  125 |   test('TC-PAT-003: Created patient appears in Patient list after submission', async ({ page }) => {
  126 |     const data = loadCreatedData();
  127 |     const name = data.patient?.name;
  128 |     const pp = new PatientPage(page);
  129 |     await pp.navigateToPatients();
  130 |     await page.waitForTimeout(2000);
  131 |     const text = await page.evaluate(() => document.body.innerText);
  132 |     const found = name ? text.includes(name) : (text.includes('AutoPatient') || text.includes('TestPatient'));
  133 |     saveResult('TC-PAT-003', found ? 'pass' : 'fail',
  134 |       found ? '' : `Patient "${name ?? 'AutoPatient'}" not found in list`);
> 135 |     expect(found).toBeTruthy();
      |                   ^ Error: expect(received).toBeTruthy()
  136 |   });
  137 | 
  138 |   test('TC-PAT-004: Patient form blocks submission when Patient Name is blank', async ({ page }) => {
  139 |     const pp = new PatientPage(page);
  140 |     await openPatientForm(page, pp);
  141 |     const modal = page.locator(MODAL).last();
  142 |     await modal.getByPlaceholder('NRiC').fill('700101109999').catch(() => {});
  143 |     await pp.submitPatientForm();
  144 |     await page.waitForTimeout(2000);
  145 |     const blocked = await checkValidation(page, modal);
  146 |     saveResult('TC-PAT-004', blocked ? 'pass' : 'fail',
  147 |       blocked ? 'Form blocked without Patient Name' : 'Form submitted without Patient Name — no validation error');
  148 |     expect(blocked).toBeTruthy();
  149 |   });
  150 | 
  151 |   test('TC-PAT-005: Patient form blocks submission when NRiC is blank', async ({ page }) => {
  152 |     const pp = new PatientPage(page);
  153 |     await openPatientForm(page, pp);
  154 |     const modal = page.locator(MODAL).last();
  155 |     await modal.getByPlaceholder('Patient Name').fill('TestPatientNoNRIC').catch(() => {});
  156 |     await pp.submitPatientForm();
  157 |     await page.waitForTimeout(2000);
  158 |     const blocked = await checkValidation(page, modal);
  159 |     saveResult('TC-PAT-005', blocked ? 'pass' : 'fail',
  160 |       blocked ? 'Form blocked without NRiC' : 'Form submitted without NRiC — no validation error');
  161 |     expect(blocked).toBeTruthy();
  162 |   });
  163 | 
  164 |   test('TC-PAT-006: NRiC field accepts only numeric characters', async ({ page }) => {
  165 |     const pp = new PatientPage(page);
  166 |     await openPatientForm(page, pp);
  167 |     const modal = page.locator(MODAL).last();
  168 |     const nricField = modal.getByPlaceholder('NRiC');
  169 |     if (await nricField.isVisible({ timeout: 3000 }).catch(() => false)) {
  170 |       await nricField.fill('ABCDEF123456');
  171 |       const val = await nricField.inputValue().catch(() => 'ABCDEF123456');
  172 |       const numOnly = /^\d*$/.test(val);
  173 |       await page.keyboard.press('Escape').catch(() => {});
  174 |       saveResult('TC-PAT-006', numOnly ? 'pass' : 'fail',
  175 |         numOnly ? 'NRiC field filtered non-numeric characters' : `NRiC accepted "ABCDEF123456" — value: "${val}"`);
  176 |     } else {
  177 |       await page.keyboard.press('Escape').catch(() => {});
  178 |       saveResult('TC-PAT-006', 'pending', 'NRiC field not found by placeholder');
  179 |     }
  180 |   });
  181 | 
  182 |   test('TC-PAT-007: NRiC field enforces a 12-digit maximum length', async ({ page }) => {
  183 |     const pp = new PatientPage(page);
  184 |     await openPatientForm(page, pp);
  185 |     const modal = page.locator(MODAL).last();
  186 |     const nricField = modal.getByPlaceholder('NRiC');
  187 |     if (await nricField.isVisible({ timeout: 3000 }).catch(() => false)) {
  188 |       await nricField.fill('9999999999999999'); // 16 digits
  189 |       const val = await nricField.inputValue().catch(() => '');
  190 |       const maxAttr = await nricField.getAttribute('maxlength').catch(() => null);
  191 |       await page.keyboard.press('Escape').catch(() => {});
  192 |       if (val.length <= 12 || maxAttr) {
  193 |         saveResult('TC-PAT-007', 'pass', `NRiC maxlength: ${maxAttr ?? 'enforced via input filter'}, actual length: ${val.length}`);
  194 |       } else {
  195 |         saveResult('TC-PAT-007', 'fail', `NRiC field accepted ${val.length} digits without a maximum limit`);
  196 |       }
  197 |     } else {
  198 |       await page.keyboard.press('Escape').catch(() => {});
  199 |       saveResult('TC-PAT-007', 'pending', 'NRiC field not found — cannot test max length');
  200 |     }
  201 |   });
  202 | 
  203 |   test('TC-PAT-008: Contact Number accepts a valid Malaysian phone number', async ({ page }) => {
  204 |     const pp = new PatientPage(page);
  205 |     await openPatientForm(page, pp);
  206 |     const modal = page.locator(MODAL).last();
  207 |     const tel = modal.locator('input[type="tel"]').first();
  208 |     if (await tel.isVisible({ timeout: 3000 }).catch(() => false)) {
  209 |       await tel.fill('393111799');
  210 |       const val = await tel.inputValue().catch(() => '');
  211 |       await page.keyboard.press('Escape').catch(() => {});
  212 |       saveResult('TC-PAT-008', val === '393111799' ? 'pass' : 'fail',
  213 |         val === '393111799' ? 'Valid 9-digit phone accepted in Contact Number' : `Expected "393111799" got "${val}"`);
  214 |     } else {
  215 |       await page.keyboard.press('Escape').catch(() => {});
  216 |       saveResult('TC-PAT-008', 'pending', 'Phone tel input not found in Patient form');
  217 |     }
  218 |   });
  219 | 
  220 |   test('TC-PAT-009: Contact Number field rejects non-numeric characters', async ({ page }) => {
  221 |     const pp = new PatientPage(page);
  222 |     await openPatientForm(page, pp);
  223 |     const modal = page.locator(MODAL).last();
  224 |     const tel = modal.locator('input[type="tel"]').first();
  225 |     if (await tel.isVisible({ timeout: 3000 }).catch(() => false)) {
  226 |       await tel.fill('abcdefghi');
  227 |       const val = await tel.inputValue().catch(() => 'abcdefghi');
  228 |       const numOnly = /^\d*$/.test(val);
  229 |       await page.keyboard.press('Escape').catch(() => {});
  230 |       saveResult('TC-PAT-009', numOnly ? 'pass' : 'fail',
  231 |         numOnly ? 'Non-numeric input filtered from Patient Contact Number' : `Field accepted "abcdefghi" — value: "${val}"`);
  232 |     } else {
  233 |       await page.keyboard.press('Escape').catch(() => {});
  234 |       saveResult('TC-PAT-009', 'pending', 'Phone tel input not found in Patient form');
  235 |     }
```