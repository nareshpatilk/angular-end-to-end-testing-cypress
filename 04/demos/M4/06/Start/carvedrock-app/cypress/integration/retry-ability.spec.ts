describe('Retry-ability', () => {
  it('should have filtered-by criteria displayed', () => {
    cy.visit('/');
  
    cy.get('input').type('Tara');
  
    cy.get('ul li')
      .find('p[data-test-automation="filtered-by"] b')
      .should('have.text', 'Tara');
  });
});
