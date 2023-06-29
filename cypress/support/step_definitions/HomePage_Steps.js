///<reference types="cypress"/>
import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
const url='https://webdriveruniversity.com/index.html';

Given('I navigate to webdriveruniversity home page', () => {
    cy.visit(url)
})

When('I click on the contact us button',()=>{
    cy.get('a#contact-us').invoke('removeAttr','target').click()
})

Then('I should see the thank you message',()=>{
    cy.get('div#contact_reply h1').should('have.text','Thank You for your Message!')
})