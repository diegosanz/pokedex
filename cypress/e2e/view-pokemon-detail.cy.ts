describe('view pokemon detail', () => {
  it('can view a pokemon detail', () => {
    // Visit index
    cy.visit('/')

    // Select a pokémon
    cy.findByRole('link', {
      name: /pikachu/i,
    }).click()

    // Assert url
    cy.url().should('include', '/detail/')

    // Assert its pikachu profile
    cy.findByText(/pokemon detail pikachu\./i).should('be.visible')
  })
})
