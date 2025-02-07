describe('Demo Page', () => {
  context('Access Website ', ()=> {
    it('Access Sauce Demo Page', () => {
      cy.viewport(1920,1080)
      cy.title().should('eq', 'Swag Labs')
    })
  }) 
})
