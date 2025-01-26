//Suite de testes

describe('Home', () => {

  it('Access Sauce Demo Page', () => {
       cy.title().should('eq', 'Swag Labs')
  })
})
