import { DisappearingElementsOperations } from "@src/operations/DisappearingElementsOperations";
import {Page, Locator, expect} from '@playwright/test'; 

/**
 * Page Object Model for Disappearing Elements Page
 * This class contains all locators and actions related to the page
 */

export class DisappearingElements implements DisappearingElementsOperations
{
     // Page locators
    private readonly page: Page;
    private readonly headerDisappearingElements: Locator;
    private readonly description: Locator;
    private readonly menuLinks: Locator;
    private readonly homeLink: Locator;
    private readonly aboutLink: Locator;
    private readonly contactLink: Locator;
    private readonly portfolioLink: Locator;
    private readonly galleryLink: Locator;

    constructor(page: any) {
        this.page = page;
        this.headerDisappearingElements =this.page.locator('h3');// Page title heading
        this.description=this.page.locator('//p');// Description below the header
        this.menuLinks = page.locator('ul li a');// All menu links

        this.homeLink = page.locator('a[href="/"]');
        this.aboutLink = page.locator('a[href="/about/"]');
        this.contactLink = page.locator('a[href="/contact-us/"]');
        this.portfolioLink = page.locator('a[href="/portfolio/"]');
        this.galleryLink = page.locator('a[href="/gallery/"]');
    }
   
    /**
     * Reloads the current page
     */
    async refreshPage(): Promise<void> {
        await this.page.reload();
    }

    /**
     * Returns all menu names available on the page
     */
    async getMenuTexts(): Promise<string[]> {
        const menuTexts = await this.menuLinks.allTextContents();
        return menuTexts;
    }

    /**
     * Checks whether a given menu name is present or not
     * @param menuName Menu name to be checked
     */
    async isMenuPresent(menuName: string): Promise<boolean> {
        const menuTexts = (await this.getMenuTexts())
            .map(text => text.trim());
        return menuTexts.includes(menuName);
    }

    /**
     * 
     * @returns  The main page header text
     */
     async getHeaderText(): Promise<string> {
    return (await this.headerDisappearingElements.textContent())?.trim() || '';
  }

  /**
   * 
   * @returns The description text shown below the header
   */
  async getDescriptionText(): Promise<string> {
    return (await this.description.textContent())?.trim() || '';
  }

}
