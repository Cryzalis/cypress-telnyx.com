const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com',
    setupNodeEvents(on, config) {
      defaultCommandTimeout:15000
      // implement node event listeners here
    },
  },
});
