import { test, expect } from "@playwright/test";

test("Access herokuapp", async ({page}) => {
    // Navigate to the AB Testing page
    await page.goto("https://the-internet.herokuapp.com"); 
    // Verify the page title
    await expect(page).toHaveTitle("Welcome to the-internet");
    console.log("Successfully accessed herokuapp and verified the title");
});

test("Verify A/B Testing link available in web page", async ({page}) => {
    await expect(page.getByRole('link', { name: 'A/B Testing' })).toBeVisible();
    console.log("A/B Testing link is visible on the page");
});

test("Click on A/B Testing link and verify the new page title", async ({page}) => {
    // Click on the A/B Testing link
    await page.getByRole('link', { name: 'A/B Testing' }).click();
    // Verify the new page title
    await expect(page).toHaveTitle(/A\/B Testing/);
    console.log("Navigated to A/B Testing page and verified the title");
});

test("Verify the content of A/B Testing page", async ({page}) => {
    // Check for the presence of specific text on the A/B Testing page
    const content = await page.locator('h3').textContent();
    expect(content).toMatch(/A\/B Testing/);
    console.log("Verified the content of A/B Testing page");
}); 

test("Navigate back to home page and verify title", async ({page}) => {
    // Navigate back to the home page
    await page.goBack();
    // Verify the home page title
    await expect(page).toHaveTitle("Welcome to the-internet");
    console.log("Navigated back to home page and verified the title");
});

test("close the browser", async ({page}) => {
    await page.close();
    console.log("Browser closed successfully");
});