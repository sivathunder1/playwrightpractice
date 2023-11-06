import{test, expect} from '@playwright/test';

test('Hard and Soft Assertion Samples', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //to have URL assertions
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Page titlt
    await expect(page).toHaveTitle('Orange HRM');

    //To check if element is visible or not

    const headerLogo = await page.locator('.header-logo');
    await expect(headerLogo).toBeVisible();

    await expect(headerLogo).toBeEnabled();

    //check if a radio button is selected
    await expect(headerLogo).toBeChecked();

    //the text should be exactly matching with the provided text
    await expect(headerLogo).toHaveText();

    //the text can be partially contained in the element
    await expect(headerLogo).toContainText();

    await headerLogo.fill('test@gmail.com');

    await expect(headerLogo).toHaveValue('test@gmail.com');

    //to chanck the total number of velues present inside the element example dropdown

    const options = await page.locator('select[name="DateOfBirthMonth"]option');

    await expect(options).toHaveCount(30);

    await expect.soft(optons).toHaveCount(20);



})