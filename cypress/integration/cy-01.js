describe('Login in Flow', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    cy.get('input[type=email]').type('droanmalik@gmail.com');
    cy.get('input[type=password]').type('qwertyuiop');
    cy.get('button[type=submit]').click();
    cy.get('html').should('contain', 'Your Feed');
  });
  it('should not exist', function () {
    cy.visit('/login')
      .get('input[type=email]')
      .type('xyz@wrongemail.com')
      .get('input[type=password]')
      .type('qwertyuiop')
      .get('button[type=submit]')
      .click()
      .get('.error-messages')
      .should('contain', /email or password is invalid/i);
  });
});
