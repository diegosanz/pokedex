describe('search-pokemon', () => {
  it('can search a pokemon that exists', () => {
    cy.visit('/detail')

    cy.findByPlaceholderText(/Search a Pokémon/i).type('pikachu')

    cy.url().should('include', '/detail/pikachu')

    cy.findByRole('heading')
      .contains(/pikachu/i)
      .should('exist')

    cy.backToHome()
  })

  it('search must be case insensitive', () => {
    cy.visit('/detail')

    cy.findByPlaceholderText(/Search a Pokémon/i).type('Pikachu')

    cy.url().should('include', '/detail/pikachu')

    cy.findByRole('heading')
      .contains(/pikachu/i)
      .should('exist')

    cy.backToHome()
  })

  it('search should display an error when pokemon is not found', () => {
    cy.visit('/detail')

    cy.findByPlaceholderText(/Search a Pokémon/i).type('totally_not_a_pokemon')

    cy.findByText(/Pokemon not found/i).should('exist')

    cy.backToHome()
  })
})
