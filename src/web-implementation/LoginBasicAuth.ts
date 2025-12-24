
import { Browser, Page, BrowserContext, expect ,Locator} from '@playwright/test';

export class LoginBasicAuth  {
  private browser: Browser;
  private page!: Page;
  private context!: BrowserContext;

  constructor(browser: Browser) {
    this.browser = browser;
  }

  async login(username: string, password: string): Promise<Page> {
    this.context = await this.browser.newContext({
      httpCredentials: { username, password }
    });
    this.page = await this.context.newPage();
    return this.page;
  }
    async logout(): Promise<void> {
    await this.context.close();
  }
}

