import { HomePageOperations } from '@src/operations/HomePageOperations';
import { getHerokuApp } from '@src/utilities/herokuapp-utils';
import { createBdd, DataTable } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd(); // Decorators
let homePage:HomePageOperations;
let actualResult:string|null;
let expected_logo:{color:string, place: string, font:number}
Given('User Visits HomePage', async ({page}) => {
  // Step: Given User Visits HomePage
  // From: src\features\home_page.feature:5:1
  homePage = await getHerokuApp(page);
});

When('User Observes Title', async ({}) => {
  // Step: When User Observes Title
  // From: src\features\home_page.feature:6:1
  actualResult =await homePage.getTitle();
});

Then('title should match {string}', async ({}, arg) => {
  // Step: Then title should match "Welcome to the-Internet"
  // From: src\features\home_page.feature:7:1
  expect(actualResult).toEqual(arg);
});

Given('I have the following data', async ({}, dataTable: DataTable) => {
  // Step: Given I have the following data
  // From: src\features\home_page.feature:26:1
  dataTable.rows().forEach((row)=>{


  });
});