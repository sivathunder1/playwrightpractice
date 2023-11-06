//iFrame is an element where external frames are embedded
const { test, expect } = require('@playwright/test');

test('frames', async ({ page }) => {
 
  await page.goto('https://ui.vision/demo/webtest/frames/');

  const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
  await frame3.locator("input[name='mytext3']").fill('welcome');

  const childFrames = await frame3.childFrames();
  await childFrames[0].locator("//*[@id='i5']/div[3]/div").check();


  await page.waitForTimeout(5000);
 
});