import { createBdd, DataTable } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { HomePageOperations } from '@src/operations/HomePageOperations';
import { DisappearingElementsOperations } from '@src/operations/DisappearingElementsOperations';
import { getHerokuApp } from '@src/utilities/herokuapp-utils';
import { getDisappearingElementsApp } from '@src/utilities/dsiappearingElements-utils';

const { Given, When, Then } = createBdd();

let homePage: HomePageOperations;
let disappearingPage: DisappearingElementsOperations;
let menus: string[];
let isGalleryPresent = false;

/* ---------------- Home Page Steps ---------------- */

Given('user opens the Home page', async ({ page }) => {
  homePage = await getHerokuApp(page);
});

Then('page title should be {string}', async ({}, expectedTitle: string) => {
  const title = await homePage.getTitle();
  expect(title).toBe(expectedTitle);
});

/* -------- Disappearing Elements Page Steps -------- */

Given('user opens the Disappearing Elements page', async ({ page }) => {
  disappearingPage = await getDisappearingElementsApp(page);
});

Then('header text should be {string}', async ({}, expectedHeader: string) => {
  const header = await disappearingPage.getHeaderText();
  expect(header).toBe(expectedHeader);
});

Then(
  'description text should contain {string}',
  async ({}, expectedText: string) => {
    const description = await disappearingPage.getDescriptionText();
    expect(description).toContain(expectedText);
  }
);

When('user reads the menu list', async () => {
  menus = await disappearingPage.getMenuTexts();
});

Then(
  'following menus should be present',
  async ({}, table: DataTable) => {
    const expectedMenus = table.raw().flat();
    for (const menu of expectedMenus) {
      expect(menus).toContain(menu);
    }
  }
);

When('user checks for {string} menu', async ({}, menuName: string) => {
  isGalleryPresent = await disappearingPage.isMenuPresent(menuName);
});

When('user refreshes the page if Gallery is not present', async () => {
  if (!isGalleryPresent) {
    await disappearingPage.refreshPage();
    isGalleryPresent = await disappearingPage.isMenuPresent('Gallery');
  }
});

Then('{string} menu should be visible', async ({}, menuName: string) => {
  expect(isGalleryPresent).toBe(true);
});
