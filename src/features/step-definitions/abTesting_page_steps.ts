import { HomePageOperations } from '@src/operations/HomePageOperations';
import { createBdd } from 'playwright-bdd';
import { expect, Page } from '@playwright/test';
import { ABTestingOperations } from '@src/operations/ABTestingOperations';
import { ABTestingPage } from '@src/web-implementation/ABTestingPage';
const { Given, When, Then } = createBdd(); // Decorators
import { homePage } from './home_page_steps';
let abTestingPage:ABTestingOperations;
let actualResult:string|null;

Given('User accesses ABTestingPage', async ({}) => {
    // Navigate from home page to A/B Testing and capture page object
    abTestingPage = await homePage.gotoExample('A/B Testing') as unknown as ABTestingOperations;
});


When('User Observes content', async ({}) => {
    actualResult =await abTestingPage.getABTestingBodyContent();
});

Then('content should match {string}', async ({}, arg: string) => {
    //expect(actualResult).toEqual(arg);
}); 

When('User Observes footer', async ({}) => {
    actualResult =await abTestingPage.getABTestingFooterContent();
});

Then('footer should match {string}', async ({}, arg: string) => {
    expect(actualResult?.trim()).toEqual(arg.trim());
});

Then('header should match {string}', async ({}, arg: string) => {   
    actualResult =await abTestingPage.getABTestingHeader();
    expect(actualResult).toEqual(arg);
});


