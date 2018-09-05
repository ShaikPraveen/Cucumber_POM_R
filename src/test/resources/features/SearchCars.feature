@Search-Cars
Feature: Acceptance testing to validate Search Cars page is working fine.
   
    In order to validate that
    The Search cars page is working fine
    We will do the Acceptance testing

  @Search-Cars-Positive
  Scenario: Validate Search Cars Page
    Given I am on the Home page "https://www.carsguide.com.au/" of CarsGuide website
    When  I move to menu
      | Menu          |
      | Cars For Sale |
      | Sell My Car   |
    And click on "Search Cars" link
    And select carbrand as "BMW" from AnyMake dropdown
    And select carmodel as "1 SERIES" from SelectModel dropdown
    And select location as "Australia" from SelectLocation dropdown
    And select price as "$1,000" from Price dropdown
    And click on Find_My_Next_Car button
    Then I should see the list of Searched Cars
    And the page title should be "Bmw 1 Series Under 1000 for Sale | carsguide"
