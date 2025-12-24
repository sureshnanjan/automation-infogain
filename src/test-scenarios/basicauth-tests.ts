import { test,expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { BasicAuth } from "@src/web-implementation/BasicAuth";
import { LoginBasicAuth } from "@src/web-implementation/LoginBasicAuth";
import {getHerokuAppUrl, getHerokuApp} from '@src/utilities/herokuapp-utils';

 let browser: Browser;

test('Basic Auth Login', async ({ page, context }) => {
  const browser = await chromium.launch();
  const authPage = new LoginBasicAuth(browser);
  const pageBasicAuth= await authPage.login('admin', 'admin');
  const basicAuthPage: BasicAuth = new BasicAuth(pageBasicAuth);
  await pageBasicAuth.goto(getHerokuAppUrl());
  await pageBasicAuth.getByRole('link', { name: 'Basic Auth' }).click();
  await authPage.logout();
});

test('Logged In Basic Auth Page Header Verification', async ({  }) => {
   browser = await chromium.launch();
  const authPage = new LoginBasicAuth(browser);
  const page= await authPage.login('admin', 'admin');
  await page.goto(getHerokuAppUrl());
  await page.getByRole('link', { name: 'Basic Auth' }).click();

  await page.goto(getHerokuAppUrl());
  await page.getByRole('link', { name: 'Basic Auth' }).click();
  const basicAuthPage: BasicAuth = new BasicAuth(page);
  const pageTitle = await basicAuthPage.getPageHeader();
  console.log('Page Title:', pageTitle);
  expect(pageTitle).toBe('Basic Auth');
  await authPage.logout();
});

test('Logged In Basic Auth Page Content Verification', async ({  }) => {
   browser = await chromium.launch();
  const authPage = new LoginBasicAuth(browser);
  const page= await authPage.login('admin', 'admin');
  await page.goto(getHerokuAppUrl());
  await page.getByRole('link', { name: 'Basic Auth' }).click();

  const basicAuthPage: BasicAuth = new BasicAuth(page);
  const pageContent = await basicAuthPage.getPageContent();
  console.log('Page Content:', pageContent);
  expect(pageContent).toContain('Congratulations! You must have the proper credentials.');
  await authPage.logout();
});

test('Logged In Basic Auth Page Footer Verification', async ({ }) => {
   browser = await chromium.launch();
  const authPage = new LoginBasicAuth(browser);
  const page= await authPage.login('admin', 'admin');
  await page.goto(getHerokuAppUrl());
  await page.getByRole('link', { name: 'Basic Auth' }).click();
   const basicAuthPage: BasicAuth = new BasicAuth(page);
  const footerText = await basicAuthPage.getFooterText();
  console.log('Footer Text:', footerText);
  expect(footerText?.trim()).toBe('Powered by Elemental Selenium');
  await authPage.logout();
});