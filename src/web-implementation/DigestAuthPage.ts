import { Page, Locator } from '@playwright/test';
import { BasePage } from '@src/web-implementation/BasePage';
import { DigestAuthOperations } from '@src/operations/DigestAuthOperations';
import { DIGEST_AUTH_BASE_URL } from '@src/utilities/digestauth-utils';

/**
 * Page Object implementation for Digest Authentication page
 */
export class DigestAuthPage {

  private readonly page: Page;
  private readonly bodyContent: Locator;

  constructor(page: Page) {
 
    this.page = page;
    this.bodyContent = page.locator('body');
  }

  /**
   * Navigates to Digest Auth page using HTTP credentials
   * Supports both positive & negative scenarios
   */
  async navigateWithCredentials(
    username: string,
    password: string
  ): Promise<void> {

    //  Authentication must be set at context level
    await this.page.context().setHTTPCredentials({
      username,
      password,
    });

    // Navigation rules belong to page.goto
    try {
      await this.page.goto(DIGEST_AUTH_BASE_URL, {
        waitUntil: 'load',
      });
    } catch (error) {
      // Expected for invalid credentials (401)
      console.log('Unauthorized access occurred');
    }
  }
  /**
   * Checks successful authentication
   */
  async isAuthenticated(): Promise<boolean> {
    const text = await this.bodyContent.textContent();
    return text?.includes('Congratulations!') ?? false;
  }

  /**
   * Checks unauthorized access
   */
  async isUnauthorized(): Promise<boolean> {
    const text = await this.bodyContent.textContent();
    return text?.includes('Unauthorized') ?? false;
  }

  /**
   * Returns full page text
   */
  async getPageText(): Promise<string | null> {
    return await this.bodyContent.textContent();
  }
}
