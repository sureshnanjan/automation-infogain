import { test,expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { BasicAuth } from "@src/web-implementation/BasicAuth";
import {getHerokuAppUrl, getHerokuApp} from '@src/utilities/herokuapp-utils';


test('Logged In Basic Auth Page Header Verification', async ({ page }) => {
  
  await page.goto(getHerokuAppUrl());
  await page.getByRole('link', { name: 'Basic Auth' }).click();
  const basicAuthPage: BasicAuth = new BasicAuth(page);
  const pageTitle = await basicAuthPage.getPageHeader();
  console.log('Page Title:', pageTitle);
  expect(pageTitle).toBe('Basic Auth');
  await page.close();
});

test('Logged In Basic Auth Page Content Verification', async ({ page }) => {
  await page.goto(getHerokuAppUrl());
  await page.getByRole('link', { name: 'Basic Auth' }).click();
  const basicAuthPage: BasicAuth = new BasicAuth(page);
  const pageContent = await basicAuthPage.getPageContent();
  console.log('Page Content:', pageContent);
  expect(pageContent).toContain('Congratulations! You must have the proper credentials.');
   await page.close();
});

test('Logged In Basic Auth Page Footer Verification', async ({ page }) => {
  await page.goto(getHerokuAppUrl());
  await page.getByRole('link', { name: 'Basic Auth' }).click();
   const basicAuthPage: BasicAuth = new BasicAuth(page);
  const footerText = await basicAuthPage.getFooterText();
  console.log('Footer Text:', footerText);
  expect(footerText?.trim()).toBe('Powered by Elemental Selenium');
   await page.close();
});