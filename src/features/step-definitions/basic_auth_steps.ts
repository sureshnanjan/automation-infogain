import { BasicAuth } from "@src/web-implementation/BasicAuth";
import { getHerokuApp, getHerokuAppUrl } from '@src/utilities/herokuapp-utils';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd(); // Decorators
let basicAuthPage:BasicAuth;
let actualResult:string|null;
Given('User navigates to the HerokuApp site', async ({page}) => {
  // Step: Given User navigates to the HerokuApp site
  // From: src\features\basic_auth.feature:4:5
  await page.goto(getHerokuAppUrl());
  
});

When('User clicks on Basic Auth link', async ({page}) => {
  // Step: When User clicks on Basic Auth link
  // From: src\features\basic_auth.feature:5:5
  await page.getByRole('link', { name: 'Basic Auth' }).click();
  basicAuthPage = new BasicAuth(page);
});

Then('Page header should be {string}', async ({}, arg: string) => {
  // Step: Then Page header should be "Basic Auth"
  // From: src\features\basic_auth.feature:6:5
    const pageTitle = await basicAuthPage.getPageHeader();
    expect(pageTitle).toBe('Basic Auth');
});

Then('Page content should contain {string}', async ({}, arg: string) => {
  // Step: Then Page content should contain "Congratulations! You must have the proper credentials."
  // From: src\features\basic_auth.feature:11:5
  const pageContent = await basicAuthPage.getPageContent();
  expect(pageContent).toContain('Congratulations! You must have the proper credentials.');
});

Then('Page footer should be {string}', async ({}, arg: string) => {
  // Step: Then Page footer should be "Powered by Elemental Selenium"
  // From: src\features\basic_auth.feature:16:5
    const footerText = await basicAuthPage.getFooterText();
    expect(footerText?.trim()).toBe('Powered by Elemental Selenium');
});


