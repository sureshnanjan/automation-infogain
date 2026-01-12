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
  homePage = await getHerokuApp(page);
});

Given('User logs in with username {string} and password {string}', async ({page}, arg: string, arg1: string) => {
  basicAuthPage=await getBasicAuthPage(page);
  basicAuthPage.doLogin(arg, arg1);

});

Given('User attempts to access Basic Auth page without credentials', async ({page}) => {
  basicAuthPage=await getBasicAuthPage(page);
  basicAuthPage.doLogin('', '');
});

When('User observes the Basic Auth Status Message', async ({}) => {
  actualResult= await basicAuthPage.getStatusMessage();
});

Then('Status Message should contain {string}', async ({page}, arg: string) => {
  expect(actualResult).toContain(arg);
});
