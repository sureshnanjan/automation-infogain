import { createBdd } from 'playwright-bdd';
import {getHerokuApp} from '@src/utilities/herokuapp-utils';
import { AddRemoveOperations } from '@src/operations/AddRemoveOperations';
import { HomePageOperations } from '@src/operations/HomePageOperations';

const { Given, When, Then } = createBdd(); // Using decorators
let addRemovePage: AddRemoveOperations;
Given('I access the Add Remove Elements', async ({ page }) => {
  const homePage: HomePageOperations = await getHerokuApp(page);
  addRemovePage = homePage.gotoExample("Add/Remove Elements") as unknown as AddRemoveOperations;
});

When('I click on Add Element', async ({page}) => {
  addRemovePage.addElement;
});

Then('I should be able to delete them', async ({page}) => {
  addRemovePage.removeElement;
});

When('I click on Add Element {int} times', async ({}, arg: number) => {
 addRemovePage.addMultipleElements(5);
});

Then('I should see {int} Delete buttons', async ({}, arg: number) => {
  await addRemovePage.verifyDeleteButtonCount(5);
});