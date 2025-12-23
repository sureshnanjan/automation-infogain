import { Page, Locator, expect } from '@playwright/test';
<<<<<<< HEAD
import { DIGEST_AUTH_BASE_URL } from '@src/utilities/digestauth-utils';

export class DigestAuthPage {
  private readonly page: Page;
  private readonly heading: Locator;
  private readonly successMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.successMsg = page.locator('p');
  }

  /**
   * Navigate to Digest Auth page with credentials
   */
  async navigateWithCredentials(
  username: string,
  password: string
): Promise<void> {
  await this.page.context().setHTTPCredentials({
    username,
    password,
  });

  try {
    await this.page.goto(DIGEST_AUTH_BASE_URL, {
      waitUntil: 'domcontentloaded',
    });
  } catch (error) {
    // Expected for invalid credentials (401)
    console.log('Navigation failed due to unauthorized access');
  }
}


  /**
   * Verify successful Digest Authentication
   */
  async verifyDigestAuthPage(): Promise<void> {
    await expect(this.heading).toHaveText('Digest Auth');
    await expect(this.successMsg).toBeVisible();
  }

  /**
   * Verify unauthorized access (negative case)
   */
  async isUnauthorized(): Promise<boolean> {
  const response = await this.page.request.get(DIGEST_AUTH_BASE_URL);
  return response.status() === 401;
}


  /**
   * Get heading text (optional utility)
   */
  async getHeadingText(): Promise<string> {
    return (await this.heading.textContent()) ?? '';
  }
=======

export class DigestAuthPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly successMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('h3');
        this.successMsg = page.locator(
            'text=Congratulations! You must have the proper credentials.'
        );
    }

    async verifyDigestAuthPage(): Promise<void> {
        await expect(this.heading).toHaveText('Digest Auth');

        await expect(this.successMsg).toBeVisible();
    }
>>>>>>> b690760 (digest auth)
}
