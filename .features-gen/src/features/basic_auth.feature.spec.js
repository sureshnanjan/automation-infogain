// Generated from: src\features\basic_auth.feature
import { test } from "playwright-bdd";

test.describe('Basic Auth Page Verification', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('The App is launched', null, { page }); 
  });
  
  test.describe('Basic Auth with various credentials', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('User logs in with username "admin" and password "admin"', null, { page }); 
      await When('User observes the Basic Auth Status Message'); 
      await Then('Status Message should contain "Congratulations! You must have the proper credentials."', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('User logs in with username "invalidUser" and password "invalidPass"', null, { page }); 
      await When('User observes the Basic Auth Status Message'); 
      await Then('Status Message should contain "Not authorized"', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('User logs in with username "admin" and password "invalidPass"', null, { page }); 
      await When('User observes the Basic Auth Status Message'); 
      await Then('Status Message should contain "Not authorized"', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('User logs in with username "invalidUser" and password "admin"', null, { page }); 
      await When('User observes the Basic Auth Status Message'); 
      await Then('Status Message should contain "Not authorized"', null, { page }); 
    });

    test('Example #5', async ({ Given, When, Then, page }) => { 
      await Given('User logs in with username "" and password ""', null, { page }); 
      await When('User observes the Basic Auth Status Message'); 
      await Then('Status Message should contain "Not authorized"', null, { page }); 
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
  {"pwTestLine":12,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The App is launched","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User logs in with username \"admin\" and password \"admin\"","stepMatchArguments":[{"group":{"start":27,"value":"\"admin\"","children":[{"start":28,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"admin\"","children":[{"start":49,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User observes the Basic Auth Status Message","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Status Message should contain \"Congratulations! You must have the proper credentials.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Congratulations! You must have the proper credentials.\"","children":[{"start":31,"value":"Congratulations! You must have the proper credentials.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The App is launched","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User logs in with username \"invalidUser\" and password \"invalidPass\"","stepMatchArguments":[{"group":{"start":27,"value":"\"invalidUser\"","children":[{"start":28,"value":"invalidUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"invalidPass\"","children":[{"start":55,"value":"invalidPass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User observes the Basic Auth Status Message","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Status Message should contain \"Not authorized\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Not authorized\"","children":[{"start":31,"value":"Not authorized","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The App is launched","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User logs in with username \"admin\" and password \"invalidPass\"","stepMatchArguments":[{"group":{"start":27,"value":"\"admin\"","children":[{"start":28,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"invalidPass\"","children":[{"start":49,"value":"invalidPass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User observes the Basic Auth Status Message","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Status Message should contain \"Not authorized\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Not authorized\"","children":[{"start":31,"value":"Not authorized","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The App is launched","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User logs in with username \"invalidUser\" and password \"admin\"","stepMatchArguments":[{"group":{"start":27,"value":"\"invalidUser\"","children":[{"start":28,"value":"invalidUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"admin\"","children":[{"start":55,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User observes the Basic Auth Status Message","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Status Message should contain \"Not authorized\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Not authorized\"","children":[{"start":31,"value":"Not authorized","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The App is launched","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User logs in with username \"\" and password \"\"","stepMatchArguments":[{"group":{"start":27,"value":"\"\"","children":[{"start":28,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"\"","children":[{"start":44,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User observes the Basic Auth Status Message","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Status Message should contain \"Not authorized\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Not authorized\"","children":[{"start":31,"value":"Not authorized","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end