import {test,expect} from '@playwright/test';
import { log } from 'util';

test('Locator Test', async({page})=>{

await page.goto('https://demoblaze.com/index.html');
const pageWidth = await page.viewportSize().width;
const pageHeight = await page.viewportSize().height;

console.log(pageWidth,pageHeight);
//await page.locator('id=login2').click;
//or
await page.click('id=login2');

await page.locator('id=loginusername').fill('pavanol');
//await page.locator("input[id='loginpassword']").fill("Siva");
//or we can pass the value as an argument
await page.locator("input[id='loginpassword']").fill('test@123');
//await page.click("//button[normalize-space()='Log in']");
//await page.locator("//button[normalize-space()='Log in']").waitFor();
await page.click("//button[normalize-space()='Log in']");
//await page.locator("//button[normalize-space()='Log in']").click();
//"Log in"
const logoutLink = await page.locator("(//a[normalize-space()='Log out'])[1]");
await expect(logoutLink).toBeVisible();
const logoutLinkeText = logoutLink.getByText;
console.log(logoutLinkeText);
await page.waitForTimeout(6000);

})