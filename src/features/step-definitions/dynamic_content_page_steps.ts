import { HomePageOperations } from '@src/operations/HomePageOperations';
import { getDynamicContentPage, getHerokuApp } from '@src/utilities/herokuapp-utils';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { DynamicContentPageOperations } from '@src/operations/DynamicContentPageOperations';
const { Given, When, Then } = createBdd(); // Decorators
let homePage:HomePageOperations;
let dynamicContentPage:DynamicContentPageOperations;
let actualPageTitle:string|null;
let initialTexts: string[];
let initialImages: string[];

Given('I am on the Heroku App Home Page', async ({page}) => {
  // Step: Given I am on the Heroku App Home Page
  // From: src\features\dynamic_content_page.feature:7:5
    homePage = await getHerokuApp(page);
});

Given('I navigate to the Dynamic Content page', async ({page}) => {
  // Step: And I navigate to the Dynamic Content page
  // From: src\features\dynamic_content_page.feature:8:5
    dynamicContentPage = await getDynamicContentPage(page);
    await dynamicContentPage.isLoaded();
});

When('User Observes Dynamic Content Title', async ({}) => {
  // Step: When User Observes Dynamic Content Title
  // From: src\features\dynamic_content_page.feature:11:5
    actualPageTitle = await dynamicContentPage.getTitle();
});

Then('Dynamic content page title should match {string}', async ({}, arg: string) => {
  // Step: Then Dynamic content page title should match "Dynamic Content"
  // From: src\features\dynamic_content_page.feature:12:5
    expect(actualPageTitle).toEqual(arg);
});

When('I record the current row text and image sources', async ({}) => {
  // Step: When I record the current row text and image sources
  // From: src\features\dynamic_content_page.feature:14:5
    initialTexts = await dynamicContentPage.getRowText();
    initialImages = await dynamicContentPage.getImageSources();
});

When('I reload the page', async ({page}) => {
  // Step: And I reload the page
  // From: src\features\dynamic_content_page.feature:15:5
    await page.reload();
    await dynamicContentPage.isLoaded();
});

Then('the new content should be different from the recorded content', async ({}) => {
  // Step: Then the new content should be different from the recorded content
  // From: src\features\dynamic_content_page.feature:16:5
  await expect(async () => {  
  const currentTexts = await dynamicContentPage.getRowText();
    // Use the rearranged logic: if 0 rows match, content is truly dynamic
    const unchanged = dynamicContentPage.findUnchangedIndexes(initialTexts, currentTexts);
    expect(unchanged.length).toEqual(0);
    }).toPass({ timeout: 10000 });
});

Given('I enable the static version via the {string} link', async ({}, arg: string) => {
  // Step: Given I enable the static version via the "click here" link
  // From: src\features\dynamic_content_page.feature:19:5
    await dynamicContentPage.enableStaticViaLink();
});

When('I record the current row text', async ({}) => {
  // Step: When I record the current row text
  // From: src\features\dynamic_content_page.feature:20:5
    initialTexts = await dynamicContentPage.getRowText();
});

Then('I should find that specific rows remain unchanged', async ({}) => {
  // Step: Then I should find that specific rows remain unchanged
  // From: src\features\dynamic_content_page.feature:22:5
    const currentTexts = await dynamicContentPage.getRowText();
    const unchanged = dynamicContentPage.findUnchangedIndexes(initialTexts, currentTexts);
    // In static mode, at least the first two rows (index 0, 1) should match
    expect(unchanged).toContain(0);
    expect(unchanged).toContain(1);
});