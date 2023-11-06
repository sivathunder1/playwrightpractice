const {test, expect}=require('@playwright/test')

test("handling table",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('productTable');

    //total number of rows and cloumns

    await table.locator('thead tr th');

    await page.waitForTimeout(3000);

    
})