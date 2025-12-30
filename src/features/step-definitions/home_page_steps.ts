import { HomePageOperations } from "@src/operations/HomePageOperations";
import { getHerokuApp } from "@src/utilities/herokuapp-utils";
import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(); // Decorators
let homePage: HomePageOperations;
let actualResult: string | null;

Given("User Visits HomePage", async ({ page }) => {
  // Step: Given User Visits HomePage
  // From: src\features\home_page.feature:5:1
  homePage = await getHerokuApp(page);
});

When("User Observes Title", async ({}) => {
  // Step: When User Observes Title
  // From: src\features\home_page.feature:6:1
  actualResult = await homePage.getTitle();
});

Then("title should match {string}", async ({}, arg) => {
  // Step: Then title should match "Welcome to the-Internet"
  // From: src\features\home_page.feature:7:1
  expect(actualResult).toEqual(arg);
});

When("User Observes Subtitle", async ({}) => {
  // Step: When User Observes Subtitle
  // From: src\features\home_page.feature:11:1
  actualResult = await homePage.getSubTitle();
});

Then("Subtitle should match {string}", async ({}, arg: string) => {
  // Step: Then Subtitle should match "Available Examples"
  // From: src\features\home_page.feature:12:1
  expect(actualResult).toEqual(arg);
});
