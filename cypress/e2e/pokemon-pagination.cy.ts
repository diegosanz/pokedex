describe('view pokemon detail', () => {
  it('can view a pokemon detail', () => {
    // Visit index
    cy.visit('/')

    // Get the first link and click it
    let name: string

    cy.findAllByRole('link')
      .first()
      .then(($el) => {
        name = $el.text()
        return $el
      })
      .click()

    // Check url
    cy.url().then(($url) => {
      expect($url).to.contain(`/detail/${name}`)
    })

    // Assert its the selected pokemon profile
    cy.findByRole('heading').then(($heading) => {
      expect($heading).to.contain(name)
    })

    cy.backToHome()
  })

  it('check items in pagination', () => {
    // Visit index
    cy.visit('/')

    // Get the first link
    let name: string

    cy.findAllByRole('link')
      .first()
      .then(($el) => {
        name = $el.text()
        return $el
      })

    // Navigate next
    cy.get(`[aria-label="Next page"]`).click()

    // Check that the first link of the second page is not the same
    cy.findAllByRole('link')
      .first()
      .then(($el) => {
        expect($el.text()).to.not.equal(name)
      })

    // Navitage previous
    cy.get(`[aria-label="Previous page"]`).click()

    // Check that the first link of the first page is the same
    cy.findAllByRole('link')
      .first()
      .then(($el) => {
        expect($el.text()).to.equal(name)
      })
  })
})
