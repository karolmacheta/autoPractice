const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl" : "https://www.automationexercise.com",
    "chromeWebSecurity": true,
    "viewportHeight" : 1000,
    "viewportLenght" : 1000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
