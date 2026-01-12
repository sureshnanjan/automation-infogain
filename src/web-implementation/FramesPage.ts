import { Page, Locator } from '@playwright/test';
import { FramesPageOperations } from '@src/operations/FramesOperations';

export class FramesPage {
  private readonly page: Page;

  readonly pageTitle: Locator;
  readonly nestedFramesLink: Locator;
  readonly iFrameLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('h3');
    this.nestedFramesLink = page.locator('a[href="/nested_frames"]');
    this.iFrameLink = page.locator('a[href="/iframe"]');
  }

  async open(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/frames');
  }
}