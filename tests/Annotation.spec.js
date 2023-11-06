const {test, expect}=require('@playwright/test')

// only
test('test1', async({page})=>{
    console.log('this is test1 only')
})
test.skip('test2', async({page})=>{
    console.log('this is test2 only')
})
//skip
test.skip('test3', async({page})=>{
    console.log('this is test2')
})

test('test4', async({page, browserName})=>{
    console.log('this is test3 in chromium')
    if(browserName==='firefox')
    {
        //test.skip();
        test.skip();
    }
})


//Fixme is equalient to skipping the test
/*test('test4', async({page})=>{
    test.fixme()
    console.log('this is test 4..')

})
*/

// Fail

/*test('test5', async({page})=>{
    test.fail()  //exp
    console.log('this is test5....')
    expect(1).toBe(2);  //If both exp & Actual is failed then test pass
})

test('test6', async({page, browserName})=>{
    console.log('this is test6....')
    if(browserName==='firefox')
    {
    test.fail()  //exp
    }
})
*/

// slow()

test('test7', async({page})=>{
    test.slow();
   // test.setTimeout(5000)
    await page.goto('https://www.demoblaze.com/index.html')
    console.log('this is test 7..')
})