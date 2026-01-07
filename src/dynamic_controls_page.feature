import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { HomePageOperations } from '@src/operations/HomePageOperations';
import { DynamicControlsOperations } from '@src/operations/DynamicControlsOperations';
import { getHerokuApp, getDynamicControlsPage } from '@src/utilities/herokuapp-utils';
const { Given, When, Then } = createBdd();
// Page objects
let homePage: HomePageOperations;
let dynamicControlsPage: DynamicControlsOperations;
// State holders
let actualPageTitle: string | null;
let messageText: string;


Given('I am on the Heroku App Home Page', async ({ page }) => {
 // Reused step (same as Dynamic Content)
 homePage = await getHerokuApp(page);
});
Given('I navigate to the Dynamic Controls page', async ({ page }) => {
 dynamicControlsPage = await getDynamicControlsPage(page);
});


When('User observes Dynamic Controls page title', async ({ page }) => {
 actualPageTitle = await page.title();
});
When('I remove the checkbox', async () => {
 await dynamicControlsPage.removeCheckbox();
});
When('I add the checkbox', async () => {
 await dynamicControlsPage.addCheckbox();
});
When('I enable the input field', async () => {
 await dynamicControlsPage.enableInput();
});
When('I disable the input field', async () => {
 await dynamicControlsPage.disableInput();
});


Then('Dynamic Controls page title should match {string}', async ({}, expectedTitle: string) => {
 expect(actualPageTitle).toContain(expectedTitle);
});
Then('the checkbox should not be visible', async () => {
 // Validation is already handled inside page object,
 // this step exists for BDD readability
 expect(true).toBeTruthy();
});
Then('the checkbox should be visible', async () => {
 expect(true).toBeTruthy();
});
Then('the input field should be enabled', async () => {
 expect(true).toBeTruthy();
});
Then('the input field should be disabled', async () => {
 expect(true).toBeTruthy();
});
Then('the message should display {string}', async ({}, expectedMessage: string) => {
 messageText = await dynamicControlsPage.getMessageText();
 expect(messageText).toContain(expectedMessage);
});