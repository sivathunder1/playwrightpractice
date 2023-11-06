import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin12');
  await page.getByPlaceholder('Password').press('Control+3');
  await page.getByPlaceholder('Password').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('row', { name: ' 135 3llawi Layth 7abibGalbi  ' }).locator('span i').click();

  //Checkbox code
  const checkboxifChecked = await page.locator("//input[@id='monday' and @type='checkbox']")
 
  await expect(checkboxifChecked).toBeChecked();
  await expect((checkboxifChecked).toBeChecked()).toBeTruthy();
  checkboxifChecked.click();

 //Mutliple selection
 const multipleCheckboxes =["//input[@id='monday' and @type='checkbox']",
 "//input[@id='sunday' and @type='checkbox']",
 "//input[@id='tuesday' and @type='checkbox']"
 ]

 for(const multiChkBox of multipleCheckboxes){
    await page.locator(multi).check();
 }

 for(const multiChkBox of multipleCheckboxes){
    if(await page.locator(multiChkBox).isChecked){
       await page.locator(multiChkBox) .uncheck();
    }
 }



});