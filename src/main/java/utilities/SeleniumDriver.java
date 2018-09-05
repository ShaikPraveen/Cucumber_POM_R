package utilities;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumDriver
{
	private static SeleniumDriver selniumdriver;
	
	//Initialize driver
	private static WebDriver driver;
	private static WebDriverWait waitdriver;
	public final static int TIMEOUT=20;
	public final static int PAGE_LOAD_TIMEOUT=50;
	
	
	
	private SeleniumDriver()
	{
		driver=new FirefoxDriver();
		driver.manage().window().maximize();
		
		waitdriver=new WebDriverWait(driver, TIMEOUT);
        driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		
	}
	
	public static void openPage(String url)
	{
		driver.get(url);
	}
	
	
	public static WebDriver getDriver()
	{
		return driver;
	}
	
	public static void setUpDriver()
	{
		if (selniumdriver==null) 
		{
			selniumdriver =new SeleniumDriver();
			
		}
	}
	
	
	public static void teardown()
	{
		if (driver !=null) 
		{
			driver.close();
			driver.quit();	
		}
		selniumdriver=null;
	}
	
	
	

}
