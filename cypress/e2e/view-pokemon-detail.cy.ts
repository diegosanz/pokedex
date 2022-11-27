describe('view pokemon detail', () => {
  it('can view a pokemon detail', () => {
    cy.visit('/')

    cy.findByRole('link', {
      name: /pikachu/i,
    }).click()

    cy.findByText(/pokemon detail pikachu\./i).should('be.visible')
  })
})
