import { Page, expect } from "@playwright/test";
import { createBdd, DataTable } from "playwright-bdd";

import { getHerokuApp } from "@src/utilities/herokuapp-utils";
import { HomePageOperations } from "@src/operations/HomePageOperations";
import { FramesPageOperations } from "@src/operations/FramesOperations";

const { Given, When, Then } = createBdd();

/* ---------- Shared State ---------- */
let page: Page;
let homePage: HomePageOperations;
let framesPage!: FramesPageOperations;
let actualTitle: string | null;
let examples: string[] | null;

/* -------------------- GIVEN -------------------- */

Given("the user is on the Home page", async function () {
  page = this.page as Page;
  homePage = await getHerokuApp(page);
});

/* -------------------- WHEN -------------------- */

When("the user checks the Home page title", async function () {
  actualTitle = await homePage.getTitle();
});

When(
  "the user navigates to the {string} page",
  async function ({}, pageName: string) {
    framesPage = await homePage.gotoExample(pageName) as FramesPageOperations;
  }
);  

When("the user opens the Nested Frames page", async function () {
  await framesPage.getNestedFramesLink();
});

When("the user opens the iFrame page", async function () {
  await framesPage.getIFrameLink();

  // safer than optional chaining in tests
  if (framesPage.closePopupIfPresent) {
    await framesPage.closePopupIfPresent();
  }
});

/* -------------------- THEN -------------------- */

Then(
  "the Home page title should be {string}",
  async function ({}, expectedTitle: string) {
    expect(actualTitle).toBe(expectedTitle);
  }
);

Then(
  "the page title should be {string}",
  async ({}, expectedTitle: string) => {
    const title = await framesPage.getTitle();
    expect(title).toBe(expectedTitle);
  }
);

Then(
  "the page title should contain {string}",
  async ({}, expectedText: string) => {
    const title = await framesPage.getTitle();
    expect(title).toContain(expectedText);
  }
);

Then(
  "the available frame examples should include:",
  async function ({}, dataTable: DataTable) {
    examples = await framesPage.getAvailableExamples();
    expect(examples).not.toBeNull();

    const expectedExamples = dataTable.rows().flat();
    expectedExamples.forEach(example => {
      expect(examples!).toContain(example);
    });
  }
);

Then(
  "the top middle frame text should be {string}",
  async ({}, expectedText: string) => {
    const text = await framesPage.getTopMiddle();
    expect(text).toBe(expectedText);
  }
);

Then(
  "the top left frame text should be {string}",
  async ({}, expectedText: string) => {
    const text = await framesPage.getTopLeft();
    expect(text).toBe(expectedText);
  }
);

Then(
  "the top right frame text should be {string}",
  async ({}, expectedText: string) => {
    const text = await framesPage.getTopRight();
    expect(text).toBe(expectedText);
  }
);

Then(
  "the bottom frame text should be {string}",
  async ({}, expectedText: string) => {
    const text = await framesPage.getBottom();
    expect(text).toBe(expectedText);
  }
);
