
package com.basic.datadrivenSD;




import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		
		
		monochrome=true,
		features= {"src/test/resources/com/basic/DatadrivenFF/"},
		glue= {"com/basic/datadrivenSD/"},
		
		plugin= {"pretty",
				"html:target/cucumber-htmlreport",
				"json:target/cucumber-report2.json"}
		
		)
				
				
				
		
		
		
	

public class RunDataDrivenTest {

}
