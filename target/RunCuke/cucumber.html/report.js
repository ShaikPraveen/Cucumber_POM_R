$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchCars.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Search Cars page is working fine.",
  "description": " \n  In order to validate that\n  The Search cars page is working fine\n  We will do the Acceptance testing",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working-fine.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 32525326916,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Validate Search Cars Page",
  "description": "",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working-fine.;validate-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the Home page \"https://www.carsguide.com.au/\" of CarsGuide website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I move to menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 12
    },
    {
      "cells": [
        "Cars For Sale"
      ],
      "line": 13
    },
    {
      "cells": [
        "Sell My Car"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click on \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select carbrand as \"BMW\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select carmodel as \"1 SERIES\" from SelectModel dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select location as \"Australia\" from SelectLocation dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select price as \"$1,000\" from Price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on Find_My_Next_Car button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see the list of Searched Cars",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the page title should be \"Bmw 1 Series Under 1000 for Sale | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_page_of_CarsGuide_website(String)"
});
formatter.result({
  "duration": 20778330093,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_menu(String\u003e)"
});
formatter.result({
  "duration": 3224261378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCarsSteps.click_on_link(String)"
});
formatter.result({
  "duration": 1896785508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carbrand_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 10409603663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 SERIES",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carmodel_as_from_SelectModel_dropdown(String)"
});
formatter.result({
  "duration": 1083435502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_location_as_from_SelectLocation_dropdown(String)"
});
formatter.result({
  "duration": 564471800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,000",
      "offset": 17
    }
  ],
  "location": "SearchCarsSteps.select_price_as_from_Price_dropdown(String)"
});
formatter.result({
  "duration": 836987121,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "duration": 565181246,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_should_see_the_list_of_Searched_Cars()"
});
formatter.result({
  "duration": 116745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Under 1000 for Sale | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 15353447019,
  "status": "passed"
});
formatter.after({
  "duration": 10619964327,
  "status": "passed"
});
formatter.uri("UsedCarsSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Used Search Cars page is working fine.",
  "description": " \n  In order to validate that\n  The Used Search cars page is working fine\n  We will do the Acceptance testing",
  "id": "acceptance-testing-to-validate-used-search-cars-page-is-working-fine.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 11322892902,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Validate Used Search Cars Page",
  "description": "",
  "id": "acceptance-testing-to-validate-used-search-cars-page-is-working-fine.;validate-used-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Used-Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the Home page \"https://www.carsguide.com.au/\" of CarsGuide website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I move to menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 12
    },
    {
      "cells": [
        "Cars For Sale"
      ],
      "line": 13
    },
    {
      "cells": [
        "Sell My Car"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click on \"Used Search Car \" link on Used  Search Cars page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select carbrand as \"AUDI\" from AnyMake dropdown on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select car model",
  "rows": [
    {
      "cells": [
        "carModel"
      ],
      "line": 18
    },
    {
      "cells": [
        "A4"
      ],
      "line": 19
    },
    {
      "cells": [
        "A3"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select location as \"NT - South\" from SelectLocation dropdown on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select price as \"$3,000\" from Price dropdown on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on Find_My_Next_Car button on Used Search Cars page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see the list of Searched Cars on Used  Search Cars page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the page title should be \"Used Audi A4 Under 3000 for Sale Sount NT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_page_of_CarsGuide_website(String)"
});
formatter.result({
  "duration": 11395757686,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_menu(String\u003e)"
});
formatter.result({
  "duration": 3609084856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Search Car ",
      "offset": 10
    }
  ],
  "location": "UsedCarsSearchSteps.click_on_link_on_Used_Search_Cars_page(String)"
});
formatter.result({
  "duration": 1623548766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUDI",
      "offset": 20
    }
  ],
  "location": "UsedCarsSearchSteps.select_carbrand_as_from_AnyMake_dropdown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "duration": 27693172075,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: AUDI\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027DESKTOP-3SUJPVT\u0027, ip: \u0027192.168.211.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:150)\r\n\tat pages.actions.UsedSearchCarsActions.selectCarMake(UsedSearchCarsActions.java:25)\r\n\tat steps.UsedCarsSearchSteps.select_carbrand_as_from_AnyMake_dropdown_on_Used_Search_Car_page(UsedCarsSearchSteps.java:26)\r\n\tat ✽.And select carbrand as \"AUDI\" from AnyMake dropdown on Used Search Car page(UsedCarsSearch.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UsedCarsSearchSteps.select_car_model(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - South",
      "offset": 20
    }
  ],
  "location": "UsedCarsSearchSteps.select_location_as_from_SelectLocation_dropdown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$3,000",
      "offset": 17
    }
  ],
  "location": "UsedCarsSearchSteps.select_price_as_from_Price_dropdown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsedCarsSearchSteps.click_on_Find_My_Next_Car_button_on_Used_Search_Cars_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsedCarsSearchSteps.i_should_see_the_list_of_Searched_Cars_on_Used_Search_Cars_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Audi A4 Under 3000 for Sale Sount NT | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1665747821,
  "status": "passed"
});
});