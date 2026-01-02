interface AddRemoveOperations
{
    gotoExampleAddRemove():Promise<void>;
    getHeading(): Promise<string|null>;
    getAvailableElements(): Promise<number>;
    addElement():Promise<void>;
    addMultipleElement(num:number):Promise<void>;
    removeButtonVisible():Promise<void>;
    removeElement():Promise<void>;
}

 export type { AddRemoveOperations };