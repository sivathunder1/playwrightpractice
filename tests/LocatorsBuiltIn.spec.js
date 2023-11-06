import{test, expect} from '@playwright/test';

test('Built In Locators', async ({page})=>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo = await page.getByAltText('company-branding');
    
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('admin');
    const passwordFill = await page.getByPlaceholder('Password').isVisible();
    
    await page.getByPlaceholder('Password').fill('admin123');
    //await page.locator('class=oxd-input oxd-input--active').fi
    
    await page.getByRole('button', {type: 'submit'}).click();

    const loggedInName = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();

    console.log(loggedInName);

    await expect(page.getByText(loggedInName)).toBeVisible();

    await expect(loggedInName,'John17158 Smith17158');


   await page.waitForTimeout(5000);
})