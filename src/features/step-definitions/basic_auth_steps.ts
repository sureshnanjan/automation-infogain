import { getBasicAuthPage, getHerokuApp, getHerokuAppUrl } from '@src/utilities/herokuapp-utils';
import { HomePageOperations } from '@src/operations/HomePageOperations';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { BasicAuthPageOperations } from "@src/operations/BasicAuthPageOperations";
const { Given, When, Then } = createBdd(); // Decorators

let basicAuthPage:BasicAuthPageOperations;
let homePage :HomePageOperations;
let actualResult:string|null;

Given('The App is launched', async ({page}) => {
  // Step: Given The App is launched
  // From: src\features\basic_auth.feature:4:5
  homePage = await getHerokuApp(page);
  const title = await homePage.getTitle();
  expect(title).toBe('Welcome to the-internet');
});

Given('User logs in with username {string} and password {string}', async ({page}, arg: string, arg1: string) => {
  // Step: Given User logs in with username "admin" and password "admin"
  // From: src\features\basic_auth.feature:7:5
  basicAuthPage=await getBasicAuthPage(page);
  basicAuthPage.doLogic(arg, arg1);

});

Given('User attempts to access Basic Auth page without credentials', async ({page}) => {
  // Step: Given User attempts to access Basic Auth page without credentials
  // From: src\features\basic_auth.feature:17:5
  basicAuthPage=await getBasicAuthPage(page);
  basicAuthPage.doLogic('', '');
});

When('User observes the Basic Auth Status Message', async ({}) => {
  // Step: When User observes the Basic Auth error Status Message
  // From: src\features\basic_auth.feature:13:5
  actualResult= await basicAuthPage.getStatusMessage();
});

Then('Status Message should contain {string}', async ({page}, arg: string) => {
  // Step: Then Prompt message should contain "Not authorized"
  // From: src\features\basic_auth.feature:19:5
  expect(actualResult).toContain(arg);
});
