import {test, execute, expect} from '@playwright/test';

test('Multi Select test', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.selectOption('#colors',['Red','Green','White']);

    //Assertions
    //Check number of colors in dropdown

    const colorAmount = await page.locator('#colors option');
    const numbeOfColors = await page.$$('#colors option');
    const typeOfColors = await page.$$('#colors');

    await expect.soft(colorAmount).toHaveCount(5);

    console.log('Total number of colors in multiselect : ', numbeOfColors.length);

    for(const colors of typeOfColors){
        console.log(await colors.textContent);
    }

    await page.waitForTimeout(3000);


}
)