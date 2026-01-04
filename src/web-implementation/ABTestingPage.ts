// import { ABTestingOperations } from "@src/operations/ABTestingOperations";
// import { BasePage } from "./BasePage";

// export class ABTestingPage extends BasePage implements ABTestingOperations {
//     //private page: any; // Assuming you have a page object (e.g., Playwright Page)

//     constructor(page: any) {
//         super()
//         //this.page = page;
//     }

//     async getTitle(): Promise<string | null> {
//         try {
//             return await this.page.locator('[data-testid="ab-test-title"]').textContent();
//         } catch {
//             return null;
//         }
//     }

//     async getDescription(): Promise<string | null> {
//         try {
//             return await this.page.locator('[data-testid="ab-test-description"]').textContent();
//         } catch {
//             return null;
//         }
//     }

//     async disableABTesting(): Promise<void> {
//         await this.page.locator('[data-testid="disable-ab-testing"]').click();
//         await this.page.waitForLoadState('networkidle');
//     }

//     async enableABTesting(): Promise<void> {
//         await this.page.locator('[data-testid="enable-ab-testing"]').click();
//         await this.page.waitForLoadState('networkidle');
//     }
// }

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
        this.abTestingVarientLink = this.page.locator('//*[@id="content"]/ul/li[1]/a');
        this.abTestingHeaderSelector = this.page.locator('h3');
        this.variantContentSelector = this.page.locator('#content > div:nth-child(1)');
        this.footerSelector = this.page.locator('footer');
    }
    async accessABTestingVariant(): Promise<void> {
        await this.abTestingVarientLink.click();
    }
    async getABTestingHeader(): Promise<string|null> {
        return this.abTestingHeaderSelector.textContent();
    }
    async getABTestingBodyContent(): Promise<string|null> {
        const validateABTestingBodyContentContent = await this.variantContentSelector.textContent();
        return validateABTestingBodyContentContent;
    }
    async getABTestingFooterContent(): Promise<string|null> {
        const footer = await this.footerSelector.textContent();
        return footer;
    }
}
