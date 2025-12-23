import test, { expect } from "@playwright/test";

test("Herokuapp Application", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await expect(page).toHaveTitle("Welcome to the-internet");
  console.log("Herokuapp Application is successfully loaded");
});

test("Verify dynamic loading link available in web page", async ({ page }) => {
  await expect(
    page.getByRole("link", { name: "Dynamic Loading" }),
  ).toBeVisible();
  console.log("Dynamic loading link is available in web page");
});

test("Click on dynamic loading link and verify", async ({ page }) => {
  await page.getByRole("link", { name: "Dynamic Loading" }).click();
  // Verify the new page title
  await expect(page.getByRole("heading", { name: "Dynamically Loaded Page" }))
    .toBeVisible;
  await expect(page).toHaveTitle("Dynamically Loaded Page Elements");
  console.log("Dynamically loaxded page is loading successfully");
});
