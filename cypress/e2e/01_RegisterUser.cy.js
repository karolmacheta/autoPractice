import { mainPage } from "../locators/main";
import { signupPage } from "../locators/signup";

describe('Test Case 1: Register User', () => {

  it('open the page and check url', () => {
    cy.visit('/')
    cy.checkIfMainPageOpen();
    cy.checkMainPageUrl();
  })

  it('go to login page', () => {
    cy.get(mainPage.loginBtn).should('be.visible').click();
    cy.url().should('eq', 'https://www.automationexercise.com/login');
    cy.contains('New User Signup!').should('be.visible')
  })

  it('input signup credentials', () => {
    cy.getByQaData(signupPage.signupNameInput).should('be.visible').type('testUser01');
    cy.getByQaData(signupPage.signupEmailInput).should('be.visible').type('testUser01@test.com');
    cy.getByQaData(signupPage.signupBtn).should('be.visible').click();
  })

  it('input signup form data', () => {
    cy.get(signupPage.maleGenderBtn).click();
    cy.getByQaData('first_name').should('be.visible').type('testFirstName');
    cy.getByQaData('last_name').should('be.visible').type('testLastName');
    cy.getByQaData('password').should('be.visible').type('123456');
    cy.getByQaData('days').select('2');
    cy.getByQaData('months').select('2');
    cy.getByQaData('years').select('2021');
    cy.get(signupPage.newsletterBtn).should('be.visible').click();
    cy.get(signupPage.offersBtn).should('be.visible').click();
    cy.getByQaData('company').should('be.visible').type('Ubermensch');
    cy.getByQaData('address').should('be.visible').type('Chiang Mai, Thailand');
    cy.getByQaData('address2').should('be.visible').type('243 ถ. ซุปเปอร์ไฮเวย์ เชียงใหม่-ลำปาง Fa Ham');
    cy.getByQaData('country').select('Singapore');
    cy.getByQaData('state').should('be.visible').type('Dolnoslaskie');
    cy.getByQaData('city').should('be.visible').type('Wroclove');
    cy.getByQaData('zipcode').should('be.visible').type('85-704');
    cy.getByQaData('mobile_number').should('be.visible').type('+66123456789');
    //cy.getByQaData('create-account').click();
    cy.log('Test user creation cannot be continued as the website is broken and doesnt allow to delete the user after the creation');
  })
})

