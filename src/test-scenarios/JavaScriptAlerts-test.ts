import { test, expect } from '@playwright/test';
import { getJavaScriptAlerts } from '@src/utilities/herokuapp-utils';
import { JavaScriptAlertsOperations } from '@src/operations/JavaScriptAlertsOperations';

test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
});

test('Verify JS Alert', async ({ page }) => {
    const alertsPage: JavaScriptAlertsOperations = getJavaScriptAlerts(page);

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await alertsPage.clickJsAlert();
    expect(await alertsPage.getResultText()).toBe('You successfully clicked an alert');
});

test('Verify JS Confirm - OK', async ({ page }) => {
    const alertsPage = getJavaScriptAlerts(page);

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await alertsPage.clickJsConfirm();
    expect(await alertsPage.getResultText()).toBe('You clicked: Ok');
});

test('Verify JS Prompt', async ({ page }) => {
    const alertsPage = getJavaScriptAlerts(page);

    page.once('dialog', async dialog => {
        await dialog.accept('Playwright');
    });

    await alertsPage.clickJsPrompt();
    expect(await alertsPage.getResultText()).toBe('You entered: Playwright');
});
