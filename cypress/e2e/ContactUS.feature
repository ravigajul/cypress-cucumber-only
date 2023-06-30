@regression
Feature: Webdriver universtiy - contact us page
    Background: pre steps before any scenario is run
        Given I navigate to webdriveruniversity home page
        When I click on the contact us button
    @sanity
    Scenario: Submit the contact us page with valid details
        And I type a first name
        And I type a last name
        And I type an email address
        And I type the comments
        And I click on submit button
        Then I should see the thank you message
    @smoke
    Scenario: Submit the contact us page with invalid details
        And I type a first name
        And I type a last name
        And I type the comments
        And I click on submit button
        Then I should see the error message
    Scenario: Submit the contact us page with valid details - using specific data
        And I type a specific first name "Ravi"
        And I type a specific last name "Gajul"
        And I type a specific email address "Ravi.Gajul@Test.com"
        And I type a specific word "Hey There" and a number 2222 within comments field
        And I click on submit button
        Then I should see the thank you message

    Scenario Outline: Validate both valid and invalid credentials in one scenario using scenario outline
        And I type a specific first name <First_Name>
        And I type a specific last name <Last_Name>
        And I type a specific email address <Email>
        And I type a specific word <Comment> and a number <Num> within comments field
        And I click on submit button
        Then I should see the <Message>
        Examples:
            | First_Name | Last_Name | Email                 | Comment    | Num  | Message                        |
            | "Ravi"     | "Gajul"   | "Ravi.Gajul@Test.com" | "Comment1" | 2222 | "Thank You for your Message!"  |
            | "Nick"     | "Jonas"   | "something"           | "Comment2" | 2223 | "Error: Invalid email address" |