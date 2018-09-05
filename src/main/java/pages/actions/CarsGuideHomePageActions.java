package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.CarsGuideHomePageLocators;
import utilities.SeleniumDriver;

public class CarsGuideHomePageActions 
{
	CarsGuideHomePageLocators carsGuideHomePageLocators=null;
	
	public CarsGuideHomePageActions()
	{
		this.carsGuideHomePageLocators=new CarsGuideHomePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carsGuideHomePageLocators);
	}
	
	public void moveToCarsForSaleMenu()
	{
		Actions act=new Actions(SeleniumDriver.getDriver());
		act.moveToElement(carsGuideHomePageLocators.carsForSaleLink).build().perform();	
	}
	
	public void clickOnSearchCarsMenu()
	{
		carsGuideHomePageLocators.searchCarsLink.click();
		
	}
	
	public void clickOnUsedCarsSearchMenu()
	{
		carsGuideHomePageLocators.usedCarsSearchLink.click();	
	}
	
	public void moveToSellMyCarMenu()
	{
		Actions act=new Actions(SeleniumDriver.getDriver());
		act.moveToElement(carsGuideHomePageLocators.sellMyCarLink).perform();
		
	}
	
	

}
