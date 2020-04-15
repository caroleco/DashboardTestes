import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://example.cypress.io/commands/assertions'
Given('I Open Example page', () => {
    cy.visit(url)
})

Then('I see "Assertation" in the title', () => {
    cy.get('h1').should('contain','Assertions')
})