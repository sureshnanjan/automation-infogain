Feature: JavaScript Alerts
  Verify the behavior of JavaScript alerts, confirms, and prompts

  Background:
    Given I navigate to the JavaScript Alerts page

  Scenario: Verify JS Alert
    When I click on the JS Alert button
    Then I should see the result text "You successfully clicked an alert"

  Scenario: Verify JS Confirm - OK
    When I click on the JS Confirm button
    Then I should see the result text "You clicked: Ok"

  Scenario: Verify JS Confirm - Cancel
    When I cancel the JS Confirm dialog
    Then I should see the result text "You clicked: Cancel"

  Scenario: Verify JS Prompt - OK
    When I enter "Playwright" in the JS Prompt and accept
    Then I should see the result text "You entered: Playwright"

  Scenario: Verify JS Prompt - Cancel
    When I cancel the JS Prompt dialog
    Then I should see the result text "You entered: null"
