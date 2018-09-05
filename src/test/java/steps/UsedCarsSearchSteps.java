package steps;

import java.util.List;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.UsedSearchCarsActions;

public class UsedCarsSearchSteps
{
	UsedSearchCarsActions usedSearchCarsActions=new UsedSearchCarsActions();
	CarsGuideHomePageActions carsGuideHomePageActions=new CarsGuideHomePageActions();
	
	
	@When("^click on \"([^\"]*)\" link on Used  Search Cars page$")
	public void click_on_link_on_Used_Search_Cars_page(String arg1) throws Throwable
	{
		carsGuideHomePageActions.clickOnUsedCarsSearchMenu();
	    
	}

	@When("^select carbrand as \"([^\"]*)\" from AnyMake dropdown on Used Search Car page$")
	public void select_carbrand_as_from_AnyMake_dropdown_on_Used_Search_Car_page(String carBrand) throws Throwable {
	    
		usedSearchCarsActions.selectCarMake(carBrand);;
	
	}

	@When("^select car model$")
	public void select_car_model(List<String> list) throws Throwable
	{
		String menu=list.get(1);
        usedSearchCarsActions.selectCarModel(menu);

	   
	}

	@When("^select location as \"([^\"]*)\" from SelectLocation dropdown on Used Search Car page$")
	public void select_location_as_from_SelectLocation_dropdown_on_Used_Search_Car_page(String location) throws Throwable 
	{
		usedSearchCarsActions.selectCarLocation(location);
	   
	}

	@When("^select price as \"([^\"]*)\" from Price dropdown on Used Search Car page$")
	public void select_price_as_from_Price_dropdown_on_Used_Search_Car_page(String carPrice) throws Throwable
	{
		usedSearchCarsActions.selectCarPrice(carPrice);
	}

	@When("^click on Find_My_Next_Car button on Used Search Cars page$")
	public void click_on_Find_My_Next_Car_button_on_Used_Search_Cars_page() throws Throwable 
	{
		usedSearchCarsActions.clickOnFindMyNextCarBtn();
	   
	}

	@Then("^I should see the list of Searched Cars on Used  Search Cars page$")
	public void i_should_see_the_list_of_Searched_Cars_on_Used_Search_Cars_page() throws Throwable {
	    
	     System.out.println("Used Car List Populated");
	}
}
