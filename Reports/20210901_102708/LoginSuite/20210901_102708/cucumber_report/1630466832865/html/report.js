$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/janupan/git/simple-bdd-katalon/Include/features/Login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "As a user, I should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigates to login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter the valid \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User is navigated to homapage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "telkom_dbs",
        "MG0ylDrJ4ns\u003d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a user, I should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigates to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.navigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid telkom_dbs and MG0ylDrJ4ns\u003d",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.enterTheValidCred(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to homapage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyHomePage()"
});
formatter.result({
  "status": "passed"
});
});