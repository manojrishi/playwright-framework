import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { TEST_DATA } from '../utils/test-data';

const authFile = '.auth/session.json';

setup('authenticate', async ({ page }) => {
  console.log('=== STEP 1: LOGIN ===');

  const loginPage = new LoginPage(page);
  await loginPage.login(TEST_DATA.credentials.email, TEST_DATA.credentials.password);

  // Save session state
  await page.context().storageState({ path: authFile });
  console.log(`Session saved to ${authFile}`);
  console.log('Current URL after login:', page.url());
});
