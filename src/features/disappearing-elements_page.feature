
Feature: Disappearing Elements page

  Scenario: Verify Home Page title
    Given user opens the Home page
    Then page title should be "Welcome to the-internet"

  Scenario: Verify header and description text
    Given user opens the Disappearing Elements page
    Then header text should be "Disappearing Elements"
    And description text should contain "disappearing/reappearing"

  Scenario: Verify mandatory menus are present
    Given user opens the Disappearing Elements page
    When user reads the menu list
    Then following menus should be present
      | Home        |
      | About       |
      | Contact Us  |
      | Portfolio  |

  Scenario: Verify Gallery menu appears after refresh
    Given user opens the Disappearing Elements page
    When user checks for "Gallery" menu
    And user refreshes the page if Gallery is not present
    Then "Gallery" menu should be visible
