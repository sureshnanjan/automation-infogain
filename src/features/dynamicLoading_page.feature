Feature: Dynamic Loading Page functionality
  As a User when I visit the Dynamic Loading Page of Heroku Application
  I should see a valid Title and content on the page

  Background:
    Given User Visits HerokuApp site
    When User clicks on Dynamic Loading Link
    Then User should be navigated to Dynamic Loading Page

  Scenario: Dynamic Loading Page has a valid Title
    And Title should match "Dynamically Loaded Page Elements"

    
Scenario: Verify Description on Dynamic Loading Page
  And The page description should contain:
    """
    It's common to see an action get triggered that returns a result dynamically. It does not rely on the page to reload or finish loading. The page automatically gets updated (e.g. hiding elements, showing elements, updating copy, etc) through the use of JavaScript.
    """

  Scenario Outline: Verify Example pages load and show "Hello World!"
    When User clicks "<exampleLink>"
    When User clicks the "Start" button"
    Then User get text should be "Hello World!"

    Examples:
      | exampleLink                                | examplePage |
      | Example 1: Element on page that is hidden  | Example 1   |
      | Example 2: Element rendered after the fact | Example 2   |
