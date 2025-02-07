const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  ProjectId: "4c1b7dba-1722-4aea-b73f-3cbb52333916",

  e2e: {
    env: {
      home_url: "https://www.saucedemo.com/",
      username_standard: "standard_user",
      username_incorrect: "user_name_incorrect",
      username_locked_out: "locked_out_user",
      username_problem: "problem_user",
      username_performance_glitch_user: "performance_glitch_user",
      username_error_user: "error_user",
      username_visual_user: "visual_user",
      password: "secret_sauce",
      password_incorrect:"secret",
      users:[
        {
          username_standard: "standard_user",
          username_problem: "problem_user",
          username_performance_glitch_user: "performance_glitch_user",
          username_visual_user: "visual_user",
  
        }
      ]
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
   
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  
  },
});
