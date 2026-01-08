import { getBasicAuthPage, getHerokuApp, getHerokuAppUrl } from '@src/utilities/herokuapp-utils';
import { HomePageOperations } from '@src/operations/HomePageOperations';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { BasicAuthPageOperations } from "@src/operations/BasicAuthPageOperations";
const { Given, When, Then } = createBdd(); // Decorators

// Basic Authentication credentials (HttpCredential: username + password)
// have already been added in the config file.
// Direct page verification will automatically use these credentials
// when sending requests, so no manual login method is required.
let basicAuthPage:BasicAuthPageOperations;
let homePage :HomePageOperations;
let actualResult:string|null;

Given('User navigates to the Basic Auth Page', async ({page}) => {
  await page.goto(getHerokuAppUrl());
   basicAuthPage= await getBasicAuthPage(page);
});

When('User observes the Basic Auth page header', async ({}) => {
     actualResult = await basicAuthPage.getPageHeader();
});

When('User observes the Basic Auth page content', async ({}) => {
     actualResult = await basicAuthPage.getPageContent();
});

When('User observes the Basic Auth page footer', async ({}) => {
     actualResult = await basicAuthPage.getFooterText();
});

Then('Page header should be {string}', async ({}, arg: string) => {
  expect(actualResult).toEqual(arg);
});

Then('Page content should contain {string}', async ({}, arg: string) => {
  expect(actualResult).toContain(arg);
});

Then('Page footer should be {string}', async ({}, arg: string) => {
    expect(actualResult).toContain(arg);
});
