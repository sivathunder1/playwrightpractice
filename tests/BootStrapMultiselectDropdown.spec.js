import {test, expect} from '@playwright/test';

test('Test BootStrap multiselect', async ({page})=>{

await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
await page.locator('.multiselect').click();
const dropdown = await page.locator('ul>li label input');
await expect.soft(dropdown).toHaveCount(11);

const optionsToClick = await page.$$('ul>li label');

for(let options of optionsToClick){
    const value = await options.textContent();
    console.log('The values are : ', value);

    if(value.includes('Bootstrap') && value.includes('Java')){
        await options.click();
    }
}
await page.waitForTimeout(3000);


})