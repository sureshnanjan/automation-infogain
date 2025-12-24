import { Locator } from '@playwright/test';

export interface DragDroplocators {
    columnA: Locator;
    columnB: Locator;
}

export interface DragDropOperations {
    locators: DragDroplocators,
    goto(): Promise<void>;
    dragAtoB(): Promise<void>;
}