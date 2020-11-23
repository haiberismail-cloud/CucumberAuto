package MultiSD;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;

import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.*;

public class MultiStepDef 
{
	
	












	WebDriver driver=null;



	@Given("^User need to be on the logging page$")
	public void User_need_to_be_on_the_logging_page() {
		System.setProperty("webdriver.chrome.driver", "D:\\Téléchargement\\chromedriver_win32\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("https://demoqa.com/automation-practice-form/");
		
		
		
		
	}

	@When("^User enters user \"([^\"]*)\" first name$")
	public void User_enters_user_first_name(String firstname) throws InterruptedException
	{
		
		driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys(firstname);
		Thread.sleep(1000);
	}

	@Then("^User checks if \"([^\"]*)\" user first name is present$")
	public void User_checks_if_user_first_name_is_present(String firstname) throws InterruptedException
	{
		String username=driver.findElement(By.xpath("//input[@id='firstName']")).getAttribute("value");
		Assert.assertEquals(firstname,username);
		Thread.sleep(1000);
	}

	@And("^User enters user \"([^\"]*)\" surname$")
	public void User_enters_user_surname(String surname) throws InterruptedException
	{
		driver.findElement(By.xpath("//input[@id='lastName']")).sendKeys(surname);
		Thread.sleep(1000);
	}

	@Then("^User checks first name is present$")
	public void User_checks_first_name_is_present()
	{
		String lastname=driver.findElement(By.xpath("//input[@id='lastName']")).getAttribute("value");
		Assert.assertEquals("Haiber",lastname);
		
	}


	@But("User mobile field should be blank")
	public void  User_mobile_field_should_be_blank() throws InterruptedException
	{
		String pass= driver.findElement(By.xpath("//input[@id='userNumber']")).getAttribute("value");
		Assert.assertEquals("",pass);
		Thread.sleep(1000);
	}

	@Then("close browser")
	public void close_browser()
	{
		driver.quit();
		driver=null;
	}

}



