import { test, expect } from '@playwright/test';
import { HomePageOperations } from '@src/operations/HomePageOperations';
import { DisappearingElementsOperations } from '@src/operations/DisappearingElementsOperations';
import {  getHerokuApp } from '@src/utilities/herokuapp-utils';
import { getDisappearingElementsApp } from '@src/utilities/dsiappearingElements-utils';

test("Verify Home Page Title", async ({ page }) => {
    const homePage: HomePageOperations = await getHerokuApp(page);
    const expected_title = "Welcome to the-internet"
    const title = await homePage.getTitle();
    expect(title).toBe(expected_title);
});


 test('Validate header and description text', async ({ page }) => {
    const disappearingElementsApp: DisappearingElementsOperations = await getDisappearingElementsApp(page);
    const headerText = await disappearingElementsApp.getHeaderText();
    const descriptionText = await disappearingElementsApp.getDescriptionText();

    expect(headerText).toBe('Disappearing Elements');
    expect(descriptionText).toContain('disappearing/reappearing');
});

test('Validate mandatory menus are present', async ({ page }) => {
    const homePage: HomePageOperations = await getHerokuApp(page);
    const disappearingElementsApp = homePage.gotoExample("Disappearing Elements") as unknown as DisappearingElementsOperations;
    const menus = await disappearingElementsApp.getMenuTexts();
    expect(menus).toEqual(
        expect.arrayContaining(['Home', 'About', 'Contact Us', 'Portfolio'])
    );
});

test('Validate Gallery menu appears after refresh', async ({ page }) => {
    const homePage: HomePageOperations = await getHerokuApp(page);
    const disappearingElementsApp = homePage.gotoExample("Disappearing Elements") as unknown as DisappearingElementsOperations;
    let isGalleryPresent = await disappearingElementsApp.isMenuPresent('Gallery');
    if (!isGalleryPresent) {
        await disappearingElementsApp.refreshPage();
        isGalleryPresent = await disappearingElementsApp.isMenuPresent('Gallery');
    }
    expect(isGalleryPresent).toBe(true);
});

test("Verify Menu Count before and after refresh on DisappearingElements Page", async ({ page }) => {
const homePage: HomePageOperations = await getHerokuApp(page);
    const disappearingElementsApp = homePage.gotoExample("Disappearing Elements") as unknown as DisappearingElementsOperations;
    const menusBeforeRefresh = await disappearingElementsApp.getMenuTexts();
    const countBeforeRefresh = menusBeforeRefresh.length;
    await disappearingElementsApp.refreshPage();
    const menusAfterRefresh = await disappearingElementsApp.getMenuTexts();
    const countAfterRefresh = menusAfterRefresh.length;
    //this test verifies counts are retrieved before and after refresh
    expect(countBeforeRefresh).toBeGreaterThanOrEqual(4); // Assuming at least mandatory menus
    expect(countAfterRefresh).toBeGreaterThanOrEqual(4);
});
