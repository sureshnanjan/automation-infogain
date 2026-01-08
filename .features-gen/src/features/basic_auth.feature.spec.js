// Generated from: src\features\basic_auth.feature
import { test } from "playwright-bdd";

test.describe('Basic Auth Page Verification', () => {

  test.describe('Basic Auth with various credentials', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('User logs in with username "admin" and password "admin"', null, { page }); 
      await When('User observes the Basic Auth Status Message'); 
      await Then('Status Message should contain "Congratulations! You must have the proper credentials."'); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('User logs in with username "invalidUser" and password "invalidPass"', null, { page }); 
      await When('User observes the Basic Auth Status Message'); 
      await Then('Status Message should contain "Not authorized"'); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('User logs in with username "admin" and password "invalidPass"', null, { page }); 
      await When('User observes the Basic Auth Status Message'); 
      await Then('Status Message should contain "Not authorized"'); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('User logs in with username "invalidUser" and password "admin"', null, { page }); 
      await When('User observes the Basic Auth Status Message'); 
      await Then('Status Message should contain "Not authorized"'); 
    });

    test('Example #5', async ({ Given, When, Then, page }) => { 
      await Given('User logs in with username "" and password ""', null, { page }); 
      await When('User observes the Basic Auth Status Message'); 
      await Then('Status Message should contain "Not authorized"'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\basic_auth.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User logs in with username \"admin\" and password \"admin\"","stepMatchArguments":[{"group":{"start":27,"value":"\"admin\"","children":[{"start":28,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"admin\"","children":[{"start":49,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User observes the Basic Auth Status Message","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Status Message should contain \"Congratulations! You must have the proper credentials.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Congratulations! You must have the proper credentials.\"","children":[{"start":31,"value":"Congratulations! You must have the proper credentials.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User logs in with username \"invalidUser\" and password \"invalidPass\"","stepMatchArguments":[{"group":{"start":27,"value":"\"invalidUser\"","children":[{"start":28,"value":"invalidUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"invalidPass\"","children":[{"start":55,"value":"invalidPass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User observes the Basic Auth Status Message","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Status Message should contain \"Not authorized\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Not authorized\"","children":[{"start":31,"value":"Not authorized","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User logs in with username \"admin\" and password \"invalidPass\"","stepMatchArguments":[{"group":{"start":27,"value":"\"admin\"","children":[{"start":28,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"invalidPass\"","children":[{"start":49,"value":"invalidPass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User observes the Basic Auth Status Message","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Status Message should contain \"Not authorized\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Not authorized\"","children":[{"start":31,"value":"Not authorized","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User logs in with username \"invalidUser\" and password \"admin\"","stepMatchArguments":[{"group":{"start":27,"value":"\"invalidUser\"","children":[{"start":28,"value":"invalidUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"admin\"","children":[{"start":55,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User observes the Basic Auth Status Message","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Status Message should contain \"Not authorized\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Not authorized\"","children":[{"start":31,"value":"Not authorized","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User logs in with username \"\" and password \"\"","stepMatchArguments":[{"group":{"start":27,"value":"\"\"","children":[{"start":28,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"\"","children":[{"start":44,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User observes the Basic Auth Status Message","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Status Message should contain \"Not authorized\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Not authorized\"","children":[{"start":31,"value":"Not authorized","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end