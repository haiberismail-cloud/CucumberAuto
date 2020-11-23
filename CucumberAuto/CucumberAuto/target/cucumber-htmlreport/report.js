$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/basic/firstFeatureFile/MyFirstFeature.feature");
formatter.feature({
  "line": 1,
  "name": "To validate the creation of a facebook account",
  "description": "As a user you need to open facebook homepage and do the validations",
  "id": "to-validate-the-creation-of-a-facebook-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate first name field",
  "description": "",
  "id": "to-validate-the-creation-of-a-facebook-account;validate-first-name-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User need to be on the logging page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters user first name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User checks if user first name is present",
  "keyword": "Then "
});
formatter.match({
  "location": "MyFirstStepDef.User_need_to_be_on_the_logging_page()"
});
formatter.result({
  "duration": 11489124900,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstStepDef.User_enters_user_first_name()"
});
formatter.result({
  "duration": 150058200,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstStepDef.User_checks_if_user_first_name_is_present()"
});
formatter.result({
  "duration": 59103500,
  "status": "passed"
});
});