import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class ExitIntentPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly description: Locator;
  readonly modal: Locator;
  readonly modalTitle: Locator;
  readonly modalBody: Locator;
  readonly modalClose: Locator;

  constructor(page: Page) {
    this.page = page;
     this.heading = page.locator('.example h3');
    this.description = page.locator('.example p');
    this.modal = page.locator('#ouibounce-modal');
    this.modalTitle = page.locator('#ouibounce-modal .modal-title h3');
    this.modalBody = page.locator('#ouibounce-modal .modal-body p');
    this.modalClose = page.locator('#ouibounce-modal .modal-footer p');
  }

  async validateExitIntentPageContent() {
    await expect(this.heading).toHaveText('Exit Intent');
    await expect(this.description)
      .toHaveText('Mouse out of the viewport pane and see a modal window appear.');
  }

  async triggerExitIntent() {
    // Move mouse out of viewport to trigger exit intent
    await this.page.mouse.move(0, 0);
    await this.page.mouse.move(-10, -10);
  }

  async validateExitIntentModal() {
    await expect(this.modal).toBeVisible();
    await expect(this.modalTitle).toHaveText('This is a modal window');
    await expect(this.modalBody).toContainText('It\'s commonly used to encourage a user');
  }

  async closeModal() {
    await this.modalClose.click();
    await expect(this.modal).toBeHidden();
  }
}
