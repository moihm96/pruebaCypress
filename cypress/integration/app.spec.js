describe('Principal test', () => {
  it('Visit the app', () => {
    cy.visit('/')
  })
})

describe('Input test', () => {
  it('Focus on the input', () => {
    cy.visit('/')
    cy.focused().should('have.class', 'search-pokemon')
  })
})

describe('Inputs part 2', () => {
  it('Accepts input', () => {
    const text = 'bul'
    cy.visit('/')
    cy.get('input.search-pokemon')
      .type(text)
      .should('have.value', text)
  })
})
