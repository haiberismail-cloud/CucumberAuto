package com.basic.firstFeatureFile;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		
		
		monochrome=true,
		//dryRun=true,
		features= {"src/test/resources/com/basic/FirstFeatureFileFF/"},
		glue= {"com/basic/firstFeatureFile/"},
		
		plugin= {"pretty",
				"html:target/cucumber-htmlreport",
				"json:target/cucumber-report.json",
				
				
				
		}
		
		
		
		)

public class RunMyFirstFeatureTest {
	
	
	
	
	
	

}
