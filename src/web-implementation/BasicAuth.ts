
import { Page ,Locator} from '@playwright/test';

export class BasicAuth {
  private page: Page;
  private  statusMessageSelector:Locator;

  constructor(page:Page) {
    this.page = page;
    this.statusMessageSelector = this.page.locator('body');
  }

  static async create(page: Page): Promise<BasicAuth> {
    const instance = new BasicAuth(page);
    await instance.page.goto('https://the-internet.herokuapp.com/basic_auth');
    return instance;
    }

  async doLogic(username:string,password:string){
    await this.page.goto(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);
  }

  async getStatusMessage(): Promise<string|null> {
    return this.statusMessageSelector.textContent();
  }
}