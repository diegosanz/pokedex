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

  it('disable pagination buttons when there are no more items', () => {
    cy.intercept('https://pokeapi.co/api/v2/pokemon?offset=0&limit=15', {
      body: {
        count: 3,
        next: null,
        previous: null,
        results: [
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
          { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
          { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
        ],
      },
    })

    // Visit index
    cy.visit('/')

    // Navigate next disabled
    cy.get(`[aria-label="Next page"]`).should('be.disabled')

    // Navitage previous disabled
    cy.get(`[aria-label="Previous page"]`).should('be.disabled')
  })
})
