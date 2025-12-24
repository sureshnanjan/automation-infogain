import { test, expect } from '@playwright/test';
import { DragDropPage } from '@src/web-implementation/DragAndDrop';
test('Drag and Drop A to B', async ({ page }) => {
  const dragDropPage = new DragDropPage(page);
 
  await dragDropPage.goto();
 
  // Initial verification
  await expect(dragDropPage.locators.columnA.locator('header')).toHaveText('A');
  await expect(dragDropPage.locators.columnB.locator('header')).toHaveText('B');
 
  // Action
  await dragDropPage.dragAtoB();
 
  // Verification after drag & drop
  await expect(dragDropPage.locators.columnA.locator('header')).toHaveText('B');
  await expect(dragDropPage.locators.columnB.locator('header')).toHaveText('A');
});
  test('Drag and Drop B to A', async ({ page }) => {
  const dragDropPage = new DragDropPage(page);
 
  await dragDropPage.goto();
 
   // Initial verification
  await expect(dragDropPage.locators.columnB.locator('header')).toHaveText('B');
  await expect(dragDropPage.locators.columnA.locator('header')).toHaveText('A');
 
  // Action
  await dragDropPage.dragBtoA();
 
  // Verification after drag & drop
  await expect(dragDropPage.locators.columnB.locator('header')).toHaveText('A');
  await expect(dragDropPage.locators.columnA.locator('header')).toHaveText('B');
});