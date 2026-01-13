Feature: A/B Testing Page functionality

Scenario: A/B Testing Page has a valid Title
Given User Visits HomePage
Given User accesses ABTestingPage
# When User Observes ABTesting page title
Then header should match "A/B Test Control"

Scenario: A/B Testing Page has a valid content
Given User Visits HomePage
Given User accesses ABTestingPage
When User Observes content
Then content should match "Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works better towards a desired outcome (e.g. a user action such as a click-through)."

Scenario: A/B Testing Page has a valid footer
Given User Visits HomePage
Given User accesses ABTestingPage
When User Observes footer
Then footer should match "Powered by Elemental Selenium"

Scenario: Disable AB Testing
Given User Visits HomePage  
Given User accesses ABTestingPage
When User Disables AB Testing
Then AB Testing should be disabled

Scenario: Enable AB Testing
Given User Visits HomePage  
Given User accesses ABTestingPage
When User Enables AB Testing
Then AB Testing should be enabled