import { test,expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { BasicAuthPageOperations } from '../operations/BasicAuthPageOperations';
import { getBasicAuthPage, getHerokuAppUrl } from '../utilities/herokuapp-utils';

test.describe('Basic Auth Page Tests with Valid Credentials', () => {
  test.use({
  httpCredentials: {
    username: "admin",
    password: "admin"
  }
});

let basicAuthPage: BasicAuthPageOperations;
test.beforeEach(async ({ page }) => {
  // Navigate to the Basic Auth page before each test
   await page.goto(getHerokuAppUrl());
   basicAuthPage= await getBasicAuthPage(page);
});

test('Logged In Basic Auth Page Header Verification', async ({ page }) => {
  const pageTitle = await basicAuthPage.getPageHeader();
  console.log('Page Title:', pageTitle);
  expect(pageTitle).toBe('Basic Auth');
  await page.close();
});

test('Logged In Basic Auth Page Content Verification', async ({ page }) => {
  const pageContent = await basicAuthPage.getPageContent();
  console.log('Page Content:', pageContent);
  expect(pageContent).toContain('Congratulations! You must have the proper credentials.');
   await page.close();
});

test('Logged In Basic Auth Page Footer Verification', async ({ page }) => {
  const footerText = await basicAuthPage.getFooterText();
  console.log('Footer Text:', footerText?.trim());
  expect(footerText?.trim()).toBe('Powered by Elemental Selenium');
   await page.close();
});
});

test.describe('Basic Auth Page Tests with Invalid Credentials', () => {
  test.use({
  httpCredentials: {
    username: "invalidUser",
    password: "password"
  }
});

let basicAuthPage: BasicAuthPageOperations; 
test.beforeEach(async ({ page }) => {
  // Navigate to the Basic Auth page before each test
   await page.goto(getHerokuAppUrl());
   basicAuthPage= await getBasicAuthPage(page);
});

test('Invalid Login Basic Auth Page Message Verification', async ({ page }) => {
  const failedLoginMessage = await basicAuthPage.getFailedLoginMessage();
  console.log('Failed Login Message:', failedLoginMessage?.trim());
  expect(failedLoginMessage?.trim()).toBe('Not authorized');
   await page.close();
});
});