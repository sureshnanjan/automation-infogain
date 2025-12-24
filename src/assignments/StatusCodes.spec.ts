import { test, expect } from "@playwright/test";

test("Access herokuapp", async ({page}) => {
    // Navigate to the Status Codes page
    await page.goto("https://the-internet.herokuapp.com"); 
    // Verify the page title
    await expect(page).toHaveTitle("Welcome to the-internet");
    console.log("Successfully launched herokuapp and verified the title");
});

test("Verify Status Codes link available in web page", async ({page}) => {
    await expect(page.getByRole('link', { name: 'Status Codes' })).toBeVisible();
    console.log("Status Codes link is visible in the page");
});

test("Click on Status Codes link and verify the new page title", async ({page}) => {
    // Click on the Status Codes link
    await page.getByRole('link', { name: 'Status Codes' }).click();
    // Verify the new page title
    await expect(page).toHaveTitle(/Status Codes/);
    console.log("Navigated to Status Codes page and verified the title");
});

test("Verify the content of Status Codes page", async ({page}) => {
    // Check for the presence of specific text on the Status Codes page
    const content = await page.locator('h3').textContent();
    expect(content).toMatch(/Status Codes/);
    console.log("Verified the content of Status Codes page");
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