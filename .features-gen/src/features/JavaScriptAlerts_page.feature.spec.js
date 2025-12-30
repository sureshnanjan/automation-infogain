// Generated from: src\features\JavaScriptAlerts_page.feature
import { test } from "playwright-bdd";

test.describe('JavaScript Alerts', () => {

  test('Verify JS Alert', async ({ Given, When, Then, page }) => { 
    await Given('I navigate to the JavaScript Alerts page', null, { page }); 
    await When('I click on the JS Alert button', null, { page }); 
    await Then('I should see the result text "You successfully clicked an alert"', null, { page }); 
  });

  test('Verify JS Confirm - OK', async ({ Given, When, Then, page }) => { 
    await Given('I navigate to the JavaScript Alerts page', null, { page }); 
    await When('I click on the JS Confirm button', null, { page }); 
    await Then('I should see the result text "You clicked: Ok"', null, { page }); 
  });

  test('Verify JS Prompt', async ({ Given, When, Then, page }) => { 
    await Given('I navigate to the JavaScript Alerts page', null, { page }); 
    await When('I click on the JS Prompt button', null, { page }); 
    await Then('I should see the result text "You entered: Playwright"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\JavaScriptAlerts_page.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the JavaScript Alerts page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I click on the JS Alert button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the result text \"You successfully clicked an alert\"","stepMatchArguments":[{"group":{"start":29,"value":"\"You successfully clicked an alert\"","children":[{"start":30,"value":"You successfully clicked an alert","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I navigate to the JavaScript Alerts page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I click on the JS Confirm button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see the result text \"You clicked: Ok\"","stepMatchArguments":[{"group":{"start":29,"value":"\"You clicked: Ok\"","children":[{"start":30,"value":"You clicked: Ok","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given I navigate to the JavaScript Alerts page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I click on the JS Prompt button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see the result text \"You entered: Playwright\"","stepMatchArguments":[{"group":{"start":29,"value":"\"You entered: Playwright\"","children":[{"start":30,"value":"You entered: Playwright","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end