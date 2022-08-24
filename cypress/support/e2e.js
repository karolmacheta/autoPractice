import { signupPage } from '../locators/signup';
import { mainPage } from '../locators/main';

import './commands'

Cypress.Cookies.defaults({
    preserve: "csrftoken"
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })