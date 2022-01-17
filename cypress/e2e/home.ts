// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home', () => {
    cy.visit('/')
  })

  it('should search an artist', () => {
    cy.findByPlaceholderText(
      'Enter the name of the artist you want to search for'
    ).type('Depeche Mode')
    cy.findByRole('button', { name: 'Search' }).click()
  })
})
