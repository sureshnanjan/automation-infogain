import { test } from '@playwright/test';
import { HomePage } from './HomePage';
import { ExitIntentPage } from '../operations/ExitIntentPage';

test.describe('Exit Intent Page Validation', () => {
  test('Navigate to Exit Intent page and validate content & modal', async ({ page }) => {
    const homePage = new HomePage(page);
    const exitIntentPage = new ExitIntentPage(page);

    await homePage.navigate();
    await homePage.gotoExample('Exit Intent');

    await exitIntentPage.validateExitIntentPageContent();

    await exitIntentPage.triggerExitIntent();
    await exitIntentPage.validateExitIntentModal();

    await exitIntentPage.closeModal();
  });
});
