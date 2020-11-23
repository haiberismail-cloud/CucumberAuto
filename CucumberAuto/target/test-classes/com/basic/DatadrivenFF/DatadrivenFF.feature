
Feature: To validate the creation of a facebook account 
As a user you need to open facebook homepage and do the validations


Scenario Outline: Validate filling man fields 
Given User need to be on the logging page 
When User enters user "<user>" first name 
And User enters user "<username>" surname

But User mobile field should be blank 
Then close browser

Examples: 

	| user   | username |
	| ismail | Haiber   |
	| Yahya  | Kinini   | 