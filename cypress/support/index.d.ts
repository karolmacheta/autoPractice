/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Custom command to ... add your description here
         * @example cy.clickOnMyJourneyInCandidateCabinet()
         */
         checkMainPageUrl(): Chainable<null>;
         checkIfMainPageOpen(): Chainable<null>;
         getByQaData(selector): Chainable<string>;
    }
}