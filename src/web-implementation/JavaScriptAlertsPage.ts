import { Page } from '@playwright/test';
import { JavaScriptAlertsOperations } from '@src/operations/JavaScriptAlertsOperations';

export class JavaScriptAlerts implements JavaScriptAlertsOperations {

    constructor(private page: Page) {}

    async clickJsAlert(): Promise<void> {
        await this.page.getByRole('button', { name: 'Click for JS Alert' }).click();
    }

    async clickJsConfirm(): Promise<void> {
        await this.page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    }

    async clickJsPrompt(): Promise<void> {
        await this.page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    }

    async getResultText(): Promise<string | null> {
        return this.page.locator('#result').textContent();
    }
}
