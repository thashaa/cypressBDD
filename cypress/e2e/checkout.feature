Feature: Checkout Functionality

  Scenario: User checks out items in the cart
    Given I am logging in
    When I add 2 items to my cart
    And I go to the cart page
    And I proceed to checkout
    And I redirected to checkout step one page
    And I enter checkout information with first name "Thasha", last name "QA", and zip code "12345"
    And I redirected to checkout step two page
    And I should have 2 correct items listed
    And I finish the checkout
    Then I should see the confirmation page
