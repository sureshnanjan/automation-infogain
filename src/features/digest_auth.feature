Feature: Digest Authentication

  Scenario Outline: Digest Authentication with different credentials
    Given User is on Heroku App Home Page
    When User navigates to Digest Auth page with "<username>" and "<password>"
    Then authentication result should be "<result>"

    Examples:
      | username | password | result      |
      | admin    | admin    | success     |
      | wrong    | wrong    | unauthorized |
      | admin    | wrong    | unauthorized |
      | wrong    | admin    | unauthorized |
