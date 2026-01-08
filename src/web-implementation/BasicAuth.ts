
import { Page ,Locator} from '@playwright/test';

export class BasicAuth {
  private page: Page;
  private  titleSelector:Locator;
  private  contentSelector:Locator;
  private footerSelector:Locator;
  private failedLoginMessageSelector:Locator;

  constructor(page:Page) {
    this.page = page;
    this.titleSelector = this.page.locator('h3');
    this.contentSelector = this.page.locator('p');
    this.footerSelector = this.page.locator('div#page-footer');
    this.failedLoginMessageSelector = this.page.locator('body');
  }

  static async create(page: Page): Promise<BasicAuth> {
    const instance = new BasicAuth(page);
    await instance.page.goto('https://the-internet.herokuapp.com/basic_auth');
    return instance;
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

  async getFailedLoginMessage(): Promise<string|null> {
    return this.failedLoginMessageSelector.textContent();
  }
}