Feature: To validate the creation of a facebook account 
As a user you need to open facebook homepage and do the validations

Background: common login steps 
Given User need to be on the logging page 

Scenario: Validate first name field 
When User enters user "Ismail" first name
Then User checks if "Ismail" user first name is present
Then close browser



Scenario: Validate filling man fields 
When User enters user "Yahya" first name 
And User enters user "Haiber" surname
Then User checks first name is present 
But User mobile field should be blank 
Then close browser