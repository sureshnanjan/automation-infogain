import { test, expect } from '@playwright/test';
import { DigestAuthPage } from '@src/web-implementation/DigestAuthPage';
import { DIGEST_AUTH } from 'src/utilities/digestauth-utils';

import { getHerokuAppUrl } from '@src/utilities/herokuapp-utils';

test('Digest Authentication (valid credentials)', async ({ page }) => {

  // Open home page
  await page.goto(getHerokuAppUrl());
 const digestPage = new DigestAuthPage(page);
  // Navigate to Digest Auth page with credentials
   await digestPage.navigateWithCredentials(
    DIGEST_AUTH.username,
    DIGEST_AUTH.password
  );

  // Verify Digest Authentication page opened

  await digestPage.verifyDigestAuthPage();

});

test('Digest Authentication (invalid credentials)', async ({ page }) => {

  // Open home page
  await page.goto(getHerokuAppUrl());

  // CREATE page object 
  const digestPage = new DigestAuthPage(page);

  // Navigate with invalid credentials
  await digestPage.navigateWithCredentials('wrongUser', 'wrongPass');

  // Verify unauthorized page is shown
  expect(await digestPage.isUnauthorized()).toBe(true);
});



