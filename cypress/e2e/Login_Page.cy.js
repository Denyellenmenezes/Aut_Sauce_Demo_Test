describe('login', () => {
    it('Access login page', () => {
        cy.title().should('eq', 'Swag Labs');
    });

    context('Success Login', () => {
        
        it('Login', () => {
            cy.login(Cypress.env('username_standard'), Cypress.env('password'));
            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        });
        
        it('Login using an Accepted problem user', () => {
            cy.login(Cypress.env('username_problem'), Cypress.env('password'));
            cy.show_logo_inventory();
            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
            cy.Verify_error_img_displayed();
        });
        
        it('Login using an Accepted performance_glitch_user', () => {
            cy.login(Cypress.env('username_performance_glitch_user'), Cypress.env('password'));
            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
            cy.show_logo_inventory();
        });
        
        it('Login using an Accepted error_user', () => {
            cy.login(Cypress.env('username_error_user'), Cypress.env('password'));
            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
            cy.show_logo_inventory();
        });
        
        it('Login using Accepted visual user', () => {
            cy.login(Cypress.env('username_visual_user'), Cypress.env('password'));
            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
            cy.show_logo_inventory();
        });
    });

    context('Try to login with incorrect data', () => {
        
        it('Try to login with wrong username', () => {
            cy.login(Cypress.env('username_incorrect'), Cypress.env('password'));
            cy.url().should('eq', 'https://www.saucedemo.com/');
            cy.contains('h3', 'Epic sadface: Username and password do not match any user in this service');
        });
        
        it('Try to login with wrong password', () => {
            cy.login(Cypress.env('username_standard'), Cypress.env('password_incorrect'));
            cy.url().should('eq', 'https://www.saucedemo.com/');
            cy.contains('h3', 'Epic sadface: Username and password do not match any user in this service');
        });
        
        it('Try to login with wrong password and verify error message existence', () => {
            cy.login(Cypress.env('username_standard'), Cypress.env('password_incorrect'));
            cy.show_error_message();
            cy.contains('h3', 'Epic sadface: Username and password do not match any user in this service');
        });
        
        it('Try to login with wrong username and verify error message existence', () => {
            cy.login(Cypress.env('username_incorrect'), Cypress.env('password'));
            cy.show_error_message();
            cy.contains('h3', 'Epic sadface: Username and password do not match any user in this service');
        });
        it('Verify that a not accepted user cannot log in', () => {
            const randomtext = Math.random().toString(25).substring(2, 10);
            const forbiddenvalue = Cypress.env('users');
            cy.login(randomtext, Cypress.env('password'));
            expect(randomtext).not.to.eq(forbiddenvalue);
            cy.contains('h3', 'Epic sadface: Username and password do not match any user in this service');
        });
    });

    context('Try to login with locked out user', () => {
        it('Try to login using an Accepted locked out user and verify error message', () => {
            cy.login(Cypress.env('username_locked_out'), Cypress.env('password'));
            cy.show_error_message();
            cy.contains('h3', 'Epic sadface: Sorry, this user has been locked out.');
        });
    });

    context('Performance Testing', () => {
        
        it('Performance Login Test', () => {
            let startTime = Date.now();
            cy.login(Cypress.env('username_performance_glitch_user'), Cypress.env('password'));
            cy.window().then(() => {
                const endTime = Date.now();
                const elapsedTime = endTime - startTime;
                cy.wrap(elapsedTime).should('be.lt', 8000);
            });
        });
    });
});
      
        
    
    
    
