import { test, expect } from '@playwright/test';
import { DigestAuthPage } from '@src/web-implementation/DigestAuthPage';
import { DIGEST_AUTH } from '@src/utilities/digestauth-utils';
import { getHerokuAppUrl } from '@src/utilities/herokuapp-utils';

test.describe('Digest Authentication', () => {

  test('Digest Authentication valid credentials', async ({ page }) => {

    await page.goto(getHerokuAppUrl());

    const digestPage = new DigestAuthPage(page);

    await digestPage.navigateWithCredentials(
      DIGEST_AUTH.username,
      DIGEST_AUTH.password
    );

    expect(await digestPage.isAuthenticated()).toBe(true);
  });

  test('Digest Authentication invalid credentials', async ({ page }) => {

    await page.goto(getHerokuAppUrl());

    const digestPage = new DigestAuthPage(page);

    await digestPage.navigateWithCredentials(
      'wrongUser',
      'wrongPass'
    );

    expect(await digestPage.isUnauthorized()).toBe(true);
  });

});
