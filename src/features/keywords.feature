Feature: Keywords applicable in Gherkin Syntax
Background:
    Given The App is launched with ollowing configuration
    |browser|url|state|
    |chrome|url1|maximised|
    |FF|url2|silent|
    
@smoke @homePage
Scenario: Valid text
Given I have 1 and 2 and 3 the result is "SIX"

Scenario: Multiple Values in my Gherkin
Given I have 1,2,3,4,5,6