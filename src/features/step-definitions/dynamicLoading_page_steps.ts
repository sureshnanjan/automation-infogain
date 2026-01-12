import { getHerokuApp } from "@src/utilities/herokuapp-utils";
import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { DynamicLoadingPage } from "@src/web-implementation/DynamicLoadingPage";
import { DynamicLoadingPageOperations } from "@src/operations/DynamicLoadingPageOperations";
import { HomePageOperations } from "@src/operations/HomePageOperations";

const { Given, When, Then } = createBdd(); //
let homePage: HomePageOperations;
let dynamicLoadingPage: DynamicLoadingPageOperations;
let actualResult: string | null;

Given("User Visits HerokuApp site", async ({ page }) => {
  homePage = await getHerokuApp(page);
});

When("User clicks on Dynamic Loading Link", async ({ page }) => {
  const dynamicLoading = new DynamicLoadingPage(page);
  await dynamicLoading.gotoDynamicLoadingLink();
});

Then("User should be navigated to Dynamic Loading Page", async ({ page }) => {
  const dynamicLoading = new DynamicLoadingPage(page);
  actualResult = await dynamicLoading.getTitle();
});

Then("Title should match {string}", async ({}, arg: string) => {
  expect(actualResult).toEqual(arg);
});

Then("The page description should contain:", async ({ page }, desc: string) => {
  const dynamicLoading = new DynamicLoadingPage(page);
  const description = await dynamicLoading.getDescription();
  expect(description?.trim()).toEqual(desc.trim());
});

When("User clicks {string}", async ({ page }, arg: string) => {
  const dynamicLoading = new DynamicLoadingPage(page);
  if (arg === "Example 1: Element on page that is hidden") {
    await dynamicLoading.clickLink1();
  } else if (arg === "Example 2: Element rendered after the fact") {
    await dynamicLoading.clickLink2();
  } else {
    throw new Error(`Unknown example link: ${arg}`);
  }
});

When('User clicks the {string} button"', async ({ page }, arg: string) => {
  const dynamicLoading = new DynamicLoadingPage(page);
  await dynamicLoading.clickStartButton();
});

Then("User get text should be {string}", async ({ page }, arg: string) => {
  const dynamicLoadingPage = new DynamicLoadingPage(page);
  const result = await dynamicLoadingPage.getResult();
  expect(result).toEqual(arg);
});
