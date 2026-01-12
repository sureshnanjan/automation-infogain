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
  async doLogin(
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
    try {
      const content = await this.page.textContent('body');
      return content?.includes('Congratulations! You must have the proper credentials.') ?? false;
    } catch {
      return false;
    }
  }

  /**
   * Checks unauthorized access
   */
async isUnauthorized(): Promise<boolean> {
    try {
      // Try navigating without credentials to trigger 401
      const response = await this.page.goto(DIGEST_AUTH_BASE_URL, { waitUntil: 'domcontentloaded' });
      return response?.status() === 401;
    } catch {
           return true;
    }
  }
  /**
   * Returns full page text
   */
  async getPageText(): Promise<string | null> {
    return await this.bodyContent.textContent();
  }
}
