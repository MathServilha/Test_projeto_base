describe('Safira Energia', () => {
  beforeEach(() => {
    cy.visit('https://safiraenergia.com.br/')
  })

  it('should display the main menu', () => {
    cy.get('.menu-principal').should('be.visible')
  })

  it('should navigate to the "Sobre nós" page', () => {
    cy.get('.menu-principal').contains('Sobre nós').click()
    cy.url().should('include', '/sobre-nos')
    cy.get('h1').should('contain', 'Sobre nós')
  })

  it('should navigate to the "Contato" page', () => {
    cy.get('.menu-principal').contains('Contato').click()
    cy.url().should('include', '/contato')
    cy.get('h1').should('contain', 'Contato')
  })

  it('should display the "Assine Já" form', () => {
    cy.get('.assine-ja').should('be.visible')
  })

  it('should submit the "Assine Já" form', () => {
    cy.get('.assine-ja input[name="nome"]').type('John Doe')
    cy.get('.assine-ja input[name="email"]').type('johndoe@example.com')
    cy.get('.assine-ja input[name="telefone"]').type('(11) 99999-9999')
    cy.get('.assine-ja input[name="cidade"]').type('São Paulo')
    cy.get('.assine-ja input[name="estado"]').type('SP')
    cy.get('.assine-ja input[name="cep"]').type('01234-567')
    cy.get('.assine-ja input[name="mensagem"]').type('Quero assinar agora!')
    cy.get('.assine-ja button[type="submit"]').click()
    cy.get('.assine-ja .alert-success').should('be.visible')
  })
})