///<reference types="cypress"/>
import { Given, When,Then} from "@badeball/cypress-cucumber-preprocessor"

When('I type a first name',()=>{
    cy.get('input[name="first_name"]').type('Ravi')
})

When('I type a last name',()=>{
    cy.get('input[name="last_name"]').type('Ravi')
})

When('I type an email address',()=>{
    cy.get('input[placeholder="Email Address"]').type('Ravi.Gajul@test.com')
})

When('I type the comments',()=>{
    cy.get('.feedback-input:nth-child(4)').type('Some Comment')
})
When('I click on submit button',()=>{
    cy.get('input[type="submit"]').click()
})

Then('I should see the error message',()=>{
    cy.get('body').contains('Error: all fields are required')
})