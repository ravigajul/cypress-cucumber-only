///<reference types="cypress"/>
import { Given, When} from "@badeball/cypress-cucumber-preprocessor"

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

//div#contact_reply