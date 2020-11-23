Feature: To validate the creation of a facebook account 
As a user you need to open facebook homepage and do the validations

Scenario: Validate first name field 
Given User need to be on the logging page 
When User enters user first name 
Then User checks if user first name is present
Then close browser



Scenario: Validate filling man fields 
Given User need to be on the logging page 
When User enters user first name 
And User enters user surname 
Then User checks first name is present 
But User mobile field should be blank 
Then close browser