Feature: Heroku App Home Page functionality
As a User when I visit the Heroku Application
I should see a valid Title

Background:
    Given The App is launched

Scenario: Home Page has a valid Title
Given User Visits HomePage
When User Observes Title
Then title should match "Welcome to the-internet"

Scenario: Multiline String are possible in a keyword
Given I have the following text 
"""
fdsakjlkfjasdlfkaj
fsd
adsfdsaf
fdsf
affadsfffasdf
f
sfffsdfa
f
fsf


"""

Given I have the following data
|name|title|salary|
|suresh|trainer|10000|
|suresh|trainer|10000|
