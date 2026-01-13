Feature: Frames Page functionality
  As a user
  I want to navigate and interact with Frames pages
  So that I can verify frame-related content correctly

  Background:
    Given the user is on the Home page

  Scenario: Verify Home Page title
    When the user checks the Home page title
    Then the Home page title should be "Welcome to the-internet"

  Scenario: Verify Frames page title
    When the user navigates to the "Frames" page
    Then the page title should be "Frames"

  Scenario: Verify available frame examples
    When the user navigates to the "Frames" page
    Then the available frame examples should include:
      | Nested Frames |
      | iFrame        |

  Scenario: Read text from nested frames
    When the user navigates to the "Frames" page
    And the user opens the Nested Frames page
    Then the top middle frame text should be "MIDDLE"
    And the top left frame text should be "LEFT"
    And the top right frame text should be "RIGHT"
    And the bottom frame text should be "BOTTOM"

  Scenario: Navigate to iFrame page
    When the user navigates to the "Frames" page
    And the user opens the iFrame page
    Then the page title should contain "iFrame"
