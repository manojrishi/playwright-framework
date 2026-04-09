import { test, expect } from '@playwright/test';
import { loadCreatedData } from '../utils/created-records';

async function clearFiltersIfPresent(page: any) {
  const clearFilters = page.locator('button:has-text("Clear filters"), a:has-text("Clear filters")');
  if (await clearFilters.first().isVisible({ timeout: 3000 }).catch(() => false)) {
    await clearFilters.first().click();
    await page.waitForTimeout(1000);
    console.log('Cleared active filters');
  }
}

async function goToLastPage(page: any) {
  // Try clicking the "last page" button in pagination (>> or |> or last arrow)
  const lastPageBtn = page.locator(
    'button[aria-label*="last" i], button[title*="last" i], button[aria-label*="Last" i], [class*="pagination"] button:last-of-type'
  );
  if (await lastPageBtn.last().isVisible({ timeout: 3000 }).catch(() => false)) {
    await lastPageBtn.last().click();
    await page.waitForTimeout(1500);
    console.log('Navigated to last page');
    return;
  }

  // Alternatively: increase rows per page to show all records
  const rowsPerPage = page.locator('[class*="pagination"] select, select[class*="per-page"], [aria-label*="rows per page" i]');
  if (await rowsPerPage.first().isVisible({ timeout: 3000 }).catch(() => false)) {
    await rowsPerPage.first().selectOption({ index: rowsPerPage.evaluateAll((els: any[]) => els[0].options.length - 1) });
    await page.waitForTimeout(1500);
    return;
  }

  // Last resort: sort by clicking the first column header twice (ascending → descending = newest first)
  const firstColHeader = page.locator('th[class*="cursor"], th button, th[role="button"]').first();
  if (await firstColHeader.isVisible({ timeout: 3000 }).catch(() => false)) {
    await firstColHeader.click().catch(() => {});
    await page.waitForTimeout(500);
    await firstColHeader.click().catch(() => {});
    await page.waitForTimeout(1000);
  }
}

async function recordExistsInPage(page: any, name: string): Promise<boolean> {
  // Check visible table cells
  const match = page.locator(`td:has-text("${name}"), [class*="row"]:has-text("${name}")`);
  if (await match.first().isVisible({ timeout: 3000 }).catch(() => false)) return true;
  // Check full body text (all DOM nodes including hidden rows)
  const pageText: string = await page.evaluate(() => document.body.innerText);
  return pageText.includes(name);
}

async function validateRecord(page: any, url: string, name: string, screenshotPath: string) {
  await page.goto(url);
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000);
  await clearFiltersIfPresent(page);

  // Go to last page to find the most recently created record
  await goToLastPage(page);
  await page.screenshot({ path: screenshotPath });

  const found = await recordExistsInPage(page, name);
  return found;
}

test.describe('Validation: Verify created records exist in CRM', () => {

  test('VAL-001: Verify Hospital exists in CRM', async ({ page }) => {
    const data = loadCreatedData();
    if (!data.hospital) { console.log('No hospital data, skipping'); return; }
    console.log(`\nValidating Hospital: ${data.hospital.name}`);

    const found = await validateRecord(page, '/app/hospital', data.hospital.name, 'reports/val001-hospital-verify.png');
    expect(found, `Hospital "${data.hospital.name}" not found in CRM`).toBeTruthy();
    console.log(`✓ Hospital "${data.hospital.name}" verified in CRM`);
  });

  test('VAL-002: Verify HCP exists in CRM', async ({ page }) => {
    const data = loadCreatedData();
    if (!data.hcp) { console.log('No HCP data, skipping'); return; }
    console.log(`\nValidating HCP: ${data.hcp.name}`);

    const found = await validateRecord(page, '/app/hcp', data.hcp.name, 'reports/val002-hcp-verify.png');
    expect(found, `HCP "${data.hcp.name}" not found in CRM`).toBeTruthy();
    console.log(`✓ HCP "${data.hcp.name}" verified in CRM`);
  });

  test('VAL-003: Verify AF Bodies exists in CRM', async ({ page }) => {
    const data = loadCreatedData();
    if (!data.afBodies) { console.log('No AF Bodies data, skipping'); return; }
    console.log(`\nValidating AF Bodies: ${data.afBodies.name}`);

    const found = await validateRecord(page, '/app/af-body', data.afBodies.name, 'reports/val003-afbodies-verify.png');
    expect(found, `AF Bodies "${data.afBodies.name}" not found in CRM`).toBeTruthy();
    console.log(`✓ AF Bodies "${data.afBodies.name}" verified in CRM`);
  });

  test('VAL-004: Verify Bumi Agent exists in CRM', async ({ page }) => {
    const data = loadCreatedData();
    if (!data.bumiAgent) { console.log('No Bumi Agent data, skipping'); return; }
    console.log(`\nValidating Bumi Agent: ${data.bumiAgent.name}`);

    const found = await validateRecord(page, '/app/bhumi-agent', data.bumiAgent.name, 'reports/val004-bumiagent-verify.png');
    expect(found, `Bumi Agent "${data.bumiAgent.name}" not found in CRM`).toBeTruthy();
    console.log(`✓ Bumi Agent "${data.bumiAgent.name}" verified in CRM`);
  });

  test('VAL-005: Verify Patient exists in CRM', async ({ page }) => {
    const data = loadCreatedData();
    if (!data.patient) { console.log('No patient data, skipping'); return; }
    console.log(`\nValidating Patient: ${data.patient.name}`);

    const found = await validateRecord(page, '/app/patient', data.patient.name, 'reports/val005-patient-verify.png');
    expect(found, `Patient "${data.patient.name}" not found in CRM`).toBeTruthy();
    console.log(`✓ Patient "${data.patient.name}" verified in CRM`);
  });
});
