Feature: Disappearing Elements Page functionality

Scenario: Disappearing Elements page loads successfully
  Given User visits Disappearing Elements page
  When User observes the page
  Then page heading should be "Disappearing Elements"

Scenario: Mandatory menu links are visible
  Given User visits Disappearing Elements page
  When User observes the menu
  Then Home link should be visible
  And About link should be visible
  And Contact Us link should be visible
  And Portfolio link should be visible

Scenario: Gallery link visibility before refresh
  Given User visits Disappearing Elements page
  When User observes the menu
  Then Gallery link may be visible

Scenario: Gallery link behavior after refresh
  Given User visits Disappearing Elements page
  When User refreshes the page
  Then Gallery link may disappear

Scenario: Menu remains stable after refresh
  Given User visits Disappearing Elements page
  When User refreshes the page
  Then mandatory menu links should be visible
