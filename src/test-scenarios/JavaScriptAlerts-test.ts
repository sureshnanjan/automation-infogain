import { test, expect } from '@playwright/test';
import { getJavaScriptAlerts } from '@src/utilities/javascript-alerts-utils';
import { JavaScriptAlertsOperations } from '@src/operations/JavaScriptAlertsOperations';

/**
* Test suite for validating JavaScript Alerts functionality.
*
* This suite covers:
* 1. JS Alert
* 2. JS Confirm
* 3. JS Prompt
*
*/

test.beforeEach(async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
});

/**
* Verifies simple JavaScript Alert behavior.
*
* Expected:
* - Alert message should be correct
* - Alert should be accepted
* - Result text should be validated
*/


test('Verify JS Alert', async ({ page }) => {
const alertsPage: JavaScriptAlertsOperations = getJavaScriptAlerts(page);

// Register a one-time dialog handler
page.once('dialog', async dialog => {

expect(dialog.message()).toBe('I am a JS Alert');  // Verify alert message
await dialog.accept(); //Click OK
});

// Trigger JavaScript Alert
await alertsPage.clickJsAlert();

// Validate result text after alert handling
expect(await alertsPage.getResultText()).toBe('You successfully clicked an alert');
});

/**
* Verifies JavaScript Confirm dialog when OK is clicked.
*/

test('Verify JS Confirm - OK', async ({ page }) => {
const alertsPage = getJavaScriptAlerts(page);

page.once('dialog', async dialog => {
expect(dialog.message()).toBe('I am a JS Confirm');  // Verify confirm message
await dialog.accept();
});

await alertsPage.clickJsConfirm();
expect(await alertsPage.getResultText()).toBe('You clicked: Ok');
});
/**
* Verifies JavaScript Prompt dialog by entering text.
*/

test('Verify JS Prompt', async ({ page }) => {
const alertsPage = getJavaScriptAlerts(page);

page.once('dialog', async dialog => {
expect(dialog.message()).toBe('I am a JS prompt');  // Verify prompt message
await dialog.accept('Playwright'); //Enter value
});

await alertsPage.clickJsPrompt();
expect(await alertsPage.getResultText()).toBe('You entered: Playwright');
});
