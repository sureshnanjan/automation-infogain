import { test, expect } from '@playwright/test';
import { DigestAuthPage } from '@src/web-implementation/DigestAuthPage';
import { DIGEST_AUTH, getDigestAuthUrl } from 'src/utilities/digestauth-utils';
import { getHerokuAppUrl } from '@src/utilities/herokuapp-utils';

test('Digest Authentication (valid credentials)', async ({ page }) => {

  // STEP 1: Open home page
  await page.goto(getHerokuAppUrl());

  // STEP 2 & 3: Navigate to Digest Auth page with credentials
  const digestUrl = getDigestAuthUrl(DIGEST_AUTH.username, DIGEST_AUTH.password);
  await page.goto(digestUrl);

  // STEP 4: Verify Digest Authentication page opened
  const digestPage = new DigestAuthPage(page);
  await digestPage.verifyDigestAuthPage();

});
