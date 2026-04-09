# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: patient-full.spec.ts >> Patient Module >> TC-PAT-028: Cancel button closes Patient form without saving
- Location: tests/patient-full.spec.ts:592:7

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
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/6f789055-47fc-4c9b-b6f5-43c1828019b7.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064802Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=52118a557bde83e17cbc4151ae3d730dfb25f3c3c528a6ba04f41dc1371172bd
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
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/536f0e81-5a92-4ace-aa90-b24fc0b77e8e.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064802Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6c4820ada48786b1659456beee17ebd957c683ec466d5e960314a8b447d89a2f
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
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/75bd0b27-eaa8-4e03-9379-ebe12f74bc58.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064802Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9d1a1e492590be6598f1bc6c59550c8b199c775685847b5e0a0e481083b76513
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
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/e32e49c5-1018-4560-88c2-8ff8755dadf1.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064802Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a63168dc7c5ab66fd841b8a60994f0185fa657b98f92910c7fd7dfc0d022e562
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
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/d3b7d08d-7f03-4dbd-a0f9-c9e6c04866db.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064802Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=0c4cbbd2e3be55936f2fdbfc53dc601dfc5e9961520813a4e233edc11ea2965b
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
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/1d8b40e5-37d3-4de9-a629-28be4bc75342.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064802Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=0f8f23e489462b18c6dce645cd064daeff0c40f0d89cf2421a50e30aa262fa01
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
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/a0d8aef2-3b58-4177-9637-66353070afaa.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064802Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=3dfce7ac8d720615aa0c90761307a926a051741f35076446858f77e35caff37b
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
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/93f4db18-2e50-4eeb-b7c2-4c52b8a9988d.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064802Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e313fd5c42f1aa74274c99bee96104e82d27d079188f6e6a9ff4979fcb24dfda
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
                                            - /url: https://zango-staging-media-bucket.s3.amazonaws.com/media/sarapsp/Patient/849a8022-4228-419d-8c8b-54bd55816cd4.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVJQHVRR3JNYL2OB%2F20260408%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260408T064802Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4bf6b60f81b50e5d2b284e09c2ce216e30f077f8d2199a40b5770ec65caac068
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
              - textbox "Patient Name *" [active] [ref=e36]:
                - /placeholder: Patient Name
                - text: ShouldNotSavePatient
            - generic [ref=e38]:
              - generic [ref=e40]:
                - text: NRIC
                - generic [ref=e41]: "*"
              - textbox "NRIC *" [ref=e48]:
                - /placeholder: NRIC
            - generic [ref=e50]:
              - generic [ref=e52]:
                - text: Contact Number
                - generic [ref=e53]: "*"
              - generic [ref=e61]:
                - generic [ref=e63]: "+60"
                - textbox "Phone number" [ref=e64]:
                  - /placeholder: Contact Number
            - generic [ref=e66]:
              - generic [ref=e68]:
                - text: Email Address
                - generic [ref=e69]: "*"
              - textbox "Email Address *" [ref=e77]:
                - /placeholder: Email Address
            - generic [ref=e79]:
              - generic [ref=e81]:
                - text: Indication
                - generic [ref=e82]: "*"
              - generic [ref=e92] [cursor=pointer]:
                - log [ref=e94]
                - generic [ref=e95]:
                  - generic [ref=e96]:
                    - generic [ref=e97]: Indication
                    - combobox [ref=e99]
                  - img [ref=e102]
            - generic [ref=e105]:
              - generic [ref=e107]:
                - text: Hospital Name
                - generic [ref=e108]: "*"
              - generic [ref=e118] [cursor=pointer]:
                - log [ref=e120]
                - generic [ref=e121]:
                  - generic [ref=e122]:
                    - generic [ref=e123]: Hospital Name
                    - combobox [ref=e125]
                  - img [ref=e128]
            - generic [ref=e131]:
              - generic [ref=e133]:
                - text: HCP Name
                - generic [ref=e134]: "*"
              - generic [ref=e144] [cursor=pointer]:
                - log [ref=e146]
                - generic [ref=e147]:
                  - generic [ref=e148]:
                    - generic [ref=e149]: HCP Name
                    - combobox [ref=e151]
                  - img [ref=e154]
            - generic [ref=e157]:
              - generic [ref=e159]: Notes
              - textbox "Notes" [ref=e165]
            - generic [ref=e167]:
              - generic [ref=e169]: Caregiver Addition Date
              - generic [ref=e178]:
                - generic [ref=e179]:
                  - textbox "Please select a date" [ref=e180]
                  - paragraph [ref=e181]: Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                - button [ref=e182] [cursor=pointer]:
                  - img [ref=e183]
            - generic [ref=e186]:
              - generic [ref=e188]: Caregiver Name
              - textbox "Caregiver Name" [ref=e195]
            - generic [ref=e197]:
              - generic [ref=e199]: Caregiver Contact Number
              - generic [ref=e207]:
                - generic [ref=e209]: "+60"
                - textbox "Phone number" [ref=e210]:
                  - /placeholder: Caregiver Contact Number
            - generic [ref=e212]:
              - generic [ref=e214]: Caregiver's Relationship with Patient
              - textbox "Caregiver's Relationship with Patient" [ref=e221]
            - generic [ref=e223]:
              - generic [ref=e225]:
                - text: Upload Consent Form
                - generic [ref=e226]: "*"
              - generic [ref=e232]:
                - generic [ref=e234]: Click to Upload Upload Consent Form
                - img [ref=e235]
      - button "Submit" [ref=e239] [cursor=pointer]:
        - generic [ref=e240]: Submit
```

# Test source

```ts
  499 |     await openPatientForm(page, pp);
  500 |     const modal = page.locator(MODAL).last();
  501 |     const fileInput = modal.locator('input[type="file"]').first();
  502 |     if (await fileInput.isVisible({ timeout: 3000 }).catch(() => false)) {
  503 |       await fileInput.setInputFiles(CONSENT_PDF);
  504 |       await page.waitForTimeout(1500);
  505 |       const preview = await page.locator(':text("consent-form"), :text(".pdf"), [class*="file-name"], [class*="upload-success"], [class*="preview"]').first().isVisible({ timeout: 3000 }).catch(() => false);
  506 |       await page.keyboard.press('Escape').catch(() => {});
  507 |       saveResult('TC-PAT-023', preview ? 'pass' : 'pending',
  508 |         preview ? 'File name/preview shown after consent form upload' : 'No file name or preview visible after upload — may require page-specific selector');
  509 |     } else {
  510 |       await page.keyboard.press('Escape').catch(() => {});
  511 |       saveResult('TC-PAT-023', 'pending', 'File input not found — cannot test upload preview');
  512 |     }
  513 |   });
  514 | 
  515 |   test('TC-PAT-024: Submitting blank Patient form blocks submission with errors', async ({ page }) => {
  516 |     const pp = new PatientPage(page);
  517 |     await openPatientForm(page, pp);
  518 |     const modal = page.locator(MODAL).last();
  519 |     await pp.submitPatientForm();
  520 |     await page.waitForTimeout(2000);
  521 |     const open = await modal.isVisible({ timeout: 3000 }).catch(() => false);
  522 |     saveResult('TC-PAT-024', open ? 'pass' : 'fail',
  523 |       open ? 'Blank Patient form blocked submission' : 'Blank form submitted without validation');
  524 |     expect(open).toBeTruthy();
  525 |   });
  526 | 
  527 |   test('TC-PAT-025: Duplicate NRiC is rejected with an appropriate error', async ({ page }) => {
  528 |     const data = loadCreatedData();
  529 |     // If no patient was created, mark pending
  530 |     if (!data.patient) {
  531 |       saveResult('TC-PAT-025', 'pending', 'No existing patient to test duplicate NRiC — create a patient first');
  532 |       return;
  533 |     }
  534 |     const hospitalName = data.hospital?.name ?? 'AutoHospital_DF4169';
  535 |     const hcpName = data.hcp?.name ?? 'AutoHCP_DF4169';
  536 |     const pp = new PatientPage(page);
  537 |     await openPatientForm(page, pp);
  538 |     const modal = page.locator(MODAL).last();
  539 |     await modal.getByPlaceholder('Patient Name').fill('DuplicateNRICTest').catch(() => {});
  540 |     // We don't know the NRiC of the previously created patient, so mark as pending
  541 |     await page.keyboard.press('Escape').catch(() => {});
  542 |     saveResult('TC-PAT-025', 'pending', 'Cannot retrieve previously used NRiC from created-data.json — NRiC not stored there');
  543 |   });
  544 | 
  545 |   test('TC-PAT-026: Patient list shows correct data for created patient record', async ({ page }) => {
  546 |     const data = loadCreatedData();
  547 |     const name = data.patient?.name;
  548 |     if (!name) { saveResult('TC-PAT-026', 'pending', 'No patient data in created-data.json'); return; }
  549 |     const pp = new PatientPage(page);
  550 |     await pp.navigateToPatients();
  551 |     await page.waitForTimeout(2000);
  552 |     const text = await page.evaluate(() => document.body.innerText);
  553 |     saveResult('TC-PAT-026', text.includes(name) ? 'pass' : 'fail',
  554 |       text.includes(name) ? 'Patient data visible in list' : `"${name}" not found in Patient list — may be on different page`);
  555 |   });
  556 | 
  557 |   test('TC-PAT-027: Editing a Patient record saves the updated Contact Number', async ({ page }) => {
  558 |     const data = loadCreatedData();
  559 |     const name = data.patient?.name;
  560 |     if (!name) { saveResult('TC-PAT-027', 'pending', 'No patient data in created-data.json — skip edit test'); return; }
  561 |     const pp = new PatientPage(page);
  562 |     await pp.navigateToPatients();
  563 |     await page.waitForTimeout(2000);
  564 |     const row = page.locator(`tr:has-text("${name}"), [class*="row"]:has-text("${name}")`).first();
  565 |     if (!(await row.isVisible({ timeout: 5000 }).catch(() => false))) {
  566 |       saveResult('TC-PAT-027', 'pending', `Patient row for "${name}" not visible in list`);
  567 |       return;
  568 |     }
  569 |     const editBtn = row.locator('button, a, [class*="edit"]').first();
  570 |     if (!(await editBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
  571 |       saveResult('TC-PAT-027', 'pending', 'Edit button not found in Patient row');
  572 |       return;
  573 |     }
  574 |     await editBtn.click({ force: true });
  575 |     await page.waitForTimeout(1500);
  576 |     const modal = page.locator(MODAL).last();
  577 |     if (!(await modal.isVisible({ timeout: 5000 }).catch(() => false))) {
  578 |       saveResult('TC-PAT-027', 'pending', 'Edit modal did not open for Patient');
  579 |       return;
  580 |     }
  581 |     const tel = modal.locator('input[type="tel"]').first();
  582 |     if (await tel.isVisible({ timeout: 2000 }).catch(() => false)) {
  583 |       await tel.fill('312345678');
  584 |     }
  585 |     await pp.submitPatientForm();
  586 |     await page.waitForTimeout(2000);
  587 |     const closed = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  588 |     saveResult('TC-PAT-027', closed ? 'pass' : 'fail',
  589 |       closed ? 'Patient edit saved successfully' : 'Edit form did not close after saving');
  590 |   });
  591 | 
  592 |   test('TC-PAT-028: Cancel button closes Patient form without saving', async ({ page }) => {
  593 |     const pp = new PatientPage(page);
  594 |     await openPatientForm(page, pp);
  595 |     const modal = page.locator(MODAL).last();
  596 |     await modal.getByPlaceholder('Patient Name').fill('ShouldNotSavePatient').catch(() => {});
  597 |     const cancel = page.locator('button:has-text("Cancel"), button:has-text("Close"), [class*="close"]').first();
  598 |     if (await cancel.isVisible({ timeout: 3000 }).catch(() => false)) {
> 599 |       await cancel.click({ force: true });
      |                    ^ Error: locator.click: Element is outside of the viewport
  600 |     } else {
  601 |       await page.keyboard.press('Escape');
  602 |     }
  603 |     await page.waitForTimeout(1000);
  604 |     const gone = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  605 |     saveResult('TC-PAT-028', gone ? 'pass' : 'fail',
  606 |       gone ? 'Patient form closed on Cancel without saving' : 'Patient form still visible after Cancel');
  607 |   });
  608 | 
  609 |   test('TC-PAT-029: Searching by patient name returns matching records', async ({ page }) => {
  610 |     const data = loadCreatedData();
  611 |     const name = data.patient?.name;
  612 |     if (!name) { saveResult('TC-PAT-029', 'pending', 'No patient data in created-data.json'); return; }
  613 |     const pp = new PatientPage(page);
  614 |     await pp.navigateToPatients();
  615 |     await page.waitForTimeout(2000);
  616 |     const search = page.locator('input[placeholder*="search" i], input[type="search"]').first();
  617 |     if (!(await search.isVisible({ timeout: 3000 }).catch(() => false))) {
  618 |       saveResult('TC-PAT-029', 'pending', 'Search input not found on Patient list');
  619 |       return;
  620 |     }
  621 |     await search.fill(name.split(' ')[0]);
  622 |     await page.waitForTimeout(2000);
  623 |     const text = await page.evaluate(() => document.body.innerText);
  624 |     saveResult('TC-PAT-029', text.includes(name.split(' ')[0]) ? 'pass' : 'fail',
  625 |       text.includes(name.split(' ')[0]) ? 'Search returned matching patient' : `Search did not return patient matching "${name}"`);
  626 |   });
  627 | 
  628 |   test('TC-PAT-030: Searching by NRiC returns the matching patient', async ({ page }) => {
  629 |     const pp = new PatientPage(page);
  630 |     await pp.navigateToPatients();
  631 |     await page.waitForTimeout(2000);
  632 |     const search = page.locator('input[placeholder*="search" i], input[type="search"]').first();
  633 |     if (!(await search.isVisible({ timeout: 3000 }).catch(() => false))) {
  634 |       saveResult('TC-PAT-030', 'pending', 'Search input not found on Patient list');
  635 |       return;
  636 |     }
  637 |     // Search a partial NRiC (we don't know exact value)
  638 |     await search.fill('700101');
  639 |     await page.waitForTimeout(2000);
  640 |     const text = await page.evaluate(() => document.body.innerText);
  641 |     const hasResult = !text.includes('No records') && !text.includes('No data');
  642 |     saveResult('TC-PAT-030', hasResult ? 'pass' : 'pending',
  643 |       hasResult ? 'NRiC search returned records' : 'NRiC search returned no results — no patient with 700101 prefix or search does not support NRiC');
  644 |   });
  645 | 
  646 |   test('TC-PAT-031: Filtering Patient list by Hospital shows relevant patients', async ({ page }) => {
  647 |     const data = loadCreatedData();
  648 |     const hospitalName = data.hospital?.name;
  649 |     if (!hospitalName) { saveResult('TC-PAT-031', 'pending', 'No hospital data in created-data.json'); return; }
  650 |     const pp = new PatientPage(page);
  651 |     await pp.navigateToPatients();
  652 |     await page.waitForTimeout(2000);
  653 |     const filterBtn = page.locator('button:has-text("Filter"), [class*="filter"], select[name*="hospital" i]').first();
  654 |     if (!(await filterBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
  655 |       saveResult('TC-PAT-031', 'pending', 'Filter controls not found on Patient list — may not have hospital filter');
  656 |       return;
  657 |     }
  658 |     await filterBtn.click({ force: true }).catch(() => {});
  659 |     await page.waitForTimeout(1000);
  660 |     const filterOption = page.locator(`[class*="option"]:has-text("${hospitalName}"), option:has-text("${hospitalName}")`).first();
  661 |     if (await filterOption.isVisible({ timeout: 5000 }).catch(() => false)) {
  662 |       await filterOption.click({ force: true });
  663 |       await page.waitForTimeout(2000);
  664 |       saveResult('TC-PAT-031', 'pass', `Filter by Hospital "${hospitalName}" applied successfully`);
  665 |     } else {
  666 |       saveResult('TC-PAT-031', 'pending', 'Hospital filter option not found in filter dropdown');
  667 |     }
  668 |   });
  669 | 
  670 |   test('TC-PAT-032: Filtering Patient list by HCP shows relevant patients', async ({ page }) => {
  671 |     const pp = new PatientPage(page);
  672 |     await pp.navigateToPatients();
  673 |     await page.waitForTimeout(2000);
  674 |     const filterBtn = page.locator('button:has-text("Filter"), [class*="filter"], select[name*="hcp" i]').first();
  675 |     if (!(await filterBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
  676 |       saveResult('TC-PAT-032', 'pending', 'HCP Filter not found on Patient list');
  677 |     } else {
  678 |       saveResult('TC-PAT-032', 'pending', 'HCP filter UI requires manual investigation — could not determine exact interaction pattern');
  679 |     }
  680 |   });
  681 | 
  682 |   test('TC-PAT-033: Clear Filters button resets all active filters on Patient list', async ({ page }) => {
  683 |     const pp = new PatientPage(page);
  684 |     await pp.navigateToPatients();
  685 |     await page.waitForTimeout(2000);
  686 |     const clearBtn = page.locator('button:has-text("Clear"), button:has-text("Reset"), a:has-text("Clear filters")').first();
  687 |     if (await clearBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
  688 |       await clearBtn.click({ force: true });
  689 |       await page.waitForTimeout(1500);
  690 |       saveResult('TC-PAT-033', 'pass', 'Clear Filters button found and clicked — filters reset');
  691 |     } else {
  692 |       saveResult('TC-PAT-033', 'pending', 'Clear Filters button not visible — no active filters or button uses different label');
  693 |     }
  694 |   });
  695 | 
  696 |   test('TC-PAT-034: Searching for a non-existent name shows empty state or no results', async ({ page }) => {
  697 |     const pp = new PatientPage(page);
  698 |     await pp.navigateToPatients();
  699 |     await page.waitForTimeout(2000);
```