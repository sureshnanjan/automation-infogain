import { BrokenImageOperations } from '../operations/BrokenImageOperations';
import { HerokuAppOperations } from '../operations/HerokuAppOperations';
import { HerokuApp } from './HerokuApp';    
import {Page, Locator} from '@playwright/test';
export class BrokenImage implements BrokenImageOperations {
    private readonly page: Page;
    private readonly imageSelector: Locator;
    private readonly titelSelector: Locator;
    constructor(page: Page) {
        this.page = page;
        this.imageSelector = page.locator('img'); // Selector for all images on the page
        this.titelSelector = page.locator('h3'); // Selector for the title
    }

    getTitle(): Promise<string | null> {
        return this.titelSelector.textContent();
    }
    getImageiDetails(imagenumber: number): Promise<{ url: string; statusCode: number; }[]> {
        this.imageSelector.nth(imagenumber - 1).getAttribute('src').then(async(url) => {
            const response = await this.page.request.get(url!);
            const statusCode = response.status();
            return [{ url: url!, statusCode: statusCode }];
        });
        return Promise.resolve([]);
    }
}
    