// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login',(username,password) =>{
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.contains('input','Login').click()

})

Cypress.Commands.add('show_error_message',() =>{
    cy.get('h3[data-test="error"]').should('be.visible')
})
Cypress.Commands.add('show_logo_inventory',() =>{
    cy.get('div[class="app_logo"]').should('be.visible')
})
Cypress.Commands.add('Verify_error_img_displayed',() =>{
    cy.get('img[src="/static/media/sl-404.168b1cce.jpg"]').should('be.visible')
    .get('img[src="/static/media/sl-404.168b1cce.jpg"]').should('not.equal','img[src="/static/media/sl-404.168b1cce.jpg')
})
Cypress.Commands.add('Add_and_remove_all_products_from_cart',()=>{
    cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('button[name="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[id="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[id="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('[data-test="shopping-cart-badge"]').contains('span', '6')
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-bike-light').click()
        cy.get('#remove-sauce-labs-bolt-t-shirt').click()
        cy.get('#remove-sauce-labs-fleece-jacket').click()
        cy.get('#remove-sauce-labs-onesie').click()
        cy.get('[id="remove-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
})
Cypress.Commands.add('Add_all_products_to_cart',()=>{
    cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('button[name="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[id="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[id="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('[data-test="shopping-cart-badge"]').contains('span', '6')
})
Cypress.Commands.add('Go_to_checkout_Page', ()=>{
        cy.visit(Cypress.env('home_url'));
        cy.login(Cypress.env('username_standard'), Cypress.env('password'))
        cy.show_logo_inventory()
        cy.Add_all_products_to_cart()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.contains('span','Your Cart').should('be.visible')
        cy.get('#checkout').click()
})
Cypress.Commands.add('Fill_Checkout_form', ()=>{
    cy.get('[data-test="title"]').should('be.visible')
    cy.get('[placeholder="First Name"]').type('Teste')
    cy.get('[placeholder="Last Name"]').type('teste')
    cy.get('[placeholder="Zip/Postal Code"]').type('51111211')

})
Cypress.Commands.add('Verify_Price_Total',()=>{
    let totalPrice = 0; 
    cy.get('[data-test="inventory-item-price"]').each(($el) => {
        const priceText = $el.text(); // Obtém o texto do elemento
        const price = parseFloat(priceText.replace('$', '')); // Remove o símbolo de dólar e converte para número
        totalPrice += price; // Soma o preço ao total
      }).then(() => {
        cy.log(`Soma dos preços dos itens: $${totalPrice.toFixed(2)}`); // Mostra o total calculado dos itens
    
        // Adiciona a taxa ao total
        cy.get('[data-test="tax-label"]').then(($taxEl) => {
          const taxText = $taxEl.text(); // Obtém o texto da taxa
          const tax = parseFloat(taxText.replace('$', '')); // Remove o símbolo de dólar e converte para número
          totalPrice += tax; // Adiciona a taxa ao total
    
          cy.log(`O valor total com a taxa é: $${totalPrice.toFixed(2)}`); // Mostra o total com a taxa
        });
      });
    });
Cypress.Commands.add('Click_back_home_button',()=>{
    cy.get('[data-test="complete-header"]').should('be.visible')
        cy.get('[data-test="back-to-products"]').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
})
