import { test, expect } from '@playwright/test';
import { getJavaScriptAlerts } from '@src/utilities/javascript-alerts-utils';
import { JavaScriptAlertsOperations } from '@src/operations/JavaScriptAlertsOperations';

/**
 * Test suite for JavaScript Alerts functionality.
 *
 * Covers:
 * 1. JS Alert
 * 2. JS Confirm - OK
 * 3. JS Confirm - Cancel
 * 4. JS Prompt - OK
 * 5. JS Prompt - Cancel
 */

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
});

/**
 * Verify simple JavaScript Alert
 */
test('Verify JS Alert', async ({ page }) => {
  const alertsPage: JavaScriptAlertsOperations = getJavaScriptAlerts(page);

  await alertsPage.acceptJsAlert('I am a JS Alert');

  expect(await alertsPage.getResultText()).toBe('You successfully clicked an alert');
});

/**
 * Verify JavaScript Confirm dialog - OK
 */
test('Verify JS Confirm - OK', async ({ page }) => {
  const alertsPage: JavaScriptAlertsOperations = getJavaScriptAlerts(page);

  await alertsPage.acceptJsConfirm('I am a JS Confirm');

  expect(await alertsPage.getResultText()).toBe('You clicked: Ok');
});

/**
 * Verify JavaScript Confirm dialog - Cancel
 */
test('Verify JS Confirm - Cancel', async ({ page }) => {
  const alertsPage: JavaScriptAlertsOperations = getJavaScriptAlerts(page);

  await alertsPage.cancelJsConfirm('I am a JS Confirm');

  expect(await alertsPage.getResultText()).toBe('You clicked: Cancel');
});

/**
 * Verify JavaScript Prompt dialog - OK
 */
test('Verify JS Prompt - OK', async ({ page }) => {
  const alertsPage: JavaScriptAlertsOperations = getJavaScriptAlerts(page);

  await alertsPage.acceptJsPrompt('I am a JS prompt', 'Playwright');

  expect(await alertsPage.getResultText()).toBe('You entered: Playwright');
});

/**
 * Verify JavaScript Prompt dialog - Cancel
 */
test('Verify JS Prompt - Cancel', async ({ page }) => {
  const alertsPage: JavaScriptAlertsOperations = getJavaScriptAlerts(page);

  await alertsPage.cancelJsPrompt('I am a JS prompt');

  expect(await alertsPage.getResultText()).toBe('You entered: null');
});
