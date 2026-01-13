import {test,expect} from '@playwright/test';
import {getHerokuApp} from '../utilities/herokuapp-utils';
import {AddRemoveOperations} from '../operations/AddRemoveOperations';
import { HomePageOperations } from '../operations/HomePageOperations';

test("Verify Add Remove Heading",async({page})=>{
    const homePage: HomePageOperations = await getHerokuApp(page);
    const addRemovePage: AddRemoveOperations = homePage.gotoExample("Add/Remove Elements") as unknown as AddRemoveOperations;
    const expectedHeading='Add/Remove Elements';
    const heading=await addRemovePage.getHeading();
    expect(heading).toBe(expectedHeading);
});

test("Add element",async({page})=>{
    const homePage: HomePageOperations = await getHerokuApp(page);
    const addRemovePage: AddRemoveOperations = homePage.gotoExample("Add/Remove Elements") as unknown as AddRemoveOperations;
    await addRemovePage.addElement();
});

test("Remove element after adding the element",async({page})=>{
    const homePage: HomePageOperations = await getHerokuApp(page);
    const addRemovePage: AddRemoveOperations = homePage.gotoExample("Add/Remove Elements") as unknown as AddRemoveOperations;
    await addRemovePage.addElement();
    await addRemovePage.removeElement();
}); 

test("Add multiple elements",async({page})=>{
    const homePage: HomePageOperations = await getHerokuApp(page);
    const addRemovePage: AddRemoveOperations = homePage.gotoExample("Add/Remove Elements") as unknown as AddRemoveOperations;
    await addRemovePage.addMultipleElements(5);
});

test("Get count of elements added",async({page})=>{
    const homePage: HomePageOperations = await getHerokuApp(page);
    const addRemovePage: AddRemoveOperations = homePage.gotoExample("Add/Remove Elements") as unknown as AddRemoveOperations;
    await addRemovePage.addMultipleElements(4);
    const countOfAddedElements=await addRemovePage.getAvailableElements();
    expect(countOfAddedElements).toBe(4);
});