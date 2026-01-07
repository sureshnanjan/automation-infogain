import { Page, Locator, expect } from '@playwright/test';

import { DynamicControlsPageOperations } from '@src/operations/DynamicControlsPageOperations';

export class DynamicControlsPage implements DynamicControlsPageOperations {

  private page: Page;
  private checkbox: Locator;
  private removeButton: Locator;
  private addButton: Locator;
  private message: Locator;
  private inputBox: Locator;
  private enableButton: Locator;
  private disableButton: Locator;

  constructor(page: Page) {

    this.page = page;
    this.checkbox = page.locator('#checkbox');
    this.removeButton = page.locator('button', { hasText: 'Remove' });
    this.addButton = page.locator('button', { hasText: 'Add' });
    this.message = page.locator('#message');
    this.inputBox = page.locator('#input-example input');
    this.enableButton = page.locator('button', { hasText: 'Enable' });
    this.disableButton = page.locator('button', { hasText: 'Disable' });
  }

  // REQUIRED by interface

  async goto(): Promise<void> {

    await this.page.goto('https://the-internet.herokuapp.com/dynamic_controls');
  }

  async isLoaded(): Promise<void> {

    await expect(this.page).toHaveURL(/dynamic_controls/);
  }

  async getTitle(): Promise<string | null> {

    return this.page.title();
  }

  async getMessageText(): Promise<string> {

    return this.message.textContent() as Promise<string>;
  }

  async removeCheckbox(): Promise<void> {

    await this.removeButton.click();
    await expect(this.message).toHaveText("It's gone!");
  }

  async addCheckbox(): Promise<void> {

    await this.addButton.click();
    await expect(this.message).toHaveText("It's back!");
  }

  async enableInput(): Promise<void> {

    await this.enableButton.click();
    await expect(this.message).toHaveText("It's enabled!");
    await expect(this.inputBox).toBeEnabled();
  }

  async disableInput(): Promise<void> {

    await this.disableButton.click();
    await expect(this.message).toHaveText("It's disabled!");
    await expect(this.inputBox).toBeDisabled();
  }
}
