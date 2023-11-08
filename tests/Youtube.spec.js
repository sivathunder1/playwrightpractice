import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
    await page.goto('https://www.youtube.com/watch?v=OKiDxlcYJus');
    await page.waitForTimeout(50000);
    // await page.getByRole('link', { name: 'Log in' }).click();
    // await page.locator('#loginusername').fill('pavanol');
    // await page.locator('#loginpassword').fill('test@123');
    // await page.getByRole('button', { name: 'Log in' }).click();
});