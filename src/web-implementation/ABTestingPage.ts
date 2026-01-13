import {ABTestingOperations} from "../operations/ABTestingOperations";
import {Page, Locator} from '@playwright/test';

export class ABTestingPage implements ABTestingOperations {
    private readonly page: Page;
    private readonly abTestingVarientLink:Locator;
    private readonly abTestingHeaderSelector:Locator;
    private readonly variantContentSelector:Locator;
    private readonly footerSelector:Locator;

    constructor(page: any) {
        this.page = page;
        this.abTestingVarientLink = this.page.locator('a').first();
        this.abTestingHeaderSelector = this.page.locator('h3');
        this.variantContentSelector = this.page.locator('#content > div:nth-child(1)');
        this.footerSelector = this.page.locator('//div[@id="page-footer"]/div/div');
    }
    async accessABTestingVariant(): Promise<void> {
        // Wait for page to load before proceeding
        await this.page.waitForLoadState('domcontentloaded');
    }
    async getABTestingHeader(): Promise<string|null> {
        await this.page.waitForLoadState('domcontentloaded');
        return this.abTestingHeaderSelector.textContent();
    }
    async getABTestingBodyContent(): Promise<string|null> {
        await this.page.waitForLoadState('domcontentloaded');
        const validateABTestingBodyContentContent = await this.variantContentSelector.textContent();
        return validateABTestingBodyContentContent;
    }
    async getABTestingFooterContent(): Promise<string|null> {
        await this.page.waitForLoadState('domcontentloaded');
        const footer = await this.footerSelector.textContent();
        return footer;
    }
    async enableABTesting(variantId: string): Promise<void> {
        await this.page.context().clearCookies();
        await this.page.context().addCookies([{
            name: 'ab_testing_variant',
            value: variantId,
            domain: 'the-internet.herokuapp.com',   
    
    }]);
    }
    async disableABTesting(variantId: string): Promise<void> {
        await this.page.context().clearCookies();
    }   
}
