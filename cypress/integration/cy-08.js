// fixtures
// test edge case
//
// check list count

describe('Your Feed', () => {
  it('show bind data correctly', () => {
    cy.login();
    cy.intercept('GET', '/api/articles/*', { fixture: 'yourFeed' }).as(
      'getYourFeed',
    );
    cy.visit('/');
    cy.wait('@getYourFeed').then((xhr) => {
      const { articles } = xhr.response.body;
      cy.findAllByTestId('articlePreview')
        .should('have.length', articles.length)
        .each(($articlePreview, index) => {
          const article = articles[index];
          cy.wrap($articlePreview).within(() => {
            cy.findByText(article.title).should('exist');
            cy.findAllByRole('link', { name: article.author.username }).should(
              'exist',
            );
          });
        });
    });
  });
  it('should show empty view when no articles', () => {
    cy.login();
    cy.intercept('GET', '/api/articles/*', { fixture: 'yourFeedEmpty' }).as(
      'getYourFeed',
    );
    cy.visit('/');
    cy.wait('@getYourFeed').then(() => {
      cy.get('#root');
      cy.findAllByTestId('articlePreview').should(
        'contain.text',
        'No articles are here... yet.',
      );
    });
  });
});
