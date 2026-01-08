import { Page } from '@playwright/test';
import { JavaScriptAlertsOperations } from '@src/operations/JavaScriptAlertsOperations';

/**
* This class implements {@link JavaScriptAlertsOperations}
* and provides concrete implementations for alert operations.
*/

export class JavaScriptAlerts implements JavaScriptAlertsOperations {

/**
* Creates an instance of {@link JavaScriptAlerts}.
*
* @param page Playwright Page instance used to perform UI actions
*/

constructor(private page: Page) {}

/**
* Clicks on the "JS Alert" button to trigger
* a simple JavaScript alert.
*
* @returns Promise<void> Resolves when the click action is completed
*/
async clickJsAlert(): Promise<void> {
await this.page.getByRole('button', { name: 'Click for JS Alert' }).click();
}

/**
* Clicks on the "JS Confirm" button to trigger
* a JavaScript confirmation dialog.
*
* @returns Promise<void> Resolves when the click action is completed
*/

async clickJsConfirm(): Promise<void> {
await this.page.getByRole('button', { name: 'Click for JS Confirm' }).click();
}

/**
* Clicks on the "JS Prompt" button to trigger
* a JavaScript prompt dialog.
*
* @returns Promise<void> Resolves when the click action is completed
*/

async clickJsPrompt(): Promise<void> {
await this.page.getByRole('button', { name: 'Click for JS prompt' }).click();
}
/**
* Retrieves the result text displayed after
* interacting with JavaScript alerts.
*
* @returns Promise<string | null>
* The result message shown on the page,
* or null if the element is not found
*/

async getResultText(): Promise<string | null> {
return this.page.locator('#result').textContent();
}
}
