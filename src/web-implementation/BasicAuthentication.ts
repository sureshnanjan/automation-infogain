import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";
import { BasicAuthenticationOps } from "@src/operations/BasicAuthOperations";
export class BasicAuthentication implements BasicAuthenticationOps{
    private page:Page;
    private titeLocator:Locator;
    private statusMessageLocator:Locator;

    constructor(page){
        this.page=page;
        this.statusMessageLocator = this.page.locator('div#content > div > p');
        this.titeLocator = this.page.locator('h3'); 
    }   
    async doLogin(username: string, password: string): Promise<void> {
       const authUrl = `http://${username}:${password}@the-internet.herokuapp.com/basic_auth`;
       await this.page.goto(authUrl);
    }

    async getStatusMessage(): Promise<string> {
        return await this.statusMessageLocator.textContent() || '';
    }

    async getTite(): Promise<string> {
        return await this.titeLocator.textContent() || '';
    }
    
}