// Generated from: src\features\dragAndDrop.feature
import { test } from "playwright-bdd";

test.describe('Drag and Drop functionality', () => {

  test('Successful drag and drop from A to B', async ({ Given, When, Then }) => { 
    await Given('user navigates to the drag and drop page'); 
    await When('user drags the source element A and drops it into the target element B'); 
    await Then('the element should be dropped successfully from A to B'); 
  });

  test('Successful drag and drop from B to A', async ({ Given, When, Then }) => { 
    await Given('user navigates to the drag and drop page'); 
    await When('user drags the source element B and drops it into the target element A'); 
    await Then('the element should be dropped successfully from B to A'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\dragAndDrop.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given user navigates to the drag and drop page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user drags the source element A and drops it into the target element B","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the element should be dropped successfully from A to B","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given user navigates to the drag and drop page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When user drags the source element B and drops it into the target element A","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the element should be dropped successfully from B to A","stepMatchArguments":[]}]},
]; // bdd-data-end