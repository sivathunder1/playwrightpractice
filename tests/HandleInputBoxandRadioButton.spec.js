import {test,expect} from '@playwright/test';

test('Inputbox Radiobutton and CheckBox', async({page})=>{

await page.goto('https://seleniumbase.io/w3schools/radio_buttons');



const checkData = await page.locator('id=loginusername');

//Text Input strategy
await expect.soft(checkData).toBeVisible();
await expect.soft(checkData).toBeEnabled();
await expect.soft(checkData).toBeEmpty();
await expect.soft(checkData).toBeEditable();
await page.locator('id=loginusername').fill('pavanol');
await page.fill('id=loginusername','pavanol');

//Radio button Strategy
const radioCheck = await page.locator("//input[@id='javascript']");
await expect.soft((radioCheck).toBeChecked()).toBeTruthy();
await expect.soft((radioCheck).toBeChecked()).toBeFalsy();
await page.locator("//input[@id='javascript']").check();
await page.check("//input[@id='javascript']");

//Checkbox






await page.waitForTimeout(3000);


}) 