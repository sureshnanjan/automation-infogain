Feature: Heroku App Home Page functionality
As a User when I visit the Heroku Application
I should see a valid Title

Background:
    Given The App is launched

Scenario: Home Page has a valid Title
Given User Visits HomePage
When User Observes Title
Then title should match "Welcome to the-internet"

Scenario: Home Page has a valid Sub-Title
Given User Visits HomePage
When User Observes Sub-Title
Then subtitle should match "Available Examples"
