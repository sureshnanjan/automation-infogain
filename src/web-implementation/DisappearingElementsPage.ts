import { DisappearingElementsOperations } from "@src/operations/DisappearingElementsOperations";
import {Page, Locator, expect} from '@playwright/test'; 

export class DisappearingElements implements DisappearingElementsOperations
{
    private readonly page: Page;
    private readonly linkDisappearingElements: Locator;
    private readonly titleDisappearingElements: Locator;
    private readonly menuLinks: Locator;
    private readonly homeLink: Locator;
    private readonly aboutLink: Locator;
    private readonly contactLink: Locator;
    private readonly portfolioLink: Locator;
    private readonly galleryLink: Locator;

    constructor(page: any) {
        this.page = page;
        this.linkDisappearingElements = page.getByRole('link', { name: 'Disappearing Elements' });
        this.titleDisappearingElements = page.getByRole('heading', { name: 'Disappearing Elements' });
        this.menuLinks = page.locator('ul li a');

        this.homeLink = page.locator('a[href="/"]');
        this.aboutLink = page.locator('a[href="/about/"]');
        this.contactLink = page.locator('a[href="/contact-us/"]');
        this.portfolioLink = page.locator('a[href="/portfolio/"]');
        this.galleryLink = page.locator('a[href="/gallery/"]');
    }
    async openDisappearingElements(): Promise<void> {
        await this.page.goto('http://the-internet.herokuapp.com/');
    }
    async clickDisappearingElementsLink(): Promise<void> {
        await this.linkDisappearingElements.click();
    }
    async verifyDisappearingElementsPageTitle(): Promise<void> {
        await expect(this.titleDisappearingElements).toBeVisible();
    }
    async verifyMandatoryLinksVisible(): Promise<void> {
        await expect(this.homeLink).toBeVisible();
        await expect(this.aboutLink).toBeVisible();
        await expect(this.contactLink).toBeVisible();
        await expect(this.portfolioLink).toBeVisible();
    }
    async refreshPage(): Promise<void> {
        await this.page.reload();
    }  
    async verifyMenuCount(expectedCount: number): Promise<void> {
        const actualCount = await this.menuLinks.count();
        expect(actualCount).toBe(expectedCount);
    }
        

}
