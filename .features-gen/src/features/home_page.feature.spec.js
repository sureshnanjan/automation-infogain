// Generated from: src\features\home_page.feature
import { test } from "playwright-bdd";

test.describe('Heroku App Home Page functionality', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('The App is launched', null, { page }); 
  });
  
  test('Home Page has a valid Title', async ({ Given, When, Then, page }) => { 
    await Given('User Visits HomePage', null, { page }); 
    await When('User Observes Title'); 
    await Then('title should match "Welcome to the-internet"'); 
  });

  test('Home Page has a valid Sub-Title', async ({ Given, When, Then, page }) => { 
    await Given('User Visits HomePage', null, { page }); 
    await When('User Observes Sub-Title'); 
    await Then('subtitle should match "Available Examples"'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\home_page.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The App is launched","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User Visits HomePage","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User Observes Title","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then title should match \"Welcome to the-internet\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Welcome to the-internet\"","children":[{"start":20,"value":"Welcome to the-internet","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The App is launched","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given User Visits HomePage","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User Observes Sub-Title","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then subtitle should match \"Available Examples\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Available Examples\"","children":[{"start":23,"value":"Available Examples","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end