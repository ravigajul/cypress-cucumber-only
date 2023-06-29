Feature: Webdriver universtiy - contact us page
    Scenario: Submit the contact us page with valid details
        Given I navigate to webdriveruniversity home page
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I type an email address
        And I type the comments
        And I click on submit button
        Then I should see the thank you message
