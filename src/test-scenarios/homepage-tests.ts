import {test,expect} from '@playwright/test';
import {HomePageOperations} from '@src/operations/HomePageOperations';
import {getHerokuAppUrl,getHerokuApp} from '@src/utilities/herokuapp-utils';
test("Verify Home Page Title",async({page})=>{
    const homePage:HomePageOperations = getHerokuApp(page);
    const title=await homePage.getTitle();
    expect(title).toBe("Welcome to the-internet");
});