Feature: Basic Auth Page Verification

   Background:
     Given The App is launched
   
   Scenario Outline: Basic Auth with various credentials
     Given User logs in with username "<username>" and password "<password>"
     When User observes the Basic Auth Status Message
     Then Status Message should contain "<expectedMessage>"

    Examples:
      | username     | password     | expectedMessage                                       |
      | admin        | admin        | Congratulations! You must have the proper credentials.|
      | invalidUser  | invalidPass  | Not authorized                                        |
      | admin        | invalidPass  | Not authorized                                        |
      | invalidUser  | admin        | Not authorized                                        |
      |              |              | Not authorized                                        |