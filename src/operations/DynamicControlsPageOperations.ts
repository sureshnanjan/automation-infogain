
/**
* DynamicControlsOperations
* Defines operations for the Dynamic Controls page
* Example page: https://the-internet.herokuapp.com/dynamic_controls
*/
interface DynamicControlsPageOperations {
 goto(): Promise<void>;
 removeCheckbox(): Promise<void>;
 addCheckbox(): Promise<void>;
 enableInput(): Promise<void>;
 disableInput(): Promise<void>;
 getMessageText(): Promise<string>;
 getTitle(): Promise<string | null>;
 isLoaded(): Promise<void>;
}
export type { DynamicControlsPageOperations };