describe('Inventory',()=>{
    beforeEach(() =>{
        cy.visit(Cypress.env('home_url'));
        cy.login(Cypress.env('username_standard'), Cypress.env('password'))
        cy.show_logo_inventory()
    })//CA01 - US02
    it('Access menu', ()=>{
        cy.get('button[id="react-burger-menu-btn"]')
        .click().should('be.visible', cy.get('[class="bm-menu"]'))
        cy.get('#inventory_sidebar_link').contains('All Items')
        cy.get('#about_sidebar_link').contains('About')
        cy.get('#logout_sidebar_link').contains('Logout')
        cy.get('#reset_sidebar_link').contains('Reset App State')
    })//CA02 - US02
    it('Access All items',()=>{
        cy.get('button[id="react-burger-menu-btn"]').click().should('be.visible', cy.get('[class="bm-menu"]'))
        cy.contains('a','All Items').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    })//CA03 - US02 // corrigir
    it('Access About', ()=>{
        const AboutClick = cy.get('[href="https://saucelabs.com/"]')
        AboutClick.should('not.equal','https://www.saucedemo.com/inventory.html')   
    })//CA04 - US02
    it('Access Logout', ()=>{
        cy.get('button[id="react-burger-menu-btn"]').click()
        .should('be.visible', cy.get('[class="bm-menu"]'))
        cy.get('#logout_sidebar_link').click()
        cy.url().should('eq','https://www.saucedemo.com/')
    })//CA01 - US03
    it('Add "Sauce Labs Backpack" to cart',()=>{
        cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]')
        .should('have.length', 1)
        cy.get('#add-to-cart-sauce-labs-backpack').should('not.exist')
        cy.get('#remove-sauce-labs-backpack').should('exist')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]').should('have.text','Sauce Labs Backpack')
        cy.get('[data-test="continue-shopping"]').click()
        cy.get('#remove-sauce-labs-backpack').click()

        
    })//CA02 - US03
    it('Add "Sauce Labs Bike Light" to cart', ()=>{
        cy.get('button[name="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-badge"]')
        .should('have.length', 1)
        cy.get('#add-to-cart-sauce-labs-bike-light').should('not.exist')
        cy.get('#remove-sauce-labs-bike-light').should('exist')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]').should('have.text','Sauce Labs Bike Light')
        cy.get('[data-test="continue-shopping"]').click()
        cy.get('#remove-sauce-labs-bike-light').click()
        
    }) //CA03-US03
    it('Add "Sauce Labs Bolt T-Shirt" to cart', ()=>{
        cy.get('[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="shopping-cart-badge"]')
        .should('have.length', 1)
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').should('not.exist')
        cy.get('#remove-sauce-labs-bolt-t-shirt').should('exist')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]').should('have.text','Sauce Labs Bolt T-Shirt')
        cy.get('[data-test="continue-shopping"]').click()
        cy.get('#remove-sauce-labs-bolt-t-shirt').click()
    })//CA04-US03
    it('Add "Sauce Labs Fleece Jacket" to cart', ()=>{
        cy.get('[id="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="shopping-cart-badge"]')
        .should('have.length', 1)
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').should('not.exist')
        cy.get('#remove-sauce-labs-fleece-jacket').should('exist')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]').should('have.text','Sauce Labs Fleece Jacket')
        cy.get('[data-test="continue-shopping"]').click()
        cy.get('#remove-sauce-labs-fleece-jacket').click()
    })//CA05 - US03
    it('Add "Sauce Labs Onesie" to cart', ()=>{
        cy.get('[id="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="shopping-cart-badge"]')
        .should('have.length', 1)
        cy.get('#add-to-cart-sauce-labs-onesie').should('not.exist')
        cy.get('#remove-sauce-labs-onesie').should('exist')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]').should('have.text','Sauce Labs Onesie')
        cy.get('[data-test="continue-shopping"]').click()
        cy.get('#remove-sauce-labs-onesie').click()
    })//CA06 - US03
    it('Add "Test.allTheThings() T-Shirt (Red)" to cart', ()=>{
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('[data-test="shopping-cart-badge"]')
        .should('have.length', 1)
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('not.exist')
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').should('exist')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]').should('have.text','Test.allTheThings() T-Shirt (Red)')
        cy.get('[data-test="continue-shopping"]').click()
        cy.get('[id="remove-test.allthethings()-t-shirt-(red)"]').click()
    })//CA07 - US03| CA08 = US03
    it('Add and remove all products to cart', ()=>{
        cy.Add_and_remove_all_products_from_cart()
        
    })//CA05 - US02
    it('Reset app state',()=>{
        cy.Add_all_products_to_cart()
        cy.get('[id="react-burger-menu-btn"]').click()
        cy.get('[id="reset_sidebar_link"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
        cy.get('[id="remove-sauce-labs-backpack"]').should('not.exist')
    })//CA09 - US03
    it('Add a product to cart and Logout', ()=>{
        cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('button[id="react-burger-menu-btn"]').click().should('be.visible', cy.get('[class="bm-menu"]'))
        cy.get('#logout_sidebar_link').click()
        cy.login(Cypress.env('username_standard'), Cypress.env('password'))
        cy.show_logo_inventory()
        cy.get('[data-test="shopping-cart-badge"]').should('have.length.greaterThan', 0)
    })//CA06 - US02
    it('Close menu', ()=>{
        cy.get('button[id="react-burger-menu-btn"]').click().should('be.visible', cy.get('[class="bm-menu"]'))
        cy.contains('button', 'Close Menu').click()
        cy.get('[class="bm-menu"]').should('not.visible')
    })// CA10 - US03
    it('Access products page', ()=>{
        cy.get('[data-test="inventory-item-name"]').eq(0).should('be.visible').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4')
        cy.get('#back-to-products').click()
        cy.get('[data-test="inventory-item-name"]').eq(1).should('be.visible').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory-item.html?id=0')
        cy.get('#back-to-products').click()
        cy.get('[data-test="inventory-item-name"]').eq(2).should('be.visible').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory-item.html?id=1')
        cy.get('#back-to-products').click()
        cy.get('[data-test="inventory-item-name"]').eq(3).should('be.visible').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=5')
        cy.get('#back-to-products').click()
        cy.get('[data-test="inventory-item-name"]').eq(4).should('be.visible').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=2')
        cy.get('#back-to-products').click()
        cy.get('[data-test="inventory-item-name"]').eq(5).should('be.visible').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=3')
        cy.get('#back-to-products').click()
  });//CA11 e CA12 - US03
    it('Select Filters', ()=>{
        cy.get('[data-test="product-sort-container"]').select('az')
        cy.get('[data-test="inventory-item-name"]').eq(0).should('have.text','Sauce Labs Backpack')
        cy.get('[data-test="product-sort-container"]').select('za')
        cy.get('[data-test="inventory-item-name"]').eq(0).should('have.text','Test.allTheThings() T-Shirt (Red)')
        cy.get('[data-test="product-sort-container"]').select('lohi')
        cy.get('[data-test="inventory-item-name"]').eq(0).should('have.text','Sauce Labs Onesie')
        cy.get('[data-test="product-sort-container"]').select('hilo')
        cy.get('[data-test="inventory-item-name"]').eq(0).should('have.text','Sauce Labs Fleece Jacket')

    })
});
    
    
