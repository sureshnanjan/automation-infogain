import { DynamicLoadingPageOperations } from "@src/operations/DynamicLoadingPageOperations";
import { type Page, type Locator, type Expect, expect } from "@playwright/test";
import { getHerokuAppUrl } from "@src/utilities/herokuapp-utils";
import { BasePage } from "./BasePage";
import { HerokuAppOperations } from "@src/operations/HerokuAppOperations";

/**
 * Author: Pavithra
 * Date: 24th Dec 2025
 * DynamicLoadingPage is the concrete implementation of DynamicLoadingPageOperations.
 */
export class DynamicLoadingPage {
  private page: Page;
  private readonly dynamicLoadingLink: Locator;
  private readonly subTitleSelector: Locator;
  private readonly description: Locator;
  private readonly linksList: Locator;
  private readonly example1Link: Locator;
  private readonly example2Link: Locator;
  private readonly startBtn: Locator;
  private readonly finish: Locator;

  constructor(page: Page) {
    this.page = page;
    this.subTitleSelector = page.locator("h3", {
      hasText: "Dynamically Loaded Page Elements",
    });
    this.dynamicLoadingLink = page.locator("//a[text()='Dynamic Loading']");
    this.description = page.locator("(//div[@class='example']/p)[1]");
    this.linksList = page.locator("//div[@class='example']/a");
    this.example1Link = page.locator("(//div[@class='example']/a)[1]");
    this.example2Link = page.locator("(//div[@class='example']/a)[2]");
    this.startBtn = page.getByRole("button", { name: "Start" });
    this.finish = page.locator("//h4[text()='Hello World!']");
  }

  async gotoDynamicLoadingLink() {
    await this.page.goto(getHerokuAppUrl());
    await this.dynamicLoadingLink.click();
    await expect(this.subTitleSelector).toBeVisible();
  }

  async getTitle(): Promise<string | null> {
    await expect(this.subTitleSelector).toBeVisible();
    return this.subTitleSelector.innerText();
  }
  async getDescription(): Promise<string | null> {
    await expect(this.description).toBeVisible();
    return this.description.innerText();
  }

  async getLinks(): Promise<string[]> {
    const texts = await this.linksList.allTextContents();
    return texts;
  }

  async clickLink1(): Promise<void> {
    await expect(this.example1Link).toBeVisible();
    await this.example1Link.click();
  }

  async clickLink2(): Promise<void> {
    await expect(this.example2Link).toBeVisible();
    await this.example2Link.click();
  }
  async clickStartButton(): Promise<void> {
    await expect(this.startBtn).toBeVisible();
    await this.startBtn.click();
  }

  async getResult(): Promise<string | null> {
    return (await this.finish.innerText()).trim();
  }
}
