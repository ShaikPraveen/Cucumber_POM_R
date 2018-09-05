@Used-Search-Cars
Feature: Acceptance testing to validate Used Search Cars page is working fine.
   
    In order to validate that
    The Used Search cars page is working fine
    We will do the Acceptance testing

  @Used-Search-Cars-Positive
  Scenario: Validate Used Search Cars Page
    Given I am on the Home page "https://www.carsguide.com.au/" of CarsGuide website
    When I move to menu
      | Menu          |
      | Cars For Sale |
      | Sell My Car   |
    And click on "Used Search Car " link on Used  Search Cars page
    And select carbrand as "AUDI" from AnyMake dropdown on Used Search Car page
    And select car model
      | carModel |
      | A4       |
      | A3       |
    And select location as "NT - South" from SelectLocation dropdown on Used Search Car page
    And select price as "$3,000" from Price dropdown on Used Search Car page
    And click on Find_My_Next_Car button on Used Search Cars page
    Then I should see the list of Searched Cars on Used  Search Cars page
    And the page title should be "Used Audi A4 Under 3000 for Sale Sount NT | carsguide"
