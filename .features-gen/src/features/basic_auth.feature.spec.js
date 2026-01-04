// Generated from: src\features\basic_auth.feature
import { test } from "playwright-bdd";

test.describe('Basic Auth Page Verification', () => {

  test.beforeEach('Background: Navigation to Basic Auth page', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('User navigates to the Basic Auth Page', null, { page }); 
  });
  
  test('Logged In Basic Auth Page Header Verification', async ({ When, Then }) => { 
    await When('User observes the Basic Auth page header'); 
    await Then('Page header should be "Basic Auth"'); 
  });

  test('Logged In Basic Auth Page Content Verification', async ({ When, Then }) => { 
    await When('User observes the Basic Auth page content'); 
    await Then('Page content should contain "Congratulations! You must have the proper credentials."'); 
  });

  test('Logged In Basic Auth Page Footer Verification', async ({ When, Then }) => { 
    await When('User observes the Basic Auth page footer'); 
    await Then('Page footer should be "Powered by Elemental Selenium"'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\basic_auth.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigates to the Basic Auth Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User observes the Basic Auth page header","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Page header should be \"Basic Auth\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Basic Auth\"","children":[{"start":23,"value":"Basic Auth","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigates to the Basic Auth Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User observes the Basic Auth page content","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Page content should contain \"Congratulations! You must have the proper credentials.\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Congratulations! You must have the proper credentials.\"","children":[{"start":29,"value":"Congratulations! You must have the proper credentials.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigates to the Basic Auth Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User observes the Basic Auth page footer","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Page footer should be \"Powered by Elemental Selenium\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Powered by Elemental Selenium\"","children":[{"start":23,"value":"Powered by Elemental Selenium","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end