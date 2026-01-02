Feature: Add Remove Elements

  Scenario: Add an element
    Given I navigate to the Add Remove Elements
    When I click on Add Element
    Then I should see the Delete button

  Scenario: Remove element after adding the element
    Given I navigate to the Add Remove Elements
    When I click on Add Element
    Then I should see the Delete button
	And I should be able to delete them