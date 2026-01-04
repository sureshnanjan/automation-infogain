// Generated from: src\features\abTesting_page.feature
import { test } from "playwright-bdd";

test.describe('A/B Testing Page functionality', () => {

  test('A/B Testing Page has a valid Title', async ({ Given, Then, page }) => { 
    await Given('User Visits HomePage', null, { page }); 
    await Given('User accesses ABTestingPage'); 
    await Then('header should match "A/B Test Control"'); 
  });

  test('A/B Testing Page has a valid content', async ({ Given, When, Then, page }) => { 
    await Given('User Visits HomePage', null, { page }); 
    await Given('User accesses ABTestingPage'); 
    await When('User Observes content'); 
    await Then('content should match "Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works better towards a desired outcome (e.g. a user action such as a click-through)."'); 
  });

  test('A/B Testing Page has a valid footer', async ({ Given, When, Then, page }) => { 
    await Given('User Visits HomePage', null, { page }); 
    await Given('User accesses ABTestingPage'); 
    await When('User Observes footer'); 
    await Then('footer should match "Powered by Elemental Selenium"'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\abTesting_page.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User Visits HomePage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User accesses ABTestingPage","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then header should match \"A/B Test Control\"","stepMatchArguments":[{"group":{"start":20,"value":"\"A/B Test Control\"","children":[{"start":21,"value":"A/B Test Control","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User Visits HomePage","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User accesses ABTestingPage","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User Observes content","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then content should match \"Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works better towards a desired outcome (e.g. a user action such as a click-through).\"","stepMatchArguments":[{"group":{"start":21,"value":"\"Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works better towards a desired outcome (e.g. a user action such as a click-through).\"","children":[{"start":22,"value":"Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works better towards a desired outcome (e.g. a user action such as a click-through).","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given User Visits HomePage","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User accesses ABTestingPage","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When User Observes footer","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then footer should match \"Powered by Elemental Selenium\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Powered by Elemental Selenium\"","children":[{"start":21,"value":"Powered by Elemental Selenium","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end