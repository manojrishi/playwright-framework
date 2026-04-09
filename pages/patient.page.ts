import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import * as path from 'path';
import * as fs from 'fs';

export class PatientPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToPatients() {
    console.log('Navigating to Patient module...');
    // Ensure we're on the app before looking for the sidebar
    if (!this.page.url().includes('zelthy.in/app')) {
      await this.page.goto('/app/patient');
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForTimeout(2000);
    }
    await this.navigateSidebar('Patient');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.screenshot({ path: 'reports/patient-landing.png' });
  }

  async clickAddNewPatient() {
    console.log('Clicking Add New Patient...');
    // Wait for the button to be visible and click it
    const addBtn = this.page.locator(
      'button:has-text("Add New Patient"), a:has-text("Add New Patient"), button:has-text("Add Patient"), button:has-text("New Patient")'
    ).first();
    await addBtn.waitFor({ state: 'visible', timeout: 15000 });
    await addBtn.click();

    // Wait for the modal/form to open
    const formModal = this.page.locator(
      '[role="dialog"], [class*="modal"], [class*="dialog"], [class*="slide"], form[class*="add"], form[class*="create"]'
    );
    await formModal.first().waitFor({ state: 'visible', timeout: 15000 });
    await this.page.waitForTimeout(1000);
    console.log('Patient form/modal is open');
  }

  async fillPatientName(firstName: string, lastName: string) {
    // Try first name
    const firstNameInput = this.page.locator(
      'input[name*="first" i], input[placeholder*="first" i], input[id*="first" i]'
    );
    if (await firstNameInput.first().isVisible({ timeout: 3000 }).catch(() => false)) {
      await firstNameInput.first().fill(firstName);
    }

    // Try last name
    const lastNameInput = this.page.locator(
      'input[name*="last" i], input[placeholder*="last" i], input[id*="last" i]'
    );
    if (await lastNameInput.first().isVisible({ timeout: 3000 }).catch(() => false)) {
      await lastNameInput.first().fill(lastName);
    }

    // If no first/last split, try full name
    const fullNameInput = this.page.locator(
      'input[name*="name" i], input[placeholder*="name" i], input[id*="name" i]'
    ).first();
    if (await fullNameInput.isVisible({ timeout: 2000 }).catch(() => false)) {
      const val = await fullNameInput.inputValue();
      if (!val) {
        await fullNameInput.fill(`${firstName} ${lastName}`);
      }
    }
  }

  async fillPhone(phone: string) {
    const phoneInput = this.page.locator(
      'input[type="tel"], input[name*="phone" i], input[name*="mobile" i], input[placeholder*="phone" i], input[placeholder*="mobile" i]'
    );
    if (await phoneInput.first().isVisible({ timeout: 3000 }).catch(() => false)) {
      await phoneInput.first().fill(phone);
    }
  }

  async fillEmail(email: string) {
    const emailInput = this.page.locator(
      'input[type="email"], input[name*="email" i], input[placeholder*="email" i]'
    );
    if (await emailInput.first().isVisible({ timeout: 3000 }).catch(() => false)) {
      await emailInput.first().fill(email);
    }
  }

  async selectHospital(hospitalName: string) {
    console.log(`Selecting hospital: ${hospitalName}`);
    await this.openAndSearch('hospital', hospitalName);
  }

  async selectHCP(hcpName: string) {
    console.log(`Selecting HCP: ${hcpName}`);
    await this.openAndSearch('hcp', hcpName);
    // Also try 'doctor', 'physician', 'consultant'
    if (!await this.wasOptionSelected(hcpName)) {
      await this.openAndSearch('doctor', hcpName);
    }
  }

  async wasOptionSelected(text: string): Promise<boolean> {
    const selected = this.page.locator(`[class*="value"]:has-text("${text}"), [class*="selected"]:has-text("${text}")`);
    return await selected.first().isVisible({ timeout: 2000 }).catch(() => false);
  }

  async openAndSearch(fieldKeyword: string, searchText: string) {
    // Find a dropdown/select related to this field keyword
    const dropdownTrigger = this.page.locator(
      `label:has-text("${fieldKeyword}") ~ * [class*="select"],
       label:has-text("${fieldKeyword}") ~ * [class*="dropdown"],
       label:has-text("${fieldKeyword}") ~ * [class*="control"],
       [placeholder*="${fieldKeyword}" i],
       [aria-label*="${fieldKeyword}" i]`
    );

    const count = await dropdownTrigger.count();
    if (count > 0) {
      await dropdownTrigger.first().click({ timeout: 5000 }).catch(() => {});
    }

    // Type to search
    const searchInput = this.page.locator(
      'input[placeholder*="search" i], input[placeholder*="Search" i], input[placeholder*="type to" i], [class*="search"] input'
    );
    if (await searchInput.last().isVisible({ timeout: 2000 }).catch(() => false)) {
      await searchInput.last().fill(searchText);
      await this.page.waitForTimeout(1500);
    }

    // Select option
    const option = this.page.locator(
      `[class*="option"]:has-text("${searchText}"),
       [role="option"]:has-text("${searchText}"),
       li:has-text("${searchText}"),
       [class*="menu"] div:has-text("${searchText}")`
    );

    if (await option.first().isVisible({ timeout: 8000 }).catch(() => false)) {
      await option.first().click();
      await this.page.waitForTimeout(500);
    }
  }

  async uploadFile() {
    console.log('Uploading file...');
    // Create a temp file to upload
    const tempFilePath = '/tmp/test-upload.txt';
    fs.writeFileSync(tempFilePath, 'Playwright test upload file - ' + new Date().toISOString());

    const fileInput = this.page.locator('input[type="file"]');
    if (await fileInput.first().isVisible({ timeout: 5000 }).catch(() => false)) {
      await fileInput.first().setInputFiles(tempFilePath);
    } else {
      // Try clicking upload button to trigger file dialog
      const uploadBtn = this.page.locator(
        'button:has-text("Upload"), label:has-text("Upload"), [class*="upload"] button, [class*="file"] button'
      );
      if (await uploadBtn.first().isVisible({ timeout: 3000 }).catch(() => false)) {
        // Use filechooser
        const [fileChooser] = await Promise.all([
          this.page.waitForEvent('filechooser', { timeout: 5000 }),
          uploadBtn.first().click(),
        ]);
        await fileChooser.setFiles(tempFilePath);
      }
    }
    await this.page.waitForTimeout(1000);
  }

  async submitPatientForm() {
    console.log('Submitting patient form...');
    // Try named submit buttons first
    const submitBtns = ['Submit', 'Save', 'Add Patient', 'Create Patient', 'Register Patient'];
    for (const text of submitBtns) {
      const btn = this.page.locator(`button:has-text("${text}")`).last();
      if (await btn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await btn.click({ force: true });
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(2000);
        return;
      }
    }

    // Fallback: any submit button (force:true to bypass modal backdrop)
    const submit = this.page.locator('button[type="submit"]').last();
    await submit.waitFor({ state: 'visible', timeout: 10000 });
    await submit.click({ force: true });
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
  }
}
