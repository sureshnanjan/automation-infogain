import { createBdd } from 'playwright-bdd';
import { AddRemovePage } from '@src/web-implementation/AddRemovePage';

const { Given, When, Then } = createBdd(); // Using decorators
let addRemovePage:AddRemovePage;
Given('I navigate to the Add Remove Elements', async ({ page }) => {
  addRemovePage = new AddRemovePage(page);
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
});

When('I click on Add Element', async ({page}) => {
  addRemovePage.addElement;
});

Then('I should see the Delete button', async ({page}) => {
  await addRemovePage.removeButtonVisible;
});

Then('I should be able to delete them', async ({page}) => {
  addRemovePage.removeElement;
});