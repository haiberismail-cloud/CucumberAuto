package com.basic.multipleScenarioSD;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		
		
		monochrome=true,
		features= {"src/test/resources/com/basic/multiplescenarioFF/"},
		glue= {"com/basic/multipleScenarioSD/"},
		
		plugin= {"pretty",
				"html:target/cucumber-htmlreport",
				"json:target/cucumber-report1.json",
				
				
				
		}
		
		
		
		)

public class RunMyMultipleScenarioTest {
	
	
	
	
	
	

}
