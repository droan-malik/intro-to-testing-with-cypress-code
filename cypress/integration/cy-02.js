describe('Sign in Flow using cypress-testing-libraay', () => {
  it('should login successfully', function () {
    cy.visit('/login')
    cy.findByLabelText(/email/i).type('droanmalik@gmail.com')
    cy.findByLabelText(/password/i).type('qwertyuiop')
    cy.findByRole('button', {
      name: /sign in/i,
    }).click()
    cy.get('html').should('contain', 'Your Feed')
  })
})
