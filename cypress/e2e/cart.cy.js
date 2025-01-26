describe('cart', ()=>{
    beforeEach(() =>{
        cy.visit(Cypress.env('home_url'));
        cy.login(Cypress.env('username_standard'), Cypress.env('password'))
        cy.show_logo_inventory()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.contains('span','Your Cart').should('be.visible')

    })//CA01 - US04
    it('Access Cart page',()=>{
        cy.get('[data-test="title"]').should('have.text','Your Cart')
    })//CA02 - US04
    it('Come back for inventory',()=>{
        cy.get('#continue-shopping').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    })//CA03 - US04
    it('Access Cart Page with products',()=>{
        cy.get('#continue-shopping').click()
        cy.Add_all_products_to_cart()
        cy.contains('button','Remove')
    } )//CA04 - US04
    it('Remove products from Cart Page',()=>{
        cy.get('#continue-shopping').click()
        cy.Add_all_products_to_cart()
        cy.contains('button','Remove').each(($el) => {
            cy.wrap($el).click()
        })
    }) //CA05 - US04
    it('Acess cart page without products', ()=>{
        cy.get('#continue-shopping').click()
        cy.Add_and_remove_all_products_from_cart()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.contains('button','Remove').should('not.exist')
        
    })//CA06 - US04
    it('Verify that cart page show products quantity',()=>{
        cy.get('[data-test="cart-quantity-label"]').should('be.visible')

    })//CA07 - US04
    it('Verify that cart item show quantity', ()=>{
        cy.get('#continue-shopping').click()
        cy.Add_all_products_to_cart()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="item-quantity"]').each(($el,index) =>{
             cy.wrap($el).should('be.visible')
        })
    })//CA08 - US04
    it('Verify that Cart Page show description', () =>{
        cy.get('[data-test="cart-desc-label"]').should('have.text','Description')
    })//CA09 - US04
    it('Verify that cart items show description', ()=>{
        cy.get('#continue-shopping').click()
        cy.Add_all_products_to_cart()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-desc"]').should('be.visible')
    })//CA10 - US04
    it('Verify that cart items show price',() => {
        cy.get('#continue-shopping').click()
        cy.Add_all_products_to_cart()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-price"]').should('be.visible')

    })//CA01-US04
    it('Click in cart icon in cart page', ()=>{
        cy.get('#continue-shopping').click()
        cy.Add_all_products_to_cart()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    })
    
})