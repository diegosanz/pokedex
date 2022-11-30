describe('error-page', () => {
  it('can search a pokemon that exists', () => {
    cy.visit('/hire-me!!')

    cy.findByRole('link')
      .contains(/main page/i)
      .should('exist')
      .click()

    cy.url().should('equal', Cypress.config().baseUrl + '/')
  })
})
