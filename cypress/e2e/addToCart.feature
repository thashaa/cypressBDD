Feature: Cart Functionality 

    Scenario: Add items to cart
        Given  I am logged in 
        When I add 2 items to the cart 
        Then The cart should contain 2 items 
    Scenario: Check the cart contents
        Given I have items in my cart
        When I open the cart 
        Then I should have 2 correct items listed in my cart 

