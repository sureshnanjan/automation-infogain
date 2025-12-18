import { HomePageOperations } from "@src/operations/HomePageOperations";
import { BasePage } from "@src/web-implementation/BasePage";
import {Page, Locator} from '@playwright/test';
import { getHerokuAppUrl } from "@src/utilities/herokuapp-utils";
import {BrokenimageOperations} from "@src/operations/BrokenimageOperations";

export class BrokenimagePage implements BrokenimageOperations {
   

    private readonly page;
    private readonly brokenImageHeaderSelector:Locator;
    private readonly brokenImageLinkSelector:Locator;
    private readonly brokenImageFooterSelector:Locator;
    constructor(page: any) {
        this.page = page;
        this.brokenImageHeaderSelector = page.locator('h3'); // data-testid = 'brokenimage-header'
        this.brokenImageLinkSelector = page.locator('img'); // data-testid = 'brokenimage-image'
        this.brokenImageFooterSelector = page.locator('footer'); // data-testid = 'brokenimage-footer'
    }
    async loginWithBrokenImage(): Promise<void> {
        await this.page.goto(getHerokuAppUrl() + '/broken_images');
    }       
    async getBrokenImageheader(): Promise<string|null> {
        return this.brokenImageHeaderSelector.textContent();
    }   
    async clickBrokenImage(): Promise<void> {
        await this.brokenImageLinkSelector.click();
    }   
    async getBrokenImagefooter(): Promise<string|null> {    
        return this.brokenImageFooterSelector.textContent();
    }


}
