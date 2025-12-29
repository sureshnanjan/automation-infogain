import { DisappearingElementsOperations } from "@src/operations/DisappearingElementsOperations";
import {Page, Locator, expect} from '@playwright/test';
import { getHerokuAppUrl } from "@src/utilities/herokuapp-utils";

export class DisappearingElements implements DisappearingElementsOperations
{
    private readonly page: Page;
    private readonly linkDisappearingElements: Locator;
    private readonly titleDisappearingElements: Locator;

    constructor(page: any) {
        this.page = page;
        this.linkDisappearingElements = page.getByRole('link', { name: 'Disappearing Elements' });
        this.titleDisappearingElements = page.getByRole('heading', { name: 'Disappearing Elements' });
    }
    async verifyDisappearingElementsPageTitle(): Promise<void> {
        await expect(this.titleDisappearingElements).toBeVisible();
    }
    
    async clickDisappearingElementsLink(): Promise<void> {
        await this.linkDisappearingElements.click();
    }

    async openDisappearingElements(): Promise<void> {
        await expect(this.linkDisappearingElements).toBeVisible();
        
    }

    

    async verifyPageTitle(): Promise<void> {
         await expect(this.titleDisappearingElements).toBeVisible();
    }
}