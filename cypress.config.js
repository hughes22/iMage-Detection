const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://image-matching.amalitech-dev.net/",

    viewportHeight: 1080,
    viewportWidth: 1920, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
