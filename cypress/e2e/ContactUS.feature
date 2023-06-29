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

    Scenario: Submit the contact us page with invalid details
        Given I navigate to webdriveruniversity home page
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I type the comments
        And I click on submit button
        Then I should see the error message
    Scenario: Submit the contact us page with valid details - using specific data
        Given I navigate to webdriveruniversity home page
        When I click on the contact us button
        And I type a specific first name "Ravi"
        And I type a specific last name "Gajul"
        And I type a specific email address "Ravi.Gajul@Test.com"
        And I type a specific word "Somecomment" and a number 2222 within comments field
        And I click on submit button
        Then I should see the thank you message