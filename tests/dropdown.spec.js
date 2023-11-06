import {test, execute, expect} from '@playwright/test';

test('Dopdown Test', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //select a normal dropdown
    //For locator a direct selector can be given or #can be given also
    await page.locator('id=country').selectOption({label:'India'});

    const indiaLocator = await page.locator('#country');
    const selectByValueUK = await page.locator('#country');
    const selectByIndex = await page.locator('#country');

    await expect.soft(indiaLocator).toBeVisible();
    await expect.soft(indiaLocator).toHaveValue('india');
    //await expect.soft(indiaLocator,'India');
    await indiaLocator.selectOption({label:'India'});

    await selectByValueUK.selectOption({value:'uk'});

    await selectByIndex.selectOption({index:2});

    //checking number of options in dropdown approach1
    const countryLocations = await page.locator('#country option');
    await expect.soft(countryLocations).toHaveCount(10);

    //checking number of options in dropdown approach2
    const noOfOptions = await page.$$('#country option');
    console.log(noOfOptions.length);
    await expect.soft(noOfOptions.length).toBe(10);

    if(noOfOptions.length <=10){
        console.log("Looks dorpdown is in the expected range")
    }

    //Checking the availabe content
    const presentContent = await page.locator('#country').textContent();
    await expect.soft(presentContent.includes('India')).toBeTruthy();

    // for(option of noOfOptions){


    // }
    let status = false;
    for(const option of noOfOptions){
        console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('India')){
            console.log('Yes India is present');
            status=true;
            break;
        }
    }
    await expect.soft(status).toBeTruthy();


    await page.waitForTimeout(5000);

   

})