import { Locator } from '@playwright/test';

export interface DragDroplocators {
    title: Locator;
    columnA: Locator;
    columnB: Locator;
}

export interface DragDropOperations {
    locators: DragDroplocators,
    goto(): Promise<void>;
    getTitle(): Promise<string|null>;
    dragAtoB(): Promise<void>;
    dragBtoA(): Promise<void>;
}