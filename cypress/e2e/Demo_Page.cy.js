describe('Demo Page', () => {
  context('Access Website ', ()=> {
    it('Access Sauce Demo Page', () => {
      
      cy.title().should('eq', 'Swag Labs')
    })
  }) 
})
