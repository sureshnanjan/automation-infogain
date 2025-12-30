import {test,expect} from '@playwright/test';
import {HomePageOperations} from '@src/operations/HomePageOperations';
import { DisappearingElementsOperations } from '@src/operations/DisappearingElementsOperations';
import {getHerokuAppUrl,getHerokuApp} from '@src/utilities/herokuapp-utils';


test("Verify DisappearingElements Link exists",async({page})=>{
    const homePage:HomePageOperations = getHerokuApp(page);
    const title=await homePage.getTitle();
    expect(title).toBe("Welcome to the-internet");
 

});

test("Verify DisappearingElements page is clickable",async({page})=>{
    const homePage:HomePageOperations = getHerokuApp(page);
    const disappearingelements:DisappearingElementsOperations = getDisappearingElementsPage(page);
    await disappearingelements.clickDisappearingElementsLink();
});

test("Verify DisappearingElements page title",async({page})=>{
    const disappearingelements:DisappearingElementsOperations = getDisappearingElementsPage(page);
    await disappearingelements.clickDisappearingElementsLink();
    await disappearingelements.verifyDisappearingElementsPageTitle();
});

