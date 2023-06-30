///<reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I type a first name", () => {
  cy.get('input[name="first_name"]').type("Ravi");
});

When("I type a last name", () => {
  cy.get('input[name="last_name"]').type("Gajul");
});

When("I type an email address", () => {
  cy.get('input[placeholder="Email Address"]').type("Ravi.Gajul@test.com");
});

When("I type the comments", () => {
  cy.get(".feedback-input:nth-child(4)").type("Some Comment");
});
When("I click on submit button", () => {
  cy.get('input[type="submit"]').click();
});

Then("I should see the error message", () => {
  cy.get("body").contains("Error: all fields are required");
});

When("I type a specific first name {string}", (first_name) => {
  cy.get('input[name="first_name"]').type(first_name);
});

When("I type a specific last name {string}", (last_name) => {
  cy.get('input[name="last_name"]').type(last_name);
});

When("I type a specific email address {string}", (email) => {
  cy.get('input[placeholder="Email Address"]').type(email);
});

When(
  "I type a specific word {string} and a number {int} within comments field",
  (comment, num) => {
    cy.get(".feedback-input:nth-child(4)").type(comment + " " + num);
  }
);

Then("I should see the {string}", (message) => {
  cy.get("body,div#contact_reply h1").contains(message);
});
