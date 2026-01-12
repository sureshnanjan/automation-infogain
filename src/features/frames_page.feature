Feature: Frames page validation
As a user
  I want to access the Frames section
  So that I can verify available frame options

Background: User navigate to HomePage

Scenario: Verify Frames link is visible on Home Page
    Then Frames link should be visible

  Scenario: Verify navigation to Frames page
    When user clicks on Frames link
    Then user should be navigated to Frames page
    And Frames page title should be "Frames"

  Scenario: Verify available frame options on Frames page
    When user clicks on Frames link
    Then Nested Frames link should be visible
    And iFrame link should be visible