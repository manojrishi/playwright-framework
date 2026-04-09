import { test, expect } from "@playwright/test";
import * as path from "path";
import { MastersPage } from "../pages/masters.page";
import { PatientPage } from "../pages/patient.page";
import { TEST_DATA } from "../utils/test-data";
import { saveCreatedData, loadCreatedData } from "../utils/created-records";

// Helper: open a react-select dropdown and select an option by typing
async function reactSelectSearch(
  page: any,
  modal: any,
  placeholderText: string,
  searchText: string
) {
  console.log(
    `React select: opening "${placeholderText}", searching "${searchText}"`
  );
  const placeholder = modal
    .locator(`[class*="placeholder"]:has-text("${placeholderText}")`)
    .first();
  if (await placeholder.isVisible({ timeout: 3000 }).catch(() => false)) {
    await placeholder.click({ force: true });
  } else {
    const control = modal
      .locator('[class*="__control"], [class*="select__value-container"]')
      .first();
    await control.click({ force: true }).catch(() => {});
  }
  await page.waitForTimeout(600);
  await page.keyboard.type(searchText, { delay: 80 });
  await page.waitForTimeout(1500);
  const option = page.locator(
    `[class*="option"]:has-text("${searchText}"), [role="option"]:has-text("${searchText}"), li:has-text("${searchText}")`
  );
  if (
    await option
      .first()
      .isVisible({ timeout: 8000 })
      .catch(() => false)
  ) {
    await option.first().click({ force: true });
    console.log(`Selected: ${searchText}`);
    return true;
  }
  return false;
}

// ────────────────────────────────────────────────
// STEP 2: CREATE MASTERS
// ────────────────────────────────────────────────

test.describe("Step 2: Create Masters", () => {
  test("TC-001: Create Hospital Master", async ({ page }) => {
    console.log("\n=== TC-001: Creating Hospital Master ===");
    const mastersPage = new MastersPage(page);

    await mastersPage.navigateToMasters();
    await page.screenshot({ path: "reports/tc001-masters-open.png" });

    await mastersPage.openMasterSection("Hospital");
    await page.screenshot({ path: "reports/tc001-hospital-list.png" });

    await mastersPage.clickAddOrCreate();
    await page.screenshot({ path: "reports/tc001-hospital-form.png" });

    const modal = page
      .locator(
        '[role="dialog"], [class*="modal"], [class*="slide"], [class*="panel"]'
      )
      .last();

    // Mandatory fields only
    await modal
      .getByPlaceholder("Hospital Code")
      .fill(TEST_DATA.masters.hospital.code);
    await modal
      .getByPlaceholder("Hospital Name")
      .fill(TEST_DATA.masters.hospital.name);
    await modal
      .getByPlaceholder("Email Address")
      .fill(TEST_DATA.masters.hospital.email)
      .catch(() => {});
    await modal
      .getByPlaceholder("Hospital Internal ID")
      .fill(TEST_DATA.masters.hospital.internalId);

    await page.screenshot({ path: "reports/tc001-hospital-filled.png" });
    await mastersPage.submitForm();
    await page.screenshot({ path: "reports/tc001-hospital-submitted.png" });

    console.log(`Hospital created: ${TEST_DATA.masters.hospital.name}`);
    console.log(`Hospital code: ${TEST_DATA.masters.hospital.code}`);
    console.log(
      `Hospital internal ID: ${TEST_DATA.masters.hospital.internalId}`
    );
    saveCreatedData({
      hospital: {
        type: "Hospital",
        name: TEST_DATA.masters.hospital.name,
        phone: TEST_DATA.masters.hospital.phone,
        createdAt: new Date().toISOString(),
      },
    });
  });

  test("TC-002: Create HCP Master (mapped to Hospital)", async ({ page }) => {
    console.log("\n=== TC-002: Creating HCP Master ===");
    const mastersPage = new MastersPage(page);

    await mastersPage.navigateToMasters();
    await mastersPage.openMasterSection("HCP");
    await page.screenshot({ path: "reports/tc002-hcp-list.png" });

    await mastersPage.clickAddOrCreate();
    await page.screenshot({ path: "reports/tc002-hcp-form.png" });

    const modal2 = page
      .locator(
        '[role="dialog"], [class*="modal"], [class*="slide"], [class*="panel"]'
      )
      .last();

    await modal2.getByPlaceholder("HCP Name").fill(TEST_DATA.masters.hcp.name);
    await page.waitForTimeout(300);

    // Map Hospital
    console.log("Mapping hospital to HCP...");
    const hospitalMapped = await reactSelectSearch(
      page,
      modal2,
      "Hospitals",
      TEST_DATA.masters.hospital.name
    );
    if (!hospitalMapped) {
      const firstControl = modal2.locator('[class*="__control"]').first();
      await firstControl.click({ force: true }).catch(() => {});
      await page.waitForTimeout(400);
      await page.keyboard.type(TEST_DATA.masters.hospital.name, { delay: 80 });
      await page.waitForTimeout(1500);
      const opt = page
        .locator(
          `[class*="option"]:has-text("${TEST_DATA.masters.hospital.name}")`
        )
        .first();
      if (await opt.isVisible({ timeout: 5000 }).catch(() => false))
        await opt.click({ force: true });
    }
    await page.screenshot({ path: "reports/tc002-hcp-hospital-mapped.png" });

    // Speciality — search and select Dermatology
    console.log("Selecting Speciality: Dermatology...");
    const specialityPicked = await reactSelectSearch(
      page,
      modal2,
      "Speciality",
      "Dermatology"
    );
    if (!specialityPicked) {
      const allControls = modal2.locator('[class*="__control"]');
      const cnt = await allControls.count();
      await allControls
        .nth(Math.min(1, cnt - 1))
        .click({ force: true })
        .catch(() => {});
      await page.waitForTimeout(400);
      await page.keyboard.type("Dermatology", { delay: 80 });
      await page.waitForTimeout(1000);
      const dermOption = page
        .locator(
          '[class*="option"]:has-text("Dermatology"), [role="option"]:has-text("Dermatology")'
        )
        .first();
      if (await dermOption.isVisible({ timeout: 5000 }).catch(() => false))
        await dermOption.click({ force: true });
    }
    await page.screenshot({
      path: "reports/tc002-hcp-speciality-selected.png",
    });

    // Contact Number — 9 digits starting with 8 (field has +60 prefix)
    const hcpPhoneDigits = TEST_DATA.masters.hcp.phone.replace("+60", ""); // → "8XXXXXXXXX" (10 digits)
    // Use fill() which properly triggers React state updates
    const hcpPhoneField = modal2
      .getByPlaceholder("Enter Contact Number (Malaysia +60)")
      .first();
    if (await hcpPhoneField.isVisible({ timeout: 3000 }).catch(() => false)) {
      await hcpPhoneField.fill(hcpPhoneDigits);
      console.log(`HCP phone: ${hcpPhoneDigits}`);
    } else {
      await modal2
        .getByPlaceholder("Contact Number")
        .fill(hcpPhoneDigits)
        .catch(() => {});
    }

    // Email
    await modal2
      .getByPlaceholder("Email Address")
      .fill(TEST_DATA.masters.hcp.email);

    await page.screenshot({ path: "reports/tc002-hcp-filled.png" });
    await mastersPage.submitForm();
    await page.screenshot({ path: "reports/tc002-hcp-submitted.png" });

    console.log(`HCP created: ${TEST_DATA.masters.hcp.name}`);
    saveCreatedData({
      hcp: {
        type: "HCP",
        name: TEST_DATA.masters.hcp.name,
        phone: TEST_DATA.masters.hcp.phone,
        createdAt: new Date().toISOString(),
      },
    });
  });

  test("TC-003: Create AF Bodies Master (weekly follow-up)", async ({
    page,
  }) => {
    console.log("\n=== TC-003: Creating AF Bodies Master ===");
    const mastersPage = new MastersPage(page);

    await mastersPage.navigateToMasters();
    await mastersPage.openMasterSection("AF Bodies");
    await page.screenshot({ path: "reports/tc003-afbodies-list.png" });

    await mastersPage.clickAddOrCreate();
    await page.screenshot({ path: "reports/tc003-afbodies-form.png" });

    const modal3 = page
      .locator(
        '[role="dialog"], [class*="modal"], [class*="slide"], [class*="panel"]'
      )
      .last();
    await modal3
      .getByPlaceholder("AF Body Name")
      .fill(TEST_DATA.masters.afBodies.name);
    await modal3
      .getByPlaceholder("AF Bodies Internal ID")
      .fill(TEST_DATA.masters.afBodies.internalId)
      .catch(() =>
        modal3
          .getByPlaceholder("AF Body Internal ID")
          .fill(TEST_DATA.masters.afBodies.internalId)
          .catch(() => {})
      );

    await mastersPage.selectFollowUpTimeline("Weekly");
    await page.screenshot({ path: "reports/tc003-afbodies-filled.png" });

    await mastersPage.submitForm();
    await page.screenshot({ path: "reports/tc003-afbodies-submitted.png" });

    console.log(`AF Bodies created: ${TEST_DATA.masters.afBodies.name}`);
    saveCreatedData({
      afBodies: {
        type: "AF Bodies",
        name: TEST_DATA.masters.afBodies.name,
        createdAt: new Date().toISOString(),
      },
    });
  });

  test("TC-004: Create Bumi Agents Master", async ({ page }) => {
    console.log("\n=== TC-004: Creating Bumi Agents Master ===");
    const mastersPage = new MastersPage(page);

    await mastersPage.navigateToMasters();
    await mastersPage.openMasterSection("Bumi Agents");
    await page.screenshot({ path: "reports/tc004-bumiagents-list.png" });

    await mastersPage.clickAddOrCreate();
    await page.screenshot({ path: "reports/tc004-bumiagents-form.png" });

    const modal4 = page
      .locator(
        '[role="dialog"], [class*="modal"], [class*="slide"], [class*="panel"]'
      )
      .last();
    await modal4
      .getByPlaceholder("Bumi Agent Name")
      .fill(TEST_DATA.masters.bumiAgents.name);

    // Contact Number — 10 digits starting with 8
    const bumiPhoneDigits = TEST_DATA.masters.bumiAgents.phone.replace(
      "+60",
      ""
    ); // → "8XXXXXXXXX"
    let bumiPhoneFilled = false;
    for (const ph of ["Contact Number", "Phone Number", "Mobile Number"]) {
      const f = modal4.getByPlaceholder(ph);
      if (await f.isVisible({ timeout: 2000 }).catch(() => false)) {
        await f.click();
        await page.keyboard.press("Control+a");
        await page.keyboard.press("Backspace");
        await page.keyboard.type(bumiPhoneDigits, { delay: 50 });
        bumiPhoneFilled = true;
        console.log(
          `Bumi phone filled via placeholder "${ph}": ${bumiPhoneDigits}`
        );
        break;
      }
    }
    if (!bumiPhoneFilled) {
      const telIn = modal4.locator('input[type="tel"]').first();
      if (await telIn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await telIn.click();
        await page.keyboard.press("Control+a");
        await page.keyboard.press("Backspace");
        await page.keyboard.type(bumiPhoneDigits, { delay: 50 });
        console.log(`Bumi phone filled via tel input: ${bumiPhoneDigits}`);
      }
    }

    await modal4
      .getByPlaceholder("Email Address")
      .fill(TEST_DATA.masters.bumiAgents.email)
      .catch(() =>
        modal4
          .locator('input[type="email"]')
          .fill(TEST_DATA.masters.bumiAgents.email)
          .catch(() => {})
      );

    await modal4
      .getByPlaceholder("Bumi Agent Internal ID")
      .fill(TEST_DATA.masters.bumiAgents.internalId)
      .catch(() =>
        modal4
          .locator("input")
          .last()
          .fill(TEST_DATA.masters.bumiAgents.internalId)
          .catch(() => {})
      );

    await page.screenshot({ path: "reports/tc004-bumiagents-filled.png" });
    await mastersPage.submitForm();
    await page.screenshot({ path: "reports/tc004-bumiagents-submitted.png" });

    console.log(`Bumi Agents created: ${TEST_DATA.masters.bumiAgents.name}`);
    saveCreatedData({
      bumiAgent: {
        type: "Bumi Agent",
        name: TEST_DATA.masters.bumiAgents.name,
        phone: TEST_DATA.masters.bumiAgents.phone,
        createdAt: new Date().toISOString(),
      },
    });
  });
});

// ────────────────────────────────────────────────
// STEP 3: CREATE PATIENT
// ────────────────────────────────────────────────

test.describe("Step 3: Create Patient", () => {
  test("TC-005: Add New Patient with Hospital and HCP", async ({ page }) => {
    console.log("\n=== TC-005: Creating New Patient ===");

    // Use previously created hospital and HCP from created-data.json
    const prevData = loadCreatedData();
    const hospitalName = prevData.hospital?.name ?? TEST_DATA.masters.hospital.name;
    const hcpName = prevData.hcp?.name ?? TEST_DATA.masters.hcp.name;
    console.log(`Using Hospital: ${hospitalName}`);
    console.log(`Using HCP: ${hcpName}`);

    const patientPage = new PatientPage(page);
    await patientPage.navigateToPatients();
    await page.screenshot({ path: "reports/tc005-patient-list.png" });

    await patientPage.clickAddNewPatient();
    await page.screenshot({ path: "reports/tc005-patient-form.png" });

    const modal = page
      .locator('[role="dialog"], [class*="modal"], [class*="slide"], [class*="panel"], [class*="drawer"]')
      .last();

    // Patient Name
    await modal.getByPlaceholder("Patient Name")
      .fill(`${TEST_DATA.patient.firstName} ${TEST_DATA.patient.lastName}`)
      .catch(() => {});

    // NRiC — numeric only
    const nric = `${Math.floor(700101 + Math.random() * 100000)}10${Math.floor(1000 + Math.random() * 8999)}`;
    await modal.getByPlaceholder("NRiC").fill(nric).catch(() => {});

    // Contact Number — 9 digits via tel input
    const patientPhoneDigits = TEST_DATA.patient.phone.replace("+60", "");
    const telIn = modal.locator('input[type="tel"]').first();
    if (await telIn.isVisible({ timeout: 2000 }).catch(() => false)) {
      await telIn.fill(patientPhoneDigits);
      console.log(`Patient phone (tel): ${patientPhoneDigits}`);
    } else {
      await modal.getByPlaceholder("Contact Number").fill(patientPhoneDigits).catch(() => {});
    }

    // Email
    await modal.getByPlaceholder("Email Address").fill(TEST_DATA.patient.email).catch(() => {});

    await page.screenshot({ path: "reports/tc005-patient-basic-filled.png" });

    // Indication = "PsO"
    console.log("Selecting Indication: PsO...");
    await reactSelectSearch(page, modal, "Indication", "PsO");
    await page.screenshot({ path: "reports/tc005-patient-indication-selected.png" });

    // Hospital Name — use previously created hospital
    console.log(`Selecting Hospital: ${hospitalName}...`);
    await reactSelectSearch(page, modal, "Hospital Name", hospitalName);
    await page.screenshot({ path: "reports/tc005-patient-hospital-selected.png" });

    // HCP Name — use previously created HCP
    console.log(`Selecting HCP: ${hcpName}...`);
    await reactSelectSearch(page, modal, "HCP Name", hcpName);
    await page.screenshot({ path: "reports/tc005-patient-hcp-selected.png" });

    // Upload Consent Form — attach dummy PDF
    console.log("Uploading consent form...");
    const consentFormPath = path.join(__dirname, "fixtures", "consent-form.pdf");
    const fileInput = modal.locator('input[type="file"]').first();
    if (await fileInput.isVisible({ timeout: 3000 }).catch(() => false)) {
      await fileInput.setInputFiles(consentFormPath);
      console.log("Consent form uploaded via visible file input");
    } else {
      // Trigger file chooser by clicking the upload button/area
      const uploadTrigger = modal.locator(
        'button:has-text("Upload"), label:has-text("Upload"), [class*="upload"], [class*="dropzone"]'
      ).first();
      const [fileChooser] = await Promise.all([
        page.waitForEvent("filechooser", { timeout: 5000 }).catch(() => null),
        uploadTrigger.click({ force: true }).catch(() => {}),
      ]);
      if (fileChooser) {
        await fileChooser.setFiles(consentFormPath);
        console.log("Consent form uploaded via file chooser");
      }
    }
    await page.waitForTimeout(1000);
    await page.screenshot({ path: "reports/tc005-patient-consent-uploaded.png" });

    // Submit
    await patientPage.submitPatientForm();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: "reports/tc005-patient-submitted.png" });

    // Validate success — form should close or show success message
    const successMsg = page.locator(':text("successfully"), :text("Success"), :text("saved"), [class*="success"]').first();
    const formClosed = !(await modal.isVisible({ timeout: 3000 }).catch(() => false));
    const hasSuccessMsg = await successMsg.isVisible({ timeout: 3000 }).catch(() => false);

    if (formClosed || hasSuccessMsg) {
      console.log("✓ Patient created successfully");
    } else {
      console.log("⚠ Form still open — check screenshot for errors");
    }

    const patientFullName = `${TEST_DATA.patient.firstName} ${TEST_DATA.patient.lastName}`;
    saveCreatedData({
      patient: {
        type: "Patient",
        name: patientFullName,
        phone: TEST_DATA.patient.phone,
        email: TEST_DATA.patient.email,
        hospitalName,
        hcpName,
        createdAt: new Date().toISOString(),
      },
    });

    expect(formClosed || hasSuccessMsg, "Patient form should close or show success after submit").toBeTruthy();
  });
});
