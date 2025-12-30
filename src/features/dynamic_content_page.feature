Feature: Dynamic Content Page
  As a user of the Heroku App
  I want to verify that content changes on dynamic page settings and 
  persists on static page

  Background:
    Given I am on the Heroku App Home Page
    And I navigate to the Dynamic Content page

    Scenario: Verify Dynamic content Page has a valid Title
    When User Observes Dynamic Content Title
    Then Dynamic content page title should match "Dynamic Content"

  Scenario: Default dynamic content changes on every reload
    When I record the current row text and image sources
    And I reload the page
    Then the new content should be different from the recorded content

  Scenario: Static version persists content across reloads
    Given I enable the static version via the "click here" link
    When I record the current row text
    And I reload the page
    Then I should find that specific rows remain unchanged