// applitools

it('should match snapshot', function() {
  cy.eyesOpen({
    appName: 'Demo App',
    testName: 'Login demo',
  })
  cy.visit('/login');
  cy.get('[type=email]').type('xyz@wrongemail.com');
  cy.get('[type=password]').type('qwertyuiop');
  cy.eyesCheckWindow({
    tag: "Login Window",
    target: 'window',
    fully: true
  });
  cy.get('[type=submit]').click();
  cy.get('.error-messages').should('contain', /email or password is invalid/i);
  cy.eyesCheckWindow({
    tag: "Login Error Window",
    target: 'window',
    fully: true
  });
  cy.eyesClose()
});
