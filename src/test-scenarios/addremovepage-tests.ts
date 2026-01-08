import {test,expect} from '@playwright/test';
import {AddRemovePage} from '../web-implementation/AddRemovePage';
import {AddRemoveOperations} from '@src/operations/AddRemoveOperations';
import {getHerokuAppUrl,getHerokuApp} from '@src/utilities/herokuapp-utils';
import { HomePageOperations } from '@src/operations/HomePageOperations';
import { getAddRemoveTestingApp } from '@src/utilities/addremove-utils';

// test("Verify Home Page Title",async({page})=>{
//     const homePage:HomePageOperations = await getHerokuApp(page);
//     const title=await homePage.getTitle();
//     expect(title).toBe("Welcome to the-internet");
// });

test("Verify Add Remove Heading",async({page})=>{
    const addRemovePage: AddRemoveOperations = new AddRemovePage(page);
    const expectedHeading='Add/Remove Elements';
    await addRemovePage.gotoExampleAddRemove();
    const heading=await addRemovePage.getHeading();
    console.log('Page heading is:', heading);
    expect(heading).toBe(expectedHeading);
    await page.close();
    
});

test("Add element",async({page})=>{
    const addRemovePage: AddRemoveOperations = new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    await addRemovePage.addElement();
    await page.close();
});

test("Remove element after adding the element",async({page})=>{
    const addRemovePage: AddRemoveOperations = new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    await addRemovePage.addElement();
    await addRemovePage.removeElement();
    await page.close();
}); 

test("Add multiple elements",async({page})=>{
    const addRemovePage: AddRemoveOperations = new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    await addRemovePage.addMultipleElements(5);
    await page.close();
});

test("Get count of elements added",async({page})=>{
    const addRemovePage: AddRemoveOperations = new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    await addRemovePage.addMultipleElements(4);
    const countOfAddedElements=addRemovePage.getAvailableElements();
    expect(countOfAddedElements).toBe(4);
    await page.close();
});