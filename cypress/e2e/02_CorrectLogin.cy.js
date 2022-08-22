import { mainPage } from "../locators/main";
import { signupPage } from "../locators/signup";
import testUser from "../fixtures/User.json"

describe('Test Case 1: Register User', () => {

  it('open the page and check url', () => {
    cy.visit('/')
    cy.checkIfMainPageOpen();
    cy.checkMainPageUrl();
  })

  it('go to login page', () => {
    cy.get(mainPage.loginBtn).should('be.visible').click();
    cy.url().should('eq', 'https://www.automationexercise.com/login');
    cy.contains('Login to your account').should('be.visible')
  })

  it('login using test user credentials', () => {
    cy.getByQaData(signupPage.loginEmailInput).should('be.visible').type(testUser.email);
    cy.getByQaData(signupPage.loginPassInput).should('be.visible').type(testUser.pass);
    cy.getByQaData(signupPage.loginBtn).should('be.visible').click();
  })

  it('idk what next', () => {
    cy.log('TODO')
  })
})

