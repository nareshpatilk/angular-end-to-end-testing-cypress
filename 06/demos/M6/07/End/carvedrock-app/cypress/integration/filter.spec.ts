describe('Filter', () => {
  it('should display filter criteria', () => {
    cy.visit('/')
      .filterAdventure('Tara');

    cy.get('p[data-test-automation="filtered-by"]').should('have.text', 'Filtered by: Tara');
  });
});