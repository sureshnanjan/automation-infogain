// Import Playwright test utilities
import { test, expect } from '@playwright/test';

// Import page implementation
import { ChallengingDomPage } from '../web-implementation/ChallengingDomPage';

// Import ChallengingDomActions interface
import { ChallengingDomActions } from '../operations/ChallengingDomActions';

test('Challenging DOM - using ChallengingDomActions interface', async ({ page }) => {

  // Use interface type instead of concrete class
  // Promotes loose coupling and clean architecture
  const domActions: ChallengingDomActions =
    new ChallengingDomPage(page);

  // Navigate to the application under test
  await page.goto('https://the-internet.herokuapp.com/challenging_dom');

  // Perform actions through interface methods
  await domActions.clickBarButton();
  await domActions.clickFooButton();
  await domActions.clickBazButton();

  // Validate number of rows in the table
  const rowCount = await domActions.getRowCount();
  expect(rowCount).toBe(10);

  // Perform row-level actions
  await domActions.clickEditByRowText('Iuvaret5');
  await domActions.clickDeleteByRowText('Iuvaret5');


});
