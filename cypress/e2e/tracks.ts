// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe('Tracks Page', () => {
  it('should render tracks', () => {
    cy.visit('/tracks/762310PdDnwsDxAQxzQkfX')

    cy.getByDataCy('top-track').should('have.length', 5)

    cy.getByDataCy('play').first().click().wait(3000)

    cy.getByDataCy('pause').first().click()

    cy.findByText('Enjoy the Silence - Single Mix').click()
  })
})
