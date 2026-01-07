import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { DragDropPage } from "@src/web-implementation/DragAndDrop";


const { Given, When, Then } = createBdd();
const { chromium } = require('playwright');
 
let browser;
let page;
 
Given('user navigates to the drag and drop page', async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
 
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
});
 
When('user drags the source element A and drops it into the target element B', async function () {
    const dragDrop = new DragDropPage(page);
    await dragDrop.dragAtoB();
});
 
Then('the element should be dropped successfully from A to B', async function () {
  const targetHeader1 = await page.textContent('#column-b header');
  const targetHeader2 = await page.textContent('#column-a header');
  expect(targetHeader1.trim()).toEqual('A');
  expect(targetHeader2.trim()).toEqual('B');
 
  await browser.close();
});

When('user drags the source element B and drops it into the target element A', async function () {
    const dragDrop = new DragDropPage(page);
    await dragDrop.dragBtoA();
});
 
Then('the element should be dropped successfully from B to A', async function () {
  const targetHeader1 = await page.textContent('#column-b header');
  const targetHeader2 = await page.textContent('#column-a header');
  expect(targetHeader1.trim()).toEqual('A');
  expect(targetHeader2.trim()).toEqual('B');
 
  await browser.close();
});