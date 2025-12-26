import { test, expect } from '@playwright/test';
import { HomePageOperations } from '@src/operations/HomePageOperations';
import { ABTestingPage } from '@src/web-implementation/ABTestingPage';
import { getHerokuApp } from '@src/utilities/herokuapp-utils';
test("Verify Home Page Title", async ({ page }) => {
 const homePage: HomePageOperations = await getHerokuApp(page);
 const expectedTitle = "Welcome to the-internet";
 const title = await homePage.getTitle();
 expect(title).toBe(expectedTitle);
});
test("Verify Home Page SubTitle", async ({ page }) => {
 const homePage: HomePageOperations = await getHerokuApp(page);
 const expectedSubTitle = "Available Examples";
 const subTitle = await homePage.getSubTitle();
 expect(subTitle).toBe(expectedSubTitle);
});
test("Verify Available Examples count on Home Page", async ({ page }) => {
 const homePage: HomePageOperations = await getHerokuApp(page);
 const examples = await homePage.getAvailableExamples();
 expect(examples).not.toBeNull();
 expect(examples?.length).toBe(44);
});
test("Navigate to A/B Testing page from Home Page", async ({ page }) => {
 const homePage: HomePageOperations = await getHerokuApp(page);
 const abTestPage = await homePage.gotoExample("A/B Testing") as ABTestingPage;
 const title = await abTestPage.getTitle();
 expect(title).toContain("A/B Test");
});
test("Authentication on Basic Auth page works with correct credentials", async ({ page }) => {
 const username = "admin";
 const password = "admin";
 const expectedMessage = "Congratulations! You must have the proper credentials.";
 const homePage: HomePageOperations = await getHerokuApp(page);
 const basicAuthPage = await homePage.gotoExample("Basic Auth") as ABTestingPage;
 await basicAuthPage.doLogin(username, password);
 const statusMessage = await basicAuthPage.getStatusMessage();
 expect(statusMessage).toContain(expectedMessage);
});