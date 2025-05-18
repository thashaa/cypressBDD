import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('I open the login page', function (){
    cy.visit("https://www.saucedemo.com/");
});
When ('I enter username {string} and password {string}', function (username, password) {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
})
When ("I click the login button", function (){
    cy.get('[data-test="login-button"]').click();
});
Then ('I should be redirected to the inventory page', function (){
    cy.url().should('include', 'inventory')
});
Then('I should see an error message', () => {
  cy.get('[data-test="error"]').should(
    "contain",
    "Epic sadface: Username and password do not match any user in this service"
  );
});