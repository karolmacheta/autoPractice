import { mainPage } from "../locators/main";
import { signupPage } from "../locators/signup";
import testUser from "../fixtures/User.json"

describe('Test Case 5: Register User with existing email', () => {

  it('open the page and check url', () => {
    cy.openMainPage();
  })

  it('go to login page', () => {
    cy.get(mainPage.loginBtn).should('be.visible').click();
    cy.url().should('eq', 'https://www.automationexercise.com/login');
    cy.contains('New User Signup!').should('be.visible')
  })

  it('input signup credentials', () => {
    cy.getByQaData(signupPage.signupNameInput).should('be.visible').type('testUser11');
    cy.getByQaData(signupPage.signupEmailInput).should('be.visible').type(testUser.email);
    cy.getByQaData(signupPage.signupBtn).should('be.visible').click();
  })

  it('check if correct error message is displayed for already existing email in db', () => {
    cy.contains('Email Address already exist!').should('be.visible')
  })

})

