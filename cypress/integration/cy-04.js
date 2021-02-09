describe('Create Post', () => {
  it('should be able to add a new post', () => {
    cy.login()
    cy.visit('/');
    cy.get('html').should('contain', 'Your Feed');
  });
});
