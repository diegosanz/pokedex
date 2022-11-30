import "@testing-library/cypress/add-commands";

declare global {
  namespace Cypress {
    interface Chainable {
       backToHome(): Chainable<Element>
    }
  }
}

Cypress.Commands.add('backToHome', () => {
  cy.findByRole('link', {
    name: /go home/i,
  }).click()

  cy.url().should('equal', Cypress.config().baseUrl + '/')
})
