/*
Test Cases for Entry Ad:
1.Verify that the user able to load the herokuapp
2.Verify that the Entry Ad element should be visible
3.Verify that user are able to click on Entry Ad
4.Verify that user are able to get popup window entry_ad page
5.Verify that user are able to validate window paragrapgh on popup
6.Verify that user are able to close the popup window
7.Verify that user are able to get title of the page
8. Verify that user are able to get Description.
9.Verify that user are able to click on re-enable link.
*/

import { expect, test } from '@playwright/test';
import { EntryAdPage } from '@src/web-implementation/EntryAdPage';
import {getHerokuAppUrl,getHerokuApp} from '@src/utilities/herokuapp-utils';
import { HomePageOperations } from "@src/operations/HomePageOperations";
 
test.describe('Entry Ad Modal Test', () => {
 
  test('Verify notification appeare on first visit and close it', async ({ page }) => {
    const homePage:HomePageOperations = getHerokuApp(page);
    const entryAdPage = new EntryAdPage(page);
    
    const title=await homePage.getTitle();
    expect(title).toBe("Welcome to the-internet");
    
    //await entryAdPage.clickOnEntryAd();
    await entryAdPage.modalWindowVisible();
    //Assertion
    const windowPara=await entryAdPage.modelWindowPara();
    expect(windowPara).toContain("It's commonly used to encourage a user to take an action ");

    await entryAdPage.closeModalWindow();

    const adTitle=await entryAdPage.getEntryAdTitle();
    expect(adTitle).toBe("Entry Ad");

    const des=await entryAdPage.getEntryAdDes();
    expect(des).toContain("Displays an ad on page load");

    const footerText=await entryAdPage.getFooterText();
    expect(footerText).toContain('Elemental Selenium');

    await entryAdPage.getReEnablePopUp();

  });
 
});