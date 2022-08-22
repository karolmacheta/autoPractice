// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getByQaData', (selector) => {
    return cy.get(`[data-qa=${selector}]`)
  })

Cypress.Commands.add('checkMainPageUrl', () => {
    cy.url().should('eq', 'https://www.automationexercise.com/');
    cy.log('The URL adress is validated correctly')
})

Cypress.Commands.add('checkIfMainPageOpen', () => {
    cy.get('section#slider').should('be.visible');
    cy.get('.left-sidebar').should('be.visible');
    cy.get('footer#footer').should('be.visible');
    cy.get('.features_items').should('be.visible');
    cy.log('Main page is loaded correctly')
})