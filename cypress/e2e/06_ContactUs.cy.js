import { contactPage } from "../locators/contact";
import { mainPage } from "../locators/main";

describe('Test Case 6: Contact Us Form', () => {

  it('open the page and check url', () => {
    cy.openMainPage();
  })

  it('go to Contact Us page', () => {
    cy.get(mainPage.contactUsBtn).should('be.visible').click();
    cy.url().should('eq', 'https://www.automationexercise.com/contact_us');
    // TODO -idk why its now working?
    //cy.get('.title.text-center').contains('TOUCH').should('be.visible');
    //
  })

  it('input contact credentials and message', () => {
    cy.getByQaData(contactPage.nameInput).should('be.visible').type('testName1');
    cy.getByQaData(contactPage.emailInput).should('be.visible').type('testEmail@wyborcza.pl');
    cy.getByQaData(contactPage.subjectInput).should('be.visible').type('test Subject');
    cy.getByQaData(contactPage.messageInput).should('be.visible').type('Test Message {enter} Nihil Timendum Est');
    cy.getByQaData(contactPage.submitBtn).should('be.visible').click();
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
    cy.get('.btn.btn-success').should('be.visible').click();
  })

  it('return to main page', () => {
    cy.checkMainPageUrl;
  })
})

