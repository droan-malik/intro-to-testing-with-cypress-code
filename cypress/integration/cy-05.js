describe('Create Post', () => {
  it('should be able to add a new post', () => {
    cy.login();
    cy.visit('/');
    cy.get('html').should('contain', 'Your Feed');

    cy.findByRole('link', { name: /new post/i }).click();
    cy.findByTestId('title').type('my title');
    cy.findByTestId('about').type('about X');
    cy.findByTestId('article').type('this post is **important**.');
    cy.findByTestId('tags').type('test{enter}');
    cy.findByRole('button', { name: /Publish Article/i }).click();

    // changed url means the post was successfully created
    cy.location('pathname').should('contain', '/article/my-title');
  });
});
