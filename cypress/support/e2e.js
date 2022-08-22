import { signupPage } from '../locators/signup';
import { mainPage } from '../locators/main';

import './commands'

Cypress.Cookies.defaults({
    preserve: "csrftoken"
});