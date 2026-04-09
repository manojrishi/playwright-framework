# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: masters-full.spec.ts >> Masters — Bumi Agents >> TC-BUM-005: Bumi Agents form blocks submission when Internal ID is blank
- Location: tests/masters-full.spec.ts:1007:7

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
              - rowgroup [ref=e448]:
                - row "10003 BA03 Wija Pharma Sdn Bhd Test +6088774433 BA10004.619@gmail.com 22 February 2026 08:21 PM" [ref=e449] [cursor=pointer]:
                  - cell "10003" [ref=e450]:
                    - generic [ref=e452]: "10003"
                  - cell "BA03" [ref=e453]:
                    - generic [ref=e455]: BA03
                  - cell "Wija Pharma Sdn Bhd" [ref=e456]:
                    - generic [ref=e458]: Wija Pharma Sdn Bhd
                  - cell "Test" [ref=e459]:
                    - generic [ref=e461]: Test
                  - cell "+6088774433" [ref=e462]:
                    - generic [ref=e464]: "+6088774433"
                  - cell "BA10004.619@gmail.com" [ref=e465]:
                    - generic [ref=e467]: BA10004.619@gmail.com
                  - cell "22 February 2026 08:21 PM" [ref=e468]:
                    - generic [ref=e470]: 22 February 2026 08:21 PM
                - row "10002 BA02 Primabumi Sdn Bhd Tes +6088993322 BA10002.619@gmail.com 22 February 2026 08:21 PM" [ref=e471] [cursor=pointer]:
                  - cell "10002" [ref=e472]:
                    - generic [ref=e474]: "10002"
                  - cell "BA02" [ref=e475]:
                    - generic [ref=e477]: BA02
                  - cell "Primabumi Sdn Bhd" [ref=e478]:
                    - generic [ref=e480]: Primabumi Sdn Bhd
                  - cell "Tes" [ref=e481]:
                    - generic [ref=e483]: Tes
                  - cell "+6088993322" [ref=e484]:
                    - generic [ref=e486]: "+6088993322"
                  - cell "BA10002.619@gmail.com" [ref=e487]:
                    - generic [ref=e489]: BA10002.619@gmail.com
                  - cell "22 February 2026 08:21 PM" [ref=e490]:
                    - generic [ref=e492]: 22 February 2026 08:21 PM
                - row "10005 1234 Dummy Agent NA NA dummyagent@test.com 12 March 2026 11:57 AM" [ref=e493] [cursor=pointer]:
                  - cell "10005" [ref=e494]:
                    - generic [ref=e496]: "10005"
                  - cell "1234" [ref=e497]:
                    - generic [ref=e499]: "1234"
                  - cell "Dummy Agent" [ref=e500]:
                    - generic [ref=e502]: Dummy Agent
                  - cell "NA" [ref=e503]:
                    - generic [ref=e505]: NA
                  - cell "NA" [ref=e506]:
                    - generic [ref=e508]: NA
                  - cell "dummyagent@test.com" [ref=e509]:
                    - generic [ref=e511]: dummyagent@test.com
                  - cell "12 March 2026 11:57 AM" [ref=e512]:
                    - generic [ref=e514]: 12 March 2026 11:57 AM
                - row "10006 37677 AutoBumiAgent_9EC50E NA +6089678278 autobumiagent_9ec50e@test.com 07 April 2026 12:50 PM" [ref=e515] [cursor=pointer]:
                  - cell "10006" [ref=e516]:
                    - generic [ref=e518]: "10006"
                  - cell "37677" [ref=e519]:
                    - generic [ref=e521]: "37677"
                  - cell "AutoBumiAgent_9EC50E" [ref=e522]:
                    - generic [ref=e524]: AutoBumiAgent_9EC50E
                  - cell "NA" [ref=e525]:
                    - generic [ref=e527]: NA
                  - cell "+6089678278" [ref=e528]:
                    - generic [ref=e530]: "+6089678278"
                  - cell "autobumiagent_9ec50e@test.com" [ref=e531]:
                    - generic [ref=e533]: autobumiagent_9ec50e@test.com
                  - cell "07 April 2026 12:50 PM" [ref=e534]:
                    - generic [ref=e536]: 07 April 2026 12:50 PM
                - row "10010 51869 AutoBumiAgent_DF4169 NA +60358214483 autobumiagent_df4169@test.com 07 April 2026 06:49 PM" [ref=e537] [cursor=pointer]:
                  - cell "10010" [ref=e538]:
                    - generic [ref=e540]: "10010"
                  - cell "51869" [ref=e541]:
                    - generic [ref=e543]: "51869"
                  - cell "AutoBumiAgent_DF4169" [ref=e544]:
                    - generic [ref=e546]: AutoBumiAgent_DF4169
                  - cell "NA" [ref=e547]:
                    - generic [ref=e549]: NA
                  - cell "+60358214483" [ref=e550]:
                    - generic [ref=e552]: "+60358214483"
                  - cell "autobumiagent_df4169@test.com" [ref=e553]:
                    - generic [ref=e555]: autobumiagent_df4169@test.com
                  - cell "07 April 2026 06:49 PM" [ref=e556]:
                    - generic [ref=e558]: 07 April 2026 06:49 PM
                - row "10009 95412 AutoBumiAgent_09A6F0 NA +60341454443 autobumiagent_09a6f0@test.com 07 April 2026 06:17 PM" [ref=e559] [cursor=pointer]:
                  - cell "10009" [ref=e560]:
                    - generic [ref=e562]: "10009"
                  - cell "95412" [ref=e563]:
                    - generic [ref=e565]: "95412"
                  - cell "AutoBumiAgent_09A6F0" [ref=e566]:
                    - generic [ref=e568]: AutoBumiAgent_09A6F0
                  - cell "NA" [ref=e569]:
                    - generic [ref=e571]: NA
                  - cell "+60341454443" [ref=e572]:
                    - generic [ref=e574]: "+60341454443"
                  - cell "autobumiagent_09a6f0@test.com" [ref=e575]:
                    - generic [ref=e577]: autobumiagent_09a6f0@test.com
                  - cell "07 April 2026 06:17 PM" [ref=e578]:
                    - generic [ref=e580]: 07 April 2026 06:17 PM
                - row "10008 67822 AutoBumiAgent_4AF70B NA +60376732397 autobumiagent_4af70b@test.com 07 April 2026 03:57 PM" [ref=e581] [cursor=pointer]:
                  - cell "10008" [ref=e582]:
                    - generic [ref=e584]: "10008"
                  - cell "67822" [ref=e585]:
                    - generic [ref=e587]: "67822"
                  - cell "AutoBumiAgent_4AF70B" [ref=e588]:
                    - generic [ref=e590]: AutoBumiAgent_4AF70B
                  - cell "NA" [ref=e591]:
                    - generic [ref=e593]: NA
                  - cell "+60376732397" [ref=e594]:
                    - generic [ref=e596]: "+60376732397"
                  - cell "autobumiagent_4af70b@test.com" [ref=e597]:
                    - generic [ref=e599]: autobumiagent_4af70b@test.com
                  - cell "07 April 2026 03:57 PM" [ref=e600]:
                    - generic [ref=e602]: 07 April 2026 03:57 PM
                - row "10007 89091 AutoBumiAgent_DDC3C8 NA +6089260873 autobumiagent_ddc3c8@test.com 07 April 2026 01:00 PM" [ref=e603] [cursor=pointer]:
                  - cell "10007" [ref=e604]:
                    - generic [ref=e606]: "10007"
                  - cell "89091" [ref=e607]:
                    - generic [ref=e609]: "89091"
                  - cell "AutoBumiAgent_DDC3C8" [ref=e610]:
                    - generic [ref=e612]: AutoBumiAgent_DDC3C8
                  - cell "NA" [ref=e613]:
                    - generic [ref=e615]: NA
                  - cell "+6089260873" [ref=e616]:
                    - generic [ref=e618]: "+6089260873"
                  - cell "autobumiagent_ddc3c8@test.com" [ref=e619]:
                    - generic [ref=e621]: autobumiagent_ddc3c8@test.com
                  - cell "07 April 2026 01:00 PM" [ref=e622]:
                    - generic [ref=e624]: 07 April 2026 01:00 PM
                - row "10004 BA10005 Bumi Agent A alia Ali +60187654654 BA@gmai.com 04 March 2026 12:31 PM" [ref=e625] [cursor=pointer]:
                  - cell "10004" [ref=e626]:
                    - generic [ref=e628]: "10004"
                  - cell "BA10005" [ref=e629]:
                    - generic [ref=e631]: BA10005
                  - cell "Bumi Agent A" [ref=e632]:
                    - generic [ref=e634]: Bumi Agent A
                  - cell "alia Ali" [ref=e635]:
                    - generic [ref=e637]: alia Ali
                  - cell "+60187654654" [ref=e638]:
                    - generic [ref=e640]: "+60187654654"
                  - cell "BA@gmai.com" [ref=e641]:
                    - generic [ref=e643]: BA@gmai.com
                  - cell "04 March 2026 12:31 PM" [ref=e644]:
                    - generic [ref=e646]: 04 March 2026 12:31 PM
                - row "10001 BA01 Pharmaniaga Logistics Sdn Bhd Test +6088993301 bumi@zelthy.com 03 February 2026 06:44 AM" [ref=e647] [cursor=pointer]:
                  - cell "10001" [ref=e648]:
                    - generic [ref=e650]: "10001"
                  - cell "BA01" [ref=e651]:
                    - generic [ref=e653]: BA01
                  - cell "Pharmaniaga Logistics Sdn Bhd" [ref=e654]:
                    - generic [ref=e656]: Pharmaniaga Logistics Sdn Bhd
                  - cell "Test" [ref=e657]:
                    - generic [ref=e659]: Test
                  - cell "+6088993301" [ref=e660]:
                    - generic [ref=e662]: "+6088993301"
                  - cell "bumi@zelthy.com" [ref=e663]:
                    - generic [ref=e665]: bumi@zelthy.com
                  - cell "03 February 2026 06:44 AM" [ref=e666]:
                    - generic [ref=e668]: 03 February 2026 06:44 AM
            - generic [ref=e669]:
              - generic [ref=e671]:
                - generic [ref=e672]: "Rows per page:"
                - generic [ref=e674]:
                  - log [ref=e676]
                  - generic [ref=e677]:
                    - generic [ref=e678]:
                      - generic [ref=e679]: "10"
                      - 'combobox "Rows per page: 10" [ref=e681]'
                    - img [ref=e684]
              - generic [ref=e687]:
                - button "Previous" [disabled] [ref=e688]:
                  - img [ref=e689]
                  - generic [ref=e691]: Previous
                - button "1" [ref=e693] [cursor=pointer]
                - button "Next" [disabled] [ref=e694]:
                  - generic [ref=e695]: Next
                  - img [ref=e696]
  - region "Notifications alt+T"
```

# Test source

```ts
  918  |     const modal = page.locator(MODAL).last();
  919  |     const val = await modal.getByPlaceholder('AF Body Name').inputValue().catch(() => '');
  920  |     await page.keyboard.press('Escape').catch(() => {});
  921  |     saveResult('TC-AFB-014', val === '' ? 'pass' : 'fail',
  922  |       val === '' ? 'AF Bodies form opened with empty fields' : `AF Body Name pre-filled: "${val}"`);
  923  |   });
  924  | 
  925  |   test('TC-AFB-015: Navigating to AF Bodies opens the list page', async ({ page }) => {
  926  |     const mp = new MastersPage(page);
  927  |     await navToSection(mp, 'AF Bodies');
  928  |     await page.waitForTimeout(1500);
  929  |     const url = page.url();
  930  |     const list = page.locator('table, [class*="table"], [class*="list"]').first();
  931  |     const listVisible = await list.isVisible({ timeout: 8000 }).catch(() => false);
  932  |     saveResult('TC-AFB-015', listVisible ? 'pass' : 'fail',
  933  |       listVisible ? `AF Bodies list loaded — URL: ${url}` : 'AF Bodies list did not load a table/list');
  934  |   });
  935  | 
  936  | });
  937  | 
  938  | 
  939  | // ════════════════════════════════════════
  940  | // BUMI AGENTS TESTS
  941  | // ════════════════════════════════════════
  942  | test.describe('Masters — Bumi Agents', () => {
  943  | 
  944  |   test('TC-BUM-001: Clicking Add New on Bumi Agents opens the creation form', async ({ page }) => {
  945  |     const mp = new MastersPage(page);
  946  |     await navToSection(mp, 'Bumi Agents');
  947  |     await openForm(mp);
  948  |     const modal = page.locator(MODAL).last();
  949  |     const visible = await modal.isVisible({ timeout: 8000 }).catch(() => false);
  950  |     saveResult('TC-BUM-001', visible ? 'pass' : 'fail', visible ? '' : 'Bumi Agents Add New did not open form modal');
  951  |     expect(visible).toBeTruthy();
  952  |   });
  953  | 
  954  |   test('TC-BUM-002: Create Bumi Agent with all mandatory fields — form submits successfully', async ({ page }) => {
  955  |     const mp = new MastersPage(page);
  956  |     await navToSection(mp, 'Bumi Agents');
  957  |     await openForm(mp);
  958  |     const modal = page.locator(MODAL).last();
  959  |     const phoneDigits = '358214488';
  960  |     await modal.getByPlaceholder('Bumi Agent Name').fill(`TestBumi_${SUFFIX}`).catch(() => {});
  961  |     for (const ph of ['Contact Number', 'Phone Number', 'Mobile Number']) {
  962  |       const f = modal.getByPlaceholder(ph);
  963  |       if (await f.isVisible({ timeout: 2000 }).catch(() => false)) { await f.fill(phoneDigits); break; }
  964  |     }
  965  |     await modal.getByPlaceholder('Email Address').fill(`bumi${SUFFIX}@test.com`).catch(() =>
  966  |       modal.locator('input[type="email"]').fill(`bumi${SUFFIX}@test.com`).catch(() => {})
  967  |     );
  968  |     await modal.getByPlaceholder('Bumi Agent Internal ID').fill(`BUM${SUFFIX}`).catch(() =>
  969  |       modal.locator('input').last().fill(`BUM${SUFFIX}`).catch(() => {})
  970  |     );
  971  |     await mp.submitForm();
  972  |     await page.waitForTimeout(2000);
  973  |     const closed = !(await modal.isVisible({ timeout: 3000 }).catch(() => true));
  974  |     const success = await page.locator(SUCCESS_SEL).first().isVisible({ timeout: 3000 }).catch(() => false);
  975  |     saveResult('TC-BUM-002', (closed || success) ? 'pass' : 'fail',
  976  |       (closed || success) ? '' : 'Bumi Agent form did not close or show success');
  977  |     expect(closed || success).toBeTruthy();
  978  |   });
  979  | 
  980  |   test('TC-BUM-003: Created Bumi Agent appears in Bumi Agents list', async ({ page }) => {
  981  |     const data = loadCreatedData();
  982  |     const name = data.bumiAgent?.name ?? `TestBumi_${SUFFIX}`;
  983  |     const mp = new MastersPage(page);
  984  |     await navToSection(mp, 'Bumi Agents');
  985  |     await page.waitForTimeout(2000);
  986  |     const text = await page.evaluate(() => document.body.innerText);
  987  |     const found = text.includes(name) || text.includes('AutoBumiAgent') || text.includes('TestBumi');
  988  |     saveResult('TC-BUM-003', found ? 'pass' : 'fail',
  989  |       found ? '' : `Bumi Agent "${name}" not found in list`);
  990  |     expect(found).toBeTruthy();
  991  |   });
  992  | 
  993  |   test('TC-BUM-004: Bumi Agents form blocks submission when Agent Name is blank', async ({ page }) => {
  994  |     const mp = new MastersPage(page);
  995  |     await navToSection(mp, 'Bumi Agents');
  996  |     await openForm(mp);
  997  |     const modal = page.locator(MODAL).last();
  998  |     await modal.getByPlaceholder('Bumi Agent Internal ID').fill('BUM99991').catch(() => {});
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
> 1018 |     expect(blocked).toBeTruthy();
       |                     ^ Error: expect(received).toBeTruthy()
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
  1099 |     expect(open).toBeTruthy();
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
```