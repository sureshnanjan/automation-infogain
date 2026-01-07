import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { HomePageOperations } from '@src/operations/HomePageOperations';
import { DynamicControlsPageOperations } from '@src/operations/DynamicControlsPageOperations';
import { getHerokuApp, getDynamicControlsPage } from '@src/utilities/herokuapp-utils';

const { Given, When, Then } = createBdd();

// Page objects
let homePage: HomePageOperations;
let dynamicControlsPage: DynamicControlsPageOperations;

// State holders
let actualPageTitle: string | null;
let messageText: string;
Given('I am on the Heroku App Home Page', async ({ page }) => {
  homePage = await getHerokuApp(page);
});

Given('I navigate to the Dynamic Controls page', async ({ page }) => {
  dynamicControlsPage = await getDynamicControlsPage(page);
  await dynamicControlsPage.isLoaded();
});

When('User observes Dynamic Controls page title', async () => {
  actualPageTitle = await dynamicControlsPage.getTitle();
});

Then('Dynamic Controls page title should be {string}', async ({}, expectedTitle: string) => {
  expect(actualPageTitle).toEqual(expectedTitle);
});

When('I remove the checkbox', async () => {
  await dynamicControlsPage.removeCheckbox();
});

Then('the checkbox should be removed successfully', async () => {
  messageText = await dynamicControlsPage.getMessageText();
  expect(messageText).toContain("It's gone!");
});
 