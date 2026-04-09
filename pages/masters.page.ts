import { Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class MastersPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToMasters() {
    console.log("Navigating to Masters module...");
    // Ensure we're on the app before looking for the sidebar
    if (!this.page.url().includes("zelthy.in/app")) {
      await this.page.goto("/app/patient");
      await this.page.waitForLoadState("domcontentloaded");
      await this.page.waitForTimeout(2000);
    }
    await this.navigateSidebar("Masters");
    await this.page.waitForLoadState("domcontentloaded");
    await this.page.screenshot({ path: "reports/masters-landing.png" });
  }

  async openMasterSection(sectionName: string) {
    console.log(`Opening master section: ${sectionName}`);
    const section = this.page.locator(
      `a:has-text("${sectionName}"),
       button:has-text("${sectionName}"),
       
       [class*="card"]:has-text("${sectionName}"),
       td:has-text("${sectionName}"),
       li:has-text("${sectionName}")`
    );
    await section.first().waitFor({ state: "visible", timeout: 15000 });
    await section.first().click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async clickAddOrCreate() {
    // Wait for any loading spinner to disappear first
    await this.page
      .locator(
        '#contentSpinner.active, [class*="spinner"].active, [class*="loading"].active'
      )
      .waitFor({ state: "hidden", timeout: 15000 })
      .catch(() => {});
    await this.page.waitForTimeout(500);

    // Scope buttons to main content area (not sidebar/nav)
    const mainContent = this.page
      .locator(
        'main, [class*="content"], [class*="main"], [id*="content"], body'
      )
      .filter({
        hasNot: this.page.locator(
          'nav, aside, [class*="sidebar"], [class*="navbar"]'
        ),
      })
      .first();

    // Prioritize "Add New X" patterns first (most specific)
    const addNewBtn = this.page
      .locator('button:has-text("Add New"), a:has-text("Add New")')
      .last(); // Last to prefer the content area button over sidebar

    if (await addNewBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
      await addNewBtn.click({ force: true });
      await this.page.waitForLoadState("domcontentloaded");
      await this.page.waitForTimeout(1000);
      return;
    }

    // Try other patterns, but exclude sidebar
    const addBtns = ["Create New", "Create", "New", "+ Add", "+ New"];
    for (const text of addBtns) {
      const btn = this.page
        .locator(`button:has-text("${text}"), a:has-text("${text}")`)
        .last();
      if (await btn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await btn.click({ force: true });
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.waitForTimeout(1000);
        return;
      }
    }
  }

  async fillAndSubmitForm(fields: Record<string, string>) {
    for (const [label, value] of Object.entries(fields)) {
      console.log(`Filling field: ${label} = ${value}`);
      try {
        await this.fillInputByLabelOrPlaceholder(label, value);
      } catch (e) {
        console.warn(`Could not fill field "${label}": ${e}`);
      }
    }
  }

  async fillInputByLabelOrPlaceholder(
    labelOrPlaceholder: string,
    value: string
  ) {
    // 1. Try getByPlaceholder (most reliable for these forms)
    try {
      const input = this.page.getByPlaceholder(labelOrPlaceholder, {
        exact: false,
      });
      if (await input.first().isVisible({ timeout: 3000 })) {
        await input.first().clear();
        await input.first().fill(value);
        return;
      }
    } catch {}

    // 2. Try getByLabel
    try {
      const input = this.page.getByLabel(labelOrPlaceholder, { exact: false });
      if (await input.first().isVisible({ timeout: 3000 })) {
        await input.first().clear();
        await input.first().fill(value);
        return;
      }
    } catch {}

    // 3. Try label text → sibling input (inside modal)
    try {
      const label = this.page
        .locator(`label`)
        .filter({ hasText: new RegExp(labelOrPlaceholder, "i") })
        .first();
      if (await label.isVisible({ timeout: 2000 })) {
        const input = label
          .locator("~ input, ~ textarea, + input, + textarea")
          .first();
        if (await input.isVisible({ timeout: 2000 })) {
          await input.clear();
          await input.fill(value);
          return;
        }
      }
    } catch {}
  }

  async searchAndSelectFromDropdown(searchText: string) {
    console.log(`Searching and selecting: ${searchText}`);
    // Type in search field
    const searchInputs = this.page.locator(
      'input[placeholder*="search" i], input[placeholder*="Search" i], input[placeholder*="type" i], [class*="search"] input'
    );

    const count = await searchInputs.count();
    if (count > 0) {
      await searchInputs.last().fill(searchText);
      await this.page.waitForTimeout(1000);
    }

    // Select option from dropdown
    const option = this.page.locator(
      `[class*="option"]:has-text("${searchText}"),
       [role="option"]:has-text("${searchText}"),
       li:has-text("${searchText}"),
       [class*="dropdown"] div:has-text("${searchText}"),
       [class*="menu"] div:has-text("${searchText}")`
    );

    await option.first().waitFor({ state: "visible", timeout: 10000 });
    await option.first().click();
  }

  async submitForm() {
    const submitBtns = ["Submit", "Save", "Create", "Add", "Save & Continue"];
    for (const text of submitBtns) {
      const btn = this.page.locator(
        `button[type="submit"]:has-text("${text}"), button:has-text("${text}")`
      );
      if (
        await btn
          .first()
          .isVisible({ timeout: 2000 })
          .catch(() => false)
      ) {
        await btn.first().click();
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.waitForTimeout(2000);
        return;
      }
    }

    // Try generic submit
    const submitBtn = this.page.locator('button[type="submit"]');
    if (
      await submitBtn
        .first()
        .isVisible({ timeout: 2000 })
        .catch(() => false)
    ) {
      await submitBtn.first().click();
      await this.page.waitForLoadState("domcontentloaded");
      await this.page.waitForTimeout(2000);
    }
  }

  async selectFollowUpTimeline(value: string) {
    console.log(`Selecting follow-up timeline: ${value}`);
    // Look for timeline/frequency dropdowns
    const timelineLabels = ["follow up", "followup", "timeline", "frequency"];
    for (const label of timelineLabels) {
      const dropdown = this.page.locator(
        `label:has-text("${label}") ~ * select,
         label:has-text("${label}") ~ * [class*="select"],
         [placeholder*="${label}" i]`
      );
      if (
        await dropdown
          .first()
          .isVisible({ timeout: 2000 })
          .catch(() => false)
      ) {
        await dropdown.first().click();
        break;
      }
    }

    // Select the option
    const option = this.page.locator(
      `option:has-text("${value}"),
       [role="option"]:has-text("${value}"),
       [class*="option"]:has-text("${value}"),
       li:has-text("${value}")`
    );

    if (
      await option
        .first()
        .isVisible({ timeout: 5000 })
        .catch(() => false)
    ) {
      await option.first().click();
    } else {
      // Try native select
      const select = this.page.locator("select");
      const count = await select.count();
      for (let i = 0; i < count; i++) {
        try {
          await select.nth(i).selectOption({ label: value });
          break;
        } catch {}
      }
    }
  }
}
