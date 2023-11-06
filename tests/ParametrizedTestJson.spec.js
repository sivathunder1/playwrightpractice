import{test, expect} from '@playwright/test'

    const fillData = [{
        test:"test1",
        firstName : "siva",
        lastName : "Sathi",
        email : "siva.mob@gmail.com",
        age:"25",
        department:"Testing"
    },
    {
        test:"test2",
        firstName : "siva",
        lastName : "Sathi",
        email : "siva.mob@gmail.com",
        age:"25",
        department:"Testing"
    },
    {
        test:"test3",
        firstName : "siva",
        lastName : "Sathi",
        email : "siva.mob@gmail.com",
        age:"25",
        department:"Testing"
    },
    {
        test:"test4",
        firstName : "siva",
        lastName : "Sathi",
        email : "siva.mob@gmail.com",
        age:"25",
        department:"Testing"
    }]

    fillData.forEach(data=>{
        test(`Parametized test${data.test}`, async({page})=>{

            await page.goto("https://demoqa.com/webtables");
            const title = await page.title();
            console.log("Page title is : "+title);
            await expect.soft(title).toBe('DEMOQA');
            await page.locator("#addNewRecordButton").click();
            await page.getByPlaceholder("First Name").fill(data.firstName);//firstName
            await page.getByPlaceholder("Last Name").fill(data.lastName)//lastName
            await page.getByPlaceholder("name@example.com").fill(data.email)//lastName
            await page.getByPlaceholder("Age").fill(data.age)//lastName
            await page.getByPlaceholder("Department").fill(data.department)//lastName            
        
            await page.waitForTimeout(3000);
        
        })

    })
    