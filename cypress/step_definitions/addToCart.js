import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('I am logged in', function (){
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type(Cypress.env('valid_usn'));
    cy.get('[data-test="password"]').type(Cypress.env('valid_pass'))
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory');
});
When ('I add 2 items to the cart', function (){
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
});
Then('The cart should contain 2 items', function (){
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2');
})

//========================================
Given('I have items in my cart', function(){
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type(Cypress.env('valid_usn'));
    cy.get('[data-test="password"]').type(Cypress.env('valid_pass'));
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2');
});
When('I open the cart', function (){
    cy.get('[data-test="shopping-cart-link"]').click()
});
Then ('I should have 2 correct items listed in my cart', function(){
    cy.url().should('include', 'cart');
    cy.get('[data-test="cart-list"]').within(() => {
        cy.contains('Backpack');
        cy.contains('Bike Light');
     });
});