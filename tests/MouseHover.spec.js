import { test, expect } from '@playwright/test';

test('MouseHover test', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');

 // await page.locator('#datepicker').fill('03/15/24');

 const desktops=await page.locator('//a[normalize-space()="Desktops"]');
 const macbook=await page.locator('//a[normalize-space()="Mac (1)"]');

await desktops.hover();
await macbook.hover();

await macbook.click();

  await page.waitForTimeout(4000);


 
});