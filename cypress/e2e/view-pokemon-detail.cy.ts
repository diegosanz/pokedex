describe('view pokemon detail', () => {
  it('can view a pokemon detail', () => {
    // Visit index
    cy.visit('/')

    // Select a pokémon
    cy.findByRole('link', {
      name: /bulbasaur/i,
    }).click()

    // Assert url
    // TODO: checkear ID del seleccionado
    cy.url().should('include', '/detail/1')

    // Assert its the slected pokemon profile
    cy.findByRole('heading').should('contain.text', 'bulbasaur')

    cy.backToHome()
  })
})
