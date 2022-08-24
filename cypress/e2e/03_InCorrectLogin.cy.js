import { mainPage } from "../locators/main";
import { signupPage } from "../locators/signup";

describe('Test Case 3: Login User with incorrect email and password', () => {

  it('open the page and check url', () => {
    cy.openMainPage();
  })

  it('go to login page', () => {
    cy.get(mainPage.loginBtn).should('be.visible').click();
    cy.url().should('eq', 'https://www.automationexercise.com/login');
    cy.contains('Login to your account').should('be.visible')
  })

  it('login using incorrect test user credentials', () => {
    cy.getByQaData(signupPage.loginEmailInput).should('be.visible').type('veryBadEmail@wyborcza.pl');
    cy.getByQaData(signupPage.loginPassInput).should('be.visible').type('veryBadPass');
    cy.getByQaData(signupPage.loginBtn).should('be.visible').click();
  })

  it('check if correct error message is displayed for wrong credentials', () => {
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })

})

