import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('img', { name: 'company-branding' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('canvas').nth(2).click({
    position: {
      x: 114,
      y: 68
    }
  });
  await page.getByText('Texas R&D').click();
  await page.getByText('New York Sales Office').click();
  const newYorkSaleOffice = await page.getByText('New York Sales Office').textContent();
  console.log(newYorkSaleOffice);
  await expect(newYorkSaleOffice,'New York Sales Office');
  await page.locator('ul').filter({ hasText: 'New York Sales OfficeTexas R&DUnassigned' }).getByTitle('Unassigned').click();
  await page.locator('ul').filter({ hasText: 'New York Sales OfficeTexas R&DUnassigned' }).getByTitle('Unassigned').click();
  await page.getByRole('link', { name: 'Admin' }).click();
});