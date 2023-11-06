const { test, expect } = require('@playwright/test');

test('Get Title', async({page})=>{

    const url='https://demoblaze.com/index.html'

    await page.goto(url);

    const pageTitle = page.title;
    await console.log('Page title is ', pageTitle);

    await expect(page).toHaveURL(url);

    await expect(page).toHaveTitle('STORE');

    await page.close;

});