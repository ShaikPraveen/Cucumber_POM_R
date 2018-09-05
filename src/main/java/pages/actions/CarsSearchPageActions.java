package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.CarSearchPageLocators;
import utilities.SeleniumDriver;

public class CarsSearchPageActions 
{
	CarSearchPageLocators carSearchPageLocators=null;
	
	
	public CarsSearchPageActions()
	{
		this.carSearchPageLocators=new CarSearchPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carSearchPageLocators);	
	}
	
	  public  void selectCarMake(String carBrand)
	  {
		  Select carselectmaker=new Select(carSearchPageLocators.carsMakeDropDown);
		  carselectmaker.selectByVisibleText(carBrand);  
	  }
	  
	  public void selectCarModel(String carModel)
	  {
		  Select carselectmaker=new Select(carSearchPageLocators.selectModelDropDown);
		  carselectmaker.selectByVisibleText(carModel);  
	  }
	  
	  
	  public void selectCarLocation(String location)
	  {
		  Select carselectmaker=new Select(carSearchPageLocators.selectLocationDropDown);
		  carselectmaker.selectByVisibleText(location);  
	  }
	  
	  public void selectCarPrice(String carPrice)
	  {
		  Select carselectmaker=new Select(carSearchPageLocators.priceDropDown);
		  carselectmaker.selectByVisibleText(carPrice);  
	  }
	
	  public void clickOnFindMyNextCarBtn()
	  {
		  
		  carSearchPageLocators.findMyNextCarBtn.click(); 
	  }
	  

}
