package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.UsedSearchCarsLocators;
import utilities.SeleniumDriver;

public class UsedSearchCarsActions 
{
	
	
	UsedSearchCarsLocators usedSearchCarsLocators=null;

	
	public UsedSearchCarsActions()
	{
		this.usedSearchCarsLocators=new UsedSearchCarsLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), usedSearchCarsLocators);
	}
	
	  public void selectCarMake(String carBrand)
	  {
		  Select carselectmaker=new Select(usedSearchCarsLocators.selectModelDropDown);
		  carselectmaker.selectByVisibleText(carBrand);  
	  }
	  
	  public void selectCarModel(String carModel)
	  {
		  Select carselectmaker=new Select(usedSearchCarsLocators.selectModelDropDown);
		  carselectmaker.selectByVisibleText(carModel);  
	  }
	  
	  
	  public void selectCarLocation(String location)
	  {
		  Select carselectmaker=new Select(usedSearchCarsLocators.selectLocationDropDown);
		  carselectmaker.selectByVisibleText(location);  
	  }
	  
	  public void selectCarPrice(String carPrice)
	  {
		  Select carselectmaker=new Select(usedSearchCarsLocators.priceDropDown);
		  carselectmaker.selectByVisibleText(carPrice);  
	  }
	
	  public void clickOnFindMyNextCarBtn()
	  {
		  
		  usedSearchCarsLocators.findMyNextCarBtn.click(); 
	  }
	  

	
}
