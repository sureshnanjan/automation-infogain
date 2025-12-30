Feature: Basic Auth Page Verification

  Scenario: Logged In Basic Auth Page Header Verification
    Given User navigates to the HerokuApp site
    When User clicks on Basic Auth link
    Then Page header should be "Basic Auth"

  Scenario: Logged In Basic Auth Page Content Verification
    Given User navigates to the HerokuApp site
    When User clicks on Basic Auth link
    Then Page content should contain "Congratulations! You must have the proper credentials."

  Scenario: Logged In Basic Auth Page Footer Verification
    Given User navigates to the HerokuApp site
    When User clicks on Basic Auth link
    Then Page footer should be "Powered by Elemental Selenium"