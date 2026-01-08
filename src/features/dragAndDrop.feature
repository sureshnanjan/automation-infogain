Feature: Drag and Drop functionality

  As a user
  I want to drag an element and drop it into a target area
  So that I can verify drag and drop works correctly

  Scenario: Drag and Drop Page has a valid Title
    Given user navigates to the drag and drop page
    Then title should match the text "Drag and Drop"

  Scenario: Successful drag and drop from A to B
    Given user navigates to the drag and drop page
    When user drags the source element A and drops it into the target element B
    Then the element should be dropped successfully from A to B

  Scenario: Successful drag and drop from B to A
    Given user navigates to the drag and drop page
    When user drags the source element B and drops it into the target element A
    Then the element should be dropped successfully from B to A
