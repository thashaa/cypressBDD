import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('I am logging in', function (){
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type(Cypress.env('valid_usn'));
    cy.get('[data-test="password"]').type(Cypress.env('valid_pass'))
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory');
});
When ('I add 2 items to my cart', function (){
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
});
When('I go to the cart page', function (){
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', 'cart');
    cy.get('[data-test="cart-list"]').within(() => {
        cy.contains('Backpack');
        cy.contains('Bike Light');
    });
});
When('I proceed to checkout', function (){
    cy.get('[data-test="checkout"]').click()
});
When('I redirected to checkout step one page', function (){
    cy.url().should('include', 'checkout-step-one');
});
When ('I enter checkout information with first name {string}, last name {string}, and zip code {string}', function(firstName, lastName,zipCode){
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(zipCode);
    cy.get('[data-test="continue"]').click();
});
When('I redirected to checkout step two page', function (){
    cy.url().should('include', 'checkout-step-two');
});
When('I should have 2 correct items listed', function (){
    cy.get('[data-test="cart-list"]').within(() => {
        cy.contains('Backpack');
        cy.contains('Bike Light');
    });
});
When('I finish the checkout', function (){
    cy.get('[data-test="finish"]').click()
});
Then('I should see the confirmation page', function (){
    cy.url().should('include', 'checkout-complete');
    cy.get('[data-test="secondary-header"]').should('contain.text', 'Checkout: Complete!');
});
