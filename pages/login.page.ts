import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/app/login/');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(1500);
  }

  async acceptCookies() {
    try {
      const cookieBtn = this.page.locator(
        'button:has-text("Accept"), button:has-text("Accept All"), button:has-text("I Accept"), [id*="cookie"] button, [class*="cookie"] button'
      );
      if (await cookieBtn.first().isVisible({ timeout: 5000 })) {
        await cookieBtn.first().click();
        await this.page.waitForTimeout(1000);
      }
    } catch {
      // No cookie banner
    }
  }

  async login(email: string, password: string) {
    await this.navigate();
    await this.acceptCookies();

    // Step 1: Click "Log in with Password" button (login method selection screen)
    // Wait for it explicitly, then click
    const logInWithPasswordBtn = this.page.locator('button:has-text("Log in with Password")');
    if (await logInWithPasswordBtn.isVisible({ timeout: 8000 }).catch(() => false)) {
      await logInWithPasswordBtn.click();
      console.log('Clicked "Log in with Password" button');
      // Wait for email input to appear after click
      await this.page.waitForTimeout(2000);
    }

    // Step 2: Fill email
    const emailInput = this.page.locator(
      'input[type="email"], input[name="email"], input[placeholder*="email" i], input[id*="email" i]'
    );
    await emailInput.first().waitFor({ state: 'visible', timeout: 30000 });
    await emailInput.first().fill(email);

    // Step 3: Fill password
    const passwordInput = this.page.locator(
      'input[type="password"], input[name="password"], input[placeholder*="password" i]'
    );
    await passwordInput.first().waitFor({ state: 'visible', timeout: 10000 });
    await passwordInput.first().fill(password);

    // Step 4: Check "Remember me" checkbox if present
    try {
      const rememberMe = this.page.locator(
        'input[type="checkbox"][name*="remember" i], input[type="checkbox"][id*="remember" i], label:has-text("Remember") input[type="checkbox"]'
      );
      if (await rememberMe.first().isVisible({ timeout: 3000 })) {
        const isChecked = await rememberMe.first().isChecked();
        if (!isChecked) {
          await rememberMe.first().check();
          console.log('Checked "Remember me"');
        }
      }
    } catch {
      // No "Remember me" checkbox found
    }

    // Step 5: Click login/submit button
    const loginBtn = this.page.locator(
      'button[type="submit"], button:has-text("Login"), button:has-text("Sign In"), button:has-text("Log In")'
    ).first();
    await loginBtn.waitFor({ state: 'visible', timeout: 10000 });
    await loginBtn.click();

    // Step 6: Wait for successful redirect away from login
    await this.page.waitForURL((url) => !url.href.includes('/login'), { timeout: 60000 });
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(1500);

    console.log('Login successful. Current URL:', this.page.url());
  }
}
