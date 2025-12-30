// Generated from: src\features\dynamicLoading_page.feature
import { test } from "playwright-bdd";

test.describe('Dynamic Loading Page functionality', () => {

  test.beforeEach('Background', async ({ Given, When, Then, page }, testInfo) => { if (testInfo.error) return;
    await Given('User Visits HerokuApp site', null, { page }); 
    await When('User clicks on Dynamic Loading Link', null, { page }); 
    await Then('User should be navigated to Dynamic Loading Page', null, { page }); 
  });
  
  test('Dynamic Loading Page has a valid Title', async ({ And }) => { 
    await And('Title should match "Dynamically Loaded Page Elements"'); 
  });

  test('Verify Description on Dynamic Loading Page', async ({ And, page }) => { 
    await And('The page description should contain:', {"docString":{"content":"It's common to see an action get triggered that returns a result dynamically. It does not rely on the page to reload or finish loading. The page automatically gets updated (e.g. hiding elements, showing elements, updating copy, etc) through the use of JavaScript."}}, { page }); 
  });

  test.describe('Verify Example pages load and show "Hello World!"', () => {

    test('Example #1', async ({ When, Then, page }) => { 
      await When('User clicks "Example 1: Element on page that is hidden"', null, { page }); 
      await When('User clicks the "Start" button"', null, { page }); 
      await Then('User get text should be "Hello World!"', null, { page }); 
    });

    test('Example #2', async ({ When, Then, page }) => { 
      await When('User clicks "Example 2: Element rendered after the fact"', null, { page }); 
      await When('User clicks the "Start" button"', null, { page }); 
      await Then('User get text should be "Hello World!"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\dynamicLoading_page.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User Visits HerokuApp site","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User clicks on Dynamic Loading Link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Dynamic Loading Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And Title should match \"Dynamically Loaded Page Elements\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Dynamically Loaded Page Elements\"","children":[{"start":20,"value":"Dynamically Loaded Page Elements","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User Visits HerokuApp site","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User clicks on Dynamic Loading Link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Dynamic Loading Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And The page description should contain:","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User Visits HerokuApp site","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User clicks on Dynamic Loading Link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Dynamic Loading Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When User clicks \"Example 1: Element on page that is hidden\"","stepMatchArguments":[{"group":{"start":12,"value":"\"Example 1: Element on page that is hidden\"","children":[{"start":13,"value":"Example 1: Element on page that is hidden","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User clicks the \"Start\" button\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Start\"","children":[{"start":17,"value":"Start","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User get text should be \"Hello World!\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Hello World!\"","children":[{"start":25,"value":"Hello World!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User Visits HerokuApp site","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User clicks on Dynamic Loading Link","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Dynamic Loading Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When User clicks \"Example 2: Element rendered after the fact\"","stepMatchArguments":[{"group":{"start":12,"value":"\"Example 2: Element rendered after the fact\"","children":[{"start":13,"value":"Example 2: Element rendered after the fact","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User clicks the \"Start\" button\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Start\"","children":[{"start":17,"value":"Start","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User get text should be \"Hello World!\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Hello World!\"","children":[{"start":25,"value":"Hello World!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end