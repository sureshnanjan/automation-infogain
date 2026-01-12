import {test,expect} from '@playwright/test';
import {HomePageOperations} from '@src/operations/HomePageOperations';
import { DisappearingElementsOperations } from '@src/operations/DisappearingElementsOperations';
import {getHerokuAppUrl,getHerokuApp} from '@src/utilities/herokuapp-utils';
import { DisappearingElements } from '@src/web-implementation/DisappearingElementsPage';
import { getDisappearingElementsApp } from '@src/utilities/dsiappearingElements-utils';

test("Verify Home Page Title",async({page})=>{
    const homePage:HomePageOperations = await getHerokuApp(page);
    const expected_title = "Welcome to the-internet"
    const title=await homePage.getTitle();
    expect(title).toBe(expected_title);
});


 test('Validate header and description text', async ({ page }) => {
    const disappearingElementsApp: DisappearingElementsOperations = await getDisappearingElementsApp(page);
    const headerText = await disappearingElementsApp.getHeaderText();
    const descriptionText = await disappearingElementsApp.getDescriptionText();

    expect(headerText).toBe('Disappearing Elements');
    expect(descriptionText).toContain('disappearing/reappearing');
    });

test("Verify DisappearingElements Link Clickable and Navigates to correct page",async({page})=>{
  
});

test("Verify Mandatory Links are visible on DisappearingElements Page",async({page})=>{

});

test("Verify Menu Count before and after refresh on DisappearingElements Page",async({page})=>{

});


