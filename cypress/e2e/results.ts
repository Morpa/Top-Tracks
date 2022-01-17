// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe('Result Page', () => {
  it('should render results', () => {
    cy.visit('/results?query=Depeche+Mode')

    cy.findByText('Depeche Mode').click()
  })
})
