//CA01 - US05
describe('checkout', () =>{
    beforeEach(() =>{
        cy.Go_to_checkout_Page()
     }) //CA01- US05
     it('Fill Form', ()=>{
        cy.Fill_Checkout_form()
        cy.get('[id="continue"]').click()
        cy.get('[data-test="title"]').contains('span','Checkout: Overview').should('be.visible')
             
       
     })//CA06 - US05
     it('Fill form cancel', ()=>{
        cy.Fill_Checkout_form()
        cy.get('[data-test="cancel"]').click()
        
     })//CA07 - US05
     it('Verify if total price is correct', () => {
        cy.Fill_Checkout_form()
        cy.get('[id="continue"]').click();
        cy.get('[data-test="title"]').contains('span', 'Checkout: Overview').should('be.visible')
        cy.get('[data-test="total-label"]').contains('div', 'Total').should('be.visible')
        cy.Verify_Price_Total()
       
     })  //CA08 - US05
    it('Cancel Checkout Overview', ()=>{
        cy.Fill_Checkout_form()
        cy.get('[id="continue"]').click();
        cy.get('[data-test="title"]').contains('span', 'Checkout: Overview').should('be.visible')
        cy.get('[data-test="cancel"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

    })//CA09 - US05
    it('Finish order', ()=>{
        cy.Fill_Checkout_form()
        cy.get('[id="continue"]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="title"]').contains('span','Checkout: Complete!').should('be.visible')
        
    })//CA10 - US05
    it('Back home from Checkout complete', ()=>{
        cy.Fill_Checkout_form()
        cy.get('[id="continue"]').click();
        cy.get('[data-test="title"]').contains('span', 'Checkout: Overview').should('be.visible')
        cy.get('[data-test="finish"]').click()
        cy.Click_back_home_button()
        
    })//CA01 - US05
    it('Verify fields of checkout form', ()=>{
        cy.contains('span','Checkout: Your Information').should('be.visible')
        cy.get('[placeholder="First Name"]').should('exist')
        cy.get('[placeholder="Last Name"]').should('exist')
        cy.get('[placeholder="Zip/Postal Code"]').should('exist')

    })//CA02 - US05 //CA01-US05
    it('Verify that all fields of form checkout are required fields', ()=>{
        cy.get('[id="continue"]').click()
        cy.get('[data-test="title"]').contains('span','Checkout: Your Information').should('be.visible')
        cy.get('[data-test="error"]').should('be.visible')
        
    })//CA03 - US05
    it('Click in continue without first name filled', ()=>{
        cy.get('[data-test="title"]').should('be.visible')
        cy.get('[placeholder="Last Name"]').type('teste')
        cy.get('[placeholder="Zip/Postal Code"]').type('51111211')
        cy.get('[id="continue"]').click()
        cy.get('[data-test="title"]').contains('span','Checkout: Your Information').should('be.visible')
        cy.get('[data-test="error"]').contains('h3','Error: First Name is required').should('be.visible')
    })//CA04 - US05
    it('Click in continue without Last name filled', ()=>{
        cy.get('[data-test="title"]').should('be.visible')
        cy.get('[placeholder="First Name"]').type('Teste')
        cy.get('[placeholder="Zip/Postal Code"]').type('51111211')
        cy.get('[id="continue"]').click()
        cy.get('[data-test="title"]').contains('span','Checkout: Your Information').should('be.visible')
        cy.get('[data-test="error"]').contains('h3','Error: Last Name is required').should('be.visible')
    })//CA05-US05
    it('Click in continue without Postal Code filled', ()=>{
        cy.get('[data-test="title"]').should('be.visible')
        cy.get('[placeholder="First Name"]').type('Teste')
        cy.get('[placeholder="Last Name"]').type('teste')
        cy.get('[id="continue"]').click()
        cy.get('[data-test="title"]').contains('span','Checkout: Your Information').should('be.visible')
        cy.get('[data-test="error"]').contains('h3','Error: Postal Code is required').should('be.visible')
    })
})