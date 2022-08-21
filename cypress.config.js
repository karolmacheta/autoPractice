const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl" : "http://automationpractice.com",
    "chromeWebSecurity": true,
    "viewportHeight" : 1080,
    "viewportLenght" : 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
