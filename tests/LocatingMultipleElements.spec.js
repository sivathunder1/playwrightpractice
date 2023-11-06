import{test, expect} from '@playwright/test';


test('Lcoate multiple elements', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html');

   

    const links = await page.$$('a');

    for(const link of links){
       const availaleLinks =  await link.textContent();
       console.log(availaleLinks);
    }

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for(const product of products){
        const produtList = await product.textContent();
        console.log(produtList);
    }

    await page.waitForTimeout(5000);


});






