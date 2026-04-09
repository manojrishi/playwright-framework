# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: patient-full.spec.ts >> Patient Module >> TC-PAT-002: Create patient with all mandatory fields — form submits successfully
- Location: tests/patient-full.spec.ts:72:7

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic:
  - generic:
    - generic:
      - main:
        - navigation:
          - generic:
            - link:
              - /url: /app
              - img
          - generic:
            - list:
              - listitem:
                - link:
                  - /url: /app/patient
                  - generic:
                    - img
                  - generic: Patient
              - listitem:
                - link:
                  - /url: /app/af-request
                  - generic:
                    - img
                  - generic: AF Request
              - listitem:
                - link:
                  - /url: /app/f2f-visit
                  - generic:
                    - img
                  - generic: F2F visit
              - listitem:
                - link:
                  - /url: /app/adverse-event
                  - generic:
                    - img
                  - generic: Adverse Event
              - listitem:
                - generic:
                  - generic:
                    - img
                  - generic: Masters
                  - generic:
                    - img
              - listitem:
                - link:
                  - /url: /app/hospital
                  - generic: Hospitals
              - listitem:
                - link:
                  - /url: /app/hcp
                  - generic: HCPs
              - listitem:
                - link:
                  - /url: /app/af-body
                  - generic: AF Bodies
              - listitem:
                - link:
                  - /url: /app/bhumi-agent
                  - generic: Bumi Agents
              - listitem:
                - link:
                  - /url: /app/task
                  - generic:
                    - img
                  - generic: Tasks
              - listitem:
                - generic:
                  - generic:
                    - img
                  - generic: Reports
                  - generic:
                    - img
              - listitem:
                - link:
                  - /url: /app/enrolled-patients
                  - generic: Enrolled Patient Report
              - listitem:
                - link:
                  - /url: /app/enrolled-patients-by-af-status
                  - generic: Patients by AF Status Report
              - listitem:
                - link:
                  - /url: /app/af-submitted-by-body
                  - generic: Total AF Submitted Report
              - listitem:
                - link:
                  - /url: /app/af-approved-by-body
                  - generic: Total AF Approved Report
              - listitem:
                - link:
                  - /url: /app/hospital-enrolment
                  - generic: Patient Enrolment by Hospitals
              - listitem:
                - link:
                  - /url: /app/enrolled-patients-and-milestones
                  - generic: Enrolled Patients and Milestones
              - listitem:
                - generic:
                  - generic:
                    - img
                  - generic: KPI
                  - generic:
                    - img
              - listitem:
                - link:
                  - /url: /app/kpi
                  - generic: "Welcome Call - #Days"
              - listitem:
                - link:
                  - /url: /app/welcome-call-3-attempts
                  - generic: Welcome Call 3 Attempts
              - listitem:
                - link:
                  - /url: /app/submission-confirmation-kpi
                  - generic: Application Submission follow-up
              - listitem:
                - link:
                  - /url: /app/app-submission-follow-up-kpi
                  - generic: Quotation Turnaround
              - listitem:
                - link:
                  - /url: /app/long-pending-af-cases-kpi
                  - generic: Long-Pending AF Cases
              - listitem:
                - link:
                  - /url: /app/drop-inactive-patient-kpi
                  - generic: Inactive Patients
              - listitem:
                - generic:
                  - generic:
                    - img
                  - generic: Configurations
                  - generic:
                    - img
              - listitem:
                - link:
                  - /url: /app/speciality
                  - generic: Speciality
              - listitem:
                - link:
                  - /url: /app/medication
                  - generic: Medication
              - listitem:
                - generic:
                  - generic:
                    - img
                  - generic: Communication
                  - generic:
                    - img
              - listitem:
                - link:
                  - /url: /app/email
                  - generic: Emails
              - listitem:
                - link:
                  - /url: /app/whatsapp
                  - generic: Whatsapp
              - listitem:
                - link:
                  - /url: /app/call
                  - generic: Calls
              - listitem:
                - link:
                  - /url: /app/downloads
                  - generic:
                    - img
                  - generic: My Downloads
              - listitem:
                - link:
                  - /url: /app/dashboard
                  - generic: 📄
                  - generic: Dashboard
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - img
                      - generic:
                        - generic: Arun Singh
                        - generic: PAP Executive
                    - img
            - generic:
              - generic:
                - button:
                  - img
              - generic:
                - generic:
                  - generic:
                    - img
                    - generic:
                      - img
                - generic:
                  - heading [level=2]: Welcome!
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - button: Account
                    - button: Security
                  - generic:
                    - generic:
                      - generic:
                        - img
                        - heading [level=3]: Complete Your Profile
                        - paragraph: Add your name and other details to personalize your account. Click the edit button next to each field to get started.
                      - generic:
                        - generic:
                          - generic: Name
                          - button: Edit
                        - generic:
                          - generic: Click edit to add your name
                      - generic:
                        - text: Roles
                        - generic:
                          - generic:
                            - generic:
                              - img
                              - generic: Admin
                            - generic: Current
                      - generic:
                        - button:
                          - img
                          - generic: Log Out
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - heading [level=1]:
                          - generic: Patients
                          - generic: (60)
                        - generic:
                          - button: Add New Patient
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - heading [level=3]: Filters
                          - generic:
                            - generic:
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: Patient ID
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - img
                                        - textbox:
                                          - /placeholder: Search patient id
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: Patient Internal ID
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - img
                                        - textbox:
                                          - /placeholder: Search patient internal id
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: Patient Name
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - img
                                        - textbox:
                                          - /placeholder: Search patient name
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: Indication
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic:
                                            - log
                                            - generic:
                                              - generic:
                                                - generic: Select Indication
                                                - generic:
                                                  - combobox
                                              - generic:
                                                - generic:
                                                  - img
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: NRIC
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - img
                                        - textbox:
                                          - /placeholder: Search nric
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: Contact Number
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - img
                                        - textbox:
                                          - /placeholder: Search contact number
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: Email Address
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - img
                                        - textbox:
                                          - /placeholder: Search email address
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: Hospital Name
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - img
                                        - textbox:
                                          - /placeholder: Search hospital name
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: Hospital State
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - img
                                        - textbox:
                                          - /placeholder: Search hospital state
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: HCP Name
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - img
                                        - textbox:
                                          - /placeholder: Search hcp name
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: Specialty
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - img
                                        - textbox:
                                          - /placeholder: Search specialty
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: Enrolment Date
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - textbox:
                                                  - /placeholder: From
                                                - paragraph: Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                                              - generic: "-"
                                              - generic:
                                                - textbox:
                                                  - /placeholder: To
                                                - paragraph: Navigate backward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                                              - button:
                                                - img
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: Discontinuation Reason
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - img
                                        - textbox:
                                          - /placeholder: Search discontinuation reason
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: Discontinuation Date
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - textbox:
                                                  - /placeholder: From
                                                - paragraph: Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                                              - generic: "-"
                                              - generic:
                                                - textbox:
                                                  - /placeholder: To
                                                - paragraph: Navigate backward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                                              - button:
                                                - img
                              - generic:
                                - button:
                                  - generic:
                                    - generic:
                                      - generic: Enrollment Status
                                  - generic:
                                    - generic:
                                      - img
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic:
                                            - log
                                            - generic:
                                              - generic:
                                                - generic: Select Enrollment Status
                                                - generic:
                                                  - combobox
                                              - generic:
                                                - generic:
                                                  - img
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - button:
                              - img
                              - text: Filters
                          - generic:
                            - generic:
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                                  - textbox:
                                    - /placeholder: Search...
                            - button:
                              - img
                            - generic:
                              - generic:
                                - generic:
                                  - generic:
                                    - button:
                                      - img
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic:
                                            - img
                                          - textbox:
                                            - /placeholder: Search columns
                                    - generic:
                                      - generic:
                                        - generic:
                                          - checkbox [checked]
                                        - generic: Patient ID
                                        - generic:
                                          - button:
                                            - img
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
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
                                          - button:
                                            - img
                                          - generic:
                                            - img
                      - generic:
                        - generic:
                          - generic:
                            - table:
                              - rowgroup:
                                - row:
                                  - columnheader:
                                    - button:
                                      - text: Patient ID
                                      - generic:
                                        - img
                                  - columnheader:
                                    - button:
                                      - text: Patient Internal ID
                                      - generic:
                                        - img
                                  - columnheader:
                                    - button:
                                      - text: Patient Name
                                      - generic:
                                        - img
                                  - columnheader:
                                    - button:
                                      - text: Indication
                                      - generic:
                                        - img
                                  - columnheader:
                                    - button:
                                      - text: NRIC
                                      - generic:
                                        - img
                                  - columnheader: Contact Number
                                  - columnheader:
                                    - button:
                                      - text: Email Address
                                      - generic:
                                        - img
                                  - columnheader:
                                    - button:
                                      - text: Hospital Name
                                      - generic:
                                        - img
                                  - columnheader:
                                    - button:
                                      - text: Hospital State
                                      - generic:
                                        - img
                                  - columnheader:
                                    - button:
                                      - text: HCP Name
                                      - generic:
                                        - img
                                  - columnheader:
                                    - button:
                                      - text: Specialty
                                      - generic:
                                        - img
                                  - columnheader:
                                    - button:
                                      - text: Enrolment Date
                                      - generic:
                                        - img
                                  - columnheader: Consent Form
                                  - columnheader: Discontinuation Reason
                                  - columnheader:
                                    - button:
                                      - text: Discontinuation Date
                                      - generic:
                                        - img
                                  - columnheader:
                                    - button:
                                      - text: Enrollment Status
                                      - generic:
                                        - img
                                  - columnheader: Notes
                                  - columnheader:
                                    - button:
                                      - text: Caregiver Name
                                      - generic:
                                        - img
                                  - columnheader:
                                    - button:
                                      - text: Caregiver Addition Date
                                      - generic:
                                        - img
                                  - columnheader: Caregiver's Contact Number
                                  - columnheader:
                                    - button:
                                      - text: Caregiver's Relationship with patient
                                      - generic:
                                        - img
                              - rowgroup:
                                - row:
                                  - cell:
                                    - generic:
                                      - generic: "10103"
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: AutoPatient 09A6F0
                                  - cell:
                                    - generic:
                                      - generic: Plaque Psoriasis (PsO)
                                  - cell:
                                    - generic:
                                      - generic: "789943108981"
                                  - cell:
                                    - generic:
                                      - generic: "+60367501046"
                                  - cell:
                                    - generic:
                                      - generic: autopatient_09a6f0@test.com
                                  - cell:
                                    - generic:
                                      - generic: AutoHospital_09A6F0
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: AutoHCP_09A6F0
                                  - cell:
                                    - generic:
                                      - generic: Dermatology
                                  - cell:
                                    - generic:
                                      - generic: 07 April 2026
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - link:
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/6f789055-47fc-4c9b-b6f5-43c1828019b7.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064139Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a21f858f9b863bb813c9ef10d1eeabd7a49ba0228f43344f2ac98f0fc73b63c1
                                            - img
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic: Enrolled
                                  - cell
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                - row:
                                  - cell:
                                    - generic:
                                      - generic: "10102"
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: AutoPatient 982905
                                  - cell:
                                    - generic:
                                      - generic: Plaque Psoriasis (PsO)
                                  - cell:
                                    - generic:
                                      - generic: "797232107415"
                                  - cell:
                                    - generic:
                                      - generic: "+60341865208"
                                  - cell:
                                    - generic:
                                      - generic: autopatient_982905@test.com
                                  - cell:
                                    - generic:
                                      - generic: AutoHospital_4AF70B
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: AutoHCP_4AF70B
                                  - cell:
                                    - generic:
                                      - generic: Dermatology
                                  - cell:
                                    - generic:
                                      - generic: 07 April 2026
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - link:
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/536f0e81-5a92-4ace-aa90-b24fc0b77e8e.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064139Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=383adc043628ec749a87b81a9fea63093d50595a160cc4300b40210a7ad52ca6
                                            - img
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic: Enrolled
                                  - cell
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                - row:
                                  - cell:
                                    - generic:
                                      - generic: "10101"
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: 31 March
                                  - cell:
                                    - generic:
                                      - generic: Non-radiographic axial spondyloarthritis (nr-axSpA)
                                  - cell:
                                    - generic:
                                      - generic: "3131"
                                  - cell:
                                    - generic:
                                      - generic: "+6088711198"
                                  - cell:
                                    - generic:
                                      - generic: 31march@test.com
                                  - cell:
                                    - generic:
                                      - generic: Hospital Serdang
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: AHMAD ZAKIYY BIN MOHAMED
                                  - cell:
                                    - generic:
                                      - generic: Rheumatology
                                  - cell:
                                    - generic:
                                      - generic: 31 March 2026
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - link:
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/75bd0b27-eaa8-4e03-9379-ebe12f74bc58.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064139Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=dca7663d4de9b1ec348b348494846a9870bb4d81c9c441045f81a3abca3c010c
                                            - img
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic: Active
                                  - cell
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                - row:
                                  - cell:
                                    - generic:
                                      - generic: "10100"
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: Patient One
                                  - cell:
                                    - generic:
                                      - generic: BRAF
                                  - cell:
                                    - generic:
                                      - generic: "1123"
                                  - cell:
                                    - generic:
                                      - generic: "+6088710923"
                                  - cell:
                                    - generic:
                                      - generic: patientone@test.com
                                  - cell:
                                    - generic:
                                      - generic: Hospital Putrajaya
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NAZATUL SHIMA ABDUL RAHIM
                                  - cell:
                                    - generic:
                                      - generic: Dermatology
                                  - cell:
                                    - generic:
                                      - generic: 13 March 2026
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - link:
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/e32e49c5-1018-4560-88c2-8ff8755dadf1.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064139Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d0229663a15e72d34bc254cb8bb63c03456e06ded0e24f7ebdad56310b5279f6
                                            - img
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic: Active
                                  - cell
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                - row:
                                  - cell:
                                    - generic:
                                      - generic: "10098"
                                  - cell:
                                    - generic:
                                      - generic: PT250065
                                  - cell:
                                    - generic:
                                      - generic: Norazaha Bin Hassan
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: "631012107587"
                                  - cell:
                                    - generic:
                                      - generic: "+60107026279"
                                  - cell:
                                    - generic:
                                      - generic: norazahahassan80@gmail.com
                                  - cell:
                                    - generic:
                                      - generic: Hospital Kuala Lumpur
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: YAP CHEE JIEK
                                  - cell:
                                    - generic:
                                      - generic: Cardiology
                                  - cell:
                                    - generic:
                                      - generic: 12 February 2026
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic: Active
                                  - cell:
                                    - generic:
                                      - generic: Pending AF Submission
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                - row:
                                  - cell:
                                    - generic:
                                      - generic: "10097"
                                  - cell:
                                    - generic:
                                      - generic: PT250064
                                  - cell:
                                    - generic:
                                      - generic: Jamaluddin Bin Mansor
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: "821113065053"
                                  - cell:
                                    - generic:
                                      - generic: "+60126621847"
                                  - cell:
                                    - generic:
                                      - generic: jamiljamal73@gmail.com
                                  - cell:
                                    - generic:
                                      - generic: Hospital Kuala Lumpur
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: YAP JEN FAI
                                  - cell:
                                    - generic:
                                      - generic: Internal Medicine
                                  - cell:
                                    - generic:
                                      - generic: 04 February 2026
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - link:
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/d3b7d08d-7f03-4dbd-a0f9-c9e6c04866db.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064139Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=689ec59046abdd971a6bc9a926740bdbcd4c384da25158d7668b8874c3a5ec12
                                            - img
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic: Active
                                  - cell:
                                    - generic:
                                      - generic: Pending AF Submision
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                - row:
                                  - cell:
                                    - generic:
                                      - generic: "10096"
                                  - cell:
                                    - generic:
                                      - generic: PT250062
                                  - cell:
                                    - generic:
                                      - generic: Ernie Yusmila Binti Barkat Ali
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: "841010105938"
                                  - cell:
                                    - generic:
                                      - generic: "+60135989433"
                                  - cell:
                                    - generic:
                                      - generic: ernieyusmila23@yahoo.com
                                  - cell:
                                    - generic:
                                      - generic: Hospital Pulau Pinang
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: TAN YIN YIN
                                  - cell:
                                    - generic:
                                      - generic: Neurology
                                  - cell:
                                    - generic:
                                      - generic: 04 February 2026
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - link:
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/1d8b40e5-37d3-4de9-a629-28be4bc75342.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064139Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=990b36ad3b028abdda54a5eecea98403543d63348b9d4c83c350913dd00eb503
                                            - img
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic: Active
                                  - cell:
                                    - generic:
                                      - generic: Pending AF Submision
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                - row:
                                  - cell:
                                    - generic:
                                      - generic: "10095"
                                  - cell:
                                    - generic:
                                      - generic: PT250061
                                  - cell:
                                    - generic:
                                      - generic: Nasuha binti Ahmad Tazini
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: "950625085278"
                                  - cell:
                                    - generic:
                                      - generic: "+60174425395"
                                  - cell:
                                    - generic:
                                      - generic: nasuhatazini@yahoo.com
                                  - cell:
                                    - generic:
                                      - generic: Hospital Pulau Pinang
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: TAN YIN YIN
                                  - cell:
                                    - generic:
                                      - generic: Neurology
                                  - cell:
                                    - generic:
                                      - generic: 09 February 2026
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - link:
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/a0d8aef2-3b58-4177-9637-66353070afaa.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064139Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=165d9036bf571a7d03ebbe5d038c8e65456cc05e403b54a4c108e32c430561c3
                                            - img
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic: Active
                                  - cell:
                                    - generic:
                                      - generic: Pending AF Submision
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                - row:
                                  - cell:
                                    - generic:
                                      - generic: "10094"
                                  - cell:
                                    - generic:
                                      - generic: PT250060
                                  - cell:
                                    - generic:
                                      - generic: SITI NUR AFIQAH BINTI MD ISA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: "910313075648"
                                  - cell:
                                    - generic:
                                      - generic: "+601161008039"
                                  - cell:
                                    - generic:
                                      - generic: smilem13@yahoo.com
                                  - cell:
                                    - generic:
                                      - generic: UiTM Sungai Buloh
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: MIMI NASHRA MOHD NOH
                                  - cell:
                                    - generic:
                                      - generic: Neurology
                                  - cell:
                                    - generic:
                                      - generic: 23 January 2026
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - link:
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/93f4db18-2e50-4eeb-b7c2-4c52b8a9988d.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064139Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7cc5ec96f37ea9387454a46ef1fe37efd50b0d83c321d2050aa9daa19755db3f
                                            - img
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic: Active
                                  - cell:
                                    - generic:
                                      - generic: Pending AF Submision
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                - row:
                                  - cell:
                                    - generic:
                                      - generic: "10093"
                                  - cell:
                                    - generic:
                                      - generic: PT250058
                                  - cell:
                                    - generic:
                                      - generic: Mek Siti Abidah
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: 571011-03-5356
                                  - cell:
                                    - generic:
                                      - generic: "+601111415990"
                                  - cell:
                                    - generic:
                                      - generic: Medicalhkkb@gmail.com
                                  - cell:
                                    - generic:
                                      - generic: Hospital Kuala Kubu Bharu
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: WONG JIA HUI
                                  - cell:
                                    - generic:
                                      - generic: Internal Medicine
                                  - cell:
                                    - generic:
                                      - generic: 22 January 2026
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - link:
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/849a8022-4228-419d-8c8b-54bd55816cd4.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064139Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=24208eba7faa142d44b7a393e2a1ebf1f4d9197a76f7cb80f32de62280ab4ded
                                            - img
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic:
                                        - generic:
                                          - generic: Active
                                  - cell:
                                    - generic:
                                      - generic: Pending AF Submision
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                                  - cell:
                                    - generic:
                                      - generic: NA
                      - generic:
                        - generic:
                          - generic:
                            - generic: "Rows per page:"
                            - generic:
                              - generic:
                                - log
                                - generic:
                                  - generic:
                                    - generic: "10"
                                    - generic:
                                      - combobox
                                  - generic:
                                    - generic:
                                      - img
                        - generic:
                          - generic:
                            - button [disabled]:
                              - img
                              - generic: Previous
                            - generic:
                              - button: "1"
                              - button: "2"
                              - button: "3"
                              - button: "4"
                              - button: "5"
                              - button: "6"
                            - button:
                              - generic: Next
                              - img
    - region "Notifications alt+T"
  - dialog "Add New Patient" [ref=e2]:
    - generic [ref=e3]:
      - heading "Add New Patient" [level=2] [ref=e5]
      - button [ref=e6] [cursor=pointer]:
        - img [ref=e7]
    - generic [ref=e15]:
      - group [ref=e21]:
        - generic [ref=e22]:
          - generic:
            - heading [level=4]
          - generic [ref=e24]:
            - generic [ref=e26]:
              - generic [ref=e28]:
                - text: Patient Name
                - generic [ref=e29]: "*"
              - textbox "Patient Name *" [ref=e36]:
                - /placeholder: Patient Name
                - text: AutoPatient_479545
            - generic [ref=e38]:
              - generic [ref=e40]:
                - text: NRIC
                - generic [ref=e41]: "*"
              - textbox "NRIC *" [ref=e48]:
                - /placeholder: NRIC
                - text: "782014109441"
            - generic [ref=e50]:
              - generic [ref=e52]:
                - text: Contact Number
                - generic [ref=e53]: "*"
              - generic [ref=e61]:
                - generic [ref=e63]: "+60"
                - textbox "Phone number" [ref=e64]:
                  - /placeholder: Contact Number
                  - text: "393111799"
            - generic [ref=e66]:
              - generic [ref=e68]:
                - text: Email Address
                - generic [ref=e69]: "*"
              - textbox "Email Address *" [ref=e77]:
                - /placeholder: Email Address
                - text: patient479545@test.com
            - generic [ref=e79]:
              - generic [ref=e81]:
                - text: Indication
                - generic [ref=e82]: "*"
              - generic [ref=e92] [cursor=pointer]:
                - log [ref=e94]
                - generic [ref=e95]:
                  - generic [ref=e96]:
                    - generic [ref=e97]: Plaque Psoriasis (PsO)
                    - combobox [ref=e99]
                  - generic [ref=e100]:
                    - img [ref=e102]
                    - img [ref=e107]
            - generic [ref=e110]:
              - generic [ref=e112]:
                - text: Hospital Name
                - generic [ref=e113]: "*"
              - generic [ref=e123] [cursor=pointer]:
                - log [ref=e125]
                - generic [ref=e126]:
                  - generic [ref=e127]:
                    - generic [ref=e128]: AutoHospital_DF4169
                    - combobox [ref=e130]
                  - generic [ref=e131]:
                    - img [ref=e133]
                    - img [ref=e138]
            - generic [ref=e141]:
              - generic [ref=e143]:
                - text: HCP Name
                - generic [ref=e144]: "*"
              - generic [ref=e154] [cursor=pointer]:
                - log [ref=e156]
                - generic [ref=e157]:
                  - generic [ref=e158]:
                    - generic [ref=e159]: HCP Name
                    - combobox [ref=e161]
                  - img [ref=e164]
              - list [ref=e168]:
                - listitem [ref=e169]: Please select HCP
            - generic [ref=e171]:
              - generic [ref=e173]: Notes
              - textbox "Notes" [ref=e179]
            - generic [ref=e181]:
              - generic [ref=e183]: Caregiver Addition Date
              - generic [ref=e192]:
                - generic [ref=e193]:
                  - textbox "Please select a date" [ref=e194]
                  - paragraph [ref=e195]: Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                - button [ref=e196] [cursor=pointer]:
                  - img [ref=e197]
            - generic [ref=e200]:
              - generic [ref=e202]: Caregiver Name
              - textbox "Caregiver Name" [ref=e209]
            - generic [ref=e211]:
              - generic [ref=e213]: Caregiver Contact Number
              - generic [ref=e221]:
                - generic [ref=e223]: "+60"
                - textbox "Phone number" [ref=e224]:
                  - /placeholder: Caregiver Contact Number
            - generic [ref=e226]:
              - generic [ref=e228]: Caregiver's Relationship with Patient
              - textbox "Caregiver's Relationship with Patient" [ref=e235]
            - generic [ref=e237]:
              - generic [ref=e239]:
                - text: Upload Consent Form
                - generic [ref=e240]: "*"
              - generic [ref=e246]:
                - img [ref=e249]
                - img [ref=e255]
      - button "Submit" [active] [ref=e259] [cursor=pointer]:
        - generic [ref=e260]: Submit
```

# Test source

```ts
  22  |   if (idx >= 0) existing[idx] = entry; else existing.push(entry);
  23  |   fs.mkdirSync(path.dirname(RESULTS_FILE), { recursive: true });
  24  |   fs.writeFileSync(RESULTS_FILE, JSON.stringify(existing, null, 2));
  25  |   console.log(`[${status.toUpperCase()}] ${id}${comment ? ' — ' + comment : ''}`);
  26  | }
  27  | 
  28  | async function reactSelect(page: any, container: any, placeholder: string, search: string): Promise<boolean> {
  29  |   const ph = container.locator(`[class*="placeholder"]:has-text("${placeholder}")`).first();
  30  |   if (await ph.isVisible({ timeout: 3000 }).catch(() => false)) {
  31  |     await ph.click({ force: true });
  32  |   } else {
  33  |     await container.locator('[class*="__control"]').first().click({ force: true }).catch(() => {});
  34  |   }
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
> 122 |     expect(closed || success).toBeTruthy();
      |                               ^ Error: expect(received).toBeTruthy()
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
  135 |     expect(found).toBeTruthy();
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
```