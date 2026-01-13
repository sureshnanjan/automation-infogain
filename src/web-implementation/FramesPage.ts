import { Page, Locator } from '@playwright/test';
import { FramesPageOperations } from '@src/operations/FramesOperations';
import { HerokuAppOperations } from '@src/operations/HerokuAppOperations';

export class FramesPage implements FramesPageOperations {
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
  async closePopupIfPresent(): Promise<void> {
    const closeButton = this.page.locator('button:has-text("Close"), [aria-label="Close"]');
    if (await closeButton.isVisible({ timeout: 1000 }).catch(() => false)) {
      await closeButton.click();
    }
  }
  async getRepoURL(): Promise<string> {
    // Assuming the repo URL is displayed in a specific element on the page
    const repoLocator = this.page.locator('selector-for-repo-url'); // Replace with the actual selector
    const repoURL = await repoLocator.getAttribute('href');
    return repoURL || '';
  }
  getFooterInfo(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  async getNestedFramesLink(): Promise<void> {
    await this.nestedFramesLink.click();
  }
  async getIFrameLink(): Promise<void> {
    await this.iFrameLink.click();
  }
  
   async getTitle(): Promise<string | null> {
    return await this.pageTitle.textContent();
  }
  
  async getAvailableExamples(): Promise<string[] | null> {
    const examples = await this.page.locator('ul li a').allTextContents();
    return examples;
  }
  
 async getFrameBodyTextByName(name: string): Promise<string> {
    const frame = this.page.frame({ name });
    if (!frame) throw new Error(`Frame with name '${name}' not found`);
    const body = frame.locator('body');
    return (await body.innerText()).trim();
  }

  async getTopLeft(): Promise<string> {
    return this.getFrameBodyTextByName('frame-left');
  }

  async getTopMiddle(): Promise<string> {
    return this.getFrameBodyTextByName('frame-middle');
  }

  async getTopRight(): Promise<string> {
    return this.getFrameBodyTextByName('frame-right');
  }

  async getBottom(): Promise<string> {
    return this.getFrameBodyTextByName('frame-bottom');
  }
}

 

