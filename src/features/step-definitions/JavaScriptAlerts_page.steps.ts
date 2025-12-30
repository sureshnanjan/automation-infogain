import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { getJavaScriptAlerts } from '@src/utilities/javascript-alerts-utils';
import { JavaScriptAlertsOperations } from '@src/operations/JavaScriptAlertsOperations';

const { Given, When, Then } = createBdd(); // Using BDD decorators

let alertsPage: JavaScriptAlertsOperations;

// Navigate to the JavaScript Alerts page
Given('I navigate to the JavaScript Alerts page', async ({ page }) => {
  alertsPage = await getJavaScriptAlerts(page);
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
});

// JS Alert
When('I click on the JS Alert button', async ({ page }) => {
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('I am a JS Alert'); // Verify alert message
    await dialog.accept(); // Accept the alert
  });
  await alertsPage.clickJsAlert();
});

// JS Confirm
When('I click on the JS Confirm button', async ({ page }) => {
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('I am a JS Confirm'); // Verify confirm message
    await dialog.accept(); // Accept OK
  });
  await alertsPage.clickJsConfirm();
});

// JS Prompt
When('I click on the JS Prompt button', async ({ page }) => {
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('I am a JS prompt'); // Verify prompt message
    await dialog.accept('Playwright'); // Provide input to prompt
  });
  await alertsPage.clickJsPrompt();
});

// Verify result text after alert, confirm, or prompt
Then('I should see the result text {string}', async ({ page }, expectedResultText: string) => {
  const resultText = await alertsPage.getResultText();
  expect(resultText).toBe(expectedResultText);
});
