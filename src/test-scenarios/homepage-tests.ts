import {test,expect} from '@playwright/test';
import { ABTestingOperations } from '@src/operations/ABTestingOperations';
import {HomePageOperations} from '@src/operations/HomePageOperations';
import {getHerokuAppUrl,getHerokuApp} from '@src/utilities/herokuapp-utils';
test("Verify Home Page Title",async({page})=>{
    //console.info("This is detailed INformation")
    //console.trace("");
    const homePage:HomePageOperations = await getHerokuApp(page);
    const expected_title = "Welcome to the-internet"
    const title=await homePage.getTitle();
    expect(title).toBe(expected_title);
});
test("Verify Home Page SubTitle",async({page,})=>{
    // Arrange
    const homePage:HomePageOperations = await getHerokuApp(page);
    const expectedSubTitle="Available Examples";
    // Input AccunytInput = { username: "testuser", password: "testpass" };
    // Act
    const subTitle=await homePage.getSubTitle();
    // Assert
    expect(subTitle).toBe(expectedSubTitle);
});
// Wherher all the 44 Examples  are available 
[{name:'ABTesting'},{name:'Add Remove'}].forEach(({name})=>{
    test(`Example Check ${name}`,async ({page})=>{
         const homePage:HomePageOperations = await getHerokuApp(page);
         homePage.getAvailableExamples();
    });

});
test("Verify Available Examples on Home Page",async({page})=>{
    const homePage:HomePageOperations = await getHerokuApp(page);
    //await page.Wa
    const examples = await homePage.getAvailableExamples();
    const expectedCount=44;
    //expect.soft(examples?.length);
    expect(examples?.length).toBe(expectedCount);
});
test("Verify Home Page Banner Info",async({page})=>{});
test("Verify Home Page Footer Text",async({page})=>{});



test("Navigate to Example Page from Home Page",async({page, context})=>{
    // Arrange
    const testPage = "A/B Testing"
    //context.addCookies
    // Expected A/B Test Variation 1
    const homePage:HomePageOperations = await getHerokuApp(page); 
    // Factory Method Patter

    //const home1: HomePageOperations = new HomePage(page);


    // Act
    const returnPage = (homePage.gotoExample(testPage) as unknown) as ABTestingOperations;

    // Can Be success or Error
    const actual = returnPage.getTitle();
    // Assert

});

test("Autenication on Basic Page pagw works with correct credentials",async({page})=>{
    const username = "admin";
    const password = "admin";
    const expected = "Congratulations! You must have the proper credentials.";
    const hp:HomePageOperations = await getHerokuApp(page);
    const basicAuthPage = await hp.gotoExample("Basic Auth") as unknown as ABTestingOperations;
    //basicAuthPage.doLogin(username,password);
    //const statusMessage= await basicAuthPage.getStatusMessage();
});
test("Autenication on Basic Page pagw does not works with incorrect credentials",async({page})=>{
    
});