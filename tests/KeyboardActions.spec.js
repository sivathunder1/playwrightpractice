const {test, expect}= require('@playwright/test')

test ('Keyboard Action', async ({page})=>{

      
    await page.goto("https://gotranscript.com/text-compare")

    //await page.locator('name="text1"').fill("welcome to autoamtion");

    const letterBox = await page.locator('[name="text1"]');

    await letterBox.click();
    await letterBox.clear();
    await letterBox.fill('welcome to automation');


    //await page.type('[name="text1"]','welcome to automation')

    //Ctrl + A   - Select the text
    await page.keyboard.press('Control+A');

    //Ctrl + C  - copy the text
    await page.keyboard.press('Control+C');

    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
       

    //Ctrl + V  - paste the text
    await page.keyboard.press('Control+V');

     

   await page.waitForTimeout(5000)

})