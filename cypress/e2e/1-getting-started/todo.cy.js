describe('Safira Energia', () => {
  it('should display the homepage', () => {
    cy.visit('https://safiraenergia.com.br/')
    cy.get('.navbar-brand').should('contain', 'Safira Energia')
    cy.get('.navbar-nav').contains('Soluções').click()
    cy.url().should('include', '/solucoes')
    cy.get('.navbar-nav').contains('Clientes').click()
    cy.url().should('include', '/clientes')
    cy.get('.navbar-nav').contains('Contato').click()
    cy.url().should('include', '/contato')
    cy.get('.navbar-nav').contains('Trabalhe conosco').click()
    cy.url().should('include', '/trabalhe-conosco')
  })
})