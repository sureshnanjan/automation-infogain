import { HomePageOperations } from '@src/operations/HomePageOperations';
import { getHerokuAppUrl} from '@src/utilities/herokuapp-utils';
import { DigestAuthPage } from '@src/web-implementation/DigestAuthPage';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd(); // Decorators
let digestAuthPage: DigestAuthPage;
let actualResult:string|null;
/**
 * GIVEN STEP
 * User is on Heroku App Home Page
 */
Given('User is on Heroku App Home Page', async ({ page }) => {
  await page.goto(getHerokuAppUrl());
  digestAuthPage = new DigestAuthPage(page);
});

When(
  'User navigates to Digest Auth page with {string} and {string}',
  async ({ page }, username: string, password: string) => {
    await digestAuthPage.doLogin(username, password);
  }
);

/**
 * THEN STEP
 * Validate authentication result
 */
Then(
  'authentication result should be {string}',
  async ({ page }, result: string) => {
    if (result === 'success'|| result === 'authorized') {
      const isAuth = await digestAuthPage.isAuthenticated();
    expect(isAuth).toBe(true);
    } else if (result === 'unauthorized') {
      const isUnauthorized = await digestAuthPage.isUnauthorized();
    expect(isUnauthorized).toBe(true);
    } else {
      throw new Error(`Unknown authentication result: ${result}`);
         }
  }
);