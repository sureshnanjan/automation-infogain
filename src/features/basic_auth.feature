Feature: Basic Auth Page Verification

  Background: Navigation to Basic Auth page
    Given User navigates to the Basic Auth Page
   
  Scenario: Logged In Basic Auth Page Header Verification
    When User observes the Basic Auth page header
    Then Page header should be "Basic Auth"

  Scenario: Logged In Basic Auth Page Content Verification
    When User observes the Basic Auth page content
    Then Page content should contain "Congratulations! You must have the proper credentials."

  Scenario: Logged In Basic Auth Page Footer Verification
    When User observes the Basic Auth page footer
    Then Page footer should be "Powered by Elemental Selenium"