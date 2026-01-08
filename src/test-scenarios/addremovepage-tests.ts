import {test,expect} from '@playwright/test';
import { AddRemovePage } from '../web-implementation/AddRemovePage';
import {AddRemoveOperations} from '../operations/AddRemoveOperations';

test("Verify Add Remove Heading",async({page})=>{
    const addRemovePage: AddRemoveOperations = new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    const expectedHeading='Add/Remove Elements';
    const heading=await addRemovePage.getHeading();
    expect(heading).toBe(expectedHeading);
});

test("Add element",async({page})=>{
    const addRemovePage: AddRemoveOperations = new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    await addRemovePage.addElement();
});

test("Remove element after adding the element",async({page})=>{
    const addRemovePage: AddRemoveOperations = new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    await addRemovePage.addElement();
    await addRemovePage.removeElement();
}); 

test("Add multiple elements",async({page})=>{
    const addRemovePage: AddRemoveOperations = new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    await addRemovePage.addMultipleElements(5);
});

test("Get count of elements added",async({page})=>{
    const addRemovePage: AddRemoveOperations = new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    await addRemovePage.addMultipleElements(4);
    const countOfAddedElements=await addRemovePage.getAvailableElements();
    expect(countOfAddedElements).toBe(4);
});