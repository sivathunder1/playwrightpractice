const {test, expect}=require('@playwright/test')

test('Test alert ', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling alert handling
    page.on('dialog',async dialog=>{

        await expect.soft(dialog.type()).toContain('alert');
        await expect.soft(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

    })
    
    await page.click('//button[normalize-space()="Alert"]');    
    await page.waitForTimeout(5000);    

});

test('Confitmation Alert with Ok and Cancel ', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling alert handling
    page.on('dialog',async dialog=>{

        await expect.soft(dialog.type()).toContain('confirm');
        await expect.soft(dialog.message()).toContain('Press a button!');
        await dialog.accept();

    })
    
    await page.click('//button[normalize-space()="Confirm Box"]');
    await expect.soft(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');   
    await page.waitForTimeout(5000);    

});

test('Prompt Dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    //Enabling dialog window handler
    page.on('dialog', async dialog=>{
      expect.soft(dialog.type()).toContain('prompt')
      expect.soft(dialog.message()).toContain('Please enter your name:')
      expect.soft(dialog.defaultValue()).toContain('Harry Potter')
      await dialog.accept('John');     
  
    })
    await page.click('//button[normalize-space()="Prompt"]');
    await expect.soft(page.locator('//p[@id="demo"]')).toHaveText('Hello John! How are you today?')
  
    await page.waitForTimeout(5000);
   
  });