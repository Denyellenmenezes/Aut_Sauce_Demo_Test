describe('Cart Page', ()=>{
    beforeEach(() =>{
        cy.visit(Cypress.env('home_url'));
        cy.login(Cypress.env('username_standard'), Cypress.env('password'))
        cy.show_logo_inventory()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.contains('span','Your Cart').should('be.visible')
    })
    context('Access Cart Page', ()=>{
        it('Access Cart page',()=>{
            cy.get('[data-test="title"]').should('have.text','Your Cart')
        })
        it('Access Cart Page with products',()=>{
            cy.get('#continue-shopping').click()
            cy.Add_all_products_to_cart()
            cy.contains('button','Remove')
        } )
        it('Acess cart page without products', ()=>{
            cy.get('#continue-shopping').click()
            cy.Add_and_remove_all_products_from_cart()
            cy.get('[data-test="shopping-cart-link"]').click()
            cy.contains('button','Remove').should('not.exist')            
        })
        it('Click in cart icon in cart page', ()=>{
            cy.get('#continue-shopping').click()
            cy.Add_all_products_to_cart()
            cy.get('[data-test="shopping-cart-link"]').click()
            cy.get('[data-test="shopping-cart-link"]').click()
            cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
        })
    })
    context('Go out of Carts Page', ()=>{
        it('Come back for inventory',()=>{
            cy.get('#continue-shopping').click()
            cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        })
    })
    context("Letting Carts page empty", ()=>{
        it('Remove products from Cart Page',()=>{
            cy.get('#continue-shopping').click()
            cy.Add_all_products_to_cart()
            cy.contains('button','Remove').each(($el) => {
                cy.wrap($el).click()
            })
        }) 
    })
    context('Verify correct implementation of important fields', ()=>{
        it('Verify that cart page show products quantity',()=>{
            cy.get('[data-test="cart-quantity-label"]').should('be.visible')   
        })
        it('Verify that cart item show quantity', ()=>{
            cy.get('#continue-shopping').click()
            cy.Add_all_products_to_cart()
            cy.get('[data-test="shopping-cart-link"]').click()
            cy.get('[data-test="item-quantity"]').each(($el,index) =>{
            cy.wrap($el).should('be.visible')
            })
        })
        it('Verify that Cart Page show description', () =>{
            cy.get('[data-test="cart-desc-label"]').should('have.text','Description')
        })
        it('Verify that cart items show description', ()=>{
            cy.get('#continue-shopping').click()
            cy.Add_all_products_to_cart()
            cy.get('[data-test="shopping-cart-link"]').click()
            cy.get('[data-test="inventory-item-desc"]').should('be.visible')
        })
        it('Verify that cart items show price',() => {
            cy.get('#continue-shopping').click()
            cy.Add_all_products_to_cart()
            cy.get('[data-test="shopping-cart-link"]').click()
            cy.get('[data-test="inventory-item-price"]').should('be.visible')   
        })
    })
    
    
    
    
})