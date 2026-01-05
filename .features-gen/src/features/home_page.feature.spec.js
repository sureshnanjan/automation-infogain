// Generated from: src\features\home_page.feature
import { test } from "playwright-bdd";

test.describe('Heroku App Home Page functionality', () => {

  test('Home Page has a valid Title', async ({ Given, When, Then, page }) => { 
    await Given('User Visits HomePage', null, { page }); 
    await When('User Observes Title'); 
    await Then('title should match "Welcome to the-internet"'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\home_page.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User Visits HomePage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User Observes Title","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then title should match \"Welcome to the-internet\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Welcome to the-internet\"","children":[{"start":20,"value":"Welcome to the-internet","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end