Feature: Basic Auth Page Verification

#   Background:
#     Given The App is launched
   
#   Scenario: Login with Valid Credentials
#     Given User logs in with username "admin" and password "admin"
#     When User observes the Basic Auth Status Message
#     Then Status Message should contain "Congratulations! You must have the proper credentials."

# Scenario: Login with Invalid Credentials
#     Given User logs in with username "invalidUser" and password "invalidPass"
#     When User observes the Basic Auth Status Message
#     Then Status Message should contain "Not authorized"

# Scenario:Login without Credentials
#     Given User attempts to access Basic Auth page without credentials
#     When User observes the Basic Auth Status Message
#     Then Status Message should contain "Not authorized"

Scenario Outline: Basic Auth with various credentials
    Given User logs in with username "<username>" and password "<password>"
    When User observes the Basic Auth Status Message
    Then Status Message should contain "<expectedMessage>"

    Examples:
      | username     | password     | expectedMessage                                      |
      | admin        | admin        | Congratulations! You must have the proper credentials.|
      | invalidUser  | invalidPass  | Not authorized                                       |
      |              |              | Not authorized                                       |