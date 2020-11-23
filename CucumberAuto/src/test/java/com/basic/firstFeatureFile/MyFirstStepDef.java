package com.basic.firstFeatureFile;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.*;






public class MyFirstStepDef {
	
	
	WebDriver driver;
	

	
	@Given("^User need to be on the logging page$")
	public void User_need_to_be_on_the_logging_page() {
		System.setProperty("webdriver.chrome.driver", "D:\\Téléchargement\\chromedriver_win32\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("https://www.tumblr.com/login");
		
		
	}
	
	@When("^User enters user first name$")
	public void User_enters_user_first_name()
	{
		
		driver.findElement(By.xpath("//input[@id='signup_determine_email']")).sendKeys("Ismail");
	}
	
	@Then("^User checks if user first name is present$")
	public void User_checks_if_user_first_name_is_present()
	{
		String username=driver.findElement(By.xpath("//input[@id='signup_determine_email']")).getAttribute("value");
		Assert.assertEquals("Ismail",username);
	}

}
