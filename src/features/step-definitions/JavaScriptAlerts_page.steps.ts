import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { getJavaScriptAlerts } from '@src/utilities/javascript-alerts-utils';
import { JavaScriptAlertsOperations } from '@src/operations/JavaScriptAlertsOperations';

const { Given, When, Then } = createBdd();

let alertsPage: JavaScriptAlertsOperations;

Given('I navigate to the JavaScript Alerts page', async function () {
  // 'this' contains the page
  await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  alertsPage = getJavaScriptAlerts(this.page);
});

When('I click on the JS Alert button', async function () {
  await alertsPage.acceptJsAlert('I am a JS Alert');
});

When('I click on the JS Confirm button', async function () {
  await alertsPage.acceptJsConfirm('I am a JS Confirm');
});

When('I cancel the JS Confirm dialog', async function () {
  await alertsPage.cancelJsConfirm('I am a JS Confirm');
});

When('I enter {string} in the JS Prompt and accept', async ({ page }, inputText: string)=> {
  await alertsPage.acceptJsPrompt('I am a JS prompt', inputText);
});

When('I cancel the JS Prompt dialog', async function () {
  await alertsPage.cancelJsPrompt('I am a JS prompt');
});
Then('I should see the result text {string}', async ({ page }, expectedText: string) => {
//Then('I should see the result text {string}', async function (expectedText: string) {
  const result = await alertsPage.getResultText();
  expect(result).toBe(expectedText);
});
