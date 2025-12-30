// Generated from: src\features\digest_auth.feature
import { test } from "playwright-bdd";

test.describe('Digest Authentication', () => {

  test.describe('Digest Authentication with different credentials', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('User is on Heroku App Home Page', null, { page }); 
      await When('User navigates to Digest Auth page with "admin" and "admin"', null, { page }); 
      await Then('authentication result should be "success"', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('User is on Heroku App Home Page', null, { page }); 
      await When('User navigates to Digest Auth page with "wrong" and "wrong"', null, { page }); 
      await Then('authentication result should be "unauthorized"', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('User is on Heroku App Home Page', null, { page }); 
      await When('User navigates to Digest Auth page with "admin" and "wrong"', null, { page }); 
      await Then('authentication result should be "unauthorized"', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('User is on Heroku App Home Page', null, { page }); 
      await When('User navigates to Digest Auth page with "wrong" and "admin"', null, { page }); 
      await Then('authentication result should be "unauthorized"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\digest_auth.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Heroku App Home Page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User navigates to Digest Auth page with \"admin\" and \"admin\"","stepMatchArguments":[{"group":{"start":40,"value":"\"admin\"","children":[{"start":41,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"admin\"","children":[{"start":53,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then authentication result should be \"success\"","stepMatchArguments":[{"group":{"start":32,"value":"\"success\"","children":[{"start":33,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Heroku App Home Page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User navigates to Digest Auth page with \"wrong\" and \"wrong\"","stepMatchArguments":[{"group":{"start":40,"value":"\"wrong\"","children":[{"start":41,"value":"wrong","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"wrong\"","children":[{"start":53,"value":"wrong","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then authentication result should be \"unauthorized\"","stepMatchArguments":[{"group":{"start":32,"value":"\"unauthorized\"","children":[{"start":33,"value":"unauthorized","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Heroku App Home Page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User navigates to Digest Auth page with \"admin\" and \"wrong\"","stepMatchArguments":[{"group":{"start":40,"value":"\"admin\"","children":[{"start":41,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"wrong\"","children":[{"start":53,"value":"wrong","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then authentication result should be \"unauthorized\"","stepMatchArguments":[{"group":{"start":32,"value":"\"unauthorized\"","children":[{"start":33,"value":"unauthorized","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Heroku App Home Page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User navigates to Digest Auth page with \"wrong\" and \"admin\"","stepMatchArguments":[{"group":{"start":40,"value":"\"wrong\"","children":[{"start":41,"value":"wrong","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"admin\"","children":[{"start":53,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then authentication result should be \"unauthorized\"","stepMatchArguments":[{"group":{"start":32,"value":"\"unauthorized\"","children":[{"start":33,"value":"unauthorized","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end