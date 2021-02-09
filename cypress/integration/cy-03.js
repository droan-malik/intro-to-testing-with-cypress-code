describe('Create Post', () => {
  it('should be able to add a new post', () => {
    cy.request('POST', 'https://conduit.productionready.io/api/users/login',
      {
        'user': {
          'email': 'droanmalik@gmail.com',
          'password': 'qwertyuiop',
        },
      }).
      its('body.user.token').should('exist').then((token) => {
      localStorage.setItem('jwt', token);

    });
    cy.visit('/');
    cy.get('html').should('contain', 'Your Feed');
  });
});
