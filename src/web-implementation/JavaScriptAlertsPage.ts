import { Page, expect } from '@playwright/test';
import { JavaScriptAlertsOperations } from '@src/operations/JavaScriptAlertsOperations';

/**
 * Page Object for JavaScript Alerts page.
 * Handles Alerts, Confirms, and Prompts.
 */
export class JavaScriptAlerts implements JavaScriptAlertsOperations {

  constructor(private page: Page) {}

  /** Clicks JS Alert and accepts it */
  async acceptJsAlert(expectedMessage: string): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toBe(expectedMessage);
      await dialog.accept();
    });
    await this.page.getByRole('button', { name: 'Click for JS Alert' }).click();
  }

  /** Clicks JS Confirm and accepts (OK) */
  async acceptJsConfirm(expectedMessage: string): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toBe(expectedMessage);
      await dialog.accept();
    });
    await this.page.getByRole('button', { name: 'Click for JS Confirm' }).click();
  }

  /** Clicks JS Confirm and cancels */
  async cancelJsConfirm(expectedMessage: string): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toBe(expectedMessage);
      await dialog.dismiss();
    });
    await this.page.getByRole('button', { name: 'Click for JS Confirm' }).click();
  }

  /** Clicks JS Prompt, enters text, and accepts */
  async acceptJsPrompt(expectedMessage: string, inputText: string): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toBe(expectedMessage);
      await dialog.accept(inputText);
    });
    await this.page.getByRole('button', { name: 'Click for JS prompt' }).click();
  }

  /** Clicks JS Prompt and cancels */
  async cancelJsPrompt(expectedMessage: string): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toBe(expectedMessage);
      await dialog.dismiss();
    });
    await this.page.getByRole('button', { name: 'Click for JS prompt' }).click();
  }

  /** Returns the result text displayed on the page */
  async getResultText(): Promise<string | null> {
    return this.page.locator('#result').textContent();
  }
}
