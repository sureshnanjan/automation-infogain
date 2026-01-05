


Feature: Entry Ad modal window
  The application should display and control the entry ad modal window
 
 
  Scenario: Verify entry ad modal is visible and can be closed
    Given the user navigates from Home Page to Entry Ad page
    When Start to type your When step here the entry ad modal should be visible
    Then Start to type your Then step here the user clicks the Close button in the modal
    
 
 
  Scenario: Verify entry ad modal is generated again after re-enable
    Given the user navigates to the Entry Ad page
    When  the user are able to get "Entry Ad" title
    Then the user clicks the re-enable link on the Entry Ad page
