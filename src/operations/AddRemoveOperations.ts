export interface AddRemoveOperations
{
    gotoExampleAddRemove():Promise<void>;
    getHeading(): Promise<string|null>;
    getAvailableElements(): Promise<number>;
    addElement():Promise<void>;
    addMultipleElements(num:number):Promise<void>;
    removeElement():Promise<void>;
    verifyDeleteButtonCount(expectedCount:number):Promise<void>;
}