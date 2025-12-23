import { Expect, expect, Locator, Page } from "@playwright/test";
import type { IDynamicContentPage } from "@src/operations/IDynamicContentPage";

/**
 * DynamicContentPage is the concrete implementation of IDynamicContentPage.
 */

export class DynamicContentPage implements IDynamicContentPage {
    readonly page: Page;

    readonly headerTitle: Locator;
    readonly staticLink: Locator;
    readonly contentRows: Locator;
    readonly imagesInRows: Locator;
    readonly textInRows: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerTitle = page.locator('h3', {hasText: 'Dynamic Content'});
        this.staticLink = page.getByRole('link', {name: 'click here'});
        this.contentRows = page.locator('xpath= //div[@id="content" and contains(@class, "large-10")]/*[@class="row"]')
        this.imagesInRows = page.locator('img');
        this.textInRows = this.contentRows.locator('.large-10');

    }

        async goto(): Promise<void> {
            await this.page.goto('/dynamic_content');
        }
       async gotoStaticVersion(): Promise<void> {
            await this.page.goto('/dynamic_content?with_content=static');
        }

        async isLoaded(expect: Expect): Promise<void> {
            await expect(this.headerTitle).toBeVisible();
            await expect(this.contentRows).toHaveCount(3);
        }

        async enableStaticViaLink(): Promise<void> {
            await this,this.staticLink.click();
        }
            
        async getRowText(): Promise<string[]> {
            const count = await this.textInRows.count();
            const values: string[] = [];
            for(let i = 0; i < count; i++) {
                values.push((await this.textInRows.nth(i).innerText()).trim());
            }
            return values;
        }

        async getImageSources(): Promise<string[]> {
            const count = await this.imagesInRows.count();
            const values: string[] = [];
            for(let i = 0; i < count; i++) {
                const src = await this.imagesInRows.nth(i).getAttribute('src');
                if(src) values.push(src);
            }
            return values;
        }
}