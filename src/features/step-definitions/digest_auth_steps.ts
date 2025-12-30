import { HomePageOperations } from '@src/operations/HomePageOperations';
import { getHerokuAppUrl} from '@src/utilities/herokuapp-utils';
import { DigestAuthPage } from '@src/web-implementation/DigestAuthPage';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd(); // Decorators
let digestPage: DigestAuthPage;
let actualResult:string|null;
Given('User is on Heroku App Home Page', async ({page}) => {
  // Step: Given User is on Heroku App Home Page
  // From: src\features\digest_auth.feature:4:5
  await page.goto(getHerokuAppUrl());
  digestPage = new DigestAuthPage(page);
});

When('User navigates to Digest Auth page with {string} and {string}', 
    async ({page}, username: string, password: string) => {
  // Step: When User navigates to Digest Auth page with "<username>" and "<password>"
  // From: src\features\digest_auth.feature:5:5
  await digestPage.navigateWithCredentials(username, password);
});

Then('authentication result should be {string}', async ({page}, result: string) => {
  // Step: Then authentication result may be "success" or "unauthorized"
  // From: src\features\digest_auth.feature:6:5
  if (result === 'success') {
      await digestPage.verifyDigestAuthPage();
    } else {
      expect(await digestPage.isUnauthorized()).toBe(true);
    }
});
