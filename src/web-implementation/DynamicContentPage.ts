import { Expect, expect, Locator, Page } from "@playwright/test";
import { DynamicContentPageOperations } from "@src/operations/DynamicContentPageOperations";
import { getHerokuAppUrl } from "@src/utilities/herokuapp-utils";

/**
 * DynamicContentPage is the concrete implementation of IDynamicContentPage.
 */

export class DynamicContentPage implements DynamicContentPageOperations {
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
        this.imagesInRows = this.contentRows.locator('img');
        this.textInRows = this.contentRows.locator('.large-10');

    }

        // Only Holds good in Async Libraries
        static async create(page:Page) {
            const instance = new DynamicContentPage(page);
            // Do async initialization here
            await instance.navigate();
            return instance;
            }
        
        async navigate(): Promise<void> {
            await this.page.goto(`${getHerokuAppUrl()}dynamic_content`);
        }

        async goto(): Promise<void> {
            await this.page.goto(`${getHerokuAppUrl()}dynamic_content`);
        }

        async getTitle(): Promise<string|null> {
            // Implementation to get the title from the Dynamic Content page
            return this.headerTitle.textContent();
        } 
       async gotoStaticVersion(): Promise<void> {
            await this.page.goto(`${getHerokuAppUrl()}dynamic_content?with_content=static`);
        }

        async isLoaded(): Promise<void> {
            await expect(this.headerTitle).toBeVisible();
            await expect(this.contentRows).toHaveCount(3, {timeout: 5000});
        }

        async enableStaticViaLink(): Promise<void> {
            await this.staticLink.click();
            await this.page.waitForURL(/.*with_content=static/);
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

        async validateRowsHaveText(): Promise<void> {
            const texts = await this.getRowText();
            for (const t of texts) {
                expect(t.length, 'Row text should not be empty').toBeGreaterThan(0);
            }
        }

        async validateImagesHaveCorrectPaths(pathSnippet: string): Promise<void> {
            const images = await this.getImageSources();
            for (const src of images) {
                expect(src, `Image source should contain ${pathSnippet}`).toContain(pathSnippet);
            }
        }

     /**
     * Compares two lists of strings and returns the indexes where 
     * the content remains identical.
     */
    public findUnchangedIndexes(before: string[], after: string[]): number[] {
        const unchanged: number[] = [];
        // Use a loop here instead of the test file
        for (let i = 0; i < before.length; i++) {
            if (before[i] === after[i]) {
                unchanged.push(i);
            }
        }
        return unchanged;
    }
}