// Import Playwright Page object
import { Page } from '@playwright/test';

// Import the interface we created
import { ChallengingDomActions } from '../operations/ChallengingDomActions';

/**
 * This class represents the Challenging DOM page
 * It IMPLEMENTS the interface, so all methods are required
 */
export class ChallengingDomPage implements ChallengingDomActions {

  // Store Playwright page instance
  readonly page: Page;

  /**
   * Constructor receives the Playwright page
   * This allows browser interaction
   */
  constructor(page: Page) {
    this.page = page;
  }

  // -------------------------
  // LOCATORS
  // -------------------------

  // Select the first top button
  private barButton = () => this.page.locator('a.button').first();
  
  // Select the second button
private fooButton = () => this.page.locator('a.button').nth(1);

// Select the third button
private bazButton = () => this.page.locator('a.button').nth(2);
  // canvas button DOM structure and property are getting change with every run
  /*private bazButton = () =>
    this.page.getByRole('link', { name: 'baz' });*/

  // Table rows locator (no IDs available)
  private tableRows = () =>
    this.page.locator('table tbody tr');

  // -------------------------
  // ACTION METHODS
  // -------------------------

  // Click the "bar" button
  async clickBarButton(): Promise<void> {
    await this.barButton().waitFor({ state: 'visible' });
    await this.barButton().click();
  }

  // Click the "foo" button
  async clickFooButton(): Promise<void> {
    await this.fooButton().click();
  }

  // Click the "baz" button
  async clickBazButton(): Promise<void> {
    await this.bazButton().click();
  }

  // Return total number of table rows
  async getRowCount(): Promise<number> {
    return await this.tableRows().count();
  }

  /**
   * Click the "edit" link for a specific row
   * @param text Unique text in the row (example: Iuvaret5)
   */
  async clickEditByRowText(text: string): Promise<void> {
    const row = this.tableRows().filter({ hasText: text });
    await row.getByRole('link', { name: 'edit' }).click();
  }

  /**
   * Click the "delete" link for a specific row
   * @param text Unique text in the row (example: Iuvaret5)
   */
  async clickDeleteByRowText(text: string): Promise<void> {
    const row = this.tableRows().filter({ hasText: text });
    await row.getByRole('link', { name: 'delete' }).click();
  }
}
