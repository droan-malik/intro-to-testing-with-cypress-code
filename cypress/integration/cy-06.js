// check list count

describe('Global Feed', () => {
  it('show pagination', () => {
    cy.login();
    cy.visit('/');
    cy.findByTestId('feedToggle').within(()=>{
      cy.findByRole('link',{name:/global feed/i}).click()
    });
    cy.findAllByTestId('articlePreview').should('have.length', 10)
    cy.findByTestId('pagination').should('be.visible')
  });
});
