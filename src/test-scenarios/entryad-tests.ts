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

 
test("Verify Home Page Title",async({page})=>{
    const homePage:HomePageOperations = await getHerokuApp(page);
    const title=await homePage.getTitle();
    expect(title).toBe("Welcome to the-internet");
});


  test('Verify notification appeare on first visit and close it', async ({ page }) => {
    const homePage:HomePageOperations = await getHerokuApp(page);
    const entryAdPage = new EntryAdPage(page);
    await entryAdPage.navigateToHome();
    await page.goto(getHerokuAppUrl());
    await entryAdPage.clickOnEntryAd();    //clicking on entry ad on homepage
    await entryAdPage.modalWindowVisible();  //getting popup/model window
    await entryAdPage.closeModalWindow();  // closing popup/model

    
  })

  test('Verify Title and regenrating popup', async ({ page }) =>{
      const homePage:HomePageOperations = await getHerokuApp(page);
      const entryAdPage = new EntryAdPage(page);
      await page.goto(getHerokuAppUrl());
      await entryAdPage.navigateDirectEntryAdPage();
      const adTitle=await entryAdPage.getEntryAdTitle();   //Title of Entry Ad
      expect(adTitle).toBe("Entry Ad");
      /*
      const des=await entryAdPage.getEntryAdDes();   // Entry Ad description
      expect(des).toContain("Displays an ad on page load");

      const footerText=await entryAdPage.getFooterText();    //footer text
      expect(footerText).toContain('Elemental Selenium');
      */
      await entryAdPage.getReEnablePopUp();  //regenerating the popup

  });
 
