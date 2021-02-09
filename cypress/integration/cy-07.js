// fixtures
// test edge case
//
// check list count

describe('Your Feed', () => {
  it('hide pagination', () => {
    cy.login();
    cy.intercept('GET','/api/articles/*', { fixture: 'yourFeed' }).as('getYourFeed')
    cy.visit('/');
    cy.findAllByTestId('articlePreview').should('have.length', 3)
    cy.findByTestId('pagination').should('not.exist')
  });
});
