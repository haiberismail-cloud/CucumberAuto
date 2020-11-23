package MultiSD;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class GoogleStepDef {
	
	WebDriver driver=null;



	@Given("^User need to be on google page$")
	public void User_need_to_be_on_google_page() {
		System.setProperty("webdriver.chrome.driver", "D:\\Téléchargement\\chromedriver_win32\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("https://google.com/");
		
		
		
		
	}
	
	
	@When("^User enters search string$")
	public void  User_enters_search_string() throws InterruptedException
	{
		driver.findElement(By.xpath("//input[@type='text']")).sendKeys("selenium");
		Thread.sleep(1000);
		
	}
	
	
	

}
