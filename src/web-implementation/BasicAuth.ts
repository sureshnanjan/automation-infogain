
import { Page ,Locator} from '@playwright/test';

export class BasicAuth {
  private page: Page;
  private  statusMessageSelector:Locator;
  private titleSelector:Locator;

  constructor(page:Page) {
    this.page = page;
    this.statusMessageSelector = this.page.locator('body');
    this.titleSelector = this.page.locator('h3');
  }
  
  /**
   * Login to the Basic Auth page with provided username and password
   * @param username 
   * @param password 
   */
  async doLogin(username:string,password:string){
    await this.page.goto(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);
  }

  /**
   * Gets the status message displayed on the Basic Auth page
   * @returns string
   */
  async getStatusMessage(): Promise<string|null> {
    return this.statusMessageSelector.textContent();
  }

  /**
   * Gets the title of the Basic Auth page
   * @returns string
   */
  async getTitle():Promise<string| null>{
    return this.titleSelector.textContent() || '';
  }
}