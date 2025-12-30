// Generated from: src\features\dynamic_content_page.feature
import { test } from "playwright-bdd";

test.describe('Dynamic Content Page', () => {

  test.beforeEach('Background', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the Heroku App Home Page', null, { page }); 
    await And('I navigate to the Dynamic Content page', null, { page }); 
  });
  
  test('Verify Dynamic content Page has a valid Title', async ({ When, Then }) => { 
    await When('User Observes Dynamic Content Title'); 
    await Then('Dynamic content page title should match "Dynamic Content"'); 
  });

  test('Default dynamic content changes on every reload', async ({ When, Then, And, page }) => { 
    await When('I record the current row text and image sources'); 
    await And('I reload the page', null, { page }); 
    await Then('the new content should be different from the recorded content'); 
  });

  test('Static version persists content across reloads', async ({ Given, When, Then, And, page }) => { 
    await Given('I enable the static version via the "click here" link'); 
    await When('I record the current row text'); 
    await And('I reload the page', null, { page }); 
    await Then('I should find that specific rows remain unchanged'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\dynamic_content_page.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the Heroku App Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I navigate to the Dynamic Content page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User Observes Dynamic Content Title","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Dynamic content page title should match \"Dynamic Content\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Dynamic Content\"","children":[{"start":41,"value":"Dynamic Content","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the Heroku App Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I navigate to the Dynamic Content page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I record the current row text and image sources","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And I reload the page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the new content should be different from the recorded content","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the Heroku App Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I navigate to the Dynamic Content page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I enable the static version via the \"click here\" link","stepMatchArguments":[{"group":{"start":36,"value":"\"click here\"","children":[{"start":37,"value":"click here","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I record the current row text","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And I reload the page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then I should find that specific rows remain unchanged","stepMatchArguments":[]}]},
]; // bdd-data-end