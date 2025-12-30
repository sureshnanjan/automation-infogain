import test, { expect } from "@playwright/test";
import { DynamicLoadingPage } from "@src/web-implementation/DynamicLoadingPage";

/**
 * Author:Pavithra
 * Date: 24th Dec 2025
 * Dynamic Loading Page test scenarios.
 */

test("Verify Dynamic Loading Page Title", async ({ page }) => {
  const dynamicLoading = new DynamicLoadingPage(page);
  await dynamicLoading.gotoDynamicLoadingLink();
  const title = await dynamicLoading.getTitle();
  expect(title).toBe("Dynamically Loaded Page Elements");
});

test("Verify Dynamic Loading Page Description", async ({ page }) => {
  const dynamicLoading = new DynamicLoadingPage(page);
  await dynamicLoading.gotoDynamicLoadingLink();
  const description = await dynamicLoading.getDescription();
  expect(description).toBe(
    "It's common to see an action get triggered that returns a result dynamically. It does not rely on the page to reload or finish loading. The page automatically gets updated (e.g. hiding elements, showing elements, updating copy, etc) through the use of JavaScript.",
  );
});

test("Verify Dynamic Loading Page Links", async ({ page }) => {
  const dynamicLoading = new DynamicLoadingPage(page);
  await dynamicLoading.gotoDynamicLoadingLink();
  const links = await dynamicLoading.getLinks();
  expect(links).toEqual([
    "Example 1: Element on page that is hidden",
    "Example 2: Element rendered after the fact",
  ]);
});

test("Verify Dynamic Loading Page Example 1 Functionality", async ({
  page,
}) => {
  const dynamicLoading = new DynamicLoadingPage(page);
  await dynamicLoading.gotoDynamicLoadingLink();
  await dynamicLoading.clickLink1();
  const result = await dynamicLoading.getResult();
  expect(result).toBe("Hello World!");
});

test("Verify Dynamic Loading Page Example 2 Functionality", async ({
  page,
}) => {
  const dynamicLoading = new DynamicLoadingPage(page);
  await dynamicLoading.gotoDynamicLoadingLink();
  await dynamicLoading.clickLink2();
  const result = await dynamicLoading.getResult();
  expect(result).toBe("Hello World!");
});
