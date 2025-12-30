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
  // Step: Given User Visits HerokuApp site
  // From: src\features\dynamicLoading_page.feature:6:1
  homePage = await getHerokuApp(page);
});

When("User clicks on Dynamic Loading Link", async ({ page }) => {
  // Step: When User clicks on Dynamic Loading Link
  // From: src\features\dynamicLoading_page.feature:7:1
  const dynamicLoading = new DynamicLoadingPage(page);
  await dynamicLoading.gotoDynamicLoadingLink();
});

Then("User should be navigated to Dynamic Loading Page", async ({ page }) => {
  // Step: Then User should be navigated to Dynamic Loading Page
  // From: src\features\dynamicLoading_page.feature:8:
  const dynamicLoading = new DynamicLoadingPage(page);
  actualResult = await dynamicLoading.getTitle();
});

Then("Title should match {string}", async ({}, arg: string) => {
  // Step: And Title should match "Dynamic Loading"
  // From: src\features\dynamicLoading_page.feature:9:1
  expect(actualResult).toEqual(arg);
});

Then("The page description should contain:", async ({ page }, desc: string) => {
  // Step: And The page description should contain:
  // From: src\features\dynamicLoading_page.feature:13:5
  const dynamicLoading = new DynamicLoadingPage(page);
  const description = await dynamicLoading.getDescription();
  expect(description?.trim()).toEqual(desc.trim());
});

When("User clicks {string}", async ({ page }, arg: string) => {
  // Step: When User clicks "Example 1: Element on page that is hidden"
  // From: src\features\dynamicLoading_page.feature:15:5
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
  // Step: When User clicks the "Start" button"
  // From: src\features\dynamicLoading_page.feature:18:5
  const dynamicLoading = new DynamicLoadingPage(page);
  await dynamicLoading.clickStartButton();
});

Then("User get text should be {string}", async ({ page }, arg: string) => {
  // Step: Then User get text should be "Hello World!"
  // From: src\features\dynamicLoading_page.feature:16:5
  const dynamicLoadingPage = new DynamicLoadingPage(page);
  const result = await dynamicLoadingPage.getResult();
  expect(result).toEqual(arg);
});
