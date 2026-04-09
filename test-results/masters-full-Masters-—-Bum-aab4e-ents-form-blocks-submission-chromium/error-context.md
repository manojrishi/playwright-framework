# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: masters-full.spec.ts >> Masters — Bumi Agents >> TC-BUM-009: Submitting blank Bumi Agents form blocks submission
- Location: tests/masters-full.spec.ts:1089:7

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
              - generic [ref=e59]: AF Bodies
          - listitem [ref=e60] [cursor=pointer]:
            - link "Bumi Agents" [ref=e61]:
              - /url: /app/bhumi-agent
              - img [ref=e63]
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
          - heading "Bumi Agents (10)" [level=1] [ref=e283]:
            - generic [ref=e284]: Bumi Agents
            - generic [ref=e285]: (10)
          - button "Add New Bumi Agent" [ref=e287] [cursor=pointer]
        - generic [ref=e288]:
          - generic [ref=e291]:
            - heading "Filters" [level=3] [ref=e294]
            - generic [ref=e296]:
              - generic [ref=e297]:
                - button "Bumi Agent ID" [ref=e298] [cursor=pointer]:
                  - generic [ref=e301]: Bumi Agent ID
                  - img [ref=e304]
                - generic [ref=e309]:
                  - generic:
                    - img
                  - textbox "Search bumi agent id" [ref=e310]
              - generic [ref=e311]:
                - button "Agent Internal ID" [ref=e312] [cursor=pointer]:
                  - generic [ref=e315]: Agent Internal ID
                  - img [ref=e318]
                - generic [ref=e323]:
                  - generic:
                    - img
                  - textbox "Search agent internal id" [ref=e324]
              - generic [ref=e325]:
                - button "Bumi Agent Name" [ref=e326] [cursor=pointer]:
                  - generic [ref=e329]: Bumi Agent Name
                  - img [ref=e332]
                - generic [ref=e337]:
                  - generic:
                    - img
                  - textbox "Search bumi agent name" [ref=e338]
              - generic [ref=e339]:
                - button "Bumi Agent Person In-Charge" [ref=e340] [cursor=pointer]:
                  - generic [ref=e343]: Bumi Agent Person In-Charge
                  - img [ref=e346]
                - generic [ref=e351]:
                  - generic:
                    - img
                  - textbox "Search bumi agent person in-charge" [ref=e352]
              - generic [ref=e353]:
                - button "Bumi Agent Contact Number" [ref=e354] [cursor=pointer]:
                  - generic [ref=e357]: Bumi Agent Contact Number
                  - img [ref=e360]
                - generic [ref=e365]:
                  - generic:
                    - img
                  - textbox "Search bumi agent contact number" [ref=e366]
              - generic [ref=e367]:
                - button "Bumi Agent Email Address" [ref=e368] [cursor=pointer]:
                  - generic [ref=e371]: Bumi Agent Email Address
                  - img [ref=e374]
                - generic [ref=e379]:
                  - generic:
                    - img
                  - textbox "Search bumi agent email address" [ref=e380]
          - generic [ref=e381]:
            - generic [ref=e383]:
              - button "Filters" [ref=e385] [cursor=pointer]:
                - img [ref=e386]
                - text: Filters
              - generic [ref=e390]:
                - generic [ref=e393]:
                  - generic:
                    - img
                  - textbox "Search..." [ref=e394]
                - button "Download" [ref=e395] [cursor=pointer]:
                  - img [ref=e396]
                - generic [ref=e401]:
                  - button "View" [ref=e403] [cursor=pointer]:
                    - img [ref=e404]
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
                        - generic: Bumi Agent ID
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
                        - generic: Agent Internal ID
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
                        - generic: Bumi Agent Name
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
                        - generic: Bumi Agent Person In-Charge
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
                        - generic: Bumi Agent Contact Number
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
                        - generic: Bumi Agent Email Address
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
            - table [ref=e409]:
              - rowgroup [ref=e410]:
                - row "Bumi Agent ID Agent Internal ID Bumi Agent Name Bumi Agent Person In-Charge Bumi Agent Contact Number Bumi Agent Email Address Created At" [ref=e411]:
                  - columnheader "Bumi Agent ID" [ref=e412]:
                    - button "Bumi Agent ID" [ref=e413] [cursor=pointer]:
                      - text: Bumi Agent ID
                      - img [ref=e415]
                  - columnheader "Agent Internal ID" [ref=e418]:
                    - button "Agent Internal ID" [ref=e419] [cursor=pointer]:
                      - text: Agent Internal ID
                      - img [ref=e421]
                  - columnheader "Bumi Agent Name" [ref=e424]:
                    - button "Bumi Agent Name" [ref=e425] [cursor=pointer]:
                      - text: Bumi Agent Name
                      - img [ref=e427]
                  - columnheader "Bumi Agent Person In-Charge" [ref=e430]:
                    - button "Bumi Agent Person In-Charge" [ref=e431] [cursor=pointer]:
                      - text: Bumi Agent Person In-Charge
                      - img [ref=e433]
                  - columnheader "Bumi Agent Contact Number" [ref=e436]
                  - columnheader "Bumi Agent Email Address" [ref=e437]:
                    - button "Bumi Agent Email Address" [ref=e438] [cursor=pointer]:
                      - text: Bumi Agent Email Address
                      - img [ref=e440]
                  - columnheader "Created At" [ref=e443]:
                    - button "Created At" [active] [ref=e444] [cursor=pointer]:
                      - text: Created At
                      - img [ref=e446]
              - rowgroup [ref=e449]:
                - row "10010 51869 AutoBumiAgent_DF4169 NA +60358214483 autobumiagent_df4169@test.com 07 April 2026 06:49 PM" [ref=e450] [cursor=pointer]:
                  - cell "10010" [ref=e451]:
                    - generic [ref=e453]: "10010"
                  - cell "51869" [ref=e454]:
                    - generic [ref=e456]: "51869"
                  - cell "AutoBumiAgent_DF4169" [ref=e457]:
                    - generic [ref=e459]: AutoBumiAgent_DF4169
                  - cell "NA" [ref=e460]:
                    - generic [ref=e462]: NA
                  - cell "+60358214483" [ref=e463]:
                    - generic [ref=e465]: "+60358214483"
                  - cell "autobumiagent_df4169@test.com" [ref=e466]:
                    - generic [ref=e468]: autobumiagent_df4169@test.com
                  - cell "07 April 2026 06:49 PM" [ref=e469]:
                    - generic [ref=e471]: 07 April 2026 06:49 PM
                - row "10009 95412 AutoBumiAgent_09A6F0 NA +60341454443 autobumiagent_09a6f0@test.com 07 April 2026 06:17 PM" [ref=e472] [cursor=pointer]:
                  - cell "10009" [ref=e473]:
                    - generic [ref=e475]: "10009"
                  - cell "95412" [ref=e476]:
                    - generic [ref=e478]: "95412"
                  - cell "AutoBumiAgent_09A6F0" [ref=e479]:
                    - generic [ref=e481]: AutoBumiAgent_09A6F0
                  - cell "NA" [ref=e482]:
                    - generic [ref=e484]: NA
                  - cell "+60341454443" [ref=e485]:
                    - generic [ref=e487]: "+60341454443"
                  - cell "autobumiagent_09a6f0@test.com" [ref=e488]:
                    - generic [ref=e490]: autobumiagent_09a6f0@test.com
                  - cell "07 April 2026 06:17 PM" [ref=e491]:
                    - generic [ref=e493]: 07 April 2026 06:17 PM
                - row "10008 67822 AutoBumiAgent_4AF70B NA +60376732397 autobumiagent_4af70b@test.com 07 April 2026 03:57 PM" [ref=e494] [cursor=pointer]:
                  - cell "10008" [ref=e495]:
                    - generic [ref=e497]: "10008"
                  - cell "67822" [ref=e498]:
                    - generic [ref=e500]: "67822"
                  - cell "AutoBumiAgent_4AF70B" [ref=e501]:
                    - generic [ref=e503]: AutoBumiAgent_4AF70B
                  - cell "NA" [ref=e504]:
                    - generic [ref=e506]: NA
                  - cell "+60376732397" [ref=e507]:
                    - generic [ref=e509]: "+60376732397"
                  - cell "autobumiagent_4af70b@test.com" [ref=e510]:
                    - generic [ref=e512]: autobumiagent_4af70b@test.com
                  - cell "07 April 2026 03:57 PM" [ref=e513]:
                    - generic [ref=e515]: 07 April 2026 03:57 PM
                - row "10007 89091 AutoBumiAgent_DDC3C8 NA +6089260873 autobumiagent_ddc3c8@test.com 07 April 2026 01:00 PM" [ref=e516] [cursor=pointer]:
                  - cell "10007" [ref=e517]:
                    - generic [ref=e519]: "10007"
                  - cell "89091" [ref=e520]:
                    - generic [ref=e522]: "89091"
                  - cell "AutoBumiAgent_DDC3C8" [ref=e523]:
                    - generic [ref=e525]: AutoBumiAgent_DDC3C8
                  - cell "NA" [ref=e526]:
                    - generic [ref=e528]: NA
                  - cell "+6089260873" [ref=e529]:
                    - generic [ref=e531]: "+6089260873"
                  - cell "autobumiagent_ddc3c8@test.com" [ref=e532]:
                    - generic [ref=e534]: autobumiagent_ddc3c8@test.com
                  - cell "07 April 2026 01:00 PM" [ref=e535]:
                    - generic [ref=e537]: 07 April 2026 01:00 PM
                - row "10006 37677 AutoBumiAgent_9EC50E NA +6089678278 autobumiagent_9ec50e@test.com 07 April 2026 12:50 PM" [ref=e538] [cursor=pointer]:
                  - cell "10006" [ref=e539]:
                    - generic [ref=e541]: "10006"
                  - cell "37677" [ref=e542]:
                    - generic [ref=e544]: "37677"
                  - cell "AutoBumiAgent_9EC50E" [ref=e545]:
                    - generic [ref=e547]: AutoBumiAgent_9EC50E
                  - cell "NA" [ref=e548]:
                    - generic [ref=e550]: NA
                  - cell "+6089678278" [ref=e551]:
                    - generic [ref=e553]: "+6089678278"
                  - cell "autobumiagent_9ec50e@test.com" [ref=e554]:
                    - generic [ref=e556]: autobumiagent_9ec50e@test.com
                  - cell "07 April 2026 12:50 PM" [ref=e557]:
                    - generic [ref=e559]: 07 April 2026 12:50 PM
                - row "10005 1234 Dummy Agent NA NA dummyagent@test.com 12 March 2026 11:57 AM" [ref=e560] [cursor=pointer]:
                  - cell "10005" [ref=e561]:
                    - generic [ref=e563]: "10005"
                  - cell "1234" [ref=e564]:
                    - generic [ref=e566]: "1234"
                  - cell "Dummy Agent" [ref=e567]:
                    - generic [ref=e569]: Dummy Agent
                  - cell "NA" [ref=e570]:
                    - generic [ref=e572]: NA
                  - cell "NA" [ref=e573]:
                    - generic [ref=e575]: NA
                  - cell "dummyagent@test.com" [ref=e576]:
                    - generic [ref=e578]: dummyagent@test.com
                  - cell "12 March 2026 11:57 AM" [ref=e579]:
                    - generic [ref=e581]: 12 March 2026 11:57 AM
                - row "10003 BA03 Wija Pharma Sdn Bhd Test +6088774433 BA10004.619@gmail.com 22 February 2026 08:21 PM" [ref=e582] [cursor=pointer]:
                  - cell "10003" [ref=e583]:
                    - generic [ref=e585]: "10003"
                  - cell "BA03" [ref=e586]:
                    - generic [ref=e588]: BA03
                  - cell "Wija Pharma Sdn Bhd" [ref=e589]:
                    - generic [ref=e591]: Wija Pharma Sdn Bhd
                  - cell "Test" [ref=e592]:
                    - generic [ref=e594]: Test
                  - cell "+6088774433" [ref=e595]:
                    - generic [ref=e597]: "+6088774433"
                  - cell "BA10004.619@gmail.com" [ref=e598]:
                    - generic [ref=e600]: BA10004.619@gmail.com
                  - cell "22 February 2026 08:21 PM" [ref=e601]:
                    - generic [ref=e603]: 22 February 2026 08:21 PM
                - row "10002 BA02 Primabumi Sdn Bhd Tes +6088993322 BA10002.619@gmail.com 22 February 2026 08:21 PM" [ref=e604] [cursor=pointer]:
                  - cell "10002" [ref=e605]:
                    - generic [ref=e607]: "10002"
                  - cell "BA02" [ref=e608]:
                    - generic [ref=e610]: BA02
                  - cell "Primabumi Sdn Bhd" [ref=e611]:
                    - generic [ref=e613]: Primabumi Sdn Bhd
                  - cell "Tes" [ref=e614]:
                    - generic [ref=e616]: Tes
                  - cell "+6088993322" [ref=e617]:
                    - generic [ref=e619]: "+6088993322"
                  - cell "BA10002.619@gmail.com" [ref=e620]:
                    - generic [ref=e622]: BA10002.619@gmail.com
                  - cell "22 February 2026 08:21 PM" [ref=e623]:
                    - generic [ref=e625]: 22 February 2026 08:21 PM
                - row "10001 BA01 Pharmaniaga Logistics Sdn Bhd Test +6088993301 bumi@zelthy.com 03 February 2026 06:44 AM" [ref=e626] [cursor=pointer]:
                  - cell "10001" [ref=e627]:
                    - generic [ref=e629]: "10001"
                  - cell "BA01" [ref=e630]:
                    - generic [ref=e632]: BA01
                  - cell "Pharmaniaga Logistics Sdn Bhd" [ref=e633]:
                    - generic [ref=e635]: Pharmaniaga Logistics Sdn Bhd
                  - cell "Test" [ref=e636]:
                    - generic [ref=e638]: Test
                  - cell "+6088993301" [ref=e639]:
                    - generic [ref=e641]: "+6088993301"
                  - cell "bumi@zelthy.com" [ref=e642]:
                    - generic [ref=e644]: bumi@zelthy.com
                  - cell "03 February 2026 06:44 AM" [ref=e645]:
                    - generic [ref=e647]: 03 February 2026 06:44 AM
                - row "10004 BA10005 Bumi Agent A alia Ali +60187654654 BA@gmai.com 04 March 2026 12:31 PM" [ref=e648] [cursor=pointer]:
                  - cell "10004" [ref=e649]:
                    - generic [ref=e651]: "10004"
                  - cell "BA10005" [ref=e652]:
                    - generic [ref=e654]: BA10005
                  - cell "Bumi Agent A" [ref=e655]:
                    - generic [ref=e657]: Bumi Agent A
                  - cell "alia Ali" [ref=e658]:
                    - generic [ref=e660]: alia Ali
                  - cell "+60187654654" [ref=e661]:
                    - generic [ref=e663]: "+60187654654"
                  - cell "BA@gmai.com" [ref=e664]:
                    - generic [ref=e666]: BA@gmai.com
                  - cell "04 March 2026 12:31 PM" [ref=e667]:
                    - generic [ref=e669]: 04 March 2026 12:31 PM
            - generic [ref=e670]:
              - generic [ref=e672]:
                - generic [ref=e673]: "Rows per page:"
                - generic [ref=e675]:
                  - log [ref=e677]
                  - generic [ref=e678]:
                    - generic [ref=e679]:
                      - generic [ref=e680]: "10"
                      - 'combobox "Rows per page: 10" [ref=e682]'
                    - img [ref=e685]
              - generic [ref=e688]:
                - button "Previous" [disabled] [ref=e689]:
                  - img [ref=e690]
                  - generic [ref=e692]: Previous
                - button "1" [ref=e694] [cursor=pointer]
                - button "Next" [disabled] [ref=e695]:
                  - generic [ref=e696]: Next
                  - img [ref=e697]
  - region "Notifications alt+T"
```

# Test source

```ts
  999  |     await mp.submitForm();
  1000 |     await page.waitForTimeout(2000);
  1001 |     const blocked = await checkValidation(page, modal);
  1002 |     saveResult('TC-BUM-004', blocked ? 'pass' : 'fail',
  1003 |       blocked ? 'Form blocked without Agent Name' : 'Form submitted without Agent Name — no error');
  1004 |     expect(blocked).toBeTruthy();
  1005 |   });
  1006 | 
  1007 |   test('TC-BUM-005: Bumi Agents form blocks submission when Internal ID is blank', async ({ page }) => {
  1008 |     const mp = new MastersPage(page);
  1009 |     await navToSection(mp, 'Bumi Agents');
  1010 |     await openForm(mp);
  1011 |     const modal = page.locator(MODAL).last();
  1012 |     await modal.getByPlaceholder('Bumi Agent Name').fill('OnlyNameBumi').catch(() => {});
  1013 |     await mp.submitForm();
  1014 |     await page.waitForTimeout(2000);
  1015 |     const blocked = await checkValidation(page, modal);
  1016 |     saveResult('TC-BUM-005', blocked ? 'pass' : 'fail',
  1017 |       blocked ? 'Form blocked without Internal ID' : 'Form submitted without Internal ID — no error');
  1018 |     expect(blocked).toBeTruthy();
  1019 |   });
  1020 | 
  1021 |   test('TC-BUM-006: Contact Number accepts a valid Malaysian phone number', async ({ page }) => {
  1022 |     const mp = new MastersPage(page);
  1023 |     await navToSection(mp, 'Bumi Agents');
  1024 |     await openForm(mp);
  1025 |     const modal = page.locator(MODAL).last();
  1026 |     const validPhone = '358214488';
  1027 |     let filled = false;
  1028 |     for (const ph of ['Contact Number', 'Phone Number', 'Mobile Number']) {
  1029 |       const f = modal.getByPlaceholder(ph);
  1030 |       if (await f.isVisible({ timeout: 2000 }).catch(() => false)) {
  1031 |         await f.fill(validPhone);
  1032 |         const val = await f.inputValue().catch(() => '');
  1033 |         await page.keyboard.press('Escape').catch(() => {});
  1034 |         saveResult('TC-BUM-006', val === validPhone ? 'pass' : 'fail',
  1035 |           val === validPhone ? 'Valid phone accepted in Contact Number' : `Expected "${validPhone}" got "${val}"`);
  1036 |         filled = true;
  1037 |         break;
  1038 |       }
  1039 |     }
  1040 |     if (!filled) {
  1041 |       await page.keyboard.press('Escape').catch(() => {});
  1042 |       saveResult('TC-BUM-006', 'pending', 'Contact Number field not found by known placeholders');
  1043 |     }
  1044 |   });
  1045 | 
  1046 |   test('TC-BUM-007: Contact Number field rejects non-numeric characters', async ({ page }) => {
  1047 |     const mp = new MastersPage(page);
  1048 |     await navToSection(mp, 'Bumi Agents');
  1049 |     await openForm(mp);
  1050 |     const modal = page.locator(MODAL).last();
  1051 |     let tested = false;
  1052 |     for (const ph of ['Contact Number', 'Phone Number', 'Mobile Number']) {
  1053 |       const f = modal.getByPlaceholder(ph);
  1054 |       if (await f.isVisible({ timeout: 2000 }).catch(() => false)) {
  1055 |         await f.fill('abcdefghi');
  1056 |         const val = await f.inputValue().catch(() => 'abcdefghi');
  1057 |         const numOnly = /^\d*$/.test(val);
  1058 |         await page.keyboard.press('Escape').catch(() => {});
  1059 |         saveResult('TC-BUM-007', numOnly ? 'pass' : 'fail',
  1060 |           numOnly ? 'Non-numeric input filtered from Contact Number' : `Field accepted "abcdefghi" — value: "${val}"`);
  1061 |         tested = true;
  1062 |         break;
  1063 |       }
  1064 |     }
  1065 |     if (!tested) {
  1066 |       await page.keyboard.press('Escape').catch(() => {});
  1067 |       saveResult('TC-BUM-007', 'pending', 'Contact Number field not found — cannot test non-numeric rejection');
  1068 |     }
  1069 |   });
  1070 | 
  1071 |   test('TC-BUM-008: Email field shows error for invalid email format', async ({ page }) => {
  1072 |     const mp = new MastersPage(page);
  1073 |     await navToSection(mp, 'Bumi Agents');
  1074 |     await openForm(mp);
  1075 |     const modal = page.locator(MODAL).last();
  1076 |     await modal.getByPlaceholder('Bumi Agent Name').fill('BumiNameOnly').catch(() => {});
  1077 |     await modal.getByPlaceholder('Bumi Agent Internal ID').fill('BUM99992').catch(() => {});
  1078 |     await modal.getByPlaceholder('Email Address').fill('bademail').catch(() =>
  1079 |       modal.locator('input[type="email"]').fill('bademail').catch(() => {})
  1080 |     );
  1081 |     await mp.submitForm();
  1082 |     await page.waitForTimeout(2000);
  1083 |     const blocked = await checkValidation(page, modal);
  1084 |     saveResult('TC-BUM-008', blocked ? 'pass' : 'fail',
  1085 |       blocked ? 'Invalid email format blocked Bumi Agent form submission' : 'Form accepted invalid email without error');
  1086 |     expect(blocked).toBeTruthy();
  1087 |   });
  1088 | 
  1089 |   test('TC-BUM-009: Submitting blank Bumi Agents form blocks submission', async ({ page }) => {
  1090 |     const mp = new MastersPage(page);
  1091 |     await navToSection(mp, 'Bumi Agents');
  1092 |     await openForm(mp);
  1093 |     const modal = page.locator(MODAL).last();
  1094 |     await mp.submitForm();
  1095 |     await page.waitForTimeout(2000);
  1096 |     const open = await modal.isVisible({ timeout: 3000 }).catch(() => false);
  1097 |     saveResult('TC-BUM-009', open ? 'pass' : 'fail',
  1098 |       open ? 'Blank Bumi Agents form blocked submission' : 'Blank form submitted without validation');
> 1099 |     expect(open).toBeTruthy();
       |                  ^ Error: expect(received).toBeTruthy()
  1100 |   });
  1101 | 
  1102 |   test('TC-BUM-010: Bumi Agents list shows correct data for created record', async ({ page }) => {
  1103 |     const data = loadCreatedData();
  1104 |     const name = data.bumiAgent?.name;
  1105 |     if (!name) { saveResult('TC-BUM-010', 'pending', 'No Bumi Agent data in created-data.json'); return; }
  1106 |     const mp = new MastersPage(page);
  1107 |     await navToSection(mp, 'Bumi Agents');
  1108 |     await page.waitForTimeout(2000);
  1109 |     const text = await page.evaluate(() => document.body.innerText);
  1110 |     saveResult('TC-BUM-010', text.includes(name) ? 'pass' : 'fail',
  1111 |       text.includes(name) ? 'Bumi Agent visible with correct data' : `"${name}" not found in list`);
  1112 |     expect(text.includes(name)).toBeTruthy();
  1113 |   });
  1114 | 
  1115 |   test('TC-BUM-011: Editing a Bumi Agent record saves the updated name', async ({ page }) => {
  1116 |     const data = loadCreatedData();
  1117 |     const name = data.bumiAgent?.name;
  1118 |     if (!name) { saveResult('TC-BUM-011', 'pending', 'No Bumi Agent data in created-data.json'); return; }
  1119 |     const mp = new MastersPage(page);
  1120 |     await navToSection(mp, 'Bumi Agents');
  1121 |     await page.waitForTimeout(2000);
  1122 |     const row = page.locator(`tr:has-text("${name}"), [class*="row"]:has-text("${name}")`).first();
  1123 |     if (!(await row.isVisible({ timeout: 5000 }).catch(() => false))) {
  1124 |       saveResult('TC-BUM-011', 'pending', `Bumi Agent row for "${name}" not visible`);
  1125 |       return;
  1126 |     }
  1127 |     const editBtn = row.locator('button, a, [class*="edit"]').first();
  1128 |     if (!(await editBtn.isVisible({ timeout: 3000 }).catch(() => false))) {
  1129 |       saveResult('TC-BUM-011', 'pending', 'Edit button not found in Bumi Agents row');
  1130 |       return;
  1131 |     }
  1132 |     await editBtn.click({ force: true });
  1133 |     await page.waitForTimeout(1500);
  1134 |     const modal = page.locator(MODAL).last();
  1135 |     if (!(await modal.isVisible({ timeout: 5000 }).catch(() => false))) {
  1136 |       saveResult('TC-BUM-011', 'pending', 'Edit modal did not open');
  1137 |       return;
  1138 |     }
  1139 |     const field = modal.getByPlaceholder('Bumi Agent Name');
  1140 |     await field.clear().catch(() => {});
  1141 |     await field.fill(`${name}_Edited`).catch(() => {});
  1142 |     await mp.submitForm();
  1143 |     await page.waitForTimeout(2000);
  1144 |     const closed = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  1145 |     saveResult('TC-BUM-011', closed ? 'pass' : 'fail',
  1146 |       closed ? 'Bumi Agent edit saved successfully' : 'Edit form did not close after saving');
  1147 |   });
  1148 | 
  1149 |   test('TC-BUM-012: Cancel button closes Bumi Agents form without saving', async ({ page }) => {
  1150 |     const mp = new MastersPage(page);
  1151 |     await navToSection(mp, 'Bumi Agents');
  1152 |     await openForm(mp);
  1153 |     const modal = page.locator(MODAL).last();
  1154 |     await modal.getByPlaceholder('Bumi Agent Name').fill('ShouldNotSaveBumi').catch(() => {});
  1155 |     const cancel = page.locator('button:has-text("Cancel"), button:has-text("Close"), [class*="close"]').first();
  1156 |     if (await cancel.isVisible({ timeout: 3000 }).catch(() => false)) {
  1157 |       await cancel.click({ force: true });
  1158 |     } else {
  1159 |       await page.keyboard.press('Escape');
  1160 |     }
  1161 |     await page.waitForTimeout(1000);
  1162 |     const gone = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  1163 |     saveResult('TC-BUM-012', gone ? 'pass' : 'fail',
  1164 |       gone ? 'Bumi Agents form closed on Cancel' : 'Bumi Agents form still visible after Cancel');
  1165 |   });
  1166 | 
  1167 |   test('TC-BUM-013: Searching by Bumi Agent name returns matching records', async ({ page }) => {
  1168 |     const data = loadCreatedData();
  1169 |     const name = data.bumiAgent?.name;
  1170 |     if (!name) { saveResult('TC-BUM-013', 'pending', 'No Bumi Agent data in created-data.json'); return; }
  1171 |     const mp = new MastersPage(page);
  1172 |     await navToSection(mp, 'Bumi Agents');
  1173 |     await page.waitForTimeout(2000);
  1174 |     const search = page.locator('input[placeholder*="search" i], input[type="search"]').first();
  1175 |     if (!(await search.isVisible({ timeout: 3000 }).catch(() => false))) {
  1176 |       saveResult('TC-BUM-013', 'pending', 'Search input not found on Bumi Agents list');
  1177 |       return;
  1178 |     }
  1179 |     await search.fill(name);
  1180 |     await page.waitForTimeout(2000);
  1181 |     const text = await page.evaluate(() => document.body.innerText);
  1182 |     saveResult('TC-BUM-013', text.includes(name) ? 'pass' : 'fail',
  1183 |       text.includes(name) ? `Search returned "${name}"` : `Search did not find "${name}"`);
  1184 |   });
  1185 | 
  1186 |   test('TC-BUM-014: Bumi Agents form opens with no pre-filled data', async ({ page }) => {
  1187 |     const mp = new MastersPage(page);
  1188 |     await navToSection(mp, 'Bumi Agents');
  1189 |     await openForm(mp);
  1190 |     const modal = page.locator(MODAL).last();
  1191 |     const val = await modal.getByPlaceholder('Bumi Agent Name').inputValue().catch(() => '');
  1192 |     await page.keyboard.press('Escape').catch(() => {});
  1193 |     saveResult('TC-BUM-014', val === '' ? 'pass' : 'fail',
  1194 |       val === '' ? 'Bumi Agents form opened with empty fields' : `Agent Name pre-filled: "${val}"`);
  1195 |   });
  1196 | 
  1197 |   test('TC-BUM-015: Navigating to Bumi Agents opens the list page', async ({ page }) => {
  1198 |     const mp = new MastersPage(page);
  1199 |     await navToSection(mp, 'Bumi Agents');
```