import type { Location, Page, Expect, Locator } from "@playwright/test";
/**
 * IDynamicContentPage defines interface for dynamic content 
 * exaple page from the-internet.herokuapp.com
 */

interface DynamicContentPageOperations {
    goto(): Promise<void>;
    getTitle(): Promise<string|null>;
    gotoStaticVersion(): Promise<void>;
    isLoaded(): Promise<void>;
    enableStaticViaLink(): Promise<void>;
    getRowText(): Promise<string[]>;
    getImageSources(): Promise<string[]>;
    validateRowsHaveText(): Promise<void>;
    validateImagesHaveCorrectPaths(pathSnippet: string): Promise<void>;
    findUnchangedIndexes(firstRunTexts: string[], secondRunTexts: string[]): any; 
}

 export type { DynamicContentPageOperations };