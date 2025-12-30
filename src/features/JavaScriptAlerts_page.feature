Feature: JavaScript Alerts
  Verify the behavior of JavaScript alerts, confirms, and prompts

  Scenario: Verify JS Alert
    Given I navigate to the JavaScript Alerts page
    When I click on the JS Alert button
    Then I should see the result text "You successfully clicked an alert"

  Scenario: Verify JS Confirm - OK
    Given I navigate to the JavaScript Alerts page
    When I click on the JS Confirm button
    Then I should see the result text "You clicked: Ok"

  Scenario: Verify JS Prompt
    Given I navigate to the JavaScript Alerts page
    When I click on the JS Prompt button
    Then I should see the result text "You entered: Playwright"
