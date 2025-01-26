const { defineConfig } = require("cypress");
module.exports = defineConfig({
  ProjectId: "4c1b7dba-1722-4aea-b73f-3cbb52333916",

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

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
