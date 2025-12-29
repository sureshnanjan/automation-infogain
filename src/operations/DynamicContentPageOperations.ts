import type { Location, Page, Expect, Locator } from "@playwright/test";
/**
 * IDynamicContentPage defines interface for dynamic content 
 * exaple page from the-internet.herokuapp.com
 */

interface DynamicContentPageOperations {
    goto(): Promise<void>;
    gotoStaticVersion(): Promise<void>;
    isLoaded(expect: Expect): Promise<void>;
    enableStaticViaLink(): Promise<void>;
    getRowText(): Promise<string[]>;
    getImageSources(): Promise<string[]>;
    
}

 export type { DynamicContentPageOperations };