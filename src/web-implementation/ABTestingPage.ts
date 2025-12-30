import { ABTestingOperations } from "@src/operations/ABTestingOperations";
import { BasePage } from "./BasePage";

export class ABTestingPage extends BasePage implements ABTestingOperations {
    //private page: any; // Assuming you have a page object (e.g., Playwright Page)

    constructor(page: any) {
        super()
        //this.page = page;
    }

    async getTitle(): Promise<string | null> {
        try {
            return await this.page.locator('[data-testid="ab-test-title"]').textContent();
        } catch {
            return null;
        }
    }

    async getDescription(): Promise<string | null> {
        try {
            return await this.page.locator('[data-testid="ab-test-description"]').textContent();
        } catch {
            return null;
        }
    }

    async disableABTesting(): Promise<void> {
        await this.page.locator('[data-testid="disable-ab-testing"]').click();
        await this.page.waitForLoadState('networkidle');
    }

    async enableABTesting(): Promise<void> {
        await this.page.locator('[data-testid="enable-ab-testing"]').click();
        await this.page.waitForLoadState('networkidle');
    }
}