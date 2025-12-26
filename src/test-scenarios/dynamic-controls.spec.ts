import { test, expect } from '@playwright/test';
import type { DynamicControlsOperations } from '@src/operations/DynamicControlsOperations';
import { getHerokuAppUrl } from '@src/utilities/herokuapp-utils';

/*
 Dynamic Controls tests
*/

test.describe('Dynamic Controls', () => {

 test('checkbox can be removed and added back', async ({ page }) => {
   const dynamic: DynamicControlsOperations = page as any;
   await page.goto(`${getHerokuAppUrl()}/dynamic_controls`);

   // remove checkbox
   await page.locator('#checkbox-example button').click();
   await expect(page.locator('#message')).toHaveText('It\'s gone!');
   await expect(page.locator('#checkbox')).toHaveCount(0);

   // add checkbox back
   await page.locator('#checkbox-example button').click();
   await expect(page.locator('#message')).toHaveText('It\'s back!');
   await expect(page.locator('#checkbox')).toHaveCount(1);
 });

 test('input field can be enabled and disabled', async ({ page }) => {
   await page.goto(`${getHerokuAppUrl()}/dynamic_controls`);
   const input = page.locator('#input-example input');
   const button = page.locator('#input-example button');

   // enable input
   await button.click();
   await expect(page.locator('#message')).toHaveText('It\'s enabled!');
   await expect(input).toBeEnabled();

   // disable input
   await button.click();
   await expect(page.locator('#message')).toHaveText('It\'s disabled!');
   await expect(input).toBeDisabled();
 });
});
 