import { Page } from '@playwright/test';
import { DragDropOperations } from '@src/operations/DragAndDropOperations';
 
export class DragDropPage implements DragDropOperations {
  readonly locators;
 
  constructor(private page: Page) {
    this.locators = {
      columnA: page.locator('#column-a'),
      columnB: page.locator('#column-b')
    };
  }
 
  async goto(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  }
 
  async dragAtoB(): Promise<void> {
    await this.locators.columnA.dragTo(this.locators.columnB);
  }
  async dragBtoA(): Promise<void> {
    await this.locators.columnB.dragTo(this.locators.columnA);
  }
}
 