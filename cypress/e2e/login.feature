Feature: Login Functionality

    Scenario: Successful login with valid credentials 
        Given I open the login page 
        When I enter username "standard_user" and password "secret_sauce"
        And I click the login button 
        Then I should be redirected to the inventory page

    Scenario: Failed Login with invalid password 
        Given I open the login page 
        When I enter username "standard_user" and password "secrett_sauce"
        And I click the login button 
        Then I should see an error message
