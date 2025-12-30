// Generated from: src\features\basic_auth.feature
import { test } from "playwright-bdd";

test.describe('Basic Auth Page Verification', () => {

  test('Logged In Basic Auth Page Header Verification', async ({ Given, When, Then, page }) => { 
    await Given('User navigates to the HerokuApp site', null, { page }); 
    await When('User clicks on Basic Auth link', null, { page }); 
    await Then('Page header should be "Basic Auth"'); 
  });

  test('Logged In Basic Auth Page Content Verification', async ({ Given, When, Then, page }) => { 
    await Given('User navigates to the HerokuApp site', null, { page }); 
    await When('User clicks on Basic Auth link', null, { page }); 
    await Then('Page content should contain "Congratulations! You must have the proper credentials."'); 
  });

  test('Logged In Basic Auth Page Footer Verification', async ({ Given, When, Then, page }) => { 
    await Given('User navigates to the HerokuApp site', null, { page }); 
    await When('User clicks on Basic Auth link', null, { page }); 
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
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigates to the HerokuApp site","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on Basic Auth link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Page header should be \"Basic Auth\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Basic Auth\"","children":[{"start":23,"value":"Basic Auth","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User navigates to the HerokuApp site","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User clicks on Basic Auth link","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Page content should contain \"Congratulations! You must have the proper credentials.\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Congratulations! You must have the proper credentials.\"","children":[{"start":29,"value":"Congratulations! You must have the proper credentials.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given User navigates to the HerokuApp site","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User clicks on Basic Auth link","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Page footer should be \"Powered by Elemental Selenium\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Powered by Elemental Selenium\"","children":[{"start":23,"value":"Powered by Elemental Selenium","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end