$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoFF.feature");
formatter.feature({
  "line": 1,
  "name": "Validate first and last name",
  "description": "As a user you need to validate first and last name",
  "id": "validate-first-and-last-name",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Check first name and last name",
  "description": "",
  "id": "validate-first-and-last-name;check-first-name-and-last-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User need to be on demo site page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters first name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters last name",
  "keyword": "When "
});
formatter.match({
  "location": "DemoStepDef.User_need_to_be_on_demo_site_page()"
});
formatter.result({
  "duration": 11959378600,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDef.User_enters_first_name()"
});
formatter.result({
  "duration": 1211465100,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDef.User_enters_last_name()"
});
formatter.result({
  "duration": 1152372200,
  "status": "passed"
});
formatter.uri("GoogleFF.feature");
formatter.feature({
  "line": 1,
  "name": "Validate search of google",
  "description": "As a user you need to validate search of google",
  "id": "validate-search-of-google",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate search field",
  "description": "",
  "id": "validate-search-of-google;validate-search-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User need to be on google page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters search string",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleStepDef.User_need_to_be_on_google_page()"
});
formatter.result({
  "duration": 7675253800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDef.User_enters_search_string()"
});
formatter.result({
  "duration": 1210141800,
  "status": "passed"
});
formatter.uri("MultiFF.feature");
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
  "name": "User enters user \"Ismail\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiStepDef.User_need_to_be_on_the_logging_page()"
});
formatter.result({
  "duration": 7268095100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ismail",
      "offset": 18
    }
  ],
  "location": "MultiStepDef.User_enters_user_first_name(String)"
});
formatter.result({
  "duration": 1170310000,
  "status": "passed"
});
formatter.match({
  "location": "MultiStepDef.close_browser()"
});
formatter.result({
  "duration": 806717000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate filling man fields",
  "description": "",
  "id": "to-validate-the-creation-of-a-facebook-account;validate-filling-man-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User need to be on the logging page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters user \"Yahya\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters user \"Haiber\" surname",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User checks first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User mobile field should be blank",
  "keyword": "But "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiStepDef.User_need_to_be_on_the_logging_page()"
});
formatter.result({
  "duration": 6721558100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yahya",
      "offset": 18
    }
  ],
  "location": "MultiStepDef.User_enters_user_first_name(String)"
});
formatter.result({
  "duration": 1188354900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Haiber",
      "offset": 18
    }
  ],
  "location": "MultiStepDef.User_enters_user_surname(String)"
});
formatter.result({
  "duration": 1203979500,
  "status": "passed"
});
formatter.match({
  "location": "MultiStepDef.User_checks_first_name_is_present()"
});
formatter.result({
  "duration": 89446600,
  "status": "passed"
});
formatter.match({
  "location": "MultiStepDef.User_mobile_field_should_be_blank()"
});
formatter.result({
  "duration": 1053799900,
  "status": "passed"
});
});