
// Chnage view port size

describe('Sign in Flow', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    cy.get('[type=email]').type('droanmalik@gmail.com');
    cy.get('[type=password]').type('qwertyuiop');
    cy.get('[type=submit]').click();
    cy.get('html').should('contain', 'Your Feed');
  });
  it('should not exist', function() {
    cy.visit('/login');
    cy.get('[type=email]').type('xyz@wrongemail.com');
    cy.get('[type=password]').type('qwertyuiop');
    cy.get('[type=submit]').click();
    cy.get('.error-messages').should('contain', /email or password is invalid/i);
  });
});
