
import { Page ,Locator} from '@playwright/test';

export class BasicAuth {
  private page: Page;
  private  titleSelector:Locator;
  private  contentSelector:Locator;
  private footerSelector:Locator;

  constructor(page:Page) {
    this.page = page;
    this.titleSelector = this.page.locator('h3');
    this.contentSelector = this.page.locator('p');
    this.footerSelector = this.page.locator('div#page-footer');
  }

  async getPageHeader(): Promise<string|null> {
    return  this.titleSelector.textContent();
  }

  async getPageContent(): Promise<string|null> {
    return this.contentSelector.textContent();
  }

  async getFooterText(): Promise<string|null> {
    return this.footerSelector.textContent();
  }
}