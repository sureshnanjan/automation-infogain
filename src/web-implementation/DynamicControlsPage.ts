import { Page, Locator, expect } from '@playwright/test';

export class DynamicControlsPage {

  private page: Page;

  // Locators

  private removeButton: Locator;

  private addButton: Locator;

  private checkbox: Locator;

  private message: Locator;

  private enableButton: Locator;

  private disableButton: Locator;

  private inputBox: Locator;

  constructor(page: Page) {

    this.page = page;

    // Checkbox section

    this.checkbox = page.locator('#checkbox');

    this.removeButton = page.locator('button', { hasText: 'Remove' });

    this.addButton = page.locator('button', { hasText: 'Add' });

    this.message = page.locator('#message');

    // Input section

    this.inputBox = page.locator('#input-example input');

    this.enableButton = page.locator('button', { hasText: 'Enable' });

    this.disableButton = page.locator('button', { hasText: 'Disable' });

  }

  async openDynamicControlsPage() {

    await this.page.goto('https://the-internet.herokuapp.com/dynamic_controls');

  }

  async removeCheckbox() {

    await this.removeButton.click();

    await expect(this.message).toHaveText("It's gone!");

    await expect(this.checkbox).toBeHidden();

  }

  async addCheckbox() {

    await this.addButton.click();

    await expect(this.message).toHaveText("It's back!");

    await expect(this.checkbox).toBeVisible();

  }

  async enableInput() {

    await this.enableButton.click();

    await expect(this.message).toHaveText("It's enabled!");

    await expect(this.inputBox).toBeEnabled();

  }

  async disableInput() {

    await this.disableButton.click();

    await expect(this.message).toHaveText("It's disabled!");

    await expect(this.inputBox).toBeDisabled();

  }

}
 