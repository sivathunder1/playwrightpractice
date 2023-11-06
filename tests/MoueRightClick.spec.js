import { test, expect } from '@playwright/test';

test('Mouse Right click', async ({ page }) => {
    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');

 // await page.locator('#datepicker').fill('03/15/24');

 const button=await page.locator('//span[normalize-space()="right click me"]');

 //right click action
 await button.click({button: 'right'});

 await page.waitForTimeout(5000);


 
});