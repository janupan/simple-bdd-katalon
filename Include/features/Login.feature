Feature: Login feature

  Scenario Outline: As a user, I should be able to login with valid credentials
    Given User navigates to login page
    When User enter the valid <username> and <password>
    And Click on the login button
    Then User is navigated to homapage

    Examples: 
      | username  | password |
      | telkom_dbs	| MG0ylDrJ4ns= |
