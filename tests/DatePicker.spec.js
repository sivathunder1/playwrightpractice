import { test, expect } from '@playwright/test';

test('Date Picker', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

 // await page.locator('#datepicker').fill('03/15/24');

 const year="2024";
 const month="March";
 const date="03";

 await page.click('#datepicker');

 while(true){

    const currentYear = await page.locator('.ui-datepicker-year').textContent();
    const currentMonth = await page.locator('.ui-datepicker-month').textContent();

    if(currentYear == year && currentMonth == month){
        break;
    }

    await page.locator('[title="Next"]').click();

 }

 const dates = await page.$$("//a[@class='ui-state-default']");

 for(const dt of dates){
    
    if(await dt.textContent()==date){
        await dt.click();
        break;
    }
 }

 await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

  await page.waitForTimeout(4000);


 
});