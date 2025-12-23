import type { Location, Page, Expect, Locator } from "@playwright/test";
/**
 * IDynamicContentPage defines interface for dynamic content 
 * exaple page from the-internet.herokuapp.com
 */

export interface IDynamicContentPage {
    readonly page: Page;
    readonly headerTitle: Locator;
    readonly staticLink: Locator;
    readonly contentRows: Locator;
    readonly imagesInRows: Locator;
    readonly textInRows: Locator;

    goto(): Promise<void>;
    gotoStaticVersion(): Promise<void>;
    isLoaded(expect: Expect): Promise<void>;
    enableStaticViaLink(): Promise<void>;
    getRowText(): Promise<string[]>;
    getImageSources(): Promise<string[]>;
    
}