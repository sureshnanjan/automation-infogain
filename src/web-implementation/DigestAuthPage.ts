import { Page, Locator, expect } from '@playwright/test';

export class DigestAuthPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly successMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('h3');
        this.successMsg = page.locator(
            'text=Congratulations! You must have the proper credentials.'
        );
    }

    async verifyDigestAuthPage(): Promise<void> {
        await expect(this.heading).toHaveText('Digest Auth');

        await expect(this.successMsg).toBeVisible();
    }
}
