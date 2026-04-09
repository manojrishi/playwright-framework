import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async navigateSidebar(moduleName: string) {
    console.log(`Navigating to sidebar module: ${moduleName}`);

    // Use Playwright's built-in text matching which handles nested spans/divs
    const sidebarItem = this.page.getByRole('link', { name: moduleName, exact: false })
      .or(this.page.locator(`a:has-text("${moduleName}")`))
      .or(this.page.locator(`[class*="sidebar"] :text("${moduleName}")`))
      .or(this.page.locator(`[class*="menu"] :text("${moduleName}")`))
      .or(this.page.locator(`[class*="nav"] :text("${moduleName}")`))
      .or(this.page.locator(`:text-is("${moduleName}")`));

    await sidebarItem.first().waitFor({ state: 'visible', timeout: 15000 });
    await sidebarItem.first().click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(1000);
  }

  async clickButton(text: string) {
    const btn = this.page.locator(`button:has-text("${text}"), a:has-text("${text}")`);
    await btn.first().waitFor({ state: 'visible', timeout: 15000 });
    await btn.first().click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async fillField(label: string, value: string) {
    // Try to find input by label
    const input = this.page.locator(
      `label:has-text("${label}") + * input,
       label:has-text("${label}") + input,
       [placeholder*="${label}" i],
       input[name*="${label.toLowerCase().replace(/\s/g, '_')}"],
       input[id*="${label.toLowerCase().replace(/\s/g, '_')}"]`
    );

    try {
      await input.first().waitFor({ state: 'visible', timeout: 5000 });
      await input.first().clear();
      await input.first().fill(value);
    } catch {
      // Try aria-label
      const ariaInput = this.page.getByLabel(label, { exact: false });
      await ariaInput.first().clear();
      await ariaInput.first().fill(value);
    }
  }

  async selectDropdown(label: string, value: string) {
    // Click the dropdown trigger
    const dropdownTrigger = this.page.locator(
      `label:has-text("${label}") ~ * [class*="select"],
       label:has-text("${label}") ~ * [class*="dropdown"],
       label:has-text("${label}") + * [class*="select"],
       [aria-label*="${label}" i]`
    );

    try {
      await dropdownTrigger.first().click({ timeout: 5000 });
    } catch {
      // Try native select
      const select = this.page.getByLabel(label, { exact: false });
      await select.selectOption({ label: value });
      return;
    }

    // Search and select in custom dropdown
    const searchInput = this.page.locator('[class*="search"] input, input[placeholder*="search" i], input[placeholder*="Search" i]');
    if (await searchInput.last().isVisible({ timeout: 2000 })) {
      await searchInput.last().fill(value);
    }

    const option = this.page.locator(`[class*="option"]:has-text("${value}"), li:has-text("${value}")`);
    await option.first().waitFor({ state: 'visible', timeout: 10000 });
    await option.first().click();
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `reports/${name}.png`, fullPage: true });
  }
}
