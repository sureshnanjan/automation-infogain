import { test,expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import {getHerokuAppUrl, getHerokuApp, getBasicAuthPage} from '@src/utilities/herokuapp-utils';
import { HomePageOperations } from '@src/operations/HomePageOperations';
import { BasicAuthPageOperations } from '@src/operations/BasicAuthPageOperations';

// Basic Authentication credentials (HttpCredential: username + password)
// have already been added in the config file.
// Direct page verification will automatically use these credentials
// when sending requests, so no manual login method is required.

test.describe('Basic Auth Page Tests', () => {
  
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