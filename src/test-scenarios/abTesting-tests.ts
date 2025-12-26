import {test,expect} from '@playwright/test';
import {HomePageOperations} from '@src/operations/HomePageOperations';
import {getHerokuAppUrl,getHerokuApp} from '@src/utilities/herokuapp-utils';
import {ABTestingOperations} from '@src/operations/ABTestingOperations';
import { getABTestingApp } from '@src/utilities/abTesting-utils';

test("Verify Home Page Title",async({page})=>{
    const homePage:HomePageOperations = getHerokuApp(page);
    const title=await homePage.getTitle();
    expect(title).toBe("Welcome to the-internet");
});

test("Access AB Testing variant",async({page})=>{
    const abTestingPage:ABTestingOperations = getABTestingApp(page);
    await abTestingPage.accessABTestingVariant();
    const abTestingHeader=await abTestingPage.getABTestingHeader();
    const abTestingBodyContent=await abTestingPage.getABTestingBodyContent();
    const abTestingFooterContent=await abTestingPage.getABTestingFooterContent();
    
    expect(abTestingHeader).not.toBeNull();
    expect(abTestingBodyContent).not.toBeNull();
    expect(abTestingFooterContent).not.toBeNull();
});
