// Generated from: src\features\entryAd_page.feature
import { test } from "playwright-bdd";

test.describe('Entry Ad modal window', () => {

  test('Verify entry ad modal is visible and can be closed', async ({ Given, When, Then, page }) => { 
    await Given('the user navigates from Home Page to Entry Ad page', null, { page }); 
    await When('Start to type your When step here the entry ad modal should be visible'); 
    await Then('Start to type your Then step here the user clicks the Close button in the modal'); 
  });

  test('Verify entry ad modal is generated again after re-enable', async ({ Given, When, Then, page }) => { 
    await Given('the user navigates to the Entry Ad page', null, { page }); 
    await When('the user are able to get "Entry Ad" title'); 
    await Then('the user clicks the re-enable link on the Entry Ad page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\entryAd_page.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given the user navigates from Home Page to Entry Ad page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When Start to type your When step here the entry ad modal should be visible","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Start to type your Then step here the user clicks the Close button in the modal","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given the user navigates to the Entry Ad page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user are able to get \"Entry Ad\" title","stepMatchArguments":[{"group":{"start":25,"value":"\"Entry Ad\"","children":[{"start":26,"value":"Entry Ad","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the user clicks the re-enable link on the Entry Ad page","stepMatchArguments":[]}]},
]; // bdd-data-end