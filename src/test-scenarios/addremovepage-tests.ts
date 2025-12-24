import {test,expect} from '@playwright/test';
import {AddRemovePage} from '@src/web-implementation/AddRemovePage';
import {AddRemoveOperations} from '@src/operations/AddRemoveOperations';
import {getHerokuAppUrl,getHerokuApp} from '@src/utilities/herokuapp-utils';
test("Verify Add Remove Heading",async({page})=>{
    await page.goto(getHerokuAppUrl());
    const expectedHeading='Add/Remove Elements';
    const addRemovePage=new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    const heading=await addRemovePage.getHeading();
    console.log('Page heading is:', heading);
    expect(heading).toBe(expectedHeading);
    await page.close();
    
});

test("Add element",async({page})=>{

    await page.goto(getHerokuAppUrl());
    const addRemovePage=new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    await addRemovePage.addElement();
    await page.close();
});

test("Remove element after adding the element",async({page})=>{
    await page.goto(getHerokuAppUrl());
    const addRemovePage=new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    await addRemovePage.addElement();
    await addRemovePage.removeElement();
    await page.close();
}); 

test("Add multiple elements",async({page})=>{
    await page.goto(getHerokuAppUrl());
    const addRemovePage=new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    await addRemovePage.addMultipleElement(5);
    await page.close();
});

test("Get count of elements added",async({page})=>{
    await page.goto(getHerokuAppUrl());
    const addRemovePage=new AddRemovePage(page);
    await addRemovePage.gotoExampleAddRemove();
    await addRemovePage.addMultipleElement(4);
    const countOfAddedElements=addRemovePage.getAvailableElements();
    console.log('Count of Added Elements:',countOfAddedElements);
    await page.close();
});