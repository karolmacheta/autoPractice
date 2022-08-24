import { signupPage } from '../locators/signup';
import { mainPage } from '../locators/main';


Cypress.Commands.add('getByQaData', (selector) => {
    return cy.get(`[data-qa=${selector}]`)
})

Cypress.Commands.add('checkMainPageUrl', () => {
    cy.url().should('eq', 'https://www.automationexercise.com/');
    cy.log('The URL adress is validated correctly')
})

Cypress.Commands.add('checkIfMainPageOpen', () => {
    cy.get(mainPage.slider).should('be.visible');
    cy.get(mainPage.leftNavBar).should('be.visible');
    cy.get(mainPage.footer).should('be.visible');
    cy.get(mainPage.itemList).should('be.visible');
    cy.log('Main page is loaded correctly')
})

Cypress.Commands.add('openMainPage', () => {
    cy.visit('/')
    cy.checkIfMainPageOpen();
    cy.checkMainPageUrl();
});