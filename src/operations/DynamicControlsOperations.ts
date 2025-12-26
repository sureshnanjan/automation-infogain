import type { Page, Locator } from '@playwright/test';

/**
 Operations interface for Dynamic Controls page
*/

export interface DynamicControlsOperations {

 readonly page: Page;
 readonly checkbox: Locator;
 readonly removeAddButton: Locator;
 readonly enableDisableButton: Locator;
 readonly inputField: Locator;
 readonly message: Locator;

 goto(): Promise<void>;
 removeCheckbox(): Promise<void>;
 addCheckbox(): Promise<void>;
 enableInput(): Promise<void>;
 disableInput(): Promise<void>;
 getMessageText(): Promise<string>;
}
 