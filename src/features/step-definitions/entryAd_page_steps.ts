import { HomePageOperations } from '@src/operations/HomePageOperations';
import {EntryAdPageOperations} from '@src/operations/EntryAdPageOperations';
import { getHerokuApp } from '@src/utilities/herokuapp-utils';
import { createBdd, DataTable } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { EntryAdPage } from '@src/web-implementation/EntryAdPage';
const { Given, When, Then } = createBdd(); // Decorators

let homePage:HomePageOperations;
let entryAdPage:EntryAdPageOperations;

Given('the user navigates from Home Page to Entry Ad page', async ({page}) => {
  // Step: Given the user navigates to the Entry Ad page
  // From: src\features\entryAd_page.feature:22:5
  entryAdPage = new EntryAdPage(page);
  await entryAdPage.navigateToHome();
  await entryAdPage.clickOnEntryAd();  
});

When('Start to type your When step here the entry ad modal should be visible', async ({}) => {
  // Step: When Start to type your When step here the entry ad modal should be visible
  // From: src\features\entryAd_page.feature:23:5
    await entryAdPage.modalWindowVisible();
});

Then('Start to type your Then step here the user clicks the Close button in the modal', async ({}) => {
  // Step: Then Start to type your Then step here the user clicks the Close button in the modal
  // From: src\features\entryAd_page.feature:24:5
  await entryAdPage.closeModalWindow();
});

Given('the user navigates to the Entry Ad page', async ({page}) => {
  // Step: Given the user navigates to the Entry Ad page
  // From: src\features\entryAd_page.feature:22:5
   //await entryAdPage.navigateDirectEntryAdPage();
   entryAdPage = new EntryAdPage(page);
  await entryAdPage.navigateToHome();
  await entryAdPage.clickOnEntryAd(); 
});

When('the user are able to get {string} title', async ({}, arg: string) => {
  // Step: When the user are able to get "Entry Ad" title
  // From: src\features\entryAd_page.feature:30:5
    const adTitle=await entryAdPage.getEntryAdTitle();   //Title of Entry Ad
      expect(adTitle).toBe("Entry Ad");
});

Then('the user clicks the re-enable link on the Entry Ad page', async ({}) => {
  // Step: Then the user clicks the re-enable link on the Entry Ad page
  // From: src\features\entryAd_page.feature:31:5
  await entryAdPage.getReEnablePopUp();
});
