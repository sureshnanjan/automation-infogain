import { AddRemoveOperations } from "@src/operations/AddRemoveOperations";
import {Page, Locator} from '@playwright/test';
import { getHerokuAppUrl } from "@src/utilities/herokuapp-utils";
export class AddRemovePage implements AddRemoveOperations {
    private readonly page;
    private readonly getHeadingSelector:Locator;
    private readonly buttonAddedCountSelector:Locator;
    private readonly addElementSelector:Locator;
    private readonly removeElementSelector:Locator;
   
    constructor(page: any) {
        this.page = page;
        this.getHeadingSelector=page.locator('h3');
        this.buttonAddedCountSelector=page.locator('button.added-manually');
        this.addElementSelector = page.getByRole('button', { name: 'Add Element' });
        this.removeElementSelector = page.getByRole('button', { name: 'Delete' });
    }   
    async addMultipleElement(numOfTimes: number): Promise<void> {
        
            const addButton = this.addElementSelector;

            for (let i = 0; i < numOfTimes; i++) {
                    await addButton.click();
            }
  }
    
    async getAvailableElements(): Promise<number> {
        return await this.buttonAddedCountSelector.count();
    }
    async getHeading(): Promise<string|null> {
        return await this.getHeadingSelector.textContent();
    }
    async gotoExampleAddRemove(): Promise<void> {
        await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    }
    async addElement(): Promise<void> {
        await this.addElementSelector.click();
    }
    async removeElement(): Promise<void> {
        await this.removeElementSelector.click();
    }
    }   